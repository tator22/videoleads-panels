import { FC, MouseEventHandler } from "react";
import { useTranslation } from "react-i18next";
import styles from "./style.module.css";
import { Image, Text } from "@repo/ui";
import { ASSET_PATHS } from "@repo/assets";

const ChooseAccountType: FC<{
  onClick: MouseEventHandler;
}> = ({ onClick }): JSX.Element => {
  // Hooks
  const { t } = useTranslation();

  // Variables
  const translationKey = "PAGES.AUTHENTICATION.CHOOSE_ACCOUNT_TYPE";

  return (
    <div className={styles?.ChooseAccountType}>
      <AccountTypeCard
        icon={ASSET_PATHS.SVGS.INDIVIDUAL}
        label={t(`${translationKey}.cta_individual`)}
        onClick={onClick}
      />
      <AccountTypeCard
        icon={ASSET_PATHS.SVGS.COMPANY}
        label={t(`${translationKey}.cta_company`)}
        onClick={onClick}
      />
    </div>
  );
};

export default ChooseAccountType;

const AccountTypeCard = ({
  icon,
  label,
  onClick,
}: {
  icon: string;
  label: string;
  onClick?: MouseEventHandler;
}) => {
  return (
    <div className={styles.accountTypeCard} onClick={onClick}>
      <div className={styles.iconAndName}>
        <Image
          containerProps={{
            className: styles.iconContainer,
          }}
          imageProps={{
            src: icon,
            className: styles.icon,
          }}
        />
        <Text
          tag="h6"
          children={label}
          containerProps={{
            className: styles.label,
          }}
        />
      </div>

      <Image
        containerProps={{
          className: styles.arrowContainer,
        }}
        imageProps={{
          src: ASSET_PATHS.SVGS.ANGLE_RIGHT_WITHOUT_ROUND,
          className: styles.arrow,
        }}
      />
    </div>
  );
};
