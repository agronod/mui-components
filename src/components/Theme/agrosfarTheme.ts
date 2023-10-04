import { common } from "@mui/material/colors";
import { globalThemePalette } from "./baseTheme";
import createPalette from "@mui/material/styles/createPalette";

export const agrosfarThemePalette = {
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

const themePalette = createPalette(agrosfarThemePalette);

const agrosfarTheme = {
  palette: themePalette,
  components: {
    MuiCheckbox: {
      styleOverrides: {
        root: {
          "&.Mui-checked:not(.Mui-disabled)": {
            color: themePalette.primary.main,
            "&:hover": {
              color: themePalette.primary.medium,
            },
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          "&:hover": {
            "&.MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
              borderColor: themePalette.primary.medium,
            },
          },
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          color: themePalette.text.primary,
          ":hover": {
            backgroundColor: themePalette.primary.light,
          },
          "&.Mui-selected": {
            backgroundColor: themePalette.primary.light,
            ":hover": {
              backgroundColor: themePalette.primary.light,
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
    MuiSwitch: {
      styleOverrides: {
        root: {
          ":hover": {
            "& .Mui-checked:not(.Mui-disabled)": {
              "& + .MuiSwitch-track": {
                backgroundColor: themePalette.primary.medium,
              },
            },
          },
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        outlined: {
          ":hover": {
            color: themePalette.primary.medium,
            boxShadow: `0px 0px 0px 1px ${themePalette.primary.dark}`,
          },
          ":active": {
            backgroundColor: themePalette.primary.pastel,
          },
          "&.MuiButton-outlinedSecondary": {
            ":hover": {
              borderColor: themePalette.secondary.dark,
              color: themePalette.secondary.medium,
            },
            ":active": {
              backgroundColor: themePalette.secondary.pastel,
            },
          },
        },
        contained: {
          "&.MuiButton-containedPrimary": {
            ":hover": {
              backgroundColor: themePalette.primary.medium,
            },
          },
          "&.MuiButton-containedSecondary": {
            ":hover": {
              backgroundColor: themePalette.secondary.medium,
            },
          },
        },
        text: {
          ":hover": {
            textDecoration: "underline",
            color: themePalette.primary.medium,
            backgroundColor: "transparent",
          },
          ":active": {
            color: themePalette.primary.dark,
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
  },
};

export default agrosfarTheme;
