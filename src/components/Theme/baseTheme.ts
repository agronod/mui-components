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

declare module "@mui/material/styles/" {
  interface PaletteColorOptions extends SimplePaletteColorOptions {
    pastel?: string;
    mainHover?: string;
    medium?: string;
    mediumHover?: string;
    darkHover?: string;
  }
}
declare module "@mui/material/styles/createPalette" {
  interface Palette {
    icon: {
      primary: string;
      secondary: string;
    };
    input: {
      background: string;
      backgroundDisabled: string;
      border: string;
    };
    border: string;
    disabled: string;
    tertiary: {
      pastel: string;
      light: string;
      main: string;
      medium: string;
      dark: string;
    };
  }
}
declare module "@mui/material/styles/" {
  interface TypeBackground {
    page?: string;
    card?: string;
    overlay?: string;
  }
}

declare module "@mui/material/styles/createPalette" {
  interface PaletteColor {
    pastel?: string;
    mainHover?: string;
    medium?: string;
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

const semanticThemePalette = {
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
  tertiary: {
    pastel: "#F4E8E7",
    light: "#DAC7C8",
    main: "#7E474B",
    medium: "#5B353A",
    dark: "#3A1E25",
  },
};

const grayThemePalette = {
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

const globalThemePalette = {
  ...grayThemePalette,
  ...semanticThemePalette,
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

const defaultMuiTheme = createTheme();

const baseThemeOptions: ThemeOptions = {
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontFamily: "inter",
          fontSize: pxToRem(16),
          lineHeight: 1.5,
          fontWeight: 400,
          borderRadius: "8px",
          "&:active": {
            borderWidth: "2px",
          },
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
            color: globalThemePalette.text.secondary,
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
          "&.Mui-disabled": {
            color: globalThemePalette.border,
          },
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          width: 44,
          height: 26,
          padding: 0,
          "& .MuiSwitch-switchBase": {
            padding: 0,
            margin: 1,
            transitionDuration: "300ms",
            "&:hover": {
              "& + .MuiSwitch-track": {
                backgroundColor: globalThemePalette.disabled,
              },
            },
            "&.Mui-checked": {
              transform: "translateX(18px)",
              color: defaultMuiTheme.palette.common.white,
              "& + .MuiSwitch-track": {
                opacity: 1,
              },
            },
            "&.Mui-disabled": {
              "& + .MuiSwitch-track": {
                opacity: 1,
                backgroundColor: globalThemePalette.input.border,
              },
              "& .MuiSwitch-thumb": {
                backgroundColor: globalThemePalette.border,
              },
            },
          },
          "& .MuiSwitch-thumb": {
            boxSizing: "border-box",
            width: 24,
            height: 24,
            boxShadow: "none",
          },
          "& .MuiSwitch-track": {
            borderRadius: 26 / 2,
            backgroundColor: globalThemePalette.input.border,
            opacity: 1,
          },
          "&+.MuiFormControlLabel-label": {
            marginLeft: 8,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "20px",
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
          letterSpacing: 0,
          fontFamily: "inter",
          margin: "0px 10px 0px 0px",
          padding: "12px 26px",
          textTransform: "none",
          borderRadius: "24px",
          minHeight: "26px",
          "&.Mui-selected": {
            backgroundColor: common.white,
            color: common.black,
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
          backgroundColor: common.white,
          borderBottom: "1px solid",
          borderColor: globalThemePalette.border,
          boxShadow: "0px 2px 10px 0px rgb(0 0 0 / 10%)",
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          fontFamily: "inter",
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
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          letterSpacing: 0,
          fontFamily: "inter",
          boxShadow: "none",
          fontSize: pxToRem(14),
          fontWeight: 500,
          lineHeight: pxToRem(16),
          textTransform: "none",
          ":hover": {
            boxShadow: "none",
          },
          "&.MuiButton-sizeSmall": {
            height: 32,
            paddingLeft: "16px",
            paddingRight: "16px",
          },
          "&.MuiButton-sizeMedium": {
            height: 48,
            paddingLeft: "24px",
            paddingRight: "24px",
          },
        },
        contained: {
          borderRadius: "100vmax",
          "&.MuiButton-containedWarning": {
            ":hover": {
              backgroundColor: globalThemePalette.warning.medium,
            },
          },
          "&.MuiButton-containedError": {
            ":hover": {
              backgroundColor: globalThemePalette.error.medium,
            },
          },
          "&.MuiButton-containedInfo": {
            ":hover": {
              backgroundColor: globalThemePalette.info.medium,
            },
          },
          "&.MuiButton-containedSuccess": {
            ":hover": {
              backgroundColor: globalThemePalette.success.medium,
            },
          },
          "&.MuiButton-containedTertiary:not(.Mui-disabled)": {
            color: common.white,
          },
        },
        outlined: {
          borderRadius: "100vmax",
          borderColor: globalThemePalette.input.border,

          ":hover": {
            backgroundColor: "transparent",
          },
          "&.MuiButton-outlinedWarning:not(.Mui-disabled)": {
            borderColor: globalThemePalette.warning.main,
            color: globalThemePalette.text.primary,
            ":hover": {
              borderColor: globalThemePalette.warning.dark,
            },
            ":active": {
              backgroundColor: globalThemePalette.warning.pastel,
            },
          },
          ".MuiTouchRipple-child": {
            backgroundColor: "transparent !important",
          },
          "&.MuiButton-outlinedError:not(.Mui-disabled)": {
            color: globalThemePalette.error.medium,
            ":hover": {
              color: globalThemePalette.error.dark,
              borderColor: globalThemePalette.error.dark,
            },
            ":active": {
              backgroundColor: globalThemePalette.error.pastel,
            },
          },
          "&.MuiButton-outlinedInfo:not(.Mui-disabled)": {
            color: globalThemePalette.info.main,
            ":hover": {
              color: globalThemePalette.info.medium,
              borderColor: globalThemePalette.info.dark,
            },
            ":active": {
              backgroundColor: globalThemePalette.info.pastel,
            },
          },
          "&.MuiButton-outlinedSuccess:not(.Mui-disabled)": {
            color: globalThemePalette.success.main,
            ":hover": {
              color: globalThemePalette.success.medium,
              borderColor: globalThemePalette.success.dark,
            },
            ":active": {
              backgroundColor: globalThemePalette.success.pastel,
            },
          },
        },
        text: {
          height: "auto !important",
          padding: "0 !important",
          "&.MuiButton-textWarning": {
            color: globalThemePalette.warning.main,
            ":hover": {
              color: globalThemePalette.warning.medium,
            },
            ":active": {
              color: globalThemePalette.warning.dark,
            },
          },
          ".MuiTouchRipple-child": {
            backgroundColor: "transparent !important",
          },
          "&.MuiButton-textError": {
            color: globalThemePalette.error.main,
            ":hover": {
              color: globalThemePalette.error.medium,
            },
            ":active": {
              color: globalThemePalette.error.dark,
            },
          },
          "&.MuiButton-textInfo": {
            color: globalThemePalette.info.main,
            ":hover": {
              color: globalThemePalette.info.medium,
            },
            ":active": {
              color: globalThemePalette.info.dark,
            },
          },
          "&.MuiButton-textSuccess": {
            color: globalThemePalette.success.main,
            ":hover": {
              color: globalThemePalette.success.medium,
            },
            ":active": {
              color: globalThemePalette.success.dark,
            },
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
          boxShadow: "none",
          borderRadius: "16px",
          color: globalThemePalette.text.primary,
          ...globalTypography.body2,
          alignItems: "center",
          padding: defaultMuiTheme.spacing(2),
        },
        message: {
          padding: 0,
        },
        icon: {
          fontSize: pxToRem(20),
          marginRight: defaultMuiTheme.spacing(1.5),
        },
        standardSuccess: {
          backgroundColor: globalThemePalette.success.pastel,
          border: "1px solid",
          borderColor: globalThemePalette.success.light,
        },
        standardError: {
          backgroundColor: globalThemePalette.error.pastel,
          border: "1px solid",
          borderColor: globalThemePalette.error.light,
        },
        standardInfo: {
          backgroundColor: globalThemePalette.info.pastel,
          border: "1px solid",
          borderColor: globalThemePalette.info.light,
        },
        standardWarning: {
          backgroundColor: globalThemePalette.warning.pastel,
          border: "1px solid",
          borderColor: globalThemePalette.warning.light,
        },
      },
    },
    MuiAlertTitle: {
      styleOverrides: {
        root: {
          marginBottom: 0,
          color: globalThemePalette.text.primary,
          ...globalTypography.caption,
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          minHeigh: "15px",
          lineHeight: 1.25,
          marginLeft: 0,
          fontFamily: "inter",
          fontWeight: 500,
          marginBottom: "8px",
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          "&.MuiContainer-maxWidthLg": {
            padding: "40px 0",
            maxWidth: 1040,
            [defaultMuiTheme.breakpoints.down("lg")]: {
              padding: "40px 32px",
            },
            [defaultMuiTheme.breakpoints.down("sm")]: {
              padding: "16px",
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
  globalThemePalette,
  globalTypography,
  grayThemePalette,
  semanticThemePalette,
};
