import { common } from "@mui/material/colors";
import { globalThemePallete } from "./baseTheme";
import createPalette from "@mui/material/styles/createPalette";

const agrosfarThemePallete = {
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
  ...globalThemePallete,
};

const themePallete = createPalette(agrosfarThemePallete);

const agrosfarTheme = {
  palette: themePallete,
  components: {
    MuiCheckbox: {
      styleOverrides: {
        root: {
          "&.Mui-checked": {
            color: agrosfarThemePallete.primary.dark,
          },
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          color: globalThemePallete.text.primary,
          ":hover": {
            backgroundColor: agrosfarThemePallete.primary.light,
          },
          "&.Mui-selected": {
            backgroundColor: agrosfarThemePallete.primary.light,
            ":hover": {
              backgroundColor: agrosfarThemePallete.primary.light,
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
              fill: themePallete.primary.medium,
            },
          },
        },
      },
    },
  },
};

export default agrosfarTheme;
