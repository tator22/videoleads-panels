import { FC, HTMLAttributes, InputHTMLAttributes } from "react";
import { Text } from "../Text";
import "./style.css";

export const CounterText: FC<{
  value?: InputHTMLAttributes<HTMLInputElement>["value"];
  maximumCharacters?: number;
  containerProps?: HTMLAttributes<HTMLParagraphElement>;
}> = ({ containerProps, value, maximumCharacters }): JSX.Element => {
  return (
    <Text
      containerProps={{
        ...containerProps,
        className: `CounterText ${containerProps?.className || ""}`,
      }}
    >{`${String(value)?.length || 0}/${maximumCharacters}`}</Text>
  );
};
