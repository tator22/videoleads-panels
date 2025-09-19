import { Input, Modal, Textarea } from "@repo/ui";
import { useTranslation } from "react-i18next";
import styles from "./style.module.css";

const EditProfileModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  // Hooks
  const { t } = useTranslation();

  // Variables
  const translationKey = "MODALS.EDIT_PROFILE_MODAL";

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={t(`${translationKey}.title`)}
      primaryButtonText={t(`${translationKey}.save`)}
      primaryButtonProps={{
        className: styles.saveButton,
      }}
    >
      <div className={styles.form}>
        <Input
          label={t(`${translationKey}.name`)}
          inputProps={{
            required: true,
            placeholder: t(`${translationKey}.enter_name`),
          }}
        />

        <Textarea
          label={t(`${translationKey}.bio`)}
          placeholder={t(`${translationKey}.enter_bio`)}
        />
      </div>
    </Modal>
  );
};

export default EditProfileModal;
