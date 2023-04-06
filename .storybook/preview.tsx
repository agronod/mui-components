import React from "react";
import { ThemeProvider } from "../src";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValue: "AGRONOD",
    toolbar: {
      items: ["AGRONOD", "AGROSFAR"],
      showName: true,
      dynamicTitle: true,
    },
  },
};

export const decorators = [
  (Story, context) => {
    return (
      <ThemeProvider
        projectTheme={context.globals.theme}
        options={context.globals.theme}
      >
        <Story {...context} />
      </ThemeProvider>
    );
  },
];
