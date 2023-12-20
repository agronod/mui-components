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

          "& .MuiChip-root": {
            backgroundColor: themePalette.primary.light,
          },
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          color: themePalette.text.primary,
          ":hover": {
            backgroundColor: themePalette.primary.pastel,
            "& .MuiSvgIcon-root": {
              color: globalThemePalette.input.border,
            },
          },
          ":focus-visible": {
            boxShadow: `0px 0px 0px 2px ${themePalette.primary.medium} inset`,
            backgroundColor: "inherit",
            borderRadius: "4px",
            borderColor: themePalette.primary.medium,
          },
          "&.Mui-selected": {
            backgroundColor: themePalette.primary.light,
            fontWeight: "500",
            "& span": { fontWeight: "500" },
            ":hover": {
              fontWeight: "400",
              backgroundColor: themePalette.primary.light,
              "& span": { fontWeight: "400" },
            },
            ":focus-visible": {
              boxShadow: `0px 0px 0px 2px ${themePalette.primary.medium} inset`,
              borderRadius: "4px",
              borderColor: themePalette.primary.medium,
              backgroundColor: themePalette.primary.light,
            },
            "& .MuiSvgIcon-root": {
              color: themePalette.primary.main,
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
          borderColor: themePalette.primary.main,
          ":hover": {
            color: themePalette.primary.dark,
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
          color: themePalette.primary.main,
          ":hover": {
            color: themePalette.primary.medium,
            textDecoration: "none",
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
    MuiListItemButton: {
      styleOverrides: {
        root: {
          ":hover": {
            backgroundColor: themePalette.primary.mediumHover,
          },
          "&:focus-visible": {
            backgroundColor: themePalette.primary.mediumHover,
          },
          "&.active": {
            backgroundColor: themePalette.primary.medium,

            "&:focus-visible": {
              backgroundColor: themePalette.primary.mediumHover,
            },
          },
        },
      },
    },
  },
};

export default agrosfarTheme;
