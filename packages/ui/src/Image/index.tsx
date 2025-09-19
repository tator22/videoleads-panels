import clsx from "clsx";
import {
  JSX,
  useEffect,
  useState,
  type DetailedHTMLProps,
  type FC,
  type ImgHTMLAttributes,
  type SyntheticEvent,
} from "react";
import { SkeletonLoader } from "../SkeletonLoader";
import "./style.css";
import { ASSET_PATHS } from "@repo/assets";
import { generateAltTextFromImageSource, getImageUrl } from "@repo/utilities";

export const Image: FC<{
  imageProps?: Omit<
    DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>,
    "isRemoteUrl"
  > & { isRemoteUrl?: boolean };
  containerProps?: DetailedHTMLProps<
    ImgHTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >;
}> = ({ containerProps, imageProps }) => {
  // Local States
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Variables
  const {
    src,
    alt,
    className = "",
    onError,
    onLoad,
    isRemoteUrl,
    ...restProps
  } = imageProps || {};

  const fallbackSrc = ASSET_PATHS?.IMAGES?.BROKEN_IMAGE;
  const shouldFallback = hasError || !src;
  const finalSrc = shouldFallback ? fallbackSrc : src;
  const finalAlt = alt || generateAltTextFromImageSource(src);

  // Functions
  const handleLoad = (e: SyntheticEvent<HTMLImageElement>) => {
    setIsLoading(false);
    onLoad?.(e);
  };

  const handleError = (e: SyntheticEvent<HTMLImageElement>) => {
    setIsLoading(false);
    setHasError(true);
    e.currentTarget.src = fallbackSrc;
    onError?.(e);
  };

  // Effects
  useEffect(() => {
    setHasError(!src);
    return () => setHasError(false);
  }, [src]);

  return (
    <div
      {...containerProps}
      className={clsx("ImageWrapper", containerProps?.className)}
    >
      {isLoading && (
        <SkeletonLoader
          containerProps={{
            className: "skeletonLoader",
          }}
        />
      )}

      <img
        src={isRemoteUrl ? getImageUrl(finalSrc) : finalSrc}
        alt={finalAlt}
        onLoad={handleLoad}
        onError={handleError}
        className={clsx(
          hasError ? "DefaultImage" : "Image",
          isLoading && "Hidden",
          className
        )}
        {...restProps}
      />
    </div>
  );
};
