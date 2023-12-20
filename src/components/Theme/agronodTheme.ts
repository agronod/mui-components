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
          "&.Mui-checked:not(.Mui-disabled)": {
            color: themePalette.primary.medium,
            "&:hover": {
              color: themePalette.primary.mediumHover,
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
              borderColor: themePalette.primary.mediumHover,
            },
          },
          "& .MuiChip-root": {
            backgroundColor: themePalette.primary.light,
          },
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        outlined: {
          ":hover": {
            boxShadow: `0px 0px 0px 1px ${themePalette.primary.dark}`,
          },
          "&.MuiButton-outlinedPrimary:not(.Mui-disabled)": {
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
            textDecoration: "none",
            backgroundColor: "transparent",
            color: themePalette.text.secondary,
          },
          ":active": {
            color: themePalette.primary.darkHover,
          },
          "&.MuiButton-textSecondary": {
            color: themePalette.secondary.main,
            ":hover": {
              color: themePalette.secondary.medium,
            },
            ":active": {
              color: themePalette.secondary.dark,
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
                backgroundColor: themePalette.primary.mainHover,
              },
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
            backgroundColor: themePalette.primary.pastel,
            "& .MuiCheckbox-root": {
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
            ":hover": {
              color: themePalette.text.secondary,
              backgroundColor: themePalette.primary.light,
              "& span": { color: themePalette.text.secondary },
              "& .MuiCheckbox-root": {
                color: themePalette.primary.medium,
              },
            },
            ":focus-visible": {
              boxShadow: `0px 0px 0px 2px ${themePalette.primary.medium} inset`,
              borderRadius: "4px",
              borderColor: themePalette.primary.medium,
              backgroundColor: themePalette.primary.light,
            },
            "& .MuiSvgIcon-root": {
              color: themePalette.primary.medium,
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

export default agronodTheme;
