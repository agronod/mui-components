import { createTheme, ThemeOptions } from "@mui/material/styles";
import { common, grey } from "@mui/material/colors";
import FuturaMediumOTF from "./fonts/futura/FuturaPTMedium.otf";
import FuturaBookOTF from "./fonts/futura/FuturaPTBook.otf";
import InterRegularTTF from "./fonts/inter/static/Inter-Regular.ttf";
import InterMediumTTF from "./fonts/inter/static/Inter-Medium.ttf";
import { circularProgressClasses } from "@mui/material";

function pxToRem(fontSize: number) {
  return `${fontSize / 16}rem`;
}

const globalTheme = createTheme({
  palette: {
    background: {
      default: "#F8F6F3",
      paper: common.white,
    },
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
    error: {
      main: "#B00020",
    },
    text: { primary: grey[900], secondary: grey[700] },
  },
});

const baseThemeOptions: ThemeOptions = {
  palette: globalTheme.palette,
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontFamily: "inter",
          fontSize: pxToRem(16),
          lineHeight: 1.5,
          fontWeight: 400,
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
          backgroundColor: globalTheme.palette.primary.light,
          margin: "0px 10px 0px 0px",
          padding: "0px 12px 0px 12px",
          color: globalTheme.palette.primary.dark,
          textTransform: "none",
          borderRadius: "4px",
          minHeight: "26px",
          "&.Mui-selected": {
            backgroundColor: globalTheme.palette.primary.main,
            color: globalTheme.palette.common.white,
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
          backgroundColor: globalTheme.palette.common.white,
          borderBottom: "1px solid #e5e5e5",
          boxShadow: "0px 2px 10px 0px rgb(0 0 0 / 10%)",
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          fontFamily: "inter",
          color: globalTheme.palette.primary.dark,
          textDecorationColor: globalTheme.palette.primary.dark,
          textUnderlineOffset: "2px",
          "&:hover": {
            color: globalTheme.palette.primary.main,
            textDecorationColor: globalTheme.palette.primary.main,
          },
          ":disabled": {
            color: globalTheme.palette.grey[500],
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
    MuiButtonBase: {
      styleOverrides: {
        disabled: {},
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          "&.Mui-disabled": {
            color: `${globalTheme.palette.grey[500]} !important`,
          },
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
          "&.Mui-disabled": {
            color: "white",
            backgroundColor: `${globalTheme.palette.grey[500]} !important`,
          },
          ":hover": {
            backgroundColor: "#215537",
            boxShadow: "none",
          },
        },
        outlined: {
          borderRadius: "100vmax",
          borderColor: globalTheme.palette.grey[400],
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
            borderColor: globalTheme.palette.primary.dark,
            color: globalTheme.palette.primary.dark,
          },
          "&.Mui-disabled": {
            borderColor: `${globalTheme.palette.grey[500]} !important`,
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
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
          fontWeight: 500,
          lineHeight: 1.08,
          marginLeft: -2,
        },
        h4: {
          fontFamily: "futura",
          fontSize: pxToRem(34),
          fontWeight: 500,
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
          lineHeight: 1.42,
        },
        overline: {
          fontFamily: "inter",
          fontSize: pxToRem(10),
          fontWeight: 500,
          letterSpacing: 1,
          lineHeight: 1.6,
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          color: globalTheme.palette.text.primary,
          "*": {
            color: "inherit",
          },
          ":hover": {
            backgroundColor: globalTheme.palette.primary.light,
            "*": {
              color: "inherit",
            },
          },
          "&.Mui-selected": {
            backgroundColor: globalTheme.palette.primary.light,
            ":hover": {
              backgroundColor: globalTheme.palette.primary.light,
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
            fontSize: 22,
          },
          "& .MuiSvgIcon-root:last-of-type": {
            fontSize: 22,
            "& path": {
              fill: globalTheme.palette.primary.medium,
            },
          },
        },
      },
    },
  },
};

const baseTheme = createTheme(baseThemeOptions);

export { baseTheme, baseThemeOptions, pxToRem };
