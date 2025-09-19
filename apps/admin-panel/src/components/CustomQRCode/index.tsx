import React from "react";
import { backgrounds } from "./shapes/backgroundShapes";
import { ballShapes } from "./shapes/ballShapes";
import { bodyShapes } from "./shapes/bodyShapes";
import { frameShapes } from "./shapes/frameShapes";
import styles from "./style.module.css";
import { QRMonkeyConfig } from "./types";
import { generateMatrix } from "./utils/generateMatrix";
import { GradientDefs } from "./utils/gradientDefs";
import { finderSize, finderZoneType } from "./utils/isFinder";
import { LogoRenderer } from "./utils/logoRenderer";
import { getColor, getFlipDirections } from "./utils/qrRelatedFunctions";

interface CustomQRCodeProps {
  value: string;
  size?: number;
  config: QRMonkeyConfig;
}

export const CustomQRCode: React.FC<CustomQRCodeProps> = ({
  value,
  size = 100,
  config,
}) => {
  const qrSizeScale = config.background.qrSizeScale;
  const qrSize = size * qrSizeScale;
  const { modules, count } = generateMatrix(value, "H");
  const cellSize = qrSize / count;

  // Fill colors
  const bodyFill =
    config.gradientColor1 && config.gradientColor2
      ? "url(#bodyGradient)"
      : config.bodyColor;

  const eyeFill = (eyeColor: string) =>
    config.gradientColor1 &&
    config.gradientColor2 &&
    config.gradientOnEyes === "true"
      ? "url(#eyeGradient)"
      : eyeColor;

  const ballFill = (ballColor: string) =>
    config.gradientColor1 &&
    config.gradientColor2 &&
    config.gradientOnEyes === "true"
      ? "url(#eyeGradient)"
      : ballColor;

  // Finder positions (3 corners)
  const finderPositions = [
    { row: 0, col: 0, position: "topLeft" },
    { row: 0, col: count - finderSize, position: "topRight" },
    { row: count - finderSize, col: 0, position: "bottomLeft" },
  ];

  return (
    <div
      className={styles.renderQrCodeBody}
      style={{
        width: size,
        minWidth: size,
        maxWidth: size,
        height: size,
        minHeight: size,
        maxHeight: size,
      }}
    >
      {/* Render Background */}
      {qrSizeScale === 1
        ? null
        : backgrounds[config.background.type](
            String(config.background.fill),
            String(config.background.backgroundColor)
          )}

      <div className={styles.qrContainer}>
        <svg
          width={qrSize}
          height={qrSize}
          viewBox={`0 0 ${qrSize} ${qrSize}`}
          xmlns="http://www.w3.org/2000/svg"
          shapeRendering="geometricPrecision"
          style={{
            backgroundColor: config.bgColor,
            borderColor: config.border?.borderColor,
            borderWidth: config?.border?.borderWidthMultiplier
              ? `${size * (config?.border?.borderWidthMultiplier / 100)}px`
              : "0.25rem",
            borderStyle: config.border?.isBorder ? "solid" : "none",
          }}
          className={styles.qrCodeContainer}
        >
          {/* Gradients */}
          <GradientDefs
            gradients={[
              ...(config.gradientColor1 && config.gradientColor2
                ? [
                    {
                      id: "bodyGradient",
                      color1: config.gradientColor1,
                      color2: config.gradientColor2,
                      type: config.gradientType,
                    },
                  ]
                : []),
              ...(config.gradientColor1 &&
              config.gradientColor2 &&
              config.gradientOnEyes === "true"
                ? [
                    {
                      id: "eyeGradient",
                      color1: config.gradientColor1,
                      color2: config.gradientColor2,
                      type: config.gradientType,
                    },
                  ]
                : []),
            ]}
          />

          {/* Render QR modules */}
          {modules.map((row, r) =>
            row.map((isDark, c) => {
              if (!isDark) return null;

              const finderIndex = finderPositions.findIndex(
                (pos) =>
                  r >= pos.row &&
                  r < pos.row + finderSize &&
                  c >= pos.col &&
                  c < pos.col + finderSize
              );

              if (finderIndex >= 0) {
                const pos = finderPositions[finderIndex];
                const zoneType = finderZoneType(r, c, pos.row, pos.col);

                if (zoneType === "frame") {
                  if (r === pos.row && c === pos.col) {
                    const frameColor = getColor({
                      finderIndex,
                      config,
                      target: "frameColors",
                      defaultColor: "#000000",
                    });
                    const flipArray = getFlipDirections({
                      finderIndex,
                      config,
                      target: "frameFlips",
                    });

                    return frameShapes[config.frame](
                      r,
                      c,
                      cellSize,
                      eyeFill(frameColor),
                      modules,
                      flipArray
                    );
                  }
                  return null;
                }

                // if (zoneType === "ball") {
                //   const ballColor = getColor({
                //     finderIndex,
                //     config,
                //     target: "ballColors",
                //     defaultColor: "#000000",
                //   });
                //   const flipArray = getFlipDirections({
                //     finderIndex,
                //     config,
                //     target: "ballFlips",
                //   });

                //   return ballShapes[config.eyeBall](
                //     r,
                //     c,
                //     cellSize,
                //     ballFill(ballColor),
                //     flipArray
                //   );
                // }

                if (zoneType === "ball") {
                  if (r === pos.row + 2 && c === pos.col + 2) {
                    // Center of 3x3 ball zone
                    const ballColor = getColor({
                      finderIndex,
                      config,
                      target: "ballColors",
                      defaultColor: "#000000",
                    });
                    const flipArray = getFlipDirections({
                      finderIndex,
                      config,
                      target: "ballFlips",
                    });

                    return ballShapes[config.ball](
                      r,
                      c,
                      cellSize,
                      ballFill(ballColor),
                      modules,
                      flipArray
                    );
                  }
                  return null;
                }

                return null;
              }

              // Body cell
              return bodyShapes[config.body](
                r,
                c,
                cellSize,
                bodyFill,
                modules,
                []
              );
            })
          )}

          {/* Logo */}
          {config.logo && (
            <LogoRenderer
              logo={config.logo}
              size={size}
              logoSizeRatio={0.2}
              mode={config.logoMode}
            />
          )}
        </svg>
      </div>
    </div>
  );
};
