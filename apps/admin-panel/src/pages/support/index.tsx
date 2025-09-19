import Header from "@/components/Header";
import { ASSET_PATHS } from "@repo/assets";
import { Image, Text } from "@repo/ui";
import { useTranslation } from "react-i18next";
import styles from "./style.module.css";
import clsx from "clsx";
import { DUMMY_SUPPORT_CHATS } from "@repo/utilities";

const Support = () => {
  // Hooks
  const { t } = useTranslation();

  // Variables
  const translationKey = "PAGES.SUPPORT";

  return (
    <div className={styles.support}>
      <Header heading={t(`${translationKey}.heading`)} />

      <section className={styles.chatSection}>
        <div className={styles.chatBox}>
          <div className={styles.renderChats}>
            {DUMMY_SUPPORT_CHATS.map((item, index) => (
              <MessageBox key={`message-${index}`} {...item} />
            ))}
          </div>

          <section className={styles.chatFooter}>
            <MessageInput />
          </section>
        </div>
      </section>
    </div>
  );
};

export default Support;

const MessageInput = () => {
  return (
    <div className={styles.inputAndIcon}>
      <input
        type="text"
        placeholder="Write a message..."
        className={styles.messageInput}
      />
      <Image
        containerProps={{
          className: styles.messageSendIconContainer,
        }}
        imageProps={{
          src: ASSET_PATHS.SVGS.MESSAGE_SEND,
          alt: "message send icon",
          className: styles.messageSendIcon,
        }}
      />
    </div>
  );
};

const MessageBox = ({
  name,
  message,
  time,
  isSender,
}: {
  name: string;
  message: string;
  time: string;
  isSender: boolean;
}) => {
  return (
    <div
      className={clsx(styles.messageBox, isSender && styles.messageBoxSender)}
    >
      <Image
        containerProps={{
          className: styles.profilePhoto,
        }}
        imageProps={{
          src: ASSET_PATHS.IMAGES.DUMMY_PROFILE_PHOTO,
          alt: "profile photo",
          className: styles.profilePhoto,
        }}
      />
      <div className={styles.nameAndMessage}>
        <div className={styles.nameAndTime}>
          <Text
            tag="p"
            containerProps={{
              className: styles.name,
            }}
          >
            {isSender ? "You" : name}
          </Text>
          <Text
            tag="p"
            containerProps={{
              className: styles.time,
            }}
          >
            {time}
          </Text>
        </div>
        <Text tag="h6" containerProps={{ className: styles.message }}>
          {message}
        </Text>
      </div>
    </div>
  );
};
