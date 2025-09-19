import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { API_BASE_URL } from "./apiEndpoints";
import { LOCAL_STORAGE_KEYS } from "./localStorageKeys";

export const apiCaller = <T>(config: ApiDataType<T>): Promise<unknown> => {
  return new Promise((resolve, reject) => {
    callApi(config, resolve, reject);
  });
};

export interface ApiDataType<T = unknown> {
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE" | "HEAD" | "OPTIONS";
  url: string;
  useFormData?: boolean;
  payload?: T;
  sendToken?: boolean;
}

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 15000,
});

export const callApi = async <T>(
  { method, url, payload, sendToken = true, useFormData }: ApiDataType<T>,
  resolve: (value?: unknown) => void,
  reject: (reason?: unknown) => void
): Promise<void> => {
  const headers: AxiosRequestConfig["headers"] = {
    Accept: "application/json",
  };

  if (sendToken) {
    const AUTHENTICATION_TOKEN = localStorage?.getItem(
      LOCAL_STORAGE_KEYS?.TOKEN
    );
    if (AUTHENTICATION_TOKEN) {
      headers.Authorization = `token ${AUTHENTICATION_TOKEN}`;
    }
  }

  const axiosData: AxiosRequestConfig = {
    method,
    headers,
    url,
  };

  if (method !== "GET" && method !== "DELETE" && payload) {
    if (useFormData) {
      headers["Content-Type"] = "multipart/form-data";
      axiosData.data = getFormData(payload);
    } else {
      headers["Content-Type"] = "application/json";
      axiosData.data = JSON.stringify(payload);
    }
  }

  try {
    const response: AxiosResponse = await axiosInstance(axiosData);
    checkResponse(response, resolve, reject);
  } catch (err: any) {
    const response = err?.response;
    if (response) {
      checkResponse(response, resolve, reject);
    } else {
      reject(err.message ? { error: err.message } : { error: err.message });
    }
  }
};

export const checkResponse = (
  response: AxiosResponse,
  resolve: (value?: unknown) => void,
  reject: (reason?: unknown) => void
): void => {
  switch (response.status) {
    case 200:
    case 201:
    case 204:
      resolve(response.data || {});
      break;
    case 400:
      reject(response.data);
      break;
    case 401:
      reject(response.data);
      // logout();
      break;
    case 500:
      reject({ err: response.data?.message || "Internal Server Error" });
      break;
    default:
      reject({ err: response.data?.message || "Unexpected error occurred" });
  }
};

export const getFormData = (data: Record<string, unknown>): FormData => {
  const formData = new FormData();
  Object.entries(data).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach((item) => formData.append(key, item));
    } else {
      formData.append(key, value);
    }
  });
  return formData;
};

// export const getErrorMessage = (
//   data:
//     | {
//         error_type?: string[];
//         [key: string]: any;
//       }
//     | string
// ): string | undefined => {
//   let flashType: CustomToasterType = "error";

//   if (typeof data === "object" && data !== null) {
//     flashType =
//       Array.isArray(data.error_type) && typeof data.error_type[0] === "string"
//         ? (data.error_type[0] as CustomToasterType)
//         : "error";

//     delete data.error_type;

//     for (const [key, value] of Object.entries(data)) {
//       if (Array.isArray(value)) {
//         for (let i = 0; i < value.length; i++) {
//           if (typeof value[i] === "object") {
//             for (const [nestedKey, nestedValue] of Object.entries(value[i])) {
//               CustomToaster({
//                 type: flashType,
//                 message: nestedKey,
//                 description: nestedValue as string,
//               });
//               return nestedValue as string;
//             }
//           } else {
//             CustomToaster({
//               type: flashType,
//               message: key,
//               description: value[i] as string,
//             });
//             return value[i] as string;
//           }
//         }
//       } else {
//         CustomToaster({
//           type: flashType,
//           message: key,
//           description: JSON.stringify(value),
//         });

//         return JSON.stringify(value);
//       }
//     }
//   } else {
//     CustomToaster({
//       type: flashType,
//       message: "Error",
//       description: JSON.stringify(data),
//     });

//     return JSON.stringify(data);
//   }
// };
