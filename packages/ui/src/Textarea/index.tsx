import {
  ChangeEventHandler,
  CSSProperties,
  InputHTMLAttributes,
  KeyboardEventHandler,
} from "react";
import { CounterText } from "../CounterText";
import { ErrorText } from "../ErrorText";
import { HelperText } from "../HelperText";
import { Label } from "../Label";
import "./style.css";

type TextAreaProps = {
  maxLength?: number;
  minLength?: number;
  placeholder?: string;
  label?: string;
  optional?: boolean;
  cols?: number;
  rows?: number;
  error?: string;
  value?: string | readonly string[] | number | undefined;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
  required?: boolean;
  name?: string;
  style?: CSSProperties;
  onKeyDown?: KeyboardEventHandler<HTMLTextAreaElement>;
  helperText?: string;
  errorText?: string;
  showCounter?: boolean;
  isSwitch?: boolean;
  switchInputProps?: InputHTMLAttributes<HTMLInputElement>;
};

export const Textarea = ({
  maxLength,
  minLength,
  placeholder = "Placeholder text",
  label,
  optional,
  cols,
  rows = 5,
  error,
  value,
  onChange,
  required,
  name,
  style,
  onKeyDown,
  helperText,
  errorText,
  showCounter,
  isSwitch,
  switchInputProps,
}: TextAreaProps) => {
  const addClassName = () => {
    if (error) {
      return "textareaError";
    }
  };

  return (
    <div className="commonTextarea" style={{ ...style }}>
      {label ? (
        <Label
          text={label}
          isOptional={optional}
          containerProps={{ className: "labelContainer" }}
          isSwitch={isSwitch}
          inputProps={switchInputProps}
        />
      ) : null}

      <textarea
        className={`Textarea ${addClassName()}`}
        maxLength={maxLength}
        minLength={minLength}
        placeholder={placeholder}
        cols={cols}
        rows={rows}
        onKeyDown={onKeyDown}
        value={value}
        onChange={onChange}
        required={required}
        name={name}
      ></textarea>

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
              value={value}
              maximumCharacters={maxLength}
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
