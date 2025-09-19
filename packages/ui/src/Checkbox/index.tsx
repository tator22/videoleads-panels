import { ASSET_PATHS } from "@repo/assets";
import { FC, InputHTMLAttributes, LabelHTMLAttributes, useId } from "react";
import { Label } from "../Label";
import "./style.css";

export const CheckBox: FC<{
  containerProps?: LabelHTMLAttributes<HTMLLabelElement>;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
  label?: string;
}> = ({ containerProps, inputProps, label }): JSX.Element => {
  // Hooks
  const id = useId();

  return (
    <label
      {...containerProps}
      htmlFor={id}
      className={`CheckBox ${containerProps?.className || ""}`}
      aria-disabled={inputProps?.disabled}
    >
      <input
        {...inputProps}
        id={id}
        type="checkbox"
        className={`input ${inputProps?.className || ""}`}
      />

      <img
        className="icon"
        src={
          inputProps?.checked
            ? ASSET_PATHS?.SVGS?.CHECKBOX_CHECKED
            : ASSET_PATHS?.SVGS?.CHECKBOX_UNCHECKED
        }
        alt={inputProps?.checked ? "checkbox checked" : "checkbox unchecked"}
      />

      {label && <Label text={label} isOptional={!inputProps?.required} />}
    </label>
  );
};
