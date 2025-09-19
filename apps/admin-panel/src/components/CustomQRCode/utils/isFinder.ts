// export const finderSize = 7;

// export interface FinderPos {
//   row: number;
//   col: number;
// }

// export const isFinder = (
//   r: number,
//   c: number,
//   finderPositions: FinderPos[]
// ) => {
//   return finderPositions.some(
//     (pos) =>
//       r >= pos.row &&
//       r < pos.row + finderSize &&
//       c >= pos.col &&
//       c < pos.col + finderSize
//   );
// };

export const finderSize = 7;

export function finderZoneType(
  r: number,
  c: number,
  startRow: number,
  startCol: number
): "frame" | "ball" | "other" {
  const localR = r - startRow;
  const localC = c - startCol;

  // Outer frame border
  if (
    localR === 0 ||
    localR === finderSize - 1 ||
    localC === 0 ||
    localC === finderSize - 1
  ) {
    return "frame";
  }

  // Inner 3×3 ball center
  if (localR >= 2 && localR <= 4 && localC >= 2 && localC <= 4) {
    return "ball";
  }

  return "other";
}
