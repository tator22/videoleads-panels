import TableAction from "@/components/TableAction";
import { Text } from "@repo/ui";
import { FC } from "react";
import styles from "./style.module.css";
import { TableColumnId } from "./tableColumn";
import StatusChip from "@/components/StatusChip";

interface RenderCellsUiProps {
  row: Record<string, any>;
  el: TableColumnId;
  deleteButtonLoading?: boolean;
  refreshPage?: () => void;
}

const RenderCellsUi: FC<RenderCellsUiProps> = ({ row, el }) => {
  // Table Columns
  // Member
  if (el === "member") {
    return (
      <td>
        <div className={styles.infoContainer}>
          <Text
            tag="h4"
            children={row?.name}
            containerProps={{ className: styles.title }}
          />
          <Text
            tag="p"
            children={row?.email}
            containerProps={{ className: styles.description }}
          />
        </div>
      </td>
    );
  }

  // Added on
  else if (el === "added_on") {
    return <td style={{ whiteSpace: "nowrap" }}>{row?.added_on}</td>;
  }

  // Role
  else if (el === "role") {
    return (
      <td style={{ whiteSpace: "nowrap" }}>
        {
          <StatusChip
            status={row?.role}
            style={{ textTransform: "uppercase" }}
          />
        }
      </td>
    );
  }

  // Action
  else if (el === "action") {
    return (
      <td>
        <TableAction />
      </td>
    );
  }

  // Default
  else {
    return <td>{el !== undefined && row?.[el] ? row?.[el] : "-"}</td>;
  }
};

export default RenderCellsUi;
