import { extendTheme } from "@chakra-ui/react";

export const colors = {
  black: "#222",
  white: "#fbfbfb",
  darkGray: "#2b2b2b",
  gray: "#505050",
  lightGray: "#c4c4c4",
  red: "#b61f22",
} as const;

export const fontSizes = {
  xSmall: "10px",
  small: "12px",
  normal: "14px",
  large: "16px",
  xLarge: "18px",
  xxLarge: "20px",
} as const;

export const theme = extendTheme({ colors, fontSizes });
