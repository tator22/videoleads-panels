import { type FC, type HTMLAttributes, type JSX, type ReactNode } from "react";
import "./style.css";
import clsx from "clsx";

export const Clickable: FC<{
  children?: ReactNode;
  containerProps?: HTMLAttributes<HTMLDivElement>;
}> = ({ children, containerProps }): JSX.Element => {
  // Variables
  const isClickable = typeof containerProps?.onClick === "function";

  return (
    <div
      {...containerProps}
      className={clsx(
        "Clickable",
        isClickable && "enabled",
        containerProps?.className
      )}
      aria-disabled={containerProps?.["aria-disabled"] || false}
    >
      {children}
    </div>
  );
};
