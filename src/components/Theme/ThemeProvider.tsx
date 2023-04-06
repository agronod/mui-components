import React from "react";
import { createTheme } from "@mui/material/styles";
import {
  ThemeProvider as MUIThemeProvider,
  useTheme as useMUITheme,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import { ThemeOptions } from "@mui/material";
import { selectBaseTheme, ProjectThemes } from "../Theme/baseTheme";

interface ThemeProviderProps {
  options?: ThemeOptions;
  children: React.ReactNode;
  projectTheme: ProjectThemes;
}

const ThemeProvider = ({
  children,
  options,
  projectTheme,
}: ThemeProviderProps) => {
  const theme = React.useMemo(() => {
    const selectedTheme = selectBaseTheme(projectTheme, options);
    return selectedTheme;
  }, [options]);

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      <EmotionThemeProvider theme={theme}>
        <>{children}</>
      </EmotionThemeProvider>
    </MUIThemeProvider>
  );
};

type themeType = ReturnType<typeof createTheme>;
export const useTheme = () => useMUITheme<themeType>();

export default ThemeProvider;
