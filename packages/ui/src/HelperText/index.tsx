import { FC } from "react";
import { Text } from "../Text";
import "./style.css";
import { ASSET_PATHS } from "@repo/assets";

export const HelperText: FC<{
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
  text?: string;
}> = ({ containerProps, text }): JSX.Element => {
  return (
    <div
      {...containerProps}
      className={`HelperText ${containerProps?.className || ""}`}
    >
      <img src={ASSET_PATHS?.SVGS?.INFO} className="icon" title="Icon" />
      {text ? <Text containerProps={{ className: "text" }}>{text}</Text> : null}
    </div>
  );
};
