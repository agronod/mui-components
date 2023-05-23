import { globalThemePalette } from "./baseTheme";
import createPalette from "@mui/material/styles/createPalette";

const agronodThemePalette = createPalette({
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
  ...globalThemePalette,
});

const themePalette = createPalette(agronodThemePalette);

const agronodTheme = {
  palette: agronodThemePalette,
  components: {
    MuiCheckbox: {
      styleOverrides: {
        root: {
          "&.Mui-checked": {
            color: themePalette.primary.medium,
            "&:hover": {
            color: themePalette.primary.mediumHover,
            }
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          "&:hover": {
            "&.MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
              borderColor: themePalette.primary.mediumHover,
            },
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          "&:hover": {
            color: themePalette.primary.main,
            textDecorationColor: themePalette.primary.main,
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        outlined: {
          "&.MuiButton-outlinedPrimary": {
            color: themePalette.text.primary,
            borderColor: themePalette.primary.main,
            ":hover": {
              borderColor: themePalette.primary.dark,
            },
            ":active": {
              backgroundColor: themePalette.primary.pastel,
            },
          },
          "&.MuiButton-outlinedSecondary": {
            ":active": {
              backgroundColor: themePalette.secondary.pastel,
            },
          },
        },
        contained: {
          "&.MuiButton-containedPrimary": {
            ":hover": {
              backgroundColor: themePalette.primary.mainHover,
            },
          },
          "&.MuiButton-containedSecondary": {
            ":hover": {
              backgroundColor: themePalette.secondary.medium,
            },
          },
          ".MuiTouchRipple-child": {
            backgroundColor: "rgba(255, 255, 255, 0.7) !important",
          },
        },
        text: {
          color: themePalette.text.primary,
          ":hover": {
            textDecoration: "underline",
            backgroundColor: "transparent",
            color: "initial",
          },
          ":active": {
            color: `${themePalette.primary.darkHover}`,
          },
          "&.MuiButton-textSecondary": {
            color: themePalette.secondary.main,
            ":hover": {
              color: `${themePalette.secondary.medium}`,
            },
            ":active": {
              color: `${themePalette.secondary.dark}`,
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
              fill: themePalette.primary.medium,
            },
          },
        },
      },
    },
  },
};

export default agronodTheme;
