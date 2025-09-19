import { useTranslation } from "react-i18next";
import styles from "./style.module.css";
import { Button, Input, Textarea } from "@repo/ui";

const Settings = () => {
  // Hooks
  const { t } = useTranslation();

  // Variables
  const translationKey = "PAGES.SETTINGS";

  return (
    <div className={styles.settings}>
      <Input
        label={t(`${translationKey}.listing_name`)}
        inputProps={{
          required: true,
          placeholder: t(`${translationKey}.enter_listing_name`),
        }}
      />
      <Textarea
        label={t(`${translationKey}.description`)}
        placeholder={t(`${translationKey}.enter_description`)}
      />

      <Button
        text={t(`${translationKey}.save`)}
        size="medium"
        buttonProps={{
          className: styles.saveButton,
        }}
      />
    </div>
  );
};

export default Settings;
