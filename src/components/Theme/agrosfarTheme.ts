import { createTheme } from "@mui/material";
import { globalThemePallete } from "./baseTheme";

const agrosfarThemePallete = createTheme({
  palette: {
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
  },
});

const agrosfarThemeOptions = {
  palette: agrosfarThemePallete.palette,
  components: {
    MuiCheckbox: {
      styleOverrides: {
        root: {
          "&.Mui-checked": {
            color: agrosfarThemePallete.palette.primary.dark,
          },
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          color: globalThemePallete.palette.text.primary,
          ":hover": {
            backgroundColor: agrosfarThemePallete.palette.primary.light,
          },
          "&.Mui-selected": {
            backgroundColor: agrosfarThemePallete.palette.primary.light,
            ":hover": {
              backgroundColor: agrosfarThemePallete.palette.primary.light,
            },
          },
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

const agrosfarTheme = createTheme(agrosfarThemeOptions);
export default agrosfarTheme;
