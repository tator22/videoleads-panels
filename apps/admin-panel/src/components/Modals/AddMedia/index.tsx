import { Modal, RenderTab, renderTabProps } from "@repo/ui";
import { Suspense, useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./style.module.css";
import Library from "./tabs/library";
import Upload from "./tabs/upload";

const AddMediaModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  // Hooks
  const { t } = useTranslation();

  // Variables
  const translationKey = "MODALS.ADD_MEDIA";
  const tabs: renderTabProps[] = [
    {
      label: t(`${translationKey}.upload`),
      key: "upload",
    },
    {
      label: t(`${translationKey}.select_from_library`),
      key: "select_from_library",
    },
  ];

  //  Local State
  const [activeTab, setActiveTab] = useState({
    label: "",
    key: "upload",
  });

  // Functions
  const renderTabItem = () => {
    if (activeTab) {
      switch (activeTab.key) {
        case "upload":
          return <Upload />;
        case "select_from_library":
          return <Library />;
        default:
          return <p>No component found</p>;
      }
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={t(`${translationKey}.title`)}
      contentContainerStyle={{
        padding: "0rem",
        paddingBottom: "3rem",
      }}
      primaryButtonText={
        activeTab.key === "select_from_library"
          ? t(`${translationKey}.primary_button_text`)
          : ""
      }
      primaryButtonProps={{
        className: styles.modalButton,
      }}
    >
      <div className={styles.addMedia}>
        <RenderTab
          tabs={tabs}
          activeTab={activeTab.key}
          onClick={setActiveTab}
        />

        <Suspense fallback="loading...">{renderTabItem()}</Suspense>
      </div>
    </Modal>
  );
};

export default AddMediaModal;
