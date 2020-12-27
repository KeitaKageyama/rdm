import { extendTheme } from "@chakra-ui/react";

export const colors = {
  green: "#008E44",
  red: "#F33613",
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
