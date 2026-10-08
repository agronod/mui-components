import { deepmerge } from "@mui/utils";
import createBrandTheme, { BrandPrimaryScale } from "./brandTheme";

/**
 * Admin theme: the burgundy scale (formerly `palette.tertiary`) as primary.
 * Every other colour and component override is inherited from the Agronod
 * theme via `createBrandTheme`.
 */
export const adminPrimary: BrandPrimaryScale = {
  hint: "#FBF6F5",
  pastel: "#F4E8E7",
  light: "#DAC7C8",
  main: "#7E474B",
  medium: "#5B353A",
  dark: "#3A1E25",
};

// Admin checkbox uses `main` for the checked state and `medium` for hover,
// overriding createBrandTheme's default (`medium` checked / `dark` hover).
// Same swap for the text/link-style button, which otherwise inherits the
// gray `text.primary`/`text.secondary` colors from createBrandTheme.
const adminTheme = deepmerge(createBrandTheme(adminPrimary), {
  components: {
    MuiCheckbox: {
      styleOverrides: {
        root: {
          "&.Mui-checked:not(.Mui-disabled)": {
            color: adminPrimary.main,
            "&:hover": {
              color: adminPrimary.medium,
            },
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        text: {
          color: adminPrimary.main,
          ":hover": {
            color: adminPrimary.medium,
          },
        },
      },
    },
  },
});

export default adminTheme;
