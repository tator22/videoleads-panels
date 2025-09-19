import clsx from "clsx";
import type { DetailedHTMLProps, FC, HTMLAttributes, JSX } from "react";

export const Flaticon: FC<{
  icon: string;
  containerProps?: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
}> = ({ icon, containerProps }): JSX.Element => {
  return (
    <i
      {...containerProps}
      className={clsx(icon, "Icon", containerProps?.className)}
    />
  );
};
