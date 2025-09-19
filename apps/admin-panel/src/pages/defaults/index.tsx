import Header from "@/components/Header";
import ProfileSection from "@/components/ProfileSection";
import { ASSET_PATHS } from "@repo/assets";
import { Image, Input, Separator } from "@repo/ui";
import { useTranslation } from "react-i18next";
import styles from "./style.module.css";

const Defaults = () => {
  // Hooks
  const { t } = useTranslation();

  // Variables
  const translationKey = "PAGES.DEFAULTS";

  return (
    <div className={styles.defaults}>
      <div className={styles.leftPart}>
        <Header heading={t(`${translationKey}.defaults`)} />

        <section className={styles.defaultSection}>
          <ProfileSection />
          <Separator
            containerProps={{
              style: {
                marginTop: "2.5rem",
                marginBottom: "1rem",
              },
            }}
          />

          <div className={styles.form}>
            <Input
              inputProps={{
                required: true,
                type: "number",
                placeholder: t(`${translationKey}.enter_phone_number`),
              }}
              label={t(`${translationKey}.phone`)}
              helperText={t(`${translationKey}.phone_note`)}
            />
            <Input
              inputProps={{
                required: true,
                type: "email",
                placeholder: t(`${translationKey}.enter_email`),
              }}
              label={t(`${translationKey}.email`)}
              helperText={t(`${translationKey}.email_note`)}
            />
          </div>
        </section>
        <Separator
          containerProps={{
            style: {
              marginBottom: "1rem",
            },
          }}
        />
      </div>

      <div className={styles.rightPart}>
        <Header
          heading={t(`${translationKey}.preview`)}
          style={{ borderBottom: "none" }}
        />

        <div className={styles.previewContainer}>
          <Image
            imageProps={{
              src: ASSET_PATHS.IMAGES.PROFILE_PREVIEW,
              className: styles.previewImage,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Defaults;
