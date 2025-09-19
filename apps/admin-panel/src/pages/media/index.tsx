import { MEDIA_CARD_DATA } from "@repo/utilities";
import styles from "./style.module.css";
import MediaCard from "@/components/Cards/mediaCard";
import Header from "@/components/Header";
import { useTranslation } from "react-i18next";
import { Searchbar } from "@/layout/searchbar";

const Media = () => {
  // Hooks
  const { t } = useTranslation();

  // Variables
  const translationKey = "PAGES.MEDIA";
  return (
    <div className={styles.mediaSection}>
      <Header
        isButton
        heading={t(`${translationKey}.heading`)}
        buttonTitle={t(`${translationKey}.new_cta`)}
        rightChildren={
          <Searchbar
            containerClassName={styles.searchInputContainer}
            inputProps={{
              placeholder: t(`${translationKey}.search_media`),
              className: styles.searchInput,
            }}
          />
        }
      />
      <div className={styles.renderMediaCards}>
        {MEDIA_CARD_DATA.map((item, index) => (
          <div className={styles.gridColumn}>
            <MediaCard {...item} key={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Media;
