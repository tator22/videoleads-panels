import { ButtonHTMLAttributes, CSSProperties, FC, ReactNode } from "react";
import { Loader } from "../Loader";
import "./style.css";

export const Button: FC<{
  variant?: "primary" | "secondary" | "tertiary";
  size?: "small" | "medium" | "large";
  buttonProps?: ButtonHTMLAttributes<HTMLButtonElement>;
  leftNode?: ReactNode;
  rightNode?: ReactNode;
  isLoading?: boolean;
  text?: string;
}> = ({
  variant = "primary",
  size = "large",
  buttonProps,
  leftNode,
  rightNode,
  isLoading,
  text,
}): JSX.Element => {
  // Types
  type VariantBasedStylesTypes = {
    backgroundColor: string;
    backgroundHoverColor: string;
    textColor: string;
    loaderColor: string;
  };

  type SizeBasedStylesTypes = {
    fontSize: string;
    padding: string;
    gap: string;
    loaderSize: string;
  };

  // Variables
  const isDisabled = buttonProps?.disabled || isLoading;

  // Functions
  const getVariantBasedStyles = (): VariantBasedStylesTypes => {
    let styles: VariantBasedStylesTypes = {
      backgroundColor: "",
      backgroundHoverColor: "",
      textColor: "",
      loaderColor: "",
    };

    switch (variant) {
      case "primary":
        styles = {
          backgroundColor: "rgb(var(--primary))",
          backgroundHoverColor: "rgb(var(--primary-hover))",
          textColor: "rgb(var(--white))",
          loaderColor: "rgb(var(--white))",
        };
        break;
      case "secondary":
        styles = {
          backgroundColor: "rgb(var(--secondary))",
          backgroundHoverColor: "rgb(var(--secondary-hover))",
          textColor: "rgb(var(--black))",
          loaderColor: "rgb(var(--black))",
        };
        break;
      case "tertiary":
        styles = {
          backgroundColor: "rgb(var(--white))",
          backgroundHoverColor: "rgb(var(--secondary))",
          textColor: "rgb(var(--black))",
          loaderColor: "rgb(var(--black))",
        };
        break;
    }

    return styles;
  };

  const getSizeBasedStyles = (): SizeBasedStylesTypes => {
    let styles: SizeBasedStylesTypes = {
      fontSize: "",
      padding: "",
      gap: "",
      loaderSize: "",
    };

    switch (size) {
      case "small":
        styles = {
          fontSize: "1.1rem",
          padding: "1rem 2rem",
          gap: "",
          loaderSize: "2rem",
        };
        break;
      case "medium":
        styles = {
          fontSize: "1.3rem",
          padding: "1.2rem 2.25rem",
          gap: "0.5rem",
          loaderSize: "3rem",
        };
        break;
      case "large":
        styles = {
          fontSize: "1.5rem",
          padding: "1.45rem 2.7rem",
          gap: "0.75rem",
          loaderSize: "4rem",
        };
        break;
    }

    return styles;
  };

  return (
    <button
      {...buttonProps}
      disabled={isDisabled}
      className={`Button largeClickableElement ${buttonProps?.className || ""}`}
      style={
        {
          ...buttonProps?.style,
          backgroundColor:
            buttonProps?.style?.backgroundColor ||
            getVariantBasedStyles().backgroundColor,
          color: buttonProps?.style?.color || getVariantBasedStyles().textColor,
          "--backgroundHoverColor":
            getVariantBasedStyles().backgroundHoverColor,
          fontSize:
            buttonProps?.style?.fontSize || getSizeBasedStyles().fontSize,
          padding: buttonProps?.style?.padding || getSizeBasedStyles().padding,
          gap: buttonProps?.style?.gap || getSizeBasedStyles().gap,
        } as CSSProperties
      }
    >
      {isLoading ? (
        <div
          className="loaderContainer"
          style={{ backgroundColor: getVariantBasedStyles().backgroundColor }}
        >
          <Loader
            color={getVariantBasedStyles().loaderColor}
            size={getSizeBasedStyles().loaderSize}
            containerProps={{ style: { opacity: 0.5 } }}
          />
        </div>
      ) : null}
      {leftNode}
      {text}
      {rightNode}
    </button>
  );
};
