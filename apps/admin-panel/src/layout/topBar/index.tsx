import { toggleSideBarMode } from "@/redux/slice/otherSlices/sideBarModeSlice";
import { useAppDispatch } from "@/redux/store";
import { ASSET_PATHS } from "@repo/assets";
import { ProfilePhoto } from "@repo/ui";
import { useTranslation } from "react-i18next";
import { Searchbar } from "../searchbar";
import styles from "./style.module.css";

const TopBar = () => {
  // Hooks
  const { t } = useTranslation("layout");
  const dispatch = useAppDispatch();

  return (
    <div className={styles.topBarContainer}>
      <div className={styles.iconContainer}>
        <img
          src={ASSET_PATHS.SVGS.MENU}
          alt="menu icon"
          className={styles.menuIcon}
          onClick={() => dispatch(toggleSideBarMode())}
        />
      </div>

      <Searchbar
        inputProps={{
          placeholder: t("search"),
        }}
      />

      <div className={styles.storageAndOtherIcons}>
        <div className={styles.storageCounter}>
          <div className={styles.storageCount}>
            <span className={styles.storage}>{t("storage")}</span>
            <span className={styles.storage}>2.3GB/5GB</span>
          </div>
          <div className={styles.storageSlider} />
        </div>

        <img
          src={ASSET_PATHS.SVGS.NOTIFICATION}
          alt="notification icon"
          className={styles.notification}
        />

        <ProfilePhoto size={"4rem"} />
      </div>
    </div>
  );
};

export default TopBar;
