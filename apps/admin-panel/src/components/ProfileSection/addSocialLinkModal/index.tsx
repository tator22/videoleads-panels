import { useTranslation } from "react-i18next";
import styles from "./style.module.css";
import { CONSTANTS } from "@repo/utilities";
import { ASSET_PATHS } from "@repo/assets";
import { Searchbar } from "@/layout/searchbar";
import { useState } from "react";
import { Image, Input, Modal, Separator, Text } from "@repo/ui";

const AddSocialLinkModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  // Hooks
  const { t } = useTranslation();

  // Variables
  const translationKey = "MODALS.ADD_SOCIAL_LINK";

  // Local States
  const [selectedLink, setSelectedLink] = useState<{
    icon: string;
    name: string;
    label: string;
    placeholder: string;
    helper: string;
  } | null>(null);
  const [step, setStep] = useState<"choose platform" | "add link">(
    "choose platform"
  );

  // Functions
  const handleRowClick = (item: {
    icon: string;
    name: string;
    label: string;
    placeholder: string;
    helper: string;
  }) => {
    setSelectedLink(item);
    setStep("add link");
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={
        step === "choose platform"
          ? t(`${translationKey}.title`)
          : selectedLink?.name
      }
      primaryButtonText={
        step === "add link" ? t(`${translationKey}.ctaAdd`) : ""
      }
      contentContainerStyle={{
        padding: "0rem",
        paddingBottom: "0.5rem",
      }}
    >
      {step === "choose platform" && (
        <ChoosePlatformStep handleRowClick={handleRowClick} />
      )}
      {step === "add link" && selectedLink && (
        <AddLinkStep link={selectedLink} />
      )}
    </Modal>
  );
};

export default AddSocialLinkModal;

const ChoosePlatformStep = ({
  handleRowClick,
}: {
  handleRowClick: (item: {
    icon: string;
    name: string;
    label: string;
    placeholder: string;
    helper: string;
  }) => void;
}) => (
  <div className={styles.ChoosePlatformStep}>
    <div className={styles.searchbarContainer}>
      <Searchbar />
    </div>
    <Separator />
    <div>
      {CONSTANTS.SOCIAL_LINKS.map((item, index) => (
        <div key={index}>
          <SocialLinkRow {...item} onClick={() => handleRowClick(item)} />
          <Separator />
        </div>
      ))}
    </div>
  </div>
);

const SocialLinkRow = ({
  icon,
  name,
  onClick,
}: {
  icon: string;
  name: string;
  onClick: () => void;
}) => (
  <div
    className={styles.SocialLinkRow}
    onClick={onClick}
    style={{ cursor: "pointer" }}
  >
    <div className={styles.iconAndName}>
      <Image
        containerProps={{ className: styles.iconBox }}
        imageProps={{ src: icon, className: styles.icon }}
      />
      <Text
        tag="h6"
        children={name}
        containerProps={{ className: styles.name }}
      />
    </div>
    <Image
      containerProps={{ className: styles.arrowIconBox }}
      imageProps={{
        src: ASSET_PATHS.SVGS.ANGLE_RIGHT_WITHOUT_ROUND,
        className: styles.arrowIcon,
      }}
    />
  </div>
);

const AddLinkStep = ({
  link,
}: {
  link: {
    icon: string;
    name: string;
    label: string;
    placeholder: string;
    helper: string;
  };
}) => (
  <div className={styles.AddLinkStep}>
    <Input
      label={link?.label}
      inputProps={{
        placeholder: link?.placeholder,
        required: true,
      }}
      helperText={link?.helper}
      containerProps={{ className: styles.input }}
    />
  </div>
);
