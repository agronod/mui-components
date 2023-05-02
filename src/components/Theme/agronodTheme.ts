import { globalThemePallete } from "./baseTheme";
import createPalette from "@mui/material/styles/createPalette";

const agronodThemePallete = createPalette({
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
  ...globalThemePallete,
});

const themePallete = createPalette(agronodThemePallete);

const agronodTheme = {
  palette: agronodThemePallete,
  components: {
    MuiCheckbox: {
      styleOverrides: {
        root: {
          "&.Mui-checked": {
            color: themePallete.primary.dark,
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          "&:hover": {
            color: themePallete.primary.main,
            textDecorationColor: themePallete.primary.main,
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        outlined: {
          color: globalThemePallete.text.primary,

          ":hover": {
            borderColor: themePallete.primary.dark,
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
              fill: themePallete.primary.medium,
            },
          },
        },
      },
    },
  },
};

export default agronodTheme;
