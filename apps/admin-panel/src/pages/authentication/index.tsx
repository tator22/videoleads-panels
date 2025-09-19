import { ASSET_PATHS } from "@repo/assets";
import { Button, Image, Text } from "@repo/ui";
import { CONSTANTS } from "@repo/utilities";
import clsx from "clsx";
import { FC, MouseEventHandler, ReactNode, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import ChooseAccountType from "./chooseAccountType";
import EnterAccountDetails from "./enterAccountDetails";
import EnterName from "./enterName";
import EnterYourUsername from "./enterUsername";
import EnterVerificationCode from "./enterVerificationCode";
import LogIn from "./login";
import styles from "./style.module.css";

const Authentication: FC = (): JSX.Element => {
  // Hooks
  const { t } = useTranslation();
  const navigate = useNavigate();

  // Variables
  const translationKey = "PAGES.AUTHENTICATION";

  // Local States
  const [currentStep, setCurrentStep] = useState<
    | "ENTER_USERNAME"
    | "ENTER_ACCOUNT_DETAILS"
    | "ENTER_VERIFICATION_CODE"
    | "ENTER_NAME"
    | "CHOOSE_ACCOUNT_TYPE"
    | "LOG_IN"
  >("ENTER_USERNAME");

  // Functions
  const getStepDetails = (): {
    topBarMode: "LOG_IN" | "SIGN_UP";
    heading: string;
    subHeading?: string;
    childrenComponent: ReactNode;
    primaryCtaText?: string;
    onPressPrimaryCta?: MouseEventHandler<HTMLButtonElement>;
    secondaryCtaText?: string;
    onPressSecondaryCta?: MouseEventHandler<HTMLButtonElement>;
  } => {
    switch (currentStep) {
      case "ENTER_USERNAME":
        return {
          topBarMode: "LOG_IN",
          heading: t(`${translationKey}.ENTER_USERNAME.heading`),
          subHeading: t(`${translationKey}.ENTER_USERNAME.sub_heading`),
          childrenComponent: <EnterYourUsername />,
          primaryCtaText: t(`${translationKey}.ENTER_USERNAME.cta`),
          onPressPrimaryCta: () => {
            setCurrentStep("ENTER_ACCOUNT_DETAILS");
          },
        };

      case "ENTER_ACCOUNT_DETAILS":
        return {
          topBarMode: "LOG_IN",
          heading: t(`${translationKey}.ENTER_ACCOUNT_DETAILS.heading`),
          childrenComponent: <EnterAccountDetails />,
          primaryCtaText: t(`${translationKey}.ENTER_ACCOUNT_DETAILS.cta`),
          onPressPrimaryCta: () => {
            setCurrentStep("ENTER_VERIFICATION_CODE");
          },
        };

      case "ENTER_VERIFICATION_CODE":
        return {
          topBarMode: "LOG_IN",
          heading: t(`${translationKey}.ENTER_VERIFICATION_CODE.heading`),
          subHeading: t(
            `${translationKey}.ENTER_VERIFICATION_CODE.sub_heading`
          ),
          childrenComponent: <EnterVerificationCode />,
          primaryCtaText: t(`${translationKey}.ENTER_VERIFICATION_CODE.cta`),
          onPressPrimaryCta: () => {
            setCurrentStep("ENTER_NAME");
          },
          secondaryCtaText: t(
            `${translationKey}.ENTER_VERIFICATION_CODE.cta_resend_code`
          ),
          onPressSecondaryCta: () => {},
        };

      case "ENTER_NAME":
        return {
          topBarMode: "LOG_IN",
          heading: t(`${translationKey}.ENTER_NAME.heading`),
          childrenComponent: <EnterName />,
          primaryCtaText: t(`${translationKey}.ENTER_NAME.cta`),
          subHeading: t(`${translationKey}.ENTER_NAME.sub_heading`),
          onPressPrimaryCta: () => {
            setCurrentStep("CHOOSE_ACCOUNT_TYPE");
          },
        };

      case "CHOOSE_ACCOUNT_TYPE":
        return {
          topBarMode: "LOG_IN",
          heading: t(`${translationKey}.CHOOSE_ACCOUNT_TYPE.heading`),
          childrenComponent: (
            <ChooseAccountType onClick={() => setCurrentStep("LOG_IN")} />
          ),
        };

      case "LOG_IN":
        return {
          topBarMode: "SIGN_UP",
          heading: t(`${translationKey}.LOG_IN.heading`),
          childrenComponent: <LogIn />,
          primaryCtaText: t(`${translationKey}.LOG_IN.cta`),
          onPressPrimaryCta: () => {
            navigate(CONSTANTS?.PATHS.ROOT);
          },
        };
    }
  };

  return (
    <div className={clsx(styles?.Authentication, "wrapper_padding")}>
      <div className={styles?.topBar}>
        <Text
          containerProps={{
            className: styles?.label,
          }}
        >
          {getStepDetails()?.topBarMode === "LOG_IN"
            ? t(`${translationKey}.log_in_label`)
            : t(`${translationKey}.sign_up_label`)}
        </Text>
        <Button
          variant="tertiary"
          size="medium"
          text={
            getStepDetails()?.topBarMode === "LOG_IN"
              ? t(`${translationKey}.cta_log_in`)
              : t(`${translationKey}.cta_sign_up`)
          }
          buttonProps={{
            className: styles?.cta,
            onClick: () => {
              if (getStepDetails()?.topBarMode === "LOG_IN") {
                setCurrentStep("LOG_IN");
              } else {
                setCurrentStep("ENTER_USERNAME");
              }
            },
          }}
        />
      </div>

      <div className={styles?.content}>
        <div className={styles?.logoContainer}>
          <Image
            imageProps={{
              src: ASSET_PATHS?.ICONS?.LOGO,
            }}
            containerProps={{
              className: styles?.logo,
            }}
          />
          <Text
            tag="h3"
            containerProps={{
              className: styles?.appName,
            }}
          >
            {CONSTANTS?.APP_NAME}
          </Text>
        </div>

        <div className={styles?.headingAndSubHeadingContainer}>
          <Text
            tag="h1"
            containerProps={{
              className: styles?.heading,
            }}
          >
            {getStepDetails()?.heading}
          </Text>

          {getStepDetails()?.subHeading ? (
            <Text
              tag="p"
              containerProps={{
                className: styles?.subHeading,
              }}
            >
              {getStepDetails()?.subHeading}
            </Text>
          ) : null}
        </div>

        {getStepDetails()?.childrenComponent ||
        getStepDetails()?.primaryCtaText ||
        getStepDetails()?.secondaryCtaText ? (
          <div className={styles?.childrenAndCtasContainer}>
            {getStepDetails()?.childrenComponent ? (
              <div className={styles?.childrenContainer}>
                {getStepDetails()?.childrenComponent}
              </div>
            ) : null}

            {getStepDetails()?.primaryCtaText ? (
              <Button
                text={getStepDetails()?.primaryCtaText}
                buttonProps={{
                  onClick: getStepDetails()?.onPressPrimaryCta,
                  className: styles?.primaryCta,
                }}
              />
            ) : null}

            {getStepDetails()?.secondaryCtaText ? (
              <Button
                variant="tertiary"
                size="medium"
                text={getStepDetails()?.secondaryCtaText}
                buttonProps={{
                  onClick: getStepDetails()?.onPressSecondaryCta,
                  className: styles?.secondaryCta,
                }}
              />
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Authentication;
