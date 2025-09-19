import { BodyShapeType, FlipDirection, FunctionArgumentType } from "../types";

export const bodyShapes: Record<BodyShapeType, FunctionArgumentType> = {
  body1: (r, c, cellSize, fill) => (
    <rect
      key={`${r}-${c}`}
      x={c * cellSize}
      y={r * cellSize}
      width={cellSize}
      height={cellSize}
      fill={fill}
    />
  ),

  body2: (
    r: number,
    c: number,
    cellSize: number,
    fill: string,
    modules: boolean[][],
    _flipArray: FlipDirection[] | undefined = []
  ): any => {
    if (!modules[r][c]) return null;

    const x = c * cellSize;
    const y = r * cellSize;
    const neighbors = getNeighbors(modules, r, c);

    // Horizontal run detection
    if (!neighbors.left && neighbors.right) {
      let runLength = 1;
      while (modules[r]?.[c + runLength]) runLength++;
      return (
        <rect
          key={`${r}-${c}`}
          x={x}
          y={y}
          width={cellSize * runLength}
          height={cellSize}
          rx={cellSize / 2}
          ry={cellSize / 2}
          fill={fill}
        />
      );
    }

    // Vertical run detection
    if (!neighbors.top && neighbors.bottom) {
      let runLength = 1;
      while (modules[r + runLength]?.[c]) runLength++;
      return (
        <rect
          key={`${r}-${c}`}
          x={x}
          y={y}
          width={cellSize}
          height={cellSize * runLength}
          rx={cellSize / 2}
          ry={cellSize / 2}
          fill={fill}
        />
      );
    }

    // Isolated dot
    if (
      !neighbors.left &&
      !neighbors.right &&
      !neighbors.top &&
      !neighbors.bottom
    ) {
      return (
        <circle
          key={`${r}-${c}`}
          cx={x + cellSize / 2}
          cy={y + cellSize / 2}
          r={cellSize / 2}
          fill={fill}
        />
      );
    }

    return null;
  },

  body3: (r, c, cellSize, fill) => (
    <circle
      key={`${r}-${c}`}
      cx={c * cellSize + cellSize / 2} // center X
      cy={r * cellSize + cellSize / 2} // center Y
      r={cellSize / 3} // full size, no spacing
      fill={fill}
    />
  ),

  body4: (r, c, cellSize, fill) => (
    <circle
      key={`${r}-${c}`}
      cx={c * cellSize + cellSize / 2} // center X
      cy={r * cellSize + cellSize / 2} // center Y
      r={cellSize / 2} // full size, no spacing
      fill={fill}
    />
  ),

  body5: (r, c, cellSize, fill) => {
    const x = c * cellSize;
    const y = r * cellSize;
    const scale = cellSize / 100; // because polygon is defined in 100x100 box

    return (
      <g
        key={`${r}-${c}`}
        xmlns="http://www.w3.org/2000/svg"
        transform={`translate(${x}, ${y}) scale(${scale})`}
        style={{ fill }}
      >
        <polygon points="0,50 50,100 100,50 50,0" />
      </g>
    );
  },

  body6: (r, c, cellSize, fill) => {
    const x = c * cellSize + cellSize / 2; // center X
    const y = r * cellSize + cellSize / 2; // center Y
    const size = cellSize * 0.9; // slightly smaller to add spacing
    const rotation = Math.floor(Math.random() * 360);

    return (
      <rect
        key={`${r}-${c}`}
        x={x - size / 2}
        y={y - size / 2}
        width={size}
        height={size}
        fill={fill}
        transform={`rotate(${rotation}, ${x}, ${y})`}
      />
    );
  },

  body7: (r, c, cellSize, fill) => {
    const x = c * cellSize;
    const y = r * cellSize;
    const scale = cellSize / 100;

    return (
      <g
        key={`${r}-${c}`}
        xmlns="http://www.w3.org/2000/svg"
        transform={`translate(${x}, ${y}) scale(${scale})`}
        style={{ fill }}
      >
        <path d="M49.984,99.824C45.848,69.47,28.497,53.961-0.345,49.773  c29.054-3.697,45.791-19.659,50.348-49.949c4.404,29.487,20.907,45.691,49.652,49.975C70.729,54.051,54.532,70.407,49.984,99.824z" />
      </g>
    );
  },
};

function getNeighbors(grid: boolean[][], row: number, col: number) {
  const neighbors = {
    top: false,
    right: false,
    bottom: false,
    left: false,
    // Additional advanced properties
    topRight: false,
    topLeft: false,
    bottomRight: false,
    bottomLeft: false,
  };

  // Check 4 direct neighbors (von Neumann neighborhood)
  if (row > 0) neighbors.top = grid[row - 1][col];
  if (col < grid[0].length - 1) neighbors.right = grid[row][col + 1];
  if (row < grid.length - 1) neighbors.bottom = grid[row + 1][col];
  if (col > 0) neighbors.left = grid[row][col - 1];

  // Check diagonal neighbors (Moore neighborhood)
  if (row > 0 && col < grid[0].length - 1)
    neighbors.topRight = grid[row - 1][col + 1];
  if (row > 0 && col > 0) neighbors.topLeft = grid[row - 1][col - 1];
  if (row < grid.length - 1 && col < grid[0].length - 1)
    neighbors.bottomRight = grid[row + 1][col + 1];
  if (row < grid.length - 1 && col > 0)
    neighbors.bottomLeft = grid[row + 1][col - 1];

  return neighbors;
}
