import React from "react";
import { ThemeProvider, agronodTheme, agrosfarTheme } from "../src";

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
  backgrounds: {
    default: "agronod",
    values: [
      {
        name: "agronod",
        value: "#F8F6F3",
      },
    ],
  },
};

const themeOptions = {
  Agronod: agronodTheme,
  Agrosfar: agrosfarTheme,
};

const getThemeOptions = (themeName) => {
  return themeOptions[themeName];
};

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValue: "Agronod",
    toolbar: {
      items: ["Agronod", "Agrosfar"],
      title: true,
      dynamicTitle: true,
    },
  },
};

export const decorators = [
  (Story, context) => {
    const themeOptions = getThemeOptions(context.globals.theme);
    return (
      <ThemeProvider options={themeOptions}>
        <Story {...context} />
      </ThemeProvider>
    );
  },
];
