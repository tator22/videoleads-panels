import { ASSET_PATHS } from "@repo/assets";
import {
  ButtonHTMLAttributes,
  CSSProperties,
  ReactNode,
  useEffect,
} from "react";
import ReactDOM from "react-dom";
import { Button } from "../Button";
import { Image } from "../Image";
import { Separator } from "../Separator";
import { Text } from "../Text";
import "./style.css";

interface ModalProps {
  isOpen?: boolean;
  onClose: (e?: any) => void;
  title?: string;
  contentClassName?: string;
  className?: string;
  children?: ReactNode;
  contentContainerStyle?: CSSProperties;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  primaryButtonProps?: ButtonHTMLAttributes<HTMLButtonElement>;
  secondaryButtonProps?: ButtonHTMLAttributes<HTMLButtonElement>;
  hideHeaderSeparator?: boolean;
  hideFooterSeparator?: boolean;
}

export const Modal = ({
  isOpen,
  onClose,
  children,
  title = "Modal Heading",
  contentContainerStyle,
  primaryButtonText,
  secondaryButtonText,
  primaryButtonProps,
  secondaryButtonProps,
  hideHeaderSeparator,
  hideFooterSeparator,
}: ModalProps) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.body.classList.add("hideBackgroundScroll");
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.classList.remove("hideBackgroundScroll");
      document.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.classList.remove("hideBackgroundScroll");
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div
      onClick={(e) => {
        e?.stopPropagation();
      }}
    >
      <div className="overlay" onClick={onClose}></div>

      <div className="modal">
        <div className="modalHeader">
          <Image
            containerProps={{
              className: "modalCloseIconContainer hide",
              onClick: onClose,
            }}
            imageProps={{
              className: "modalCloseIcon",
              src: ASSET_PATHS.SVGS.CLOSE_ICON,
              alt: "close",
            }}
          />
          <Text tag="h5" containerProps={{ className: "modalTitle" }}>
            {title}
          </Text>
          <Image
            containerProps={{
              className: "modalCloseIconContainer",
              onClick: onClose,
            }}
            imageProps={{
              className: "modalCloseIcon",
              src: ASSET_PATHS.SVGS.CLOSE_ICON,
              alt: "close",
            }}
          />
        </div>
        {!hideHeaderSeparator && (
          <Separator
            containerProps={{
              style: {
                marginBottom: "1.5rem",
              },
            }}
          />
        )}

        <div className="content" style={{ ...contentContainerStyle }}>
          {children}
        </div>

        {secondaryButtonText || primaryButtonText ? (
          <div className="modelFooterContainer">
            {!hideFooterSeparator && <Separator />}
            <div className="modalFooter">
              {secondaryButtonText && (
                <Button
                  variant="secondary"
                  text={secondaryButtonText}
                  buttonProps={secondaryButtonProps}
                />
              )}
              {primaryButtonText && (
                <Button
                  variant="primary"
                  text={primaryButtonText}
                  buttonProps={primaryButtonProps}
                />
              )}
            </div>
          </div>
        ) : null}
      </div>
    </div>,
    document.getElementById("modal") || document.createElement("div")
  );
};
