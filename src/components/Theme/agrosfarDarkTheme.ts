import { agrosfarThemePalette } from "./agrosfarTheme";
import { globalThemePalette } from "./baseTheme";
import createPalette from "@mui/material/styles/createPalette";

const agrosfarDarkThemePalette = {
  primary: {
    pastel: "#E0F0EA",
    light: "#B4D9CA",
    main: "#2F8560",
    medium: "#216545",
    dark: "#123F25",
  },
  secondary: {
    pastel: "#F1ECE7",
    light: "#DAD0C7",
    main: "#68523D",
    medium: "#564230",
    dark: "#443023",
  },
  ...globalThemePalette,
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
            color: "rgba(47, 133, 96, 1)",
            borderColor: "rgba(47, 133, 96, 1)",
          },
        },
      },
    },
  },
};

export default agrosfarDarkTheme;
