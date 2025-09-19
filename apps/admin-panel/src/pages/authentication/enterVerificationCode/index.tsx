import { FC } from "react";
import { useTranslation } from "react-i18next";
import styles from "./style.module.css";
import { Input } from "@repo/ui";

const EnterVerificationCode: FC = (): JSX.Element => {
  // Hooks
  const { t } = useTranslation();

  // Variables
  const translationKey = "PAGES.AUTHENTICATION.ENTER_VERIFICATION_CODE";

  return (
    <div className={styles?.EnterVerificationCode}>
      <Input
        inputProps={{
          placeholder: t(`${translationKey}.code_input_placeholder`),
        }}
      />
    </div>
  );
};

export default EnterVerificationCode;
