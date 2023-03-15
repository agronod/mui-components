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

const themeOptions = {
  Agronod: undefined,
};

const getThemeOptions = (themeName) => {
  return themeOptions[themeName];
};

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValue: "Agronod",
    // toolbar: {
    //   icon: 'eye',
    //   // Array of plain string values or MenuItem shape (see below)
    //   items: ['Agronod'],
    //   // Property that specifies if the name of the item will be displayed
    //   showName: true,
    // },
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
