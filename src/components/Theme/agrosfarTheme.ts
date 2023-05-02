import { createTheme } from "@mui/material";
import { globalThemePallete } from "./baseTheme";

const agrosfarThemePallete = createTheme({
  palette: {
    primary: {
      main: "#2C7A4D",
      light: "#D6EFDF",
      medium: "#59b87f",
      dark: "#123F25",
    },
    secondary: {
      main: "#756B59",
      light: "#f8f6f3",
      medium: "#dad0c7",
      dark: "#36322A",
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
  },
};

const agrosfarTheme = createTheme(agrosfarThemeOptions);
export default agrosfarTheme;
