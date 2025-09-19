import { useAppDispatch, useAppSelector } from "@/redux/store";
import { ASSET_PATHS } from "@repo/assets";
import { Text } from "@repo/ui";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { shallowEqual } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { closeDrawer } from "../../redux/slice/otherSlices/drawerSlice";
import styles from "./style.module.css";
import { Tab } from "./tab";
import { ADMIN_SIDEBAR_TABS } from "./tabsLinks";

export const SideBar = () => {
  // Hooks
  const { t } = useTranslation("sideBar");
  const tabGroupRef = useRef<HTMLUListElement>(null);
  const location = useLocation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // Global States
  const { sideBarMode } = useAppSelector(
    (state) => ({
      sideBarMode: state?.sideBarMode.sideBarMode,
    }),
    shallowEqual
  );

  // Variables
  const pageName = location?.pathname?.split("/");

  // Functions
  const toggleSideBarDrawer = () => {
    dispatch(closeDrawer());
  };

  const handleSideBarScroll = (tabId: string) => {
    const tab = document?.getElementById(tabId);
    if (tab && tabGroupRef?.current) {
      tabGroupRef?.current.scrollTo({
        top: tab?.offsetTop - tabGroupRef?.current?.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className={styles.sidebar}
      style={{
        width:
          sideBarMode === "expanded"
            ? "var(--side-bar-expanded-width)"
            : "var(--side-bar-collapsed-width)",
        padding: sideBarMode === "expanded" ? "2rem" : "2rem 1rem",
      }}
    >
      <div
        className={`${styles.iconContainer} ${sideBarMode === "expanded" ? "" : styles.expanded}`}
      >
        <img
          src={ASSET_PATHS.ICONS.LOGO}
          alt="app logo"
          className={styles.appLogo}
        />
        <Text
          tag="h1"
          children="Listing Hype"
          containerProps={{
            className: styles.appTitle,
          }}
        />
      </div>

      <ul className={styles.sectionsContainer} ref={tabGroupRef}>
        {ADMIN_SIDEBAR_TABS?.slice(0, 5)?.map((item, index) => {
          const isActive = item?.link === `/${pageName[1]}`;

          return (
            <li key={index} onClick={toggleSideBarDrawer}>
              <Tab
                icon={isActive ? item?.active_icon : item?.icon}
                label={t(item?.label)}
                isActive={isActive}
                id={item?.label}
                onClick={() => {
                  handleSideBarScroll(item?.label);
                  navigate(item.link);
                }}
              />
            </li>
          );
        })}
      </ul>

      <ul className={styles.bottomSection} ref={tabGroupRef}>
        {ADMIN_SIDEBAR_TABS?.slice(5)?.map((item, index) => {
          const isActive = item?.link === `/${pageName[1]}`;

          return (
            <li key={index} onClick={toggleSideBarDrawer}>
              <Tab
                icon={isActive ? item?.active_icon : item?.icon}
                label={t(item?.label)}
                isActive={isActive}
                id={item?.label}
                onClick={() => {
                  handleSideBarScroll(item?.label);
                  navigate(item.link);
                }}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
