export type BodyShapeType =
  | "body1"
  | "body2"
  | "body3"
  | "body4"
  | "body5"
  | "body6"
  | "body7";
export type FrameShapeType =
  | "frame1"
  | "TFrame6"
  | "frame2"
  | "frame3"
  | "frame4"
  | "frame5"
  | "frame6"
  | "frame7"
  | "frame8"
  | "frame9"
  | "frame10"
  | "frame11"
  | "frame12"
  | "frame13"
  | "frame14";
export type BallShapeType =
  | "ball1"
  | "CPball5"
  | "ball2"
  | "ball2"
  | "ball3"
  | "ball4"
  | "ball5"
  | "ball6"
  | "ball7"
  | "ball8"
  | "ball9"
  | "ball10"
  | "ball11"
  | "ball12"
  | "ball13"
  | "ball14"
  | "ball15"
  | "ball16"
  | "ball17";
export type BackgroundType =
  | "circleCut"
  | "circleLineShape"
  | "circleSmoothLineShape"
  | "squareShape"
  | "none";
export type FlipDirection = "horizontal" | "vertical";
export type PositionType = "topLeft" | "topRight" | "bottomLeft";

export type FindingPostingType = {
  row: number;
  col: number;
  eyeColor: string;
  ballColor: string;
};

export interface LogoRendererProps {
  logo: string;
  size: number;
  logoSizeRatio?: number;
  mode?: "default" | "clean";
}

export type FunctionArgumentType = (
  r: number,
  c: number,
  cellSize: number,
  fill: string,
  modules: boolean[][],
  flipArray?: FlipDirection[] | undefined
) => JSX.Element;

export type BackgroundFunctionArgumentType = (
  fill: string,
  backgroundColor?: string
) => JSX.Element;

export interface QRMonkeyConfig {
  body: BodyShapeType;
  frame: FrameShapeType;
  ball: BallShapeType;
  bodyColor: string;
  bgColor: string;
  gradientColor1: string;
  gradientColor2: string;
  gradientType: "linear" | "radial";
  gradientOnEyes: "true" | "false";
  logo: string;
  logoMode: "default" | "clean";
  frameFlips: Record<PositionType, FlipDirection[]>;
  ballFlips: Record<PositionType, FlipDirection[]>;
  frameColors: Record<PositionType, string>;
  ballColors: Record<PositionType, string>;
  background: {
    type: BackgroundType;
    fill?: string;
    qrSizeScale: number;
    backgroundColor?: string;
  };
  border?: {
    isBorder: boolean;
    borderColor: string;
    borderWidthMultiplier: number;
  };
}

export interface QRDataType {
  value: string;
  config: QRMonkeyConfig;
}

export interface CustomQRCodeProps {
  value: string;
  size?: number;
  config: QRMonkeyConfig;
}
