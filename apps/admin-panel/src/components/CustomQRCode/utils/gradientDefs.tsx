import React from "react";

export type GradientType = "linear" | "radial";

interface GradientProps {
  id: string;
  color1: string;
  color2: string;
  type: GradientType;
}

/**
 * Creates a <defs> block with a gradient definition.
 * QRCode Monkey uses either linear (top→bottom) or radial (center→edges) gradients.
 */
export const GradientDefs: React.FC<{ gradients: GradientProps[] }> = ({
  gradients,
}) => {
  return (
    <defs>
      {gradients.map(({ id, color1, color2, type }) =>
        type === "linear" ? (
          <linearGradient id={id} key={id} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={color1} />
            <stop offset="100%" stopColor={color2} />
          </linearGradient>
        ) : (
          <radialGradient id={id} key={id} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={color1} />
            <stop offset="100%" stopColor={color2} />
          </radialGradient>
        )
      )}
    </defs>
  );
};
