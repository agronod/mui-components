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
  toolbar: {
    grid: { hidden: true },
    zoom: { hidden: true },
    eject: { hidden: true },
    fullscreen: { hidden: true },
    "storybook/background": { hidden: true },
  },
};

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValue: "AGRONOD",
    toolbar: {
      items: ["AGRONOD", "AGROSFAR"],
      title: true,
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
