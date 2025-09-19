import {
  type DetailedHTMLProps,
  type FC,
  type HTMLAttributes,
  type JSX,
} from "react";
import "./style.css";
import clsx from "clsx";

export const SkeletonLoader: FC<{
  containerProps?: DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >;
}> = ({ containerProps }): JSX.Element => {
  return (
    <div
      {...containerProps}
      className={clsx("SkeletonLoader", containerProps?.className)}
    />
  );
};
