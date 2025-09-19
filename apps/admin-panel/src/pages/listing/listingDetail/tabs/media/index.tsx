import RenderEngagement from "@/components/RenderEngagement";
import { ASSET_PATHS } from "@repo/assets";
import { Button, Image, Text } from "@repo/ui";
import { useTranslation } from "react-i18next";
import styles from "./style.module.css";

const Media = () => {
  // Hooks
  const { t } = useTranslation();

  // Variables
  const translationKey = "PAGES.LISTING_DETAIL";

  return (
    <div className={styles.mediaComponent}>
      <div className={styles.media}>
        {Array.from({ length: 5 }).map((_, index) => (
          <MediaCard key={index} />
        ))}
      </div>

      <div className={styles.mediaSectionFooter}>
        <Text
          tag="p"
          children={t(`${translationKey}.tab_to_edit_media`)}
          containerProps={{
            className: styles.mediaFooterText,
          }}
        />

        <div className={styles.moveIconReference}>
          <Text
            tag="p"
            children={t(`${translationKey}.drag`)}
            containerProps={{
              className: styles.mediaFooterText,
            }}
          />
          <Image
            containerProps={{
              className: styles.iconBox,
            }}
            imageProps={{
              src: ASSET_PATHS.SVGS.MOVE,
              className: styles.icon,
            }}
          />
          <Text
            tag="p"
            children={t(`${translationKey}.to_move`)}
            containerProps={{
              className: styles.mediaFooterText,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Media;

export const ActionIcon = ({ icon }: { icon: string }) => {
  return (
    <Image
      containerProps={{
        className: styles.actionIconContainer,
      }}
      imageProps={{
        src: icon,
        className: styles.actionIcon,
      }}
    />
  );
};

export const MediaCard = () => {
  // Hooks
  const { t } = useTranslation();

  // Variables
  const translationKey = "PAGES.LISTING_DETAIL";

  return (
    <div className={styles.mediaCard}>
      <div className={styles.moveIconAndCard}>
        <Image
          containerProps={{
            className: styles.moveIconContainer,
          }}
          imageProps={{
            src: ASSET_PATHS.SVGS.MOVE,
            className: styles.moveIcon,
          }}
        />
      </div>

      <div className={styles.mainCard}>
        <div className={styles.videoContainer}>
          <Image
            imageProps={{
              className: styles.thumbnail,
              src: "https://images.unsplash.com/photo-1745179177535-f83fb38821a2?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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

        <div className={styles.infoSection}>
          <div className={styles.textSection}>
            <div className={styles.text}>
              <Text
                tag="h6"
                children={"Fermentum Venenatis Tortor"}
                containerProps={{
                  className: styles.title,
                }}
                maximumNumberOfLines={1}
              />
              <Text
                tag="p"
                children={"Duis aute irure dolor in reprehenderit in voluptate"}
                containerProps={{
                  className: styles.description,
                }}
                maximumNumberOfLines={2}
              />
            </div>

            <div className={styles.actionContainer}>
              <ActionIcon icon={ASSET_PATHS.SVGS.ACTION_EDIT} />
              <ActionIcon icon={ASSET_PATHS.SVGS.ACTION_DELETE} />
            </div>
          </div>

          <div className={styles.engagementSection}>
            <RenderEngagement
              comments={2}
              likes={3}
              shares={4}
              engagementRowClassName={styles.engagementRowClass}
            />
            <RenderEngagement
              comments={2}
              likes={3}
              shares={4}
              engagementRowClassName={styles.engagementRowTwo}
            />
          </div>

          <div className={styles.smsSection}>
            <Text
              tag="h6"
              children={`${t(`${translationKey}.sms_message`)}:`}
              containerProps={{
                className: styles.messageHeading,
              }}
              maximumNumberOfLines={1}
            />
            <Text
              tag="p"
              children={"Duis aute irure dolor in reprehenderit in voluptate"}
              containerProps={{
                className: styles.message,
              }}
              maximumNumberOfLines={2}
            />
          </div>

          <Button
            variant="primary"
            text="Learn more"
            buttonProps={{
              className: styles.button,
            }}
          />
        </div>
      </div>
    </div>
  );
};
