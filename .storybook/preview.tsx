import React from "react";
import {
  ThemeProvider,
  agronodTheme,
  agrosfarTheme,
  agrosfarDarkTheme,
} from "../src";
import { Box } from "@mui/material";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/material-icons';

const themes = {
  Agronod: agronodTheme,
  Agrosfar: agrosfarTheme,
  AgrosfarDark: agrosfarDarkTheme,
};

const getThemeOptions = (themeName) => {
  return themes[themeName];
};

export const globalTypes = {
  theme: {
    description: "Global theme for components",
    defaultValue: "Agronod",
    toolbar: {
      title: "Theme",
      defaultValue: "Agronod",
      items: [
        { value: "Agronod", title: "Agronod" },
        { value: "Agrosfar", title: "Agrosfar" },
        { value: "AgrosfarDark", title: "AgrosfarDark" },
      ],
      icon: 'circlehollow',
      dynamicTitle: true,
    },
  },
};

export const parameters = {
  storySort: {
    method: "alphabetical",
  },
  controls: {
    expanded: true, // Adds the description and default columns
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

export const decorators = [
  (Story, context) => {
    const themeOptions = getThemeOptions(context.globals.theme);
    return (
      <ThemeProvider options={themeOptions}>
        {context.globals.theme === "AgrosfarDark" ? (
          <Box
            sx={{
              padding: 2,
              backgroundColor: "#216545",
            }}
          >
            <Story {...context} />
          </Box>
        ) : (
          <Story {...context} />
        )}
      </ThemeProvider>
    );
  },
];

export const tags = ["autodocs"];
