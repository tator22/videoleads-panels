import { ASSET_PATHS } from "@repo/assets";
import { Image, Text } from "@repo/ui";
import styles from "./style.module.css";

const MediaCardWithTag = ({
  thumbnail,
  tags,
  title,
}: {
  thumbnail: string;
  tags: string[];
  title: string;
}) => {
  return (
    <div className={styles.mediaCard}>
      <div className={styles.videoContainer}>
        <Image
          imageProps={{
            className: styles.thumbnail,
            src: thumbnail,
          }}
        />

        <Image
          containerProps={{
            className: styles.playIconContainer,
          }}
          imageProps={{
            src: ASSET_PATHS.SVGS.PLAY,
            className: styles.playIcon,
          }}
        />
      </div>

      <Text
        tag="h6"
        children={title}
        containerProps={{ className: styles.title }}
      />

      <div className={styles.renderTags}>
        {tags.map((item, index) => (
          <Text
            tag="p"
            children={item}
            key={index}
            containerProps={{
              className: styles.tag,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default MediaCardWithTag;
