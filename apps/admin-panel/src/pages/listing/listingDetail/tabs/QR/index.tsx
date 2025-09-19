import { CustomQRCode } from "@/components/CustomQRCode";
import {
  FlipDirection,
  FrameShapeType,
  QRDataType,
} from "@/components/CustomQRCode/types";
import { ASSET_PATHS } from "@repo/assets";
import { Button, Image, Separator, Text } from "@repo/ui";
import { CONSTANTS } from "@repo/utilities";
import clsx from "clsx";
import { Dispatch, ReactNode, SetStateAction, useRef } from "react";
import { useTranslation } from "react-i18next";
import styles from "./style.module.css";

export interface QRShapeElementType {
  name: FrameShapeType;
  icon: string;
  frameFlips: {
    topLeft: FlipDirection[];
    topRight: FlipDirection[];
    bottomLeft: FlipDirection[];
  };
  ballFlips: {
    topLeft: FlipDirection[];
    topRight: FlipDirection[];
    bottomLeft: FlipDirection[];
  };
}

const DummyData: QRDataType[] = [
  {
    value: "www.first.com",
    config: {
      body: "body1",
      frame: "frame1",
      ball: "ball1",
      bodyColor: "#000000",
      bgColor: "#FFFFFF",
      gradientColor1: "",
      gradientColor2: "",
      gradientType: "linear",
      gradientOnEyes: "true",
      logo: "",
      logoMode: "default",
      frameColors: {
        topLeft: "#000000",
        topRight: "#000000",
        bottomLeft: "#000000",
      },
      ballColors: {
        topLeft: "#000000",
        topRight: "#000000",
        bottomLeft: "#000000",
      },
      frameFlips: {
        topLeft: [],
        topRight: [],
        bottomLeft: [],
      },
      ballFlips: {
        topLeft: [],
        topRight: [],
        bottomLeft: [],
      },
      background: {
        type: "none",
        qrSizeScale: 1,
      },
    },
  },
  {
    value: "www.second.com",
    config: {
      body: "body2",
      frame: "frame12",
      ball: "ball8",
      bodyColor: "#5DFF87",
      bgColor: "#010DFF",
      gradientColor1: "",
      gradientColor2: "",
      gradientType: "linear",
      gradientOnEyes: "true",
      logo: "",
      logoMode: "default",
      frameColors: {
        topLeft: "#5DFF87",
        topRight: "#5DFF87",
        bottomLeft: "#5DFF87",
      },
      ballColors: {
        topLeft: "#5DFF87",
        topRight: "#5DFF87",
        bottomLeft: "#5DFF87",
      },
      frameFlips: {
        topLeft: [],
        topRight: ["horizontal"],
        bottomLeft: ["vertical"],
      },
      ballFlips: {
        topLeft: [],
        topRight: ["horizontal"],
        bottomLeft: ["vertical"],
      },
      background: {
        type: "circleSmoothLineShape",
        fill: "#5DFF87",
        backgroundColor: "#010DFF",
        qrSizeScale: 0.68,
      },
    },
  },
  {
    value: "www.third.com",
    config: {
      body: "body4",
      frame: "frame2",
      ball: "ball2",
      bodyColor: "#A26CFE",
      bgColor: "#FFFFFF",
      gradientColor1: "",
      gradientColor2: "",
      gradientType: "linear",
      gradientOnEyes: "true",
      logo: "",
      logoMode: "default",
      frameColors: {
        topLeft: "#A26CFE",
        topRight: "#A26CFE",
        bottomLeft: "#A26CFE",
      },
      ballColors: {
        topLeft: "#A26CFE",
        topRight: "#A26CFE",
        bottomLeft: "#A26CFE",
      },
      frameFlips: {
        topLeft: [],
        topRight: ["horizontal"],
        bottomLeft: ["vertical"],
      },
      ballFlips: {
        topLeft: [],
        topRight: ["horizontal"],
        bottomLeft: ["vertical"],
      },
      background: {
        type: "circleCut",
        fill: "#A26CFE",
        qrSizeScale: 0.68,
      },
    },
  },
  {
    value: "www.fourth.com",
    config: {
      body: "body4",
      frame: "frame2",
      ball: "ball8",
      bodyColor: "#05976A",
      bgColor: "#FFFFFF",
      gradientColor1: "",
      gradientColor2: "",
      gradientType: "linear",
      gradientOnEyes: "true",
      logo: "",
      logoMode: "default",
      frameColors: {
        topLeft: "#05976A",
        topRight: "#05976A",
        bottomLeft: "#05976A",
      },
      ballColors: {
        topLeft: "#05976A",
        topRight: "#05976A",
        bottomLeft: "#05976A",
      },
      frameFlips: {
        topLeft: [],
        topRight: ["horizontal"],
        bottomLeft: ["vertical"],
      },
      ballFlips: {
        topLeft: [],
        topRight: ["horizontal"],
        bottomLeft: ["vertical"],
      },
      background: {
        type: "none",
        qrSizeScale: 1,
      },
      border: {
        isBorder: true,
        borderColor: "#20614D",
        borderWidthMultiplier: 3,
      },
    },
  },
  {
    value: "www.fifth.com",
    config: {
      body: "body2",
      frame: "frame2",
      ball: "ball2",
      bodyColor: "#FF6163",
      bgColor: "#E6F8FC",
      gradientColor1: "",
      gradientColor2: "",
      gradientType: "linear",
      gradientOnEyes: "true",
      logo: "",
      logoMode: "default",
      frameColors: {
        topLeft: "#FF6163",
        topRight: "#FF6163",
        bottomLeft: "#FF6163",
      },
      ballColors: {
        topLeft: "#FF6163",
        topRight: "#FF6163",
        bottomLeft: "#FF6163",
      },
      frameFlips: {
        topLeft: [],
        topRight: ["horizontal"],
        bottomLeft: ["vertical"],
      },
      ballFlips: {
        topLeft: [],
        topRight: ["horizontal"],
        bottomLeft: ["vertical"],
      },
      background: {
        type: "circleLineShape",
        backgroundColor: "#E6F8FC",
        fill: "#FF6163",
        qrSizeScale: 0.68,
      },
    },
  },
  {
    value: "www.sixth.com",
    config: {
      body: "body2",
      frame: "TFrame6",
      ball: "ball7",
      bodyColor: "#05427F",
      bgColor: "#ffffff",
      gradientColor1: "",
      gradientColor2: "",
      gradientType: "linear",
      gradientOnEyes: "true",
      logo: "",
      logoMode: "default",
      frameColors: {
        topLeft: "#05427F",
        topRight: "#05427F",
        bottomLeft: "#05427F",
      },
      ballColors: {
        topLeft: "#F4650D",
        topRight: "#F4650D",
        bottomLeft: "#F4650D",
      },
      frameFlips: {
        topLeft: [],
        topRight: ["horizontal"],
        bottomLeft: ["vertical"],
      },
      ballFlips: {
        topLeft: [],
        topRight: ["horizontal"],
        bottomLeft: ["vertical"],
      },
      background: {
        type: "squareShape",
        qrSizeScale: 0.9,
      },
    },
  },
];

const QRCode = ({
  setSelectedQR,
  selectedQR,
}: {
  setSelectedQR: Dispatch<SetStateAction<QRDataType>>;
  selectedQR: QRDataType;
}) => {
  // Hooks
  const { t } = useTranslation();
  const uploadInputRef = useRef<HTMLInputElement | null>(null);

  // Variables
  const translationKey = "PAGES.QR";

  // Functions
  const handleShapeClick = (
    targetElement: "frame" | "ball" | "body",
    element: QRShapeElementType
  ) => {
    setSelectedQR((prev) => ({
      ...prev,
      config: {
        ...prev.config,
        [targetElement]: element.name,
        frameFlips:
          targetElement === "frame"
            ? element.frameFlips
            : prev.config.frameFlips,
        ballFlips:
          targetElement === "ball" ? element.ballFlips : prev.config.ballFlips,
      },
    }));
  };

  return (
    <div className={styles.qrSectionRender}>
      <QrCodeSectionWrapper title={t(`${translationKey}.templates`)}>
        <div className={styles.renderCodes}>
          {DummyData.map((el, index) => {
            return (
              <div
                className={clsx(
                  styles.qrCodeBox,
                  selectedQR.value === el.value && styles.active
                )}
                onClick={() => setSelectedQR(el)}
              >
                <CustomQRCode
                  value={el.value}
                  config={el.config}
                  key={index}
                  size={80}
                />
              </div>
            );
          })}
        </div>
      </QrCodeSectionWrapper>
      <Separator />
      <QrCodeSectionWrapper title={t(`${translationKey}.frame_shapes`)}>
        <div className={styles.renderBodyShapes}>
          {CONSTANTS.QR_FRAME_SHAPES.map((el: any, index) => {
            return (
              <Image
                key={`${el.name}-${index}`}
                containerProps={{
                  onClick: () => handleShapeClick("frame", el),
                  className: clsx(
                    styles.qrShapeContainer,
                    selectedQR.config.frame === el.name && styles.shapeActive
                  ),
                }}
                imageProps={{
                  src: el.icon,
                  alt: el.name,
                  className: styles.qrShapeIcon,
                }}
              />
            );
          })}
        </div>
      </QrCodeSectionWrapper>
      <Separator />
      <QrCodeSectionWrapper title={t(`${translationKey}.ball_shapes`)}>
        <div className={styles.renderBodyShapes}>
          {CONSTANTS.QR_BALL_SHAPES.map((el: any, index) => {
            return (
              <Image
                key={`${el.name}-${index}`}
                containerProps={{
                  onClick: () => handleShapeClick("ball", el),
                  className: clsx(
                    styles.qrShapeContainer,
                    selectedQR.config.ball === el.name && styles.shapeActive
                  ),
                }}
                imageProps={{
                  src: el.icon,
                  alt: el.name,
                  className: styles.qrShapeIcon,
                }}
              />
            );
          })}
        </div>
      </QrCodeSectionWrapper>
      <Separator />
      <QrCodeSectionWrapper title={t(`${translationKey}.body_shapes`)}>
        <div className={styles.renderBodyShapes}>
          {CONSTANTS.QR_BODY_SHAPES.map((el: any, index) => {
            return (
              <Image
                key={`${el.name}-${index}`}
                containerProps={{
                  onClick: () => handleShapeClick("body", el),
                  className: clsx(
                    styles.qrShapeContainer,
                    selectedQR.config.body === el.name && styles.shapeActive
                  ),
                }}
                imageProps={{
                  src: el.icon,
                  alt: el.name,
                  className: styles.qrShapeIcon,
                }}
              />
            );
          })}
        </div>
      </QrCodeSectionWrapper>
      <Separator />
      <QrCodeSectionWrapper title={t(`${translationKey}.color`)}>
        <div className={styles.renderColors}>
          {CONSTANTS.COLORS.map((item: string, index) => {
            return (
              <div
                key={`color-${index}`}
                className={styles.colorBox}
                style={{
                  backgroundColor: item,
                }}
                onClick={() =>
                  setSelectedQR((prev) => ({
                    ...prev,
                    config: {
                      ...prev.config,
                      bodyColor: item,
                      ballColors: {
                        bottomLeft: item,
                        topLeft: item,
                        topRight: item,
                      },
                      frameColors: {
                        bottomLeft: item,
                        topLeft: item,
                        topRight: item,
                      },
                    },
                  }))
                }
              />
            );
          })}
          <Image
            containerProps={{
              className: styles.colorPickerIconBox,
            }}
            imageProps={{
              src: ASSET_PATHS.SVGS.PLUS,
              className: styles.colorPickerIcon,
            }}
          />
        </div>
      </QrCodeSectionWrapper>
      <Separator />
      <QrCodeSectionWrapper title={t(`${translationKey}.logo`)}>
        <div className={styles.inputBox}>
          <input
            readOnly
            placeholder={t(`${translationKey}.select_logo_image`)}
            className={styles.fileInput}
            onClick={() => uploadInputRef.current?.click()}
          />
          <input
            type="file"
            style={{ display: "none" }}
            id="media-file"
            aria-label="input"
            accept="image/png, image/jpeg"
            ref={uploadInputRef}
            onChange={(event) => {
              const file = event.target.files && event.target.files[0];
              setSelectedQR((prev) => ({
                ...prev,
                config: {
                  ...prev.config,
                  logo: URL.createObjectURL(file as File),
                },
              }));
            }}
          />
          <Button
            size="medium"
            text={t(`${translationKey}.upload`)}
            variant="secondary"
            buttonProps={{
              className: styles.uploadButton,
              onClick: () => uploadInputRef.current?.click(),
            }}
          />
        </div>
      </QrCodeSectionWrapper>
      <Separator
        containerProps={{
          style: {
            marginBottom: "2rem",
          },
        }}
      />
    </div>
  );
};

export default QRCode;

const QrCodeSectionWrapper = ({
  title,
  children,
}: {
  title: string;
  children?: ReactNode;
}) => {
  return (
    <section className={styles.qrCodeSection}>
      <Text
        tag="h6"
        containerProps={{
          className: styles.qrCodeSectionTitle,
        }}
      >
        {title}
      </Text>
      {children}
    </section>
  );
};
