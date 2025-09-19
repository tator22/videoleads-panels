import { ASSET_PATHS } from "@repo/assets";
import { CONSTANTS } from "@repo/utilities";

export const ADMIN_SIDEBAR_TABS = [
  {
    key: "home",
    label: "home",
    link: CONSTANTS.PATHS.LISTING,
    icon: ASSET_PATHS.SVGS.HOME_OUTLINE,
    active_icon: ASSET_PATHS.SVGS.HOME_FILLED,
  },
  {
    key: "media",
    label: "media",
    link: CONSTANTS.PATHS.MEDIA,
    icon: ASSET_PATHS.SVGS.MEDIA_OUTLINE,
    active_icon: ASSET_PATHS.SVGS.MEDIA_FILLED,
  },
  {
    key: "defaults",
    label: "defaults",
    link: CONSTANTS.PATHS.DEFAULTS,
    icon: ASSET_PATHS.SVGS.DEFAULT_OUTLINE,
    active_icon: ASSET_PATHS.SVGS.DEFAULT_FILLED,
  },
  {
    key: "team_members",
    label: "team members",
    link: CONSTANTS.PATHS.TEAM_MEMBERS,
    icon: ASSET_PATHS.SVGS.TEAM_MEMBERS_OUTLINE,
    active_icon: ASSET_PATHS.SVGS.TEAM_MEMBERS_FILLED,
  },
  {
    key: "billing",
    label: "billing",
    link: CONSTANTS.PATHS.BILLING,
    icon: ASSET_PATHS.SVGS.BILLING_OUTLINED,
    active_icon: ASSET_PATHS.SVGS.BILLING_FILLED,
  },
  {
    key: "support",
    label: "support",
    link: CONSTANTS.PATHS.SUPPORT,
    icon: ASSET_PATHS.SVGS.SUPPORT_OUTLINE,
    active_icon: ASSET_PATHS.SVGS.SUPPORT_FILLED,
  },
  // {
  //   key: "inspiration",
  //   label: "inspiration",
  //   link: CONSTANTS.PATHS.INSPIRATION,
  //   icon: ASSET_PATHS.SVGS.INSPIRATION_OUTLINE,
  //   active_icon: ASSET_PATHS.SVGS.INSPIRATION_FILLED,
  // },
];
