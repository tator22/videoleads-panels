import Header from "@/components/Header";
import WalkthroughVideoButton from "@/components/WalkthroughVideoButton";
import { DataTable } from "@repo/ui";
import { TEAM_MEMBER_DATA } from "@repo/utilities";
import { FC, ReactNode } from "react";
import { useTranslation } from "react-i18next";
import RenderCellsUi from "./renderCellUi";
import styles from "./style.module.css";
import { TableColumn } from "./tableColumn";

export const TeamMembers: FC = (): JSX.Element => {
  // Hooks
  const { t } = useTranslation();

  // Variables
  const translationKey = "PAGES.TEAM_MEMBERS";
  const showData = TableColumn.map((el) => el.id);

  return (
    <div className={styles.code}>
      <Header
        heading={t(`${translationKey}.heading`)}
        isButton
        buttonTitle={t(`${translationKey}.new_cta`)}
        rightChildren={
          <WalkthroughVideoButton text={t(`${translationKey}.cta`)} />
        }
      />

      <DataTable
        headCells={TableColumn as any}
        rows={TEAM_MEMBER_DATA as []}
        render={(row: any): ReactNode =>
          showData?.map((el, index) => (
            <RenderCellsUi key={`listing-${index}`} row={row} el={el} />
          ))
        }
      />
    </div>
  );
};
