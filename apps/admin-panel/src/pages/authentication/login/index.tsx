import { FC } from "react";
import { useTranslation } from "react-i18next";
import styles from "./style.module.css";
import { Input, Link } from "@repo/ui";

const LogIn: FC = (): JSX.Element => {
  // Hooks
  const { t } = useTranslation();

  // Variables
  const translationKey = "PAGES.AUTHENTICATION.LOG_IN";

  return (
    <div className={styles?.LogIn}>
      <div className={styles.form}>
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

        <div className={styles.forgotPassword}>
          <Link
            containerProps={{
              className: styles.forgotPasswordLink,
            }}
          >
            {t(`${translationKey}.cta_forgot_password`)}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
