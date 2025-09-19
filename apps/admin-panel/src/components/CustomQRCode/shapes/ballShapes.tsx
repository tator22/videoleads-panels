import { ReactNode } from "react";
import { BallShapeType, FlipDirection, FunctionArgumentType } from "../types";

// Variables
const originalSize = 100; // SVG viewBox size

interface BallShapeWrapperType {
  row: number;
  col: number;
  cellSize: number;
  module: boolean[][];
  flipArray?: string[];
  children: ReactNode;
}

const BallShapeWrapper = ({
  row,
  col,
  cellSize,
  flipArray,
  children,
}: BallShapeWrapperType) => {
  const shapeSize = cellSize * 3;
  const scale = shapeSize / originalSize;

  const x = col * cellSize;
  const y = row * cellSize;

  // Base transform
  let transform = `translate(${x}, ${y}) scale(${scale})`;

  // Handle flipping
  if (flipArray?.includes("horizontal") && flipArray?.includes("vertical")) {
    transform = `translate(${x}, ${y}) scale(${scale}, ${scale}) scale(-1, -1) translate(-${originalSize}, -${originalSize})`;
  } else if (flipArray?.includes("horizontal")) {
    transform = `translate(${x}, ${y}) scale(${scale}, ${scale}) scale(-1, 1) translate(-${originalSize}, 0)`;
  } else if (flipArray?.includes("vertical")) {
    transform = `translate(${x}, ${y}) scale(${scale}, ${scale}) scale(1, -1) translate(0, -${originalSize})`;
  }

  return <g transform={transform.trim()}>{children}</g>;
};

export const ballShapes: Record<BallShapeType, FunctionArgumentType> = {
  ball1: (row, col, cellSize, fill, _, flipArray) => {
    const ballSize = cellSize * 3;

    const x = col * cellSize;
    const y = row * cellSize;

    let transform = "";
    if (flipArray?.includes("horizontal")) {
      transform += `translate(${x + ballSize}, ${y}) scale(-1, 1) `;
    }
    if (flipArray?.includes("vertical")) {
      transform += `translate(${x}, ${y + ballSize}) scale(1, -1) `;
    }
    if (!transform) {
      transform = `translate(${x}, ${y})`;
    }

    return (
      <path
        key={`ball-${row}-${col}`}
        d={`M0,0 h${ballSize} v${ballSize} h-${ballSize} z`}
        fill={fill}
        transform={transform.trim()}
      />
    );
  },

  ball2: (row, col, cellSize, fill, module, flipArray) => {
    return (
      <BallShapeWrapper
        cellSize={cellSize}
        row={row}
        col={col}
        flipArray={flipArray}
        module={module}
      >
        <path
          d="M0 0H83.3333C87.7536 0 91.9928 1.75595 95.1185 4.88155C98.2441 8.00716 100 12.2464 100 16.6667V83.3333C100 87.7536 98.2441 91.9928 95.1185 95.1185C91.9928 98.2441 87.7536 100 83.3333 100H16.6667C12.2464 100 8.00716 98.2441 4.88155 95.1185C1.75595 91.9928 0 87.7536 0 83.3333V0Z"
          fill={fill}
        />
      </BallShapeWrapper>
    );
  },

  ball3: (row, col, cellSize, fill, module, flipArray) => {
    return (
      <BallShapeWrapper
        cellSize={cellSize}
        row={row}
        col={col}
        flipArray={flipArray}
        module={module}
      >
        <path
          xmlns="http://www.w3.org/2000/svg"
          fill={fill}
          d="M99,50c0-7.839-5.42-14.394-12.713-16.17C93.58,32.055,99,25.499,99,17.66C99,8.458,91.541,1,82.34,1  c-7.838,0-14.395,5.421-16.17,12.713C64.395,6.421,57.838,1,50,1c-7.839,0-14.395,5.421-16.17,12.712C32.055,6.421,25.499,1,17.66,1  C8.458,1,1,8.458,1,17.66c0,7.839,5.421,14.395,12.713,16.17C6.421,35.606,1,42.161,1,50c0,7.838,5.421,14.395,12.713,16.17  C6.421,67.945,1,74.502,1,82.34C1,91.541,8.458,99,17.66,99c7.839,0,14.395-5.42,16.17-12.713C35.605,93.58,42.161,99,50,99  c7.838,0,14.395-5.42,16.17-12.713C67.945,93.58,74.502,99,82.34,99C91.541,99,99,91.541,99,82.34c0-7.838-5.42-14.395-12.713-16.17  C93.58,64.395,99,57.838,99,50z"
        />
      </BallShapeWrapper>
    );
  },

  ball4: (row, col, cellSize, fill, module, flipArray) => {
    return (
      <BallShapeWrapper
        cellSize={cellSize}
        row={row}
        col={col}
        flipArray={flipArray}
        module={module}
      >
        <path
          xmlns="http://www.w3.org/2000/svg"
          fill={fill}
          d="M100,72.779V27.195C100,12.203,87.604,0,72.37,0H27.63C12.397,0,0,12.203,0,27.195V100l72.37-0.042  C87.604,99.958,100,87.771,100,72.779z"
        />
      </BallShapeWrapper>
    );
  },

  ball5: (row, col, cellSize, fill, module, flipArray) => {
    return (
      <BallShapeWrapper
        cellSize={cellSize}
        row={row}
        col={col}
        flipArray={flipArray}
        module={module}
      >
        <g xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16.68,1C25.339,1,32.36,7.619,32.36,15.782v68.436C32.36,92.382,25.339,99,16.68,99l0,0C8.021,99,1,92.382,1,84.218   V15.782C1,7.619,8.021,1,16.68,1L16.68,1z"
            fill={fill}
          />
          <path
            d="M83.32,1C91.979,1,99,7.619,99,15.782v68.436C99,92.382,91.979,99,83.32,99l0,0c-8.661,0-15.68-6.618-15.68-14.782V15.782   C67.641,7.619,74.659,1,83.32,1L83.32,1z"
            fill={fill}
          />
          <path
            d="M50,1c8.661,0,15.68,6.619,15.68,14.782v68.436C65.68,92.382,58.661,99,50,99l0,0c-8.661,0-15.68-6.618-15.68-14.782   V15.782C34.32,7.619,41.339,1,50,1L50,1z"
            fill={fill}
          />
        </g>
      </BallShapeWrapper>
    );
  },

  ball6: (row, col, cellSize, fill, module, flipArray) => {
    return (
      <BallShapeWrapper
        cellSize={cellSize}
        row={row}
        col={col}
        flipArray={flipArray}
        module={module}
      >
        <g xmlns="http://www.w3.org/2000/svg">
          <path
            d="M99,16.68c0,8.659-6.619,15.68-14.782,15.68H15.781C7.618,32.36,1,25.339,1,16.68l0,0C1,8.021,7.618,1,15.781,1h68.437   C92.381,1,99,8.021,99,16.68L99,16.68z"
            fill={fill}
          />
          <path
            d="M99,83.32C99,91.98,92.381,99,84.218,99H15.781C7.618,99,1,91.98,1,83.32l0,0C1,74.66,7.618,67.64,15.781,67.64h68.437   C92.381,67.64,99,74.66,99,83.32L99,83.32z"
            fill={fill}
          />
          <path
            d="M99,50c0,8.66-6.619,15.68-14.782,15.68H15.781C7.618,65.68,1,58.66,1,50l0,0c0-8.661,6.618-15.68,14.781-15.68h68.437   C92.381,34.32,99,41.339,99,50L99,50z"
            fill={fill}
          />
        </g>
      </BallShapeWrapper>
    );
  },

  ball7: (row, col, cellSize, fill, module, flipArray) => {
    return (
      <BallShapeWrapper
        cellSize={cellSize}
        row={row}
        col={col}
        flipArray={flipArray}
        module={module}
      >
        <circle
          xmlns="http://www.w3.org/2000/svg"
          cx="50"
          cy="50"
          r="50"
          fill={fill}
        />
      </BallShapeWrapper>
    );
  },

  ball8: (row, col, cellSize, fill, module, flipArray) => {
    return (
      <BallShapeWrapper
        cellSize={cellSize}
        row={row}
        col={col}
        flipArray={flipArray}
        module={module}
      >
        <path
          d="M83.3333 0H16.6667C7.46192 0 0 7.46192 0 16.6667V83.3333C0 92.5381 7.46192 100 16.6667 100H83.3333C92.5381 100 100 92.5381 100 83.3333V16.6667C100 7.46192 92.5381 0 83.3333 0Z"
          fill={fill}
        />
      </BallShapeWrapper>
    );
  },

  ball9: (row, col, cellSize, fill, module, flipArray) => {
    return (
      <BallShapeWrapper
        cellSize={cellSize}
        row={row}
        col={col}
        flipArray={flipArray}
        module={module}
      >
        <path
          xmlns="http://www.w3.org/2000/svg"
          fill={fill}
          d="M21.468,99.999c-6.65,0-12.966-6.875-13.959-13.225L0.003-0.001L88.13,5.638c6.21,0.93,11.099,6.823,11.105,13.866  l0.762,80.495H21.468z"
        />
      </BallShapeWrapper>
    );
  },

  ball10: (row, col, cellSize, fill, module, flipArray) => {
    return (
      <BallShapeWrapper
        cellSize={cellSize}
        row={row}
        col={col}
        flipArray={flipArray}
        module={module}
      >
        <g
          xmlns="http://www.w3.org/2000/svg"
          transform=""
          style={{
            fill: fill,
          }}
        >
          <polygon points="51.156,100 0,49.844 0,0 49.844,0 100,51.156 100,100 " />
        </g>
      </BallShapeWrapper>
    );
  },

  ball11: (row, col, cellSize, fill, module, flipArray) => {
    return (
      <BallShapeWrapper
        cellSize={cellSize}
        row={row}
        col={col}
        flipArray={flipArray}
        module={module}
      >
        <path
          xmlns="http://www.w3.org/2000/svg"
          fill={fill}
          d="M0,100C5.883,66.733,5.883,33.283-0.003,0.001C16.67,2.956,33.395,4.447,50,4.447c16.601,0,33.321-1.49,50-4.447  c-5.886,33.269-5.886,66.715,0.003,100C83.331,97.045,66.605,95.553,50,95.553C33.398,95.553,16.676,97.044,0,100z"
        />
      </BallShapeWrapper>
    );
  },

  ball12: (row, col, cellSize, fill, module, flipArray) => {
    return (
      <BallShapeWrapper
        cellSize={cellSize}
        row={row}
        col={col}
        flipArray={flipArray}
        module={module}
      >
        <path
          xmlns="http://www.w3.org/2000/svg"
          fill={fill}
          d="M72.744-0.021H27.23c-2.341,0-4.612,0.297-6.771,0.875C15.679,2.11,11.418,4.648,8.04,8.09  c-0.617,0.621-1.206,1.284-1.752,1.96c-3.883,4.767-6.21,10.903-6.21,17.561L0.05,99.979h72.694  c14.971,0,27.138-12.397,27.138-27.63V27.625v-0.014l0.168-27.617C100.05-0.006,82.107-0.021,72.744-0.021z"
        />
      </BallShapeWrapper>
    );
  },

  ball13: (row, col, cellSize, fill, module, flipArray) => {
    return (
      <BallShapeWrapper
        cellSize={cellSize}
        row={row}
        col={col}
        flipArray={flipArray}
        module={module}
      >
        <path
          xmlns="http://www.w3.org/2000/svg"
          fill={fill}
          d="M100.061,99.984V0h-100l0.028,72.369C0.088,87.602,12.27,100,27.226,100h45.528c4.682,0,11.508,0,17.171-0.016  C95.574,99.984,100.061,99.984,100.061,99.984z"
        />
      </BallShapeWrapper>
    );
  },

  ball14: (row, col, cellSize, fill, module, flipArray) => {
    return (
      <BallShapeWrapper
        cellSize={cellSize}
        row={row}
        col={col}
        flipArray={flipArray}
        module={module}
      >
        <g
          xmlns="http://www.w3.org/2000/svg"
          transform=""
          style={{
            fill: fill,
          }}
        >
          <g>
            <circle cx="17.33" cy="17.33" r="16.83" />
            <circle cx="50" cy="17.33" r="16.83" />
            <circle cx="82.67" cy="17.33" r="16.83" />
            <circle cx="17.33" cy="82.67" r="16.83" />
            <circle cx="50" cy="82.67" r="16.83" />
            <circle cx="82.67" cy="82.67" r="16.83" />
            <circle cx="17.33" cy="50" r="16.83" />
            <circle cx="50" cy="50" r="16.83" />
            <circle cx="82.67" cy="50" r="16.83" />
          </g>
        </g>
      </BallShapeWrapper>
    );
  },

  ball15: (row, col, cellSize, fill, module, flipArray) => {
    return (
      <BallShapeWrapper
        cellSize={cellSize}
        row={row}
        col={col}
        flipArray={flipArray}
        module={module}
      >
        <path
          xmlns="http://www.w3.org/2000/svg"
          fill={fill}
          d="M99.996,19.713C91.358,15.453,84.6,8.737,80.128,0H18.215c-0.803,0.206-1.532,0.384-2.137,0.531l-0.179,0.044   c-1.626,0.402-3.309,0.818-4.205,1.198C9.353,2.762,7.172,4.889,5.12,7.086c-1.909,2.033-3.15,4.217-3.784,6.661l-0.16,0.734   C0.633,16.928,0.019,19.698,0,21.349l0.114,32.409l-0.11,26.531C8.631,84.544,15.389,91.257,19.868,100h61.938   c0.821-0.213,1.55-0.394,2.116-0.53l0.179-0.044c1.628-0.403,3.312-0.819,4.244-1.213c2.295-0.965,4.489-3.102,6.514-5.262   c1.927-2.057,3.177-4.258,3.81-6.718l0.155-0.714c0.542-2.446,1.157-5.217,1.176-6.868l-0.114-32.409L99.996,19.713z"
        />
      </BallShapeWrapper>
    );
  },

  ball16: (row, col, cellSize, fill, module, flipArray) => {
    return (
      <BallShapeWrapper
        cellSize={cellSize}
        row={row}
        col={col}
        flipArray={flipArray}
        module={module}
      >
        <polygon
          xmlns="http://www.w3.org/2000/svg"
          fill={fill}
          points="96.309,94.77 100,88.374 96.309,81.979 100,75.583 96.309,69.188 100,62.791 96.309,56.396 100,50 96.309,43.604    100,37.208 96.309,30.813 100,24.418 96.309,18.023 100,11.627 96.309,5.231 98.409,1.59 94.77,3.693 88.374,0 81.979,3.693    75.583,0 69.188,3.693 62.791,0 56.396,3.693 50,0 43.604,3.693 37.208,0 30.813,3.693 24.418,0 18.023,3.693 11.627,0    5.231,3.693 1.591,1.591 3.693,5.231 0,11.627 3.693,18.023 0,24.418 3.693,30.813 0,37.208 3.693,43.604 0,50 3.693,56.396    0,62.791 3.693,69.188 0,75.583 3.693,81.979 0,88.374 3.693,94.77 1.59,98.409 5.231,96.309 11.627,100 18.023,96.309 24.418,100    30.813,96.309 37.208,100 43.604,96.309 50,100 56.396,96.309 62.791,100 69.188,96.309 75.583,100 81.979,96.309 88.374,100    94.77,96.309 98.409,98.409  "
        />
      </BallShapeWrapper>
    );
  },

  ball17: (row, col, cellSize, fill, module, flipArray) => {
    return (
      <BallShapeWrapper
        cellSize={cellSize}
        row={row}
        col={col}
        flipArray={flipArray}
        module={module}
      >
        <path
          xmlns="http://www.w3.org/2000/svg"
          fill={fill}
          d="M100.106,9.15c-1.488,0.196-1.372-3.001-1.583-5.262l-1.567,0.406c1.156-0.47-0.028-1.336-1.721-1.639   c-4.87-0.563-3.902,3.094-7.679,1.2c0.549,0.04,0.64-0.193,1.197-0.155l-1.942-0.833c-0.41,3.951-11.443-2.518-11.86,1.438   c-2.773-1.596-0.195-0.952,3.361-2.82l-5.088,0.367c0.063,0.04-1.837,0.418-0.761,0.095c-3.868-1.666-1.126,0.345-3.219,1.378   c-1.481-0.571,1.156-2.969-3.05-2.317c-5.944,0.772,1.129,2.886-2.443,3.352l-2.585-2.048c-4.559,1.565-7.969,0.115-11.815-0.144   c-0.872,0.164-1.296,0.376-1.51,0.598c-4.091-0.887-8.58,2.001-11.662,1.329c0.719-0.421-1.765-0.317-2.138-0.813l-5.567,1.267   c2.459-0.537,2.354-1.715,2.806-2.858c-1.744,0.121-2.559,0.767-3.744,0.918c0.722-0.415,1.452-0.838,0.532-1.366L22.226,3.19   c0.339,0.2,1.014,0.276,1.574,0.328c-1.459,0.013-4.617,0.754-6.708-0.206c0.185-0.452,0.903-0.875,1.084-1.334   c1.753,1.294,2.752,0.191,3.662-0.688c-4.033,0.201-1.005-0.3-2.944-1.135c-2.845,0.045-4.015,2.909-3.266,3.899   c-3.211-0.449-4.231-1.187-7.516,0l0.625-2.473L5.723,1.145l2.444-1.008c-5.443-1.025-1.585,4.044-6.47,3.891   C1.504,6.28,1.585,9.342,0.127,9.15c0.091,1.272,0.079,2.428-0.01,3.372c0.576,0.548,1.083,0.542,1.274-2.258l1.301,4.665   C7.967,17.518,2.25,27.36,3.949,34.425c-0.203-0.499-0.486-0.628-0.649-0.689c1.689,6.275-1.423,14.073-0.581,15.53L1.27,49.825   c2.225,5.367,2.414,6.002,1.514,12.402c-0.233-0.081-0.651-0.821-0.954,0.19c1.071,1.537,2.141,3.086,1.845,7.469L3.22,69.703   l0.238,6.856c-4.464-0.051,2.732,11.738-2.11,13.803c0.883,0.906,1.356,3.498,1.763,5.77c2.66,0.833,0.273,4.632,5.056,3.731   l-2.444-1.009l3.014-0.436l-0.625-2.473c3.285,1.187,4.305,0.448,7.516,0c-0.749,0.99,0.421,3.854,3.266,3.899   c1.939-0.836-1.089-1.337,2.944-1.136c-0.91-0.879-1.909-1.982-3.662-0.688c-0.181-0.458-0.899-0.882-1.084-1.334   c2.091-0.96,5.249-0.218,6.708-0.206c-0.56,0.053-1.235,0.129-1.574,0.329l5.843,1.947c0.919-0.528,0.19-0.952-0.532-1.367   c1.185,0.151,2,0.797,3.744,0.918c-0.452-1.143-0.347-2.32-2.806-2.857l5.567,1.267c0.373-0.496,2.857-0.393,2.138-0.813   c3.083-0.672,7.571,2.216,11.662,1.329c0.214,0.223,0.639,0.435,1.51,0.599c3.847-0.259,7.257-1.709,11.815-0.144l2.585-2.049   c3.572,0.466-3.501,2.581,2.443,3.353c4.206,0.652,1.568-1.746,3.05-2.316c2.093,1.032-0.649,3.044,3.219,1.377   c-1.076-0.323,0.824,0.056,0.761,0.096l5.088,0.367c-3.557-1.869-6.135-1.225-3.361-2.82c0.417,3.955,11.45-2.514,11.86,1.438   l1.942-0.833c-0.558,0.038-0.648-0.195-1.197-0.155c3.776-1.894,2.809,1.764,7.679,1.2c0.757-0.135,1.397-0.385,1.788-0.661   c0.05-0.275,0.1-0.561,0.152-0.849c-0.065-0.044-0.123-0.09-0.22-0.129l0.231,0.06c0.394-2.178,0.862-4.546,1.697-5.403   c-4.842-2.064,2.354-13.854-2.109-13.803l0.238-6.856l-0.455,0.183c-0.296-4.383,0.774-5.932,1.845-7.469   c-0.303-1.012-0.721-0.271-0.953-0.19c-0.9-6.399-0.711-7.035,1.515-12.402l-1.449-0.559c0.841-1.457-2.271-9.255-0.582-15.53   c-0.163,0.061-0.446,0.19-0.648,0.689c1.699-7.065-4.02-16.908,1.256-19.497l1.301-4.665c0.189,2.801,0.696,2.806,1.275,2.257   C100.027,11.578,100.015,10.422,100.106,9.15z"
        />
      </BallShapeWrapper>
    );
  },

  CPball5: (
    row: number,
    col: number,
    cellSize: number,
    _fill: string,
    _,
    flipArray: FlipDirection[] = []
  ) => {
    const shapeSize = cellSize * 3; // Example: covers 3x3 modules
    const scale = shapeSize / originalSize;

    const x = col * cellSize;
    const y = row * cellSize;

    // Base transform
    let transform = `translate(${x}, ${y}) scale(${scale})`;

    // Handle flipping
    if (flipArray?.includes("horizontal") && flipArray?.includes("vertical")) {
      transform = `translate(${x}, ${y}) scale(${scale}, ${scale}) scale(-1, -1) translate(-${originalSize}, -${originalSize})`;
    } else if (flipArray?.includes("horizontal")) {
      transform = `translate(${x}, ${y}) scale(${scale}, ${scale}) scale(-1, 1) translate(-${originalSize}, 0)`;
    } else if (flipArray?.includes("vertical")) {
      transform = `translate(${x}, ${y}) scale(${scale}, ${scale}) scale(1, -1) translate(0, -${originalSize})`;
    }

    return (
      <g transform={transform}>
        <path
          d="M17.3045 69.8576C21.8141 51.4321 41.2162 78.9131 44.9226 57.7949C48.5936 36.7121 56.809 70.2068 55.6206 52.9697C54.4664 35.6973 64.8147 27.027 81.5604 19.9638C89.5314 16.6075 89.9159 11.9225 88.0987 7.93652C82.2947 2.97177 74.7436 0 66.4936 0H33.4915C14.998 0 0 14.9991 0 33.4947V66.5006C0 73.2139 1.99274 79.4726 5.41879 84.7171C10.2074 84.1229 15.0314 79.2282 17.3045 69.8576ZM9.2679 60.4876C8.5986 74.8823 4.41486 71.2001 3.91225 47.2649C3.41028 23.3296 8.93325 5.92207 33.0331 3.74596C54.7026 1.78962 82.4039 6.25677 64.497 11.7804C46.5895 17.304 34.7069 20.3168 31.3598 39.8999C28.0127 59.4829 22.1551 35.5476 18.4733 54.1273C14.7909 72.7062 9.9372 46.0928 9.2679 60.4876Z"
          fill="#535353"
        />
        <path
          d="M18.4841 54.1257C22.1659 35.5468 28.0235 59.4814 31.3707 39.8983C34.7178 20.3147 46.6004 17.3019 64.5079 11.7789C82.4154 6.25526 54.7134 1.78811 33.0439 3.74445C8.94409 5.92056 3.42112 23.3275 3.92309 47.2634C4.42507 71.1986 8.60881 74.8808 9.27874 60.4861C9.94867 46.0913 14.8024 72.7047 18.4841 54.1257Z"
          fill="#5E5E5E"
        />
        <path
          d="M88.1147 7.94061C89.9326 11.9266 89.548 16.6116 81.5764 19.9679C64.8307 27.0305 54.4825 35.7014 55.6367 52.9738C56.825 70.2109 48.6097 36.7156 44.9386 57.799C41.2329 78.9166 21.8302 51.4355 17.3206 69.8617C15.0475 79.2317 10.2235 84.127 5.43359 84.7212C11.3771 93.9163 21.7253 100 33.5063 100H66.5084C85.0019 100 99.9998 85.0003 99.9998 66.5047V33.4988C100.001 23.2548 95.3867 14.0591 88.1147 7.94061ZM94.9144 43.5855C94.9144 60.3237 94.9144 55.4695 94.9144 67.8554C94.9144 80.2414 83.4259 93.6315 68.1962 93.6315C52.9665 93.6315 51.1252 93.6315 35.7282 93.6315C20.3312 93.6315 26.6908 75.0525 49.1174 81.2455C71.5439 87.4385 57.6023 70.8676 70.2634 72.8764C82.9239 74.8851 62.6738 54.2715 75.7277 50.3512C88.7815 46.431 75.895 43.0456 84.7651 36.1182C93.7829 29.0752 94.9144 26.848 94.9144 43.5855Z"
          fill="#494949"
        />
        <path
          d="M75.7244 50.3478C62.6705 54.268 82.9206 74.8817 70.2601 72.8729C57.5996 70.8641 71.5406 87.435 49.1141 81.242C26.6875 75.049 20.3279 93.628 35.7249 93.628C51.1219 93.628 52.9632 93.628 68.1929 93.628C83.4226 93.628 94.9112 80.2379 94.9112 67.8519C94.9112 55.4659 94.9112 60.3202 94.9112 43.582C94.9112 26.8445 93.7796 29.0711 84.7612 36.1147C75.8917 43.0414 88.7782 46.4268 75.7244 50.3478Z"
          fill="#414141"
        />
      </g>
    );
  },
};
