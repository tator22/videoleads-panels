import { FC, HTMLAttributes } from "react";
import { Text } from "../Text";
import "./style.css";

export const ErrorText: FC<{
  containerProps?: HTMLAttributes<HTMLParagraphElement>;
  text?: string;
}> = ({ containerProps, text }): JSX.Element => {
  return (
    <Text
      containerProps={{
        ...containerProps,
        className: `ErrorText ${containerProps?.className || ""}`,
      }}
    >
      {text}
    </Text>
  );
};
