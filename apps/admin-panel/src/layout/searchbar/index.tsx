import { ASSET_PATHS } from "@repo/assets";
import { CSSProperties, InputHTMLAttributes } from "react";
import styles from "./style.module.css";
import clsx from "clsx";

export const Searchbar = ({
  style,
  inputProps,
  containerClassName,
}: {
  style?: CSSProperties;
  containerClassName?: string;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
}) => {
  return (
    <div
      className={clsx(styles.searchInputContainer, containerClassName)}
      style={{ ...style }}
    >
      <img
        src={ASSET_PATHS.SVGS.SEARCH}
        alt="search icon"
        className={styles.searchIcon}
      />
      <input
        {...inputProps}
        className={clsx(styles.searchInput, inputProps?.className)}
      />
    </div>
  );
};
