import React, { FC } from "react";

const sizes = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
};

export const Spacer: FC<{
  size: keyof typeof sizes | number;
  horizontal?: boolean;
}> = ({ size, horizontal }) => {
  const px = typeof size === "number" ? size : sizes[size];

  return (
    <div
      style={
        horizontal
          ? { width: px, height: "auto", display: "inline-block" }
          : { width: "auto", height: px, display: "inline-block" }
      }
    />
  );
};
