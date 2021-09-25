/** @jsxImportSource @emotion/react */
import { jsx, ThemeProvider, useTheme } from "@emotion/react";
import { theme } from "../src/theme";

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <div
        style={{
          padding: "3em",
          backgroundColor: "#333",
          backgroundImage:
            "url(https://www.formula1.com/content/dam/fom-website/manual/Misc/2021manual/2021RussianGrandPrix/Friday/GettyImages-1235463644.jpg.transform/9col/image.jpg)",
          backgroundSize: "cover",
        }}
      >
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
};
