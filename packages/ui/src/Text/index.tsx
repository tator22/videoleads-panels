import clsx from "clsx";
import { createElement, FC, HTMLAttributes, ReactNode } from "react";

export const Text: FC<{
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  children?: string | ReactNode;
  containerProps?: HTMLAttributes<HTMLElement>;
  maximumNumberOfLines?: number;
}> = ({
  tag = "p",
  children,
  containerProps,
  maximumNumberOfLines,
}): JSX.Element => {
  return createElement(
    tag,
    {
      ...containerProps,
      className: clsx(
        containerProps?.className,
        maximumNumberOfLines && "limitTextOverFlowing"
      ),
      style: {
        ...containerProps?.style,
        WebkitLineClamp: maximumNumberOfLines,
      },
    },
    children
  );
};
