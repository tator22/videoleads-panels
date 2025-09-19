import { FC, InputHTMLAttributes } from "react";
import { Switch } from "../Switch";
import { Text } from "../Text";
import "./style.css";

export const Label: FC<{
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
  text?: string;
  isOptional?: boolean;
  isSwitch?: boolean;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
}> = ({
  containerProps,
  text,
  isOptional,
  isSwitch,
  inputProps,
}): JSX.Element => {
  return (
    <div
      {...containerProps}
      className={`Label ${containerProps?.className || ""}`}
    >
      <div className="textAndOptionText">
        {text ? (
          <Text tag="h6" containerProps={{ className: "text" }}>
            {text}
          </Text>
        ) : null}
        {isOptional ? (
          <Text containerProps={{ className: "isOptional" }}>
            {"(Optional)"}
          </Text>
        ) : null}
      </div>
      {isSwitch ? (
        <div className="switchContainer">
          <Switch inputProps={inputProps} />
        </div>
      ) : null}
    </div>
  );
};
