import { agrosfarThemePalette } from "./agrosfarTheme";
import { globalThemePalette } from "./baseTheme";
import { createTheme } from "@mui/material";

const agrosfarDarkThemePalette = {
  ...globalThemePalette,
  ...agrosfarThemePalette,
};

// Create a temporary theme to get the processed palette
const tempTheme = createTheme({ palette: agrosfarDarkThemePalette });
const themePalette = tempTheme.palette;

const agrosfarDarkTheme = {
  palette: agrosfarDarkThemePalette,
  components: {
    MuiButton: {
      styleOverrides: {
        outlined: {
          borderColor: "rgba(255, 255, 255, 0.36)",
          color: themePalette.white,
          ":hover": {
            color: themePalette.white,
            borderColor: "rgba(255, 255, 255, 0.36)",
            boxShadow: "0px 0px 0px 2px rgba(255, 255, 255, 0.36)",
          },
          ":active": {
            color: themePalette.white,
            borderColor: "rgba(255, 255, 255, 0.56)",
            boxShadow: "0px 0px 0px 2px rgba(255, 255, 255, 0.56)",
            backgroundColor: "rgba(255, 255, 255, 0.36)",
          },
          "&.Mui-disabled": {
            color: themePalette.primary.main,
            borderColor: themePalette.primary.main,
          },
        },
        contained: {
          backgroundColor: themePalette.primary.main,
          ":active": {
            backgroundColor: themePalette.primary.darkHover,
          },
          "&.Mui-disabled": {
            backgroundColor: "rgba(47, 133, 96, 0.5)",
            color: themePalette.primary.light,
          },
        },
      },
    },
  },
};

export default agrosfarDarkTheme;
