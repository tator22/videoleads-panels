import { CheckBox, Input, Label, Modal, Textarea } from "@repo/ui";
import { useTranslation } from "react-i18next";
import styles from "./style.module.css";

const AddNewListing = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  // Hooks
  const { t } = useTranslation();

  // Variables
  const translationKey = "PAGES.LISTING";

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={t(`${translationKey}.new_listing`)}
      primaryButtonText={t(`${translationKey}.modal_cta`)}
      primaryButtonProps={{ className: styles.primaryButton, onClick: onClose }}
    >
      <div className={styles.addListing}>
        <Input
          label={t(`${translationKey}.name`)}
          inputProps={{
            required: true,
            placeholder: t(`${translationKey}.enter_listing_name`),
          }}
        />
        <Textarea
          label={t(`${translationKey}.listing_details`)}
          placeholder={t(`${translationKey}.enter_listing_details`)}
        />

        <div className={styles?.listingUrl}>
          <Label text={t(`${translationKey}.listing_url`)} />
          <div className={styles?.input}>
            <Input
              inputProps={{
                required: true,
                placeholder: t(`${translationKey}.enter_listing_url`),
                value: "videoleads.com/",
                contentEditable: false,
                readOnly: true,
                className: styles?.prefix,
              }}
              containerProps={{
                className: styles?.prefixInput,
              }}
            />
            <Input
              inputProps={{
                required: true,
                placeholder: t(`${translationKey}.listing_url`),
              }}
            />
          </div>
        </div>

        {/* <div className={styles.listingType}>
          <Label text={t(`${translationKey}.listing_type`)} />
          
          <div className={styles.renderCheckbox}>
          <CheckBox
              inputProps={{
                checked: true,
                required: true,
              }}
              label={t(`${translationKey}.multiple_listing`)}
            />
            <CheckBox
              label={t(`${translationKey}.individual_listing`)}
              inputProps={{
                required: true,
              }}
            />
          </div>
        </div> */}
      </div>
    </Modal>
  );
};

export default AddNewListing;
