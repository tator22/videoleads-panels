import { FC } from "react";
import { useTranslation } from "react-i18next";
import styles from "./style.module.css";
import { Input } from "@repo/ui";

const EnterUsername: FC = (): JSX.Element => {
  // Hooks
  const { t } = useTranslation();

  // Variables
  const translationKey = "PAGES.AUTHENTICATION.ENTER_USERNAME";

  return (
    <div className={styles?.EnterUsername}>
      <Input
        inputProps={{
          placeholder: t(`${translationKey}.username_input_placeholder`),
          value: "",
          onChange: () => {},
          autoFocus: true,
          disabled: false,
          required: true,
        }}
      />
    </div>
  );
};

export default EnterUsername;
