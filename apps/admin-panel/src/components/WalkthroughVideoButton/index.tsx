import { Button, Image } from "@repo/ui";
import { ASSET_PATHS } from "@repo/assets";
import styles from "./style.module.css";

const WalkthroughVideoButton = ({ text }: { text: string }) => {
  return (
    <Button
      size="medium"
      text={text}
      buttonProps={{
        className: styles.walkthroughVideoButton,
        style: {
          color: "rgb(var(--black), 0.8)",
        },
      }}
      leftNode={
        <Image
          imageProps={{
            src: ASSET_PATHS.SVGS.PLAY,
          }}
        />
      }
      variant="tertiary"
    />
  );
};

export default WalkthroughVideoButton;
