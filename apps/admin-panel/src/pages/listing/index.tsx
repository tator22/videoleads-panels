import Header from "@/components/Header";
import WalkthroughVideoButton from "@/components/WalkthroughVideoButton";
import { DataTable } from "@repo/ui";
import {
  CONSTANTS,
  generateRoutePath,
  LISTING_DUMMY_DATA,
} from "@repo/utilities";
import { FC, ReactNode, useState } from "react";
import { useTranslation } from "react-i18next";
import AddNewListing from "./addNewListing";
import RenderCellsUi from "./renderCellUi";
import styles from "./style.module.css";
import { TableColumn } from "./tableColumn";
import { useNavigate } from "react-router";

export const Listing: FC = (): JSX.Element => {
  // Hooks
  const { t } = useTranslation();
  const navigate = useNavigate();

  // Variables
  const translationKey = "PAGES.LISTING";
  const showData = TableColumn.map((el) => el.id);

  // Local State
  const [enableAddListingModal, setEnableAddListingModal] = useState(false);

  // Functions
  const handleEnableAddListingModal = () => {
    setEnableAddListingModal(!enableAddListingModal);
  };

  const handleRowClick = () => {
    navigate(
      generateRoutePath({
        url: CONSTANTS.PATHS.LISTING_DETAIL,
        params: {
          id: String(1),
        },
      })
    );
  };

  return (
    <div className={styles.code}>
      <Header
        heading={t(`${translationKey}.heading`)}
        isButton
        buttonTitle={t(`${translationKey}.new_cta`)}
        onButtonClick={handleEnableAddListingModal}
        rightChildren={
          <WalkthroughVideoButton text={t(`${translationKey}.cta`)} />
        }
      />

      <DataTable
        headCells={TableColumn as any}
        rows={LISTING_DUMMY_DATA as []}
        onClickRow={handleRowClick}
        render={(row: any): ReactNode =>
          showData?.map((el, index) => (
            <RenderCellsUi key={`listing-${index}`} row={row} el={el} />
          ))
        }
      />

      {/* Modal */}
      {enableAddListingModal && (
        <AddNewListing
          isOpen={enableAddListingModal}
          onClose={handleEnableAddListingModal}
        />
      )}
    </div>
  );
};
