import clsx from "clsx";
import {
  type AnchorHTMLAttributes,
  type DetailedHTMLProps,
  type FC,
  type JSX,
  type ReactNode,
} from "react";
import "./style.css";

export const Link: FC<{
  children?: ReactNode;
  containerProps?: DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >;
  maximumNumberOfLines?: number;
}> = ({ children, containerProps, maximumNumberOfLines }): JSX.Element => {
  return (
    <a
      {...containerProps}
      className={clsx(
        "Link",
        maximumNumberOfLines && "limitLinkOverFlowing",
        containerProps?.className
      )}
      style={{
        WebkitLineClamp: maximumNumberOfLines,
        ...containerProps?.style,
      }}
      aria-disabled={containerProps?.["aria-disabled"] || false}
    >
      {children}
    </a>
  );
};
