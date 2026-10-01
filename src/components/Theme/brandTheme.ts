import { createTheme } from "@mui/material";
import { globalThemePalette } from "./baseTheme";

/**
 * Primary colour scale a brand theme is built from. The `*Hover` steps are
 * optional; when missing the next darker step is used for the interaction state.
 */
export type BrandPrimaryScale = {
  hint: string;
  pastel: string;
  light: string;
  main: string;
  mainHover?: string;
  medium: string;
  mediumHover?: string;
  dark: string;
  darkHover?: string;
};

/**
 * Builds a brand theme (Agronod-style component overrides) around a primary
 * scale. Everything except `primary` comes from `globalThemePalette`.
 */
const createBrandTheme = (primary: BrandPrimaryScale) => {
  const palette = { primary, ...globalThemePalette };
  // Throwaway theme so MUI derives contrastText etc. from the real palette.
  const themePalette = createTheme({ palette }).palette;
  const mainHover = themePalette.primary.mainHover ?? themePalette.primary.medium;
  const mediumHover = themePalette.primary.mediumHover ?? themePalette.primary.dark;
  const darkHover = themePalette.primary.darkHover ?? themePalette.primary.dark;

  return {
    palette,
    components: {
      MuiCheckbox: {
        styleOverrides: {
          root: {
            "&.Mui-checked:not(.Mui-disabled)": {
              color: themePalette.primary.medium,
              "&:hover": {
                color: mediumHover,
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
                borderColor: mediumHover,
              },
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
            "&.MuiButton-outlined.MuiButton-colorPrimary:not(.Mui-disabled)": {
              color: themePalette.text.primary,
              borderColor: themePalette.primary.main,
              ":hover": {
                borderColor: themePalette.primary.dark,
                boxShadow: `0px 0px 0px 1px ${themePalette.primary.dark}`,
              },
              ":active": {
                backgroundColor: themePalette.primary.pastel,
              },
            },
            "&.MuiButton-outlined.MuiButton-colorSecondary:not(.Mui-disabled)": {
              ":hover": {
                borderColor: themePalette.secondary.dark,
                boxShadow: `0px 0px 0px 1px ${themePalette.secondary.dark}`,
              },
              ":active": {
                backgroundColor: themePalette.secondary.pastel,
              },
            },
          },
          contained: {
            "&.MuiButton-contained.MuiButton-colorPrimary": {
              ":hover": {
                backgroundColor: mainHover,
              },
              ":active": {
                backgroundColor: themePalette.primary.medium,
              },
            },
            "&.MuiButton-contained.MuiButton-colorSecondary": {
              ":hover": {
                backgroundColor: themePalette.secondary.medium,
              },
              ":active": {
                backgroundColor: themePalette.secondary.dark,
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
              color: darkHover,
            },
            "&.MuiButton-text.MuiButton-colorSecondary": {
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
                  backgroundColor: mainHover,
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
            "& .MuiCheckbox-root": {
              paddingLeft: 0,
            },
            ":hover": {
              backgroundColor: themePalette.primary.pastel,
              "& .MuiCheckbox-root": {
                color: globalThemePalette.input.border,
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
                color: themePalette.primary.medium,
              },
            },
          },
        },
      },
    },
  };
};

export default createBrandTheme;
