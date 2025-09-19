import { ASSET_PATHS } from "@repo/assets";
import { Button, Image, ProfilePhoto, Text } from "@repo/ui";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import AddSocialLinkModal from "./addSocialLinkModal";
import EditProfileModal from "./editProfileModal";
import styles from "./style.module.css";

const ProfileSection = () => {
  // Hooks
  const { t } = useTranslation();

  // Variables
  const translationKey = "COMPONENTS.PROFILE_SECTION";

  // States
  const [enableEditProfileModal, setEnableEditProfileModal] = useState(false);
  const [enableSocialLinkModal, setEnableSocialLinkModal] = useState(false);

  // Functions
  const handleEnableEditProfileModal = () => {
    setEnableEditProfileModal(!enableEditProfileModal);
  };

  const handleEnableSocialLinkModal = () => {
    setEnableSocialLinkModal(!enableSocialLinkModal);
  };

  return (
    <div className={styles.profileSection}>
      <div className={styles.leftPart}>
        <div className={styles.profileAndEditButton}>
          <ProfilePhoto
            photo="https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            variant="circle"
            size={"8rem"}
          />
          <Image
            containerProps={{
              className: styles.editIcon,
            }}
            imageProps={{
              src: ASSET_PATHS.SVGS.PROFILE_EDIT_ICON,
            }}
          />
        </div>

        <div className={styles.textBox}>
          <Text
            tag="h6"
            maximumNumberOfLines={1}
            children={"Mary Richards"}
            containerProps={{
              className: styles.name,
            }}
          />
          <Text
            tag="p"
            children={
              "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula."
            }
            containerProps={{
              className: styles.description,
            }}
          />

          <div className={styles.iconLinkBox}>
            <Text
              tag="p"
              children={t(`${translationKey}.icon_link`)}
              containerProps={{
                className: styles.linkIconText,
              }}
            />
            <Image
              containerProps={{
                className: styles.iconLinkIconBox,
                onClick: handleEnableSocialLinkModal,
              }}
              imageProps={{
                src: ASSET_PATHS.SVGS.PLUS,
                className: styles.iconLinkIcon,
              }}
            />
          </div>
        </div>
      </div>
      <div className={styles.rightPart}>
        <Button
          size={"medium"}
          variant={"secondary"}
          buttonProps={{
            className: styles.editButton,
            onClick: handleEnableEditProfileModal,
          }}
          text={t(`${translationKey}.edit`)}
        />
      </div>

      {enableEditProfileModal && (
        <EditProfileModal
          isOpen={enableEditProfileModal}
          onClose={handleEnableEditProfileModal}
        />
      )}

      {enableSocialLinkModal && (
        <AddSocialLinkModal
          isOpen={enableSocialLinkModal}
          onClose={handleEnableSocialLinkModal}
        />
      )}
    </div>
  );
};

export default ProfileSection;
