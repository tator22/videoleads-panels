import RenderEngagement from "@/components/RenderEngagement";
import TableAction from "@/components/TableAction";
import { Text } from "@repo/ui";
import { FC } from "react";
import styles from "./style.module.css";
import { TableColumnId } from "./tableColumn";

interface RenderCellsUiProps {
  row: Record<string, any>;
  el: TableColumnId;
  deleteButtonLoading?: boolean;
  refreshPage?: () => void;
}

const RenderCellsUi: FC<RenderCellsUiProps> = ({ row, el }) => {
  // Table Columns
  // ID
  if (el === "listing") {
    return (
      <td>
        <div className={styles.infoContainer}>
          <Text
            tag="h4"
            children={row?.title}
            containerProps={{ className: styles.title }}
          />
          <Text
            tag="p"
            children={row?.description}
            containerProps={{ className: styles.description }}
          />
        </div>
      </td>
    );
  }

  // Created
  else if (el === "created") {
    return <td style={{ whiteSpace: "nowrap" }}>{row?.created}</td>;
  }

  // Created
  else if (el === "creator") {
    return <td style={{ whiteSpace: "nowrap" }}>{row?.creator}</td>;
  }

  // Engagement
  else if (el === "engagement") {
    return (
      <td>
        <RenderEngagement
          comments={row?.comments}
          likes={row?.likes}
          shares={row?.shares}
        />
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
