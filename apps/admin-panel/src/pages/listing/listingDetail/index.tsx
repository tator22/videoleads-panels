import { CustomQRCode } from "@/components/CustomQRCode";
import { QRDataType, QRMonkeyConfig } from "@/components/CustomQRCode/types";
import Header from "@/components/Header";
import AddMediaModal from "@/components/Modals/AddMedia";
import { ASSET_PATHS } from "@repo/assets";
import { Image, RenderTab, renderTabProps } from "@repo/ui";
import { Suspense, useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./style.module.css";
import Media from "./tabs/media";
import QRCode from "./tabs/QR";
import Profile from "./tabs/profile";
import Analytics from "./tabs/analytics";
import Settings from "./tabs/settings";

const ListingDetail = () => {
  // Hooks
  const { t } = useTranslation();

  // Variables
  const translationKey = "PAGES.LISTING_DETAIL";
  const tabs: renderTabProps[] = [
    {
      label: t(`${translationKey}.media`),
      key: "media",
    },
    {
      label: t(`${translationKey}.profile`),
      key: "profile",
    },
    {
      label: t(`${translationKey}.qr`),
      key: "qr",
    },
    {
      label: t(`${translationKey}.analytics`),
      key: "analytics",
    },
    {
      label: t(`${translationKey}.settings`),
      key: "settings",
    },
  ];
  const config: QRDataType = {
    value: "www.first.com",
    config: {
      body: "body1",
      frame: "frame1",
      ball: "ball1",
      bodyColor: "#000000",
      bgColor: "#FFFFFF",
      gradientColor1: "",
      gradientColor2: "",
      gradientType: "linear",
      gradientOnEyes: "true",
      logo: "",
      logoMode: "default",
      frameColors: {
        topLeft: "#000000",
        topRight: "#000000",
        bottomLeft: "#000000",
      },
      ballColors: {
        topLeft: "#000000",
        topRight: "#000000",
        bottomLeft: "#000000",
      },
      frameFlips: {
        topLeft: [],
        topRight: [],
        bottomLeft: [],
      },
      ballFlips: {
        topLeft: [],
        topRight: [],
        bottomLeft: [],
      },
      background: {
        type: "none",
        qrSizeScale: 1,
      },
    },
  };

  // Local State
  const [activeTab, setActiveTab] = useState({
    label: "",
    key: "media",
  });
  const [enableAddMediaModal, setEnableAddMediaModal] = useState(false);
  const [selectedQR, setSelectedQR] = useState<{
    config: QRMonkeyConfig;
    value: string;
  }>({
    config: config.config,
    value: config.value,
  });

  // Functions
  const renderTabItem = () => {
    if (activeTab) {
      switch (activeTab.key) {
        case "media":
          return <Media />;
        case "profile":
          return <Profile />;
        case "qr":
          return (
            <QRCode setSelectedQR={setSelectedQR} selectedQR={selectedQR} />
          );
        case "analytics":
          return <Analytics />;
        case "settings":
          return <Settings />;
        default:
          return <p>No component found</p>;
      }
    }
  };

  const handleEnableAddMediaModal = () => {
    setEnableAddMediaModal(!enableAddMediaModal);
  };

  return (
    <div className={styles.listingDetail}>
      <div className={styles.leftPart}>
        <Header
          isBack
          isButton={activeTab.key === "media"}
          heading={"Listing Title"}
          buttonTitle={t(`${translationKey}.cta`)}
          onButtonClick={handleEnableAddMediaModal}
        />

        <RenderTab
          tabs={tabs}
          activeTab={activeTab.key}
          onClick={setActiveTab}
        />

        <Suspense fallback="loading...">{renderTabItem()}</Suspense>
      </div>

      <div className={styles.rightPart}>
        <Header
          heading={t(`${translationKey}.preview`)}
          style={{ borderBottom: "none" }}
        />

        <div className={styles.previewContainer}>
          {activeTab.key === "media" ? (
            <Image
              imageProps={{
                src: ASSET_PATHS.IMAGES.LANDING_VIEW_TIKTOK,
                className: styles.previewImage,
              }}
            />
          ) : null}
          {activeTab.key === "profile" ? (
            <Image
              imageProps={{
                src: ASSET_PATHS.IMAGES.PROFILE_PREVIEW,
                className: styles.previewImage,
              }}
            />
          ) : null}
          {["qr", "analytics", "settings"].includes(activeTab.key) ? (
            <div className={styles.qrCodePreview}>
              <CustomQRCode
                value={selectedQR.value}
                config={selectedQR.config}
                size={200}
              />
            </div>
          ) : null}
        </div>
      </div>

      {/* Modals */}
      {enableAddMediaModal && (
        <AddMediaModal
          isOpen={enableAddMediaModal}
          onClose={handleEnableAddMediaModal}
        />
      )}
    </div>
  );
};

export default ListingDetail;
