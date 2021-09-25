/** @jsxImportSource @emotion/react */
import { jsx, ThemeProvider, useTheme } from '@emotion/react'
import hexAlpha from 'hex-alpha'

export const theme = {
  colors: {
    brand: "#e10600",
    border: "#000",
    background: {
      primary: hexAlpha('#000', 0.6),
      secondary: hexAlpha('#000', 0.6),
      position: "#fff",
      positionInactive: '#eee',
    },
    text: {
      primary: "#fff",
      inverted: '#000',
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
  },
  spacing: {
    xxxs: 4,
    xxs: 8,
    xs: 12,
    sm: 16,
    md: 24,
    lg: 32
  },
  sizes: {
    sm: 24,
    md: 32
  },
  radii: {
    sm: 4,
    md: 8
  },
}
