import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import "./style.css";
import clsx from "clsx";

export const Loader: FC<{
  color?: string;
  size?: string;
  containerProps?: DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >;
}> = ({
  color = "rgb(var(--primary))",
  size = "4rem",
  containerProps,
}): JSX.Element => {
  // Variables
  const cssVariables = {
    "--color": color,
    "--size": size,
  };

  return (
    <div
      {...containerProps}
      className={clsx("Loader", containerProps?.className)}
      style={{ ...cssVariables, ...containerProps?.style }}
    />
  );
};
