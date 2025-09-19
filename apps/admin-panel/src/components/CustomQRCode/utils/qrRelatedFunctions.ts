import { FlipDirection, PositionType, QRMonkeyConfig } from "../types";

// 1. Define the positions as a typed constant
export const EYE_POSITIONS: PositionType[] = [
  "topLeft",
  "topRight",
  "bottomLeft",
] as const;

/**
 * Gets flip directions for either eye frame or eye ball
 *
 * @param finderIndex 0 (topLeft), 1 (topRight), 2 (bottomLeft)
 * @param config QRMonkeyConfig object
 * @param target "eyeFlips" | "eyeBallFlips" - which flip config to use
 * @returns FlipDirection[] - array of flip directions
 */
export const getFlipDirections = ({
  finderIndex,
  config,
  target,
}: {
  finderIndex: number;
  config: QRMonkeyConfig;
  target: "frameFlips" | "ballFlips";
}): FlipDirection[] => {
  if (finderIndex < 0 || finderIndex >= EYE_POSITIONS.length) {
    return [];
  }

  const position = EYE_POSITIONS[finderIndex];
  return config[target][position] ?? [];
};

/**
 * Gets color for either eye frame or eye ball
 *
 * @param finderIndex 0 (topLeft), 1 (topRight), 2 (bottomLeft)
 * @param config QRMonkeyConfig object
 * @param target "eyeColors" | "eyeBallColors" - which color config to use
 * @param defaultColor Fallback color if undefined
 * @returns string - color value
 */
export const getColor = ({
  finderIndex,
  config,
  target,
  defaultColor,
}: {
  finderIndex: number;
  config: QRMonkeyConfig;
  target: "frameColors" | "ballColors";
  defaultColor: string;
}): string => {
  if (finderIndex < 0 || finderIndex >= EYE_POSITIONS.length) {
    return defaultColor;
  }

  const position = EYE_POSITIONS[finderIndex];
  return config[target][position] ?? defaultColor;
};
