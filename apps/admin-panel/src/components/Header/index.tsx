import { ASSET_PATHS } from "@repo/assets";
import { Button, Text } from "@repo/ui";
import clsx from "clsx";
import { CSSProperties, FC, MouseEventHandler, ReactNode } from "react";
import { useNavigate } from "react-router";
import styles from "./style.module.css";

type headerProps = {
  isBack?: boolean;
  heading?: string;
  count?: number;
  buttonTitle?: string;
  onButtonClick?: MouseEventHandler;
  isButtonLoading?: boolean;
  isButton?: boolean;
  style?: CSSProperties;
  rightChildren?: ReactNode;
  rightSideContainerStyle?: CSSProperties;
  rightSideContainerClassName?: string;
  isBackHandler?: boolean;
  onBackClick?: () => void;
  subHeading?: string;
};

const Header: FC<headerProps> = ({
  isBack,
  heading,
  count,
  buttonTitle,
  onButtonClick,
  isButtonLoading,
  isButton,
  style,
  rightChildren,
  rightSideContainerStyle,
  rightSideContainerClassName,
  isBackHandler,
  onBackClick,
  subHeading,
}) => {
  // hooks
  const navigate = useNavigate();

  // functions
  const handleBackButton = () => {
    if (isBackHandler && onBackClick) {
      onBackClick();
    } else {
      navigate(-1);
    }
  };

  return (
    <div
      className={clsx(
        styles.mainHeaderContainer,
        isButton && styles.headerWithButton
      )}
      style={{
        ...style,
      }}
    >
      <div className={styles.backButtonAndHeading}>
        {isBack && (
          <div className={styles.headerBackButton} onClick={handleBackButton}>
            <img
              src={ASSET_PATHS.SVGS.LEFT_ARROW}
              alt="back icon"
              className={styles.headerBackIcon}
            />
          </div>
        )}

        <div className={styles.headingAndSubHeading}>
          {heading && (
            <Text
              tag="h2"
              children={`${heading} ${count ? `(${count})` : ""}`}
              containerProps={{
                className: `${styles.heading}`,
              }}
            />
          )}
          {subHeading && (
            <Text
              tag="h2"
              children={subHeading}
              containerProps={{
                className: `${styles.subHeading}`,
              }}
            />
          )}
        </div>
      </div>

      <div
        className={`${styles.headerRightButton} ${rightSideContainerClassName}`}
        style={{
          ...rightSideContainerStyle,
        }}
      >
        {rightChildren && rightChildren}
        {isButton && (
          <Button
            size={"medium"}
            variant={"secondary"}
            buttonProps={{
              onClick: onButtonClick,
              className: styles.headerButton,
            }}
            leftNode={
              <div className={styles.headerButtonIconContainer}>
                <img
                  src={ASSET_PATHS.SVGS.PLUS}
                  alt="plus icon"
                  className={styles.headerButtonIcon}
                />
              </div>
            }
            isLoading={isButtonLoading}
            text={buttonTitle}
          />
        )}
      </div>
    </div>
  );
};

export default Header;
