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
import type { Preview } from '@storybook/react';

const themes = {
  Agronod: agronodTheme,
  Agrosfar: agrosfarTheme,
  AgrosfarDark: agrosfarDarkTheme,
};
const getThemeOptions = (themeName) => themes[themeName] || agronodTheme;

const preview: Preview = {
  globalTypes: {
    theme: {
      description: "Global theme for components",
      toolbar: {
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
  },
  parameters: {
    storySort: {
      method: "alphabetical",
    },
    controls: {
      expanded: true,
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
      background: { hidden: true },
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
  },
  tags: ["autodocs"],
  decorators: [
    (Story, context) => {
      const themeName = context.globals.theme || 'Agronod';
      const themeOptions = getThemeOptions(themeName);
      return (
        <ThemeProvider options={themeOptions}>
          {themeName === "AgrosfarDark" ? (
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
  ],
};

export default preview;
