import { createTheme } from "@mui/material";
import { globalThemePallete } from "./baseTheme";

const agronodThemePallete = createTheme({
  palette: {
    primary: {
      main: "#ECCC7A",
      light: "#FBF2DD",
      medium: "#F4E0AD",
      dark: "#D7822F",
    },
    secondary: {
      main: "#51697E",
      light: "#E8ECF2",
      medium: "#C7D1DA",
      dark: "#17222D",
    },
  },
});

const agronodThemeOptions = {
  palette: agronodThemePallete.palette,
  components: {
    MuiCheckbox: {
      styleOverrides: {
        root: {
          "&.Mui-checked": {
            color: agronodThemePallete.palette.primary.dark,
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          "&:hover": {
            color: agronodThemePallete.palette.primary.main,
            textDecorationColor: agronodThemePallete.palette.primary.main,
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        outlined: {
          color: globalThemePallete.palette.text.primary,

          ":hover": {
            borderColor: agronodThemePallete.palette.primary.dark,
          },
        },
        text: {
          textDecoration: "underline",
        },
      },
    },
  },
};

const agronodTheme = createTheme(agronodThemeOptions);

export default agronodTheme;
