import { createTheme, ThemeOptions } from "@mui/material/styles";
import FuturaMediumOTF from "./fonts/futura/FuturaPTMedium.otf";
import FuturaBookOTF from "./fonts/futura/FuturaPTBook.otf";
import InterRegularTTF from "./fonts/inter/static/Inter-Regular.ttf";
import InterMediumTTF from "./fonts/inter/static/Inter-Medium.ttf";

const globalTheme = createTheme({
  palette: {
    background: {
      default: "#F8F6F3",
      paper: "#fff",
    },
    secondary: {
      main: "#756B59",
      light: "#f8f6f3",
      medium: "#dad0c7",
      dark: "#36322A",
    },
    primary: {
      main: "#2C7A4D",
      light: "#D6EFDF",
      medium: "#59b87f",
      dark: "#123F25",
    },
    text: { primary: "#000000" },
  },
});

const baseThemeOptions: ThemeOptions = {
  palette: globalTheme.palette,
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontFamily: "inter",
          fontSize: "16px",
          lineHeight: "24px",
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
              font-weight: 350;
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
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: globalTheme.palette.common.white,
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
          fontSize: "12px",
          lineHeight: "18px",
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
          ":disabled": {
            color: globalTheme.palette.grey[500],
          },
        },
        contained: {
          borderRadius: 40,
          fontFamily: "inter",
          fontSize: "14px",
          lineHeight: "16px",
          paddingBottom: "12px",
          paddingTop: "12px",
          paddingLeft: "24px",
          paddingRight: "24px",
          fontWeight: 500,
          textTransform: "none",
          ":disabled": {
            color: "white",
            backgroundColor: globalTheme.palette.grey[500],
          },
          ":hover": {
            backgroundColor: "#215537",
          },
        },
        outlined: {
          borderRadius: 40,
          fontFamily: "inter",
          fontSize: "14px",
          lineHeight: "16px",
          paddingBottom: "12px",
          paddingTop: "12px",
          paddingLeft: "24px",
          paddingRight: "24px",
          fontWeight: 500,
          textTransform: "none",
          ":disabled": {
            borderColor: globalTheme.palette.grey[500],
          },
        },
        disabled: {
          color: "red !important",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          fontFamily: "futura",
          fontSize: "96px",
          lineHeight: "96px",
          fontWeight: 350,
        },
        h2: {
          fontFamily: "futura",
          fontSize: "60px",
          lineHeight: "72px",
          fontWeight: 350,
        },
        h3: {
          fontFamily: "futura",
          fontSize: "48px",
          lineHeight: "52px",
          fontWeight: 500,
        },
        h4: {
          fontFamily: "futura",
          fontSize: "34px",
          lineHeight: "36px",
          fontWeight: 500,
        },
        h5: {
          fontFamily: "futura",
          fontSize: "24px",
          lineHeight: "24px",
          fontWeight: 500,
        },
        h6: {
          fontFamily: "futura",
          fontSize: "20px",
          lineHeight: "24px",
          fontWeight: 500,
        },
        subtitle1: {
          fontFamily: "inter",
          fontSize: "18px",
          lineHeight: "28px",
          fontWeight: 500,
        },
        subtitle2: {
          fontFamily: "inter",
          fontSize: "18px",
          lineHeight: "28px",
          fontWeight: 400,
        },
        body1: {
          fontFamily: "inter",
          fontSize: "16px",
          lineHeight: "24px",
          fontWeight: 400,
        },
        body2: {
          fontFamily: "inter",
          fontSize: "14px",
          lineHeight: "20px",
          fontWeight: 400,
        },
        // Seems as implemented the font is only downloaded if specified in the button component
        // button: {
        //   fontFamily: "inter",
        //   fontSize: "14px",
        //   lineHeight: "16px",
        //   fontWeight: 500,
        // },
        caption: {
          fontFamily: "inter",
          fontSize: "12px",
          lineHeight: "18px",
          fontWeight: 400,
        },
        overline: {
          fontFamily: "inter",
          fontSize: "10px",
          lineHeight: "16px",
          fontWeight: 500,
        },
      },
    },
  },
};

const baseTheme = createTheme(baseThemeOptions);

export { baseTheme, baseThemeOptions };
