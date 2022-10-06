import React from "react";
import { createTheme } from "@mui/material/styles";
import { deepmerge } from "@mui/utils";
import {
  ThemeProvider as MUIThemeProvider,
  useTheme as useMUITheme,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import { ThemeOptions } from "@mui/material";
import { baseThemeOptions, baseTheme } from "./baseTheme";

interface ThemeProviderProps {
  options?: ThemeOptions;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, options }) => {
  const theme = React.useMemo(() => {
    if (!options) {
      return baseTheme;
    }
    const overriddenTheme = createTheme(deepmerge(baseThemeOptions, options));

    return overriddenTheme;
  }, [options]);

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
    </MUIThemeProvider>
  );
};

type themeType = ReturnType<typeof createTheme>;
export const useTheme = () => useMUITheme<themeType>();

export default ThemeProvider;
