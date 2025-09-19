import { getStatusColor } from "@repo/utilities";
import { CSSProperties } from "react";
import styles from "./style.module.css";

const StatusChip = ({
  status,
  style,
}: {
  status: string;
  style?: CSSProperties;
}) => {
  return (
    <div
      className={styles.statusChip}
      style={{
        ...style,
        color: `rgb(var(${getStatusColor(status)}))`,
        backgroundColor: `rgb(var(${getStatusColor(status)}), 0.12)`,
      }}
    >
      {status}
    </div>
  );
};

export default StatusChip;
