import { agrosfarThemePalette } from "./agrosfarTheme";
import { globalThemePalette } from "./baseTheme";
import createPalette from "@mui/material/styles/createPalette";

const agrosfarDarkThemePalette = {
  ...globalThemePalette,
  ...agrosfarThemePalette,
};

const themePalette = createPalette(agrosfarDarkThemePalette);

const agrosfarDarkTheme = {
  palette: themePalette,
  components: {
    MuiButton: {
      styleOverrides: {
        outlined: {
          borderColor: "rgba(255, 255, 255, 0.36)",
          color: themePalette.common.white,
          ":hover": {
            color: themePalette.common.white,
            borderColor: "rgba(255, 255, 255, 0.36)",
            boxShadow: "0px 0px 0px 2px rgba(255, 255, 255, 0.36)",
          },
          ":active": {
            color: themePalette.common.white,
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
