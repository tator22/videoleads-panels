export const STAGE_DOMAIN: string = "#";
export const PRODUCTION_DOMAIN: string = "#";

export const CURRENT_DOMAIN: typeof STAGE_DOMAIN | typeof PRODUCTION_DOMAIN =
  STAGE_DOMAIN;
export const MEDIA_BASE_URL = CURRENT_DOMAIN + "media";


export const API_BASE_URL = CURRENT_DOMAIN + "/api/v1";

export const API_END_POINTS = (() => {
  const AUTHENTICATION = "/auth";
  const USERS = "/users";

  return {
    AUTHENTICATION,
    USERS,
    // USER_DETAIL: (userId: number) => `${USERS}/${userId}`,
  };
})();
