import { useTranslation } from "react-i18next";
import styles from "./style.module.css";
import { Text } from "@repo/ui";
import { scanData } from "@repo/utilities";

const Analytics = () => {
  // Hooks
  const { t } = useTranslation();

  // Variables
  const translationKey = "PAGES.ANALYTICS";

  return (
    <div className={styles.analytics}>
      <Text
        tag="h6"
        children={t(`${translationKey}.code_scans`)}
        containerProps={{
          className: styles.heading,
        }}
      />

      <div className={styles.renderCards}>
        {scanData.map((item, index) => {
          return (
            <AnalyticCard time={item.title} scans={item.value} key={index} />
          );
        })}
      </div>
    </div>
  );
};

export default Analytics;

export const AnalyticCard = ({
  time,
  scans,
}: {
  time: string;
  scans: number;
}) => {
  return (
    <div className={styles.analyticsCard}>
      <Text
        tag="p"
        children={time}
        containerProps={{
          className: styles.time,
        }}
      />

      <div className={styles.scanAndText}>
        <Text
          tag="h4"
          children={scans}
          containerProps={{
            className: styles.scans,
          }}
        />
        <Text
          tag="p"
          children={"Scans"}
          containerProps={{
            className: styles.scansText,
          }}
        />
      </div>
    </div>
  );
};
