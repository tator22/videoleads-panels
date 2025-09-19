import { FC, HTMLAttributes, InputHTMLAttributes } from "react";
import { CounterText } from "../CounterText";
import { ErrorText } from "../ErrorText";
import { HelperText } from "../HelperText";
import { Label } from "../Label";
import "./style.css";

export const Input: FC<{
  containerProps?: HTMLAttributes<HTMLDivElement>;
  label?: string;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
  helperText?: string;
  errorText?: string;
  showCounter?: boolean;
}> = ({
  containerProps,
  label,
  inputProps,
  helperText,
  errorText,
  showCounter,
}): JSX.Element => {
  return (
    <div
      {...containerProps}
      className={`Input ${containerProps?.className || ""}`}
      style={{
        ...containerProps?.style,
        opacity:
          containerProps?.style?.opacity || (inputProps?.disabled ? 0.5 : 1),
      }}
    >
      {label ? (
        <Label
          text={label}
          isOptional={!inputProps?.required}
          containerProps={{ className: "labelContainer" }}
        />
      ) : null}

      <input
        {...inputProps}
        className={`input largeClickableElement ${inputProps?.className || ""}`}
        style={{
          ...inputProps?.style,
          borderColor: errorText ? "rgb(var(--error))" : "inital",
        }}
      />

      {errorText || showCounter ? (
        <div className="errorTextAndCounterContainer">
          {errorText ? (
            <ErrorText
              text={errorText}
              containerProps={{ className: "errorText" }}
            />
          ) : null}

          {showCounter ? (
            <CounterText
              value={inputProps?.value}
              maximumCharacters={inputProps?.maxLength}
              containerProps={{
                className: "counterText",
                style: {
                  width: !errorText ? "100%" : "unset",
                },
              }}
            />
          ) : null}
        </div>
      ) : null}
      {helperText ? (
        <HelperText
          text={helperText}
          containerProps={{ className: "helperText" }}
        />
      ) : null}
    </div>
  );
};
