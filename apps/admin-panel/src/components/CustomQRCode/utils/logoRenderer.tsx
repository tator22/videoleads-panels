import { LogoRendererProps } from "../types";

/**
 * Renders a centered logo over the QR code.
 * In "clean" mode, it draws a white background behind the logo (circle).
 */
export const LogoRenderer: React.FC<LogoRendererProps> = ({
  logo,
  size,
  logoSizeRatio = 0.2,
  mode = "default",
}) => {
  if (!logo) return null;

  const logoSize = size * logoSizeRatio;
  const x = (size - logoSize) / 2;
  const y = (size - logoSize) / 2;

  return (
    <>
      {mode === "clean" && (
        <circle cx={size / 2} cy={size / 2} r={logoSize / 1.1} fill="#ffffff" />
      )}
      <image
        href={logo}
        x={x}
        y={y}
        width={logoSize}
        height={logoSize}
        preserveAspectRatio="xMidYMid meet"
      />
    </>
  );
};
