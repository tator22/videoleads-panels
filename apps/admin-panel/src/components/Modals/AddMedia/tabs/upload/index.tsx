import { ASSET_PATHS } from "@repo/assets";
import {
  Button,
  Image,
  Input,
  Label,
  Separator,
  Text,
  Textarea,
} from "@repo/ui";
import { HTMLAttributes, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./style.module.css";

const Upload = () => {
  // Hooks
  const { t } = useTranslation();
  const inputRef = useRef<HTMLInputElement>(null);

  // Variables
  const translationKey = "MODALS.ADD_MEDIA";
  const colors = [
    {
      color: "#FFFFFF",
      background: "#0088FF",
    },
    {
      color: "#FFFFFF",
      background: "#FF383C",
    },
    {
      color: "#FFFFFF",
      background: "#FF8D28",
    },
    {
      color: "#FFFFFF",
      background: "#34C759",
    },
    {
      color: "#FFFFFF",
      background: "#FFCC00",
    },
    {
      color: "#FFFFFF",
      background: "#CB30E0",
    },
    {
      color: "#000000",
      background: "#FFFFFF",
    },
    {
      color: "#FFFFFF",
      background: "#000000",
    },
  ];

  // Local State
  const [selectedMedia, setSelectedMedia] = useState<File | null>(null);

  // Functions
  const handleMediaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedMedia(file);
    }
  };

  return (
    <>
      {selectedMedia ? (
        <div className={styles.mediaForm}>
          <section className={styles.form}>
            <Input
              label={t(`${translationKey}.input_title`)}
              inputProps={{
                placeholder: t(`${translationKey}.input_title`),
                required: true,
              }}
            />
            <Textarea
              label={t(`${translationKey}.caption`)}
              placeholder={t(`${translationKey}.write_your_caption`)}
            />

            <div className={styles.vanityGroup}>
              <Label text={t(`${translationKey}.vanity_metrics`)} />

              <div className={styles.vanityInputGroup}>
                <VanityInput type="LIKE" />
                <VanityInput type="SHARE" />
                <VanityInput type="COMMENT" />
              </div>
            </div>
            <Textarea
              label={t(`${translationKey}.sms_message`)}
              placeholder={t(`${translationKey}.write_your_message`)}
              isSwitch
              switchInputProps={{
                checked: true,
              }}
            />
            <Separator />
            <Input
              label={t(`${translationKey}.call_to_action_button_text`)}
              inputProps={{
                placeholder: t(`${translationKey}.enter_the_text_for_cta`),
                required: true,
              }}
            />
            <Input
              label={t(`${translationKey}.call_to_action_button_url`)}
              inputProps={{
                placeholder: t(`${translationKey}.enter_cta_url`),
                required: true,
              }}
            />

            <div className={styles.actionButtonColorGroup}>
              <Label
                text={t(`${translationKey}.call_to_action_button_color`)}
              />
              <div className={styles.buttonGroup}>
                {colors.map((color, index) => {
                  return (
                    <Button
                      key={index}
                      text={t(`${translationKey}.call_to_action`)}
                      size="small"
                      buttonProps={{
                        style: {
                          backgroundColor: color.background,
                          color: color.color,
                          borderRadius: "0.8rem",
                          border: "0.1rem solid #8d99ae20",
                        },
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </section>

          <Separator
            direction="vertical"
            containerProps={{
              style: {
                marginInline: "2rem",
              },
            }}
          />

          <section className={styles.mediaPreview}>
            <Label text={t(`${translationKey}.preview`)} />

            <div
              className={styles.videoContainer}
              onClick={() =>
                window.open(URL.createObjectURL(selectedMedia), "_blank")
              }
            >
              <video
                src={URL.createObjectURL(selectedMedia)}
                className={styles.video}
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
          </section>
        </div>
      ) : (
        <div className={styles.upload}>
          <Image
            imageProps={{
              src: ASSET_PATHS.SVGS.UPLOAD,
              className: styles.uploadIcon,
            }}
          />

          <div className={styles.uploadGroup}>
            <Text
              tag="h6"
              children={t(`${translationKey}.upload_heading`)}
              containerProps={{ className: styles.uploadHeading }}
            />
            <Text
              tag="p"
              children={t(`${translationKey}.upload_description`)}
              containerProps={{ className: styles.uploadDescription }}
            />
          </div>

          <input
            type="file"
            style={{ display: "none" }}
            id="media-file"
            aria-label="input"
            ref={inputRef}
            accept="video/*"
            onChange={handleMediaChange}
          />
          <Button
            text={t(`${translationKey}.cta`)}
            size="medium"
            buttonProps={{
              onClick: () => inputRef.current?.click(),
              style: {
                borderRadius: "1rem",
              },
            }}
          />
        </div>
      )}
    </>
  );
};

export default Upload;

type VanityInputProps = HTMLAttributes<HTMLInputElement> & {
  type: "LIKE" | "SHARE" | "COMMENT";
};

export const VanityInput = ({ type, ...props }: VanityInputProps) => {
  return (
    <div className={styles.iconAndInput}>
      <Image
        containerProps={{
          className: styles.iconContainer,
        }}
        imageProps={{
          src: ASSET_PATHS.SVGS[type],
          className: styles.icon,
        }}
      />
      <input
        type="number"
        placeholder="00"
        className={styles.vanityInput}
        {...props}
      />
    </div>
  );
};
