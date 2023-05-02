import { createTheme } from "@mui/material";
import { globalThemePallete } from "./baseTheme";

const agronodThemePallete = createTheme({
  palette: {
    primary: {
      pastel: "#FFF5D9",
      light: "#FDECB5",
      main: "#F2CB6C",
      mainHover: "#DDBA65",
      medium: "#E6B34F",
      mediumHover: "#D2A54A",
      dark: "#C3872F",
      darkHover: "#B37D2E",
    },
    secondary: {
      pastel: "#E8ECF2",
      light: "#C7D1DA",
      main: "#51697E",
      medium: "#455B6E",
      dark: "#364858",
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
    MuiRadio: {
      styleOverrides: {
        root: {
          "& .MuiSvgIcon-root:last-of-type": {
            "& path": {
              fill: globalThemePallete.palette.primary.medium,
            },
          },
        },
      },
    },
  },
};

const agronodTheme = createTheme(agronodThemeOptions);

export default agronodTheme;
