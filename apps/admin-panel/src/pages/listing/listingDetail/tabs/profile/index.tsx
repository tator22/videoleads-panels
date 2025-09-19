import ProfileSection from "@/components/ProfileSection";
import { Input, Separator } from "@repo/ui";
import { useTranslation } from "react-i18next";
import styles from "./style.module.css";

const Profile = () => {
  // Hooks
  const { t } = useTranslation();

  // Variables
  const translationKey = "PAGES.LISTING_DETAIL";

  return (
    <div className={styles.profileComponent}>
      <ProfileSection />
      <Separator
        containerProps={{
          style: {
            marginTop: "2.5rem",
          },
        }}
      />

      <section className={styles.formSection}>
        <Input
          inputProps={{
            required: true,
          }}
          label={t(`${translationKey}.sms_message`)}
          helperText={t(`${translationKey}.sms_message_note`)}
        />
        <Input
          inputProps={{
            required: true,
            type: "number",
          }}
          label={t(`${translationKey}.phone`)}
          helperText={t(`${translationKey}.phone_note`)}
        />
        <Input
          inputProps={{
            required: true,
            type: "email",
          }}
          label={t(`${translationKey}.email`)}
          helperText={t(`${translationKey}.email_note`)}
        />
        <Input
          inputProps={{
            required: true,
            type: "text",
          }}
          label={t(`${translationKey}.website`)}
          helperText={t(`${translationKey}.website_note`)}
        />
      </section>
    </div>
  );
};

export default Profile;
