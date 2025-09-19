import { FC } from "react";
import { Trans, useTranslation } from "react-i18next";
import styles from "./style.module.css";
import { CheckBox, Input, Link, Text } from "@repo/ui";

const EnterAccountDetails: FC = (): JSX.Element => {
  // Hooks
  const { t } = useTranslation();

  // Variables
  const translationKey = "PAGES.AUTHENTICATION.ENTER_ACCOUNT_DETAILS";

  return (
    <div className={styles?.EnterAccountDetails}>
      <Input
        inputProps={{
          placeholder: t(`${translationKey}.email_input_placeholder`),
        }}
      />
      <Input
        inputProps={{
          placeholder: t(`${translationKey}.password_input_placeholder`),
        }}
      />
      <Input
        inputProps={{
          placeholder: t(
            `${translationKey}.confirm_password_input_placeholder`
          ),
        }}
      />

      <div className={styles.checkboxContainer}>
        <CheckBox />
        <Text
          tag="p"
          children={
            <Trans
              i18nKey={`${translationKey}.checkbox_label`}
              components={[
                <Link
                  containerProps={{
                    href: "#",
                    target: "_blank",
                  }}
                />,
                <Link
                  containerProps={{
                    href: "#",
                    target: "_blank",
                  }}
                />,
              ]}
            />
          }
          containerProps={{
            className: styles?.policyText,
          }}
        />
      </div>
    </div>
  );
};

export default EnterAccountDetails;
