import clsx from "clsx";
import type { DetailedHTMLProps, HTMLAttributes } from "react";
import "./style.css";

export const Separator = ({
  containerProps,
  direction = "horizontal",
}: {
  containerProps?: DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >;
  direction?: "horizontal" | "vertical";
}) => {
  return (
    <div
      {...containerProps}
      className={clsx(
        "Separator",
        containerProps?.className,
        direction === "horizontal" ? "horizontal" : "vertical"
      )}
    />
  );
};
