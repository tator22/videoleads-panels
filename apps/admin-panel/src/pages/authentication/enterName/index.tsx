import { FC } from "react";
import { useTranslation } from "react-i18next";
import styles from "./style.module.css";
import { Input } from "@repo/ui";

const EnterName: FC = (): JSX.Element => {
  // Hooks
  const { t } = useTranslation();

  // Variables
  const translationKey = "PAGES.AUTHENTICATION.ENTER_NAME";

  return (
    <div className={styles?.EnterName}>
      <Input
        inputProps={{
          placeholder: t(`${translationKey}.name_input_placeholder`),
        }}
      />
    </div>
  );
};

export default EnterName;
