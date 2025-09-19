import clsx from "clsx";
import type { FC, JSX } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import styles from "./style.module.css";
import { Text, Image, Button } from "@repo/ui";
import { ASSET_PATHS } from "@repo/assets";
import { CONSTANTS } from "@repo/utilities";

const Error: FC<{ error?: string }> = ({ error }): JSX.Element => {
  // Hooks
  const { t } = useTranslation();
  const navigate = useNavigate();

  // Variables
  const translationKey = "PAGES.ERROR";

  return (
    <div className={clsx(styles?.Error, "wrapper_padding")}>
      <Image
        imageProps={{
          src: ASSET_PATHS?.IMAGES?.ERROR_404,
        }}
        containerProps={{
          className: styles?.imageContainer,
        }}
      />
      <Text
        tag="h1"
        children={t(`${translationKey}.heading`)}
        containerProps={{ className: styles?.heading }}
      />
      <Text
        children={t(`${translationKey}.description`)}
        containerProps={{
          style: {
            marginBottom: error ? "2rem" : "5rem",
          },
        }}
      />
      {error ? (
        <Text
          tag="p"
          children={t(`${translationKey}.error`) + ` ${error}`}
          containerProps={{
            className: styles?.error,
            style: {
              marginBottom: "5rem",
            },
          }}
          maximumNumberOfLines={5}
        />
      ) : null}
      <Button
        text={t(`${translationKey}.cta`)}
        buttonProps={{
          onClick: () => navigate(CONSTANTS?.PATHS?.ROOT),
        }}
      />
    </div>
  );
};

export default Error;
