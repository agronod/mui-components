import { globalThemePalette } from "./baseTheme";
import createPalette from "@mui/material/styles/createPalette";

export const agrosfarThemePalette = {
  primary: {
    hint: "#F3F9F7",
    pastel: "#E0F0EA",
    light: "#B4D9CA",
    main: "#2F8560",
    medium: "#216545",
    dark: "#123F25",
    darkHover: "#052412",
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
          "&:not(.Mui-disabled):hover": {
            "& .MuiOutlinedInput-notchedOutline": {
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
          "& .MuiCheckbox-root": {
            paddingLeft: 0,
          },
          ":hover": {
            backgroundColor: themePalette.primary.pastel,
            "& .MuiCheckbox-root": {
              color: globalThemePalette.input.border,
              paddingLeft: 0,
            },
            "& .MuiCheckbox-root.Mui-checked:not(.Mui-disabled)": {
              color: themePalette.primary.main,
            },
          },
          ":focus-visible": {
            boxShadow: `0px 0px 0px 2px ${themePalette.primary.medium} inset`,
            backgroundColor: "inherit",
            borderRadius: "4px",
            borderColor: themePalette.primary.medium,
          },
          "&.Mui-selected": {
            backgroundColor: themePalette.primary.pastel,
            ":hover": {
              backgroundColor: themePalette.primary.light,
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
          ":hover": {
            color: themePalette.primary.dark,
            boxShadow: `0px 0px 0px 1px ${themePalette.primary.dark}`,
          },
          ":active": {
            backgroundColor: themePalette.primary.pastel,
          },
          "&.MuiButton-outlinedPrimary:not(.Mui-disabled)": {
            color: themePalette.primary.main,
            ":hover": {
              borderColor: themePalette.primary.dark,
              boxShadow: `0px 0px 0px 1px ${themePalette.primary.dark}`,
              color: themePalette.primary.dark,
            },
            ":active": {
              backgroundColor: themePalette.primary.pastel,
            },
          },
          "&.MuiButton-outlinedSecondary:not(.Mui-disabled)": {
            color: themePalette.secondary.main,
            ":hover": {
              borderColor: themePalette.secondary.dark,
              color: themePalette.secondary.medium,
              boxShadow: `0px 0px 0px 1px ${themePalette.secondary.dark}`,
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
            ":active": {
              backgroundColor: themePalette.primary.dark,
            },
          },
          "&.MuiButton-containedSecondary": {
            ":hover": {
              backgroundColor: themePalette.secondary.medium,
            },
            ":active": {
              backgroundColor: themePalette.secondary.dark,
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
  },
};

export default agrosfarTheme;
