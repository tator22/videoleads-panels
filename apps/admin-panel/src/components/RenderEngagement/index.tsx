import { ASSET_PATHS } from "@repo/assets";
import { Image, Text } from "@repo/ui";
import { CSSProperties } from "react";
import styles from "./style.module.css";
import clsx from "clsx";

const RenderEngagement = ({
  likes,
  comments,
  shares,
  engagementRowStyle,
  engagementRowClassName,
  className,
}: {
  likes: number;
  comments: number;
  shares: number;
  engagementRowStyle?: CSSProperties;
  engagementRowClassName?: string;
  className?: string;
}) => {
  const renderEngagementData = [
    {
      count: likes,
      icon: ASSET_PATHS.SVGS.LIKE,
    },
    {
      count: comments,
      icon: ASSET_PATHS.SVGS.COMMENT,
    },
    {
      count: shares,
      icon: ASSET_PATHS.SVGS.SHARE,
    },
  ];
  return (
    <div className={clsx(styles.renderEngagement, className)}>
      {renderEngagementData.map((item, index) => (
        <EngagementRow
          key={index}
          icon={item.icon}
          count={item.count}
          style={engagementRowStyle}
          className={engagementRowClassName}
        />
      ))}
    </div>
  );
};

export default RenderEngagement;

export const EngagementRow = ({
  icon,
  count,
  style,
  className,
}: {
  icon: string;
  count: string | number;
  style?: CSSProperties;
  className?: string;
}) => {
  return (
    <div className={clsx(styles.engagementRow, className)} style={{ ...style }}>
      <Image
        containerProps={{
          className: styles.iconBox,
        }}
        imageProps={{
          src: icon,
          className: styles.icon,
        }}
      />
      <Text
        children={count}
        containerProps={{
          className: styles.count,
        }}
      />
    </div>
  );
};
