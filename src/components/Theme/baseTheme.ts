import { createTheme, Theme, ThemeOptions } from "@mui/material/styles";
import { common, grey } from "@mui/material/colors";
import FuturaMediumOTF from "./fonts/futura/FuturaPTMedium.otf";
import FuturaBookOTF from "./fonts/futura/FuturaPTBook.otf";
import InterRegularTTF from "./fonts/inter/static/Inter-Regular.ttf";
import InterMediumTTF from "./fonts/inter/static/Inter-Medium.ttf";
import { circularProgressClasses } from "@mui/material";
import { deepmerge } from "@mui/utils";

type ProjectThemes = "AGRONOD" | "AGROSFAR";

type SelectBaseThemeProps = (
  projectTheme: ProjectThemes,
  options?: ThemeOptions
) => ThemeOptions;

const pxToRem = (fontSize: number) => {
  return `${fontSize / 16}rem`;
};

const semanticThemePallete = {
  error: {
    dark: "#A92E26",
    medium: "#B73831",
    main: "#D4483E",
    border: "#F7CFD3",
    background: "#FCECEE",
  },
  warning: {
    dark: "#D65A26",
    medium: "#E0732C",
    main: "#ED9135",
    border: "#FBE0B7",
    background: "#FDF3E2",
  },
  success: {
    dark: "#2F5D28",
    medium: "#457A3B",
    main: "#5D9D52",
    border: "#CEE5CB",
    background: "#EAF5EA",
  },
  info: {
    dark: "#364858",
    medium: "#455B6E",
    main: "#51697E",
    border: "#C7D1DA",
    background: "#E8ECF2",
  },
};

const grayThemePallete = {
  text: {
    primary: "#252321",
    secondary: "#666461",
  },
  icon: {
    primary: "#464542",
    secondary: "#7A7875",
  },
  disabled: "#A3A19F",
  outlines: "#C2C0BD",
  dividers: "#E5E3E0",
  background: {
    default: "#F8F6F3",
    paper: common.white,
  },
};

const agronodThemePallete = {
  palette: {
    primary: {
      main: "#ECCC7A",
      light: "#FBF2DD",
      medium: "#F4E0AD",
      dark: "#D7822F",
    },
    secondary: {
      main: "#51697E",
      light: "#E8ECF2",
      medium: "#C7D1DA",
      dark: "#17222D",
    },
    ...semanticThemePallete,
    ...grayThemePallete,
  },
};

const agrosfarThemePallete = {
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
    ...semanticThemePallete,
    ...grayThemePallete,
  },
};

const globalTypography = {
  h1: {
    fontFamily: "futura",
    fontSize: pxToRem(96),
    fontWeight: 400,
    letterSpacing: -1.5,
    lineHeight: 1,
    marginLeft: -6,
  },
  h2: {
    fontFamily: "futura",
    fontSize: pxToRem(60),
    fontWeight: 400,
    letterSpacing: -0.5,
    lineHeight: 1.2,
    marginLeft: -3,
  },
  h3: {
    fontFamily: "futura",
    fontSize: pxToRem(48),
    fontWeight: 450,
    lineHeight: 1.08,
    marginLeft: -2,
  },
  h4: {
    fontFamily: "futura",
    fontSize: pxToRem(34),
    fontWeight: 450,
    lineHeight: 1.06,
  },
  h5: {
    fontFamily: "futura",
    fontSize: pxToRem(24),
    fontWeight: 500,
    letterSpacing: 0.18,
    lineHeight: 1.17,
  },
  h6: {
    fontFamily: "futura",
    fontSize: pxToRem(20),
    fontWeight: 400,
    letterSpacing: 0.15,
    lineHeight: 1.2,
  },
  subtitle1: {
    fontFamily: "inter",
    fontSize: pxToRem(18),
    fontWeight: 500,
    letterSpacing: 0.1,
    lineHeight: 1.56,
  },
  subtitle2: {
    fontFamily: "inter",
    fontSize: pxToRem(16),
    fontWeight: 500,
    letterSpacing: 0.1,
    lineHeight: 1.5,
  },
  body1: {
    fontFamily: "inter",
    fontSize: pxToRem(16),
    fontWeight: 400,
    lineHeight: 1.5,
  },
  body2: {
    fontFamily: "inter",
    fontSize: pxToRem(14),
    fontWeight: 400,
    letterSpacing: 0.1,
    lineHeight: 1.43,
  },
  caption: {
    fontFamily: "inter",
    fontSize: pxToRem(12),
    fontWeight: 400,
    letterSpacing: 0.1,
    lineHeight: 1.42,
  },
  overline: {
    fontFamily: "inter",
    fontSize: pxToRem(10),
    fontWeight: 500,
    letterSpacing: 1,
    lineHeight: 1.6,
  },
};

const setBaseThemeOptions = (
  globalThemePallete: Theme,
  projectTheme: ProjectThemes
): ThemeOptions => {
  return {
    palette: globalThemePallete.palette,
    components: {
      MuiInputBase: {
        styleOverrides: {
          root: {
            fontFamily: "inter",
            fontSize: pxToRem(16),
            lineHeight: 1.5,
            fontWeight: 400,
            borderRadius: "8px",
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            borderRadius: "8px",
          },
        },
      },
      MuiFormLabel: {
        styleOverrides: {
          root: {
            fontSize: pxToRem(14),
            fontFamily: "Inter",
            "&.Mui-focused": {
              color: globalThemePallete.palette.text.secondary,
            },
            "&.Mui-disabled:hover": {
              cursor: "default",
            },
            "&:hover": {
              cursor: "pointer",
            },
          },
        },
      },
      MuiCheckbox: {
        styleOverrides: {
          root: {
            "&.Mui-checked": {
              color: globalThemePallete.palette.primary.dark,
            },
          },
        },
      },
      MuiSvgIcon: {
        styleOverrides: {
          fontSizeLarge: "148px",
        },
      },
      MuiCssBaseline: {
        styleOverrides: `
          @font-face {
              font-family: 'futura';
              font-weight: 400;
              src: url(${FuturaBookOTF}) format('opentype');
          }
          @font-face {
              font-family: 'futura';
              font-weight: 500;
              src: url(${FuturaMediumOTF}) format('opentype');
          }
          @font-face {
              font-family: 'inter';
              font-weight: 400;
              src: url(${InterRegularTTF}) format('opentype');
          }
          @font-face {
              font-family: 'inter';
              font-weight: 500;
              src: url(${InterMediumTTF}) format('opentype');
          }
          @global: {
              html: {
                  WebkitFontSmoothing: "auto",
              }
          }
      `,
      },
      MuiTab: {
        styleOverrides: {
          root: {
            fontFamily: "inter",
            margin: "0px 10px 0px 0px",
            padding: "12px 26px",
            textTransform: "none",
            borderRadius: "24px",
            minHeight: "26px",
            "&.Mui-selected": {
              backgroundColor: globalThemePallete.palette.common.white,
              color: globalThemePallete.palette.common.black,
            },
            ":last-child": {
              margin: "0px 0px 0px 0px",
            },
          },
        },
      },
      MuiTabs: {
        styleOverrides: {
          indicator: {
            display: "none",
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: globalThemePallete.palette.common.white,
            borderBottom: "1px solid #e5e5e5",
            boxShadow: "0px 2px 10px 0px rgb(0 0 0 / 10%)",
          },
        },
      },
      MuiLink: {
        styleOverrides: {
          root: {
            fontFamily: "inter",
            color: "inherit",
            textDecorationColor: "inherit",
            textUnderlineOffset: "2px",
            "&:hover": {
              color:
                projectTheme === "AGRONOD"
                  ? globalThemePallete.palette.primary.dark
                  : globalThemePallete.palette.primary.main,
              textDecorationColor:
                projectTheme === "AGRONOD"
                  ? globalThemePallete.palette.primary.dark
                  : globalThemePallete.palette.primary.main,
            },
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            height: "28px",
          },
          label: {
            fontFamily: "inter",
            fontSize: pxToRem(12),
            lineHeight: 1.42,
            paddingLeft: "8px",
            paddingRight: "8px",
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            height: 48,
            minWidth: 192,
          },
          contained: {
            borderRadius: "100vmax",
            boxShadow: "none",
            fontFamily: "inter",
            fontSize: pxToRem(14),
            fontWeight: 500,
            lineHeight: 1.14,
            paddingBottom: "12px",
            paddingLeft: "24px",
            paddingRight: "24px",
            paddingTop: "12px",
            textTransform: "none",
            ":hover": {
              backgroundColor: globalThemePallete.palette.primary.dark,
              boxShadow: "none",
            },
          },
          outlined: {
            borderRadius: "100vmax",
            borderColor: globalThemePallete.palette.primary.main,
            color: globalThemePallete.palette.text.primary,
            fontFamily: "inter",
            fontSize: pxToRem(14),
            fontWeight: 500,
            lineHeight: pxToRem(16),
            paddingBottom: "12px",
            paddingLeft: "24px",
            paddingRight: "24px",
            paddingTop: "12px",
            textTransform: "none",
            ":hover": {
              backgroundColor: "transparent",
              borderColor: globalThemePallete.palette.primary.dark,
            },
          },
          text: {
            minWidth: "unset",
            height: "unset",
            color: globalThemePallete.palette.text.primary,
            fontFamily: "inter",
            fontSize: pxToRem(14),
            fontWeight: 500,
            lineHeight: pxToRem(16),
            padding: "0",
            textTransform: "none",
            ":hover": {
              backgroundColor: "transparent",
              color: globalThemePallete.palette.text.secondary,
            },
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          ...globalTypography,
        },
      },
      MuiMenuItem: {
        styleOverrides: {
          root: {
            fontFamily: "inter",
            color: globalThemePallete.palette.text.primary,
            "*": {
              color: "inherit",
            },
            ":hover": {
              backgroundColor: globalThemePallete.palette.primary.light,
              "*": {
                color: "inherit",
              },
            },
            "&.Mui-selected": {
              backgroundColor: globalThemePallete.palette.primary.light,
              ":hover": {
                backgroundColor: globalThemePallete.palette.primary.light,
              },
            },
          },
        },
      },
      MuiCircularProgress: {
        styleOverrides: {
          root: {
            [`& .${circularProgressClasses.circle}`]: {
              strokeLinecap: "round",
            },
          },
        },
      },
      MuiRadio: {
        styleOverrides: {
          root: {
            "& .MuiSvgIcon-root:first-of-type": {
              fontSize: pxToRem(22),
            },
            "& .MuiSvgIcon-root:last-of-type": {
              fontSize: pxToRem(22),
              "& path": {
                fill: globalThemePallete.palette.primary.medium,
              },
            },
          },
        },
      },
      MuiAlert: {
        styleOverrides: {
          root: {
            borderRadius: "16px",
            color: globalThemePallete.palette.text.primary,
            ...globalTypography.body2,
            alignItems: "center",
            padding: globalThemePallete.spacing(3),
            boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.05)",
          },
          message: {
            paddingLeft: globalThemePallete.spacing(0.5),
          },
          icon: {
            fontSize: pxToRem(20),
          },
          filledError: {
            backgroundColor: "#F7E5E9",
          },
          outlinedError: {
            backgroundColor: "#F7E5E9",
          },
          standardError: {
            backgroundColor: "#F7E5E9",
          },
        },
      },
      MuiAlertTitle: {
        styleOverrides: {
          root: {
            color: globalThemePallete.palette.text.primary,
            ...globalTypography.caption,
          },
        },
      },
      MuiFormHelperText: {
        styleOverrides: {
          root: {
            height: 0,
            lineHeight: 1.25,
            marginLeft: 0,
            fontFamily: "inter",
          },
        },
      },
      MuiContainer: {
        styleOverrides: {
          root: {
            "&.MuiContainer-maxWidthLg": {
              padding: "32px 16px",
              maxWidth: 1040,
              [globalThemePallete.breakpoints.up("lg")]: {
                padding: "32px 0",
              },
            },
          },
        },
      },
    },
  };
};

const setBaseThemePallete = (ProjectTheme: ProjectThemes) =>
  ProjectTheme === "AGRONOD" ? agronodThemePallete : agrosfarThemePallete;

const selectBaseTheme: SelectBaseThemeProps = (projectTheme, options) => {
  const globalThemePallete = createTheme(setBaseThemePallete(projectTheme));
  const baseThemeOptions = setBaseThemeOptions(
    globalThemePallete,
    projectTheme
  );
  const baseTheme = createTheme(baseThemeOptions);
  if (!options) {
    return baseTheme;
  }
  const overriddenTheme = createTheme(deepmerge(baseThemeOptions, options));

  return overriddenTheme;
};

export { selectBaseTheme };
export type { ProjectThemes };
