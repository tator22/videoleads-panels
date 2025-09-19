import { ASSET_PATHS } from "@repo/assets";
import { FC, InputHTMLAttributes, LabelHTMLAttributes, useId } from "react";
import { Label } from "../Label";
import "./style.css";

export const Radio: FC<{
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
      className={`Radio ${containerProps?.className || ""}`}
      aria-disabled={inputProps?.disabled}
    >
      {label && <Label text={label} isOptional={!inputProps?.required} />}

      <input
        {...inputProps}
        id={id}
        type="radio"
        className={`input ${inputProps?.className || ""}`}
      />

      <img
        className="icon"
        src={
          inputProps?.checked
            ? ASSET_PATHS?.SVGS?.RADIO_ON
            : ASSET_PATHS?.SVGS?.RADIO_OFF
        }
        alt={inputProps?.checked ? "radio on" : "radio off"}
      />
    </label>
  );
};
