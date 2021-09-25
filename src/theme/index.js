/** @jsxImportSource @emotion/react */
import { jsx, ThemeProvider, useTheme } from "@emotion/react";
import hexAlpha from "hex-alpha";

export const theme = {
  colors: {
    brand: "#e10600",
    border: "#000",
    background: {
      primary: hexAlpha("#000", 0.9),
      secondary: hexAlpha("#333", 0.6),
      position: "#fff",
      positionInactive: "#eee",
    },
    text: {
      primary: "#fff",
      inverted: "#000",
    },
    mercedes: "#00d2be",
    redbull: "#0600ef",
    mclaren: "#FF9800",
    ferrari: "#dc0000",
    alphatauri: "#2b4562",
    astonmartin: "#006f62",
    alfa: "#900000",
    alpine: "#0090ff",
    williams: "#005aff",
    haas: "#fafafa",
    flags: {
      red: "#e10600",
      yellow: "#f4d40a",
      green: "#45d805",
    },
  },
  spacing: {
    xxxxs: 2,
    xxxs: 4,
    xxs: 8,
    xs: 12,
    sm: 16,
    md: 24,
    lg: 32,
  },
  sizes: {
    sm: 24,
    md: 32,
  },
  fonts: {
    default: "Formula1-Display-Regular",
    bold: "Formula1-Display-Bold",
    wide: "Formula1-Display-wide",
  },
  radii: {
    sm: 4,
    md: 8,
  },
};
