import {
  createTheme,
  SimplePaletteColorOptions,
  ThemeOptions,
} from "@mui/material/styles";
import { common } from "@mui/material/colors";
import FuturaMediumOTF from "./fonts/futura/FuturaPTMedium.otf";
import FuturaBookOTF from "./fonts/futura/FuturaPTBook.otf";
import InterRegularTTF from "./fonts/inter/static/Inter-Regular.ttf";
import InterMediumTTF from "./fonts/inter/static/Inter-Medium.ttf";
import { circularProgressClasses } from "@mui/material";

declare module "@mui/material/styles" {
  interface PaletteColorOptions extends SimplePaletteColorOptions {
    pastel?: string;
    mainHover?: string;
    mediumHover?: string;
    darkHover?: string;
  }
}
declare module "@mui/material/Typography/Typography" {
  interface TypographyPropsVariantOverrides {
    body1bold: true;
    body2bold: true;
    body3: true;
    body4: true;
    component: true;
  }
}

const pxToRem = (fontSize: number) => {
  return `${fontSize / 16}rem`;
};

const semanticThemePallete = {
  error: {
    pastel: "#FCECEE",
    light: "#F7C7D3",
    main: "#D4483E",
    medium: "#B73831",
    dark: "#A92E26",
  },
  warning: {
    pastel: "#FDF0E6",
    light: "#FBDCB7",
    main: "#ED9135",
    medium: "#E0732C",
    dark: "#D65A26",
  },
  info: {
    pastel: "#E8ECF2",
    light: "#C7D1DA",
    main: "#51697E",
    medium: "#455B6E",
    dark: "#364858",
  },
  success: {
    pastel: "#EAF5EA",
    light: "#CEE5CB",
    main: "#5D9D52",
    medium: "#457A3B",
    dark: "#2F5D28",
  },
};

const grayThemePallete = {
  text: {
    primary: "#252321",
    secondary: "#666461",
    disabled: "#A3A19F",
  },
  icon: {
    primary: "#464542",
    secondary: "#7A7875",
  },
  input: {
    background: common.white,
    backgroundDisabled: "#FCFAF7",
    border: "#C2C0BD",
  },
  background: {
    page: "#F8F6F3",
    paper: common.white,
    card: common.white,
    overlay: "rgba(37, 35, 33, 0.3)",
  },
  divider: "#E5E3E0",
  border: "#E5E3E0",
  disabled: "#A3A19F",
};

const globalThemePallete = createTheme({
  palette: {
    ...grayThemePallete,
    ...semanticThemePallete,
  },
});

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
  body1bold: {
    fontFamily: "inter",
    fontSize: pxToRem(16),
    fontWeight: 500,
    lineHeight: 1.5,
  },
  body2: {
    fontFamily: "inter",
    fontSize: pxToRem(14),
    fontWeight: 400,
    letterSpacing: 0.1,
    lineHeight: 1.43,
  },
  body2bold: {
    fontFamily: "inter",
    fontSize: pxToRem(14),
    fontWeight: 500,
    letterSpacing: 0.1,
    lineHeight: 1.43,
  },
  body3: {
    fontFamily: "inter",
    fontSize: pxToRem(12),
    fontWeight: 400,
    letterSpacing: 0.1,
    lineHeight: 1.42,
  },
  body4: {
    fontFamily: "inter",
    fontSize: pxToRem(10),
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
    fontSize: pxToRem(12),
    fontWeight: 400,
    letterSpacing: 1,
    lineHeight: 1.6,
  },
};

const baseThemeOptions: ThemeOptions = {
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
          fontFamily: "inter",
          boxShadow: "none",
          fontSize: pxToRem(14),
          fontWeight: 500,
          lineHeight: pxToRem(16),
          textTransform: "none",
          ":hover": {
            boxShadow: "none",
          },
        },
        contained: {
          borderRadius: "100vmax",
          paddingBottom: "12px",
          paddingLeft: "24px",
          paddingRight: "24px",
          paddingTop: "12px",
        },
        outlined: {
          borderRadius: "100vmax",
          paddingBottom: "12px",
          paddingLeft: "24px",
          paddingRight: "24px",
          paddingTop: "12px",

          ":hover": {
            backgroundColor: "transparent",
          },
        },
        text: {
          minWidth: "unset",
          height: "unset",
          color: globalThemePallete.palette.text.primary,
          padding: "0",

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
          "*": {
            color: "inherit",
          },
          ":hover": {
            "*": {
              color: "inherit",
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
          height: "15px",
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
    MuiPaper: {
      styleOverrides: {
        elevation: {
          boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.05)",
        },
      },
    },
  },
};

const baseTheme = createTheme(baseThemeOptions);

export {
  baseTheme,
  baseThemeOptions,
  pxToRem,
  globalThemePallete,
  globalTypography,
};
