/** @jsxImportSource @emotion/react */
import { jsx, ThemeProvider, useTheme } from '@emotion/react'
import {theme} from '../src/theme'

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <div style={{ padding: '3em', backgroundColor: '#333' }}>
        <Story />
      </div>
    </ThemeProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
