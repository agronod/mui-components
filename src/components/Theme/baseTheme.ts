import {
  createTheme,
  SimplePaletteColorOptions,
  ThemeOptions,
} from "@mui/material/styles";
import { common } from "@mui/material/colors";
import InterRegularTTF from "./fonts/inter/static/Inter-Regular.ttf";
import InterMediumTTF from "./fonts/inter/static/Inter-Medium.ttf";
import { circularProgressClasses } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";

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
  interface TypeText {
    secondaryTransparent: string;
    disabled: string;
    white: string;
  }
  interface TypeBackground {
    page: string;
    card: string;
    overlay: string;
    tooltip: string;
  }
  interface Palette {
    text: TypeText;
    icon: {
      primary: string;
      secondary: string;
      secondaryTransparent: string;
    };
    input: {
      background: string;
      backgroundDisabled: string;
      border: string;
      borderDisabled: string;
    };
    background: TypeBackground;
    divider: string;
    border: string;
    buttonDisabled: string;
    black: string;
    gray800: string;
    gray700: string;
    gray600: string;
    gray500: string;
    gray400: string;
    gray300: string;
    gray200: string;
    gray100: string;
    gray50: string;
    white: string;
    white36: string;
    white50: string;
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
    subtitle3: true;
    subtitle4: true;
    body1bold: true;
    body2bold: true;
    body3bold: true;
    body4bold: true;
    body3: true;
    body4: true;
    component: true;
  }
}
declare module "@mui/material/Button/Button" {
  interface ButtonPropsColorOverrides {
    tertiary: true;
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
    darkHover: "#812B25",
  },
  warning: {
    pastel: "#FDF0E6",
    light: "#FBDCB7",
    main: "#ED9135",
    medium: "#E0732C",
    dark: "#D65A26",
  },
  info: {
    pastel: "#F1ECE7",
    light: "#DAD0C7",
    main: "#68523D",
    medium: "#564230",
    dark: "#443023",
  },
  success: {
    pastel: "#EAF5EA",
    light: "#CEE5CB",
    main: "#5D9D52",
    medium: "#457A3B",
    dark: "#2F5D28",
    darkHover: "#21411C",
  },
  tertiary: {
    pastel: "#F4E8E7",
    light: "#DAC7C8",
    main: "#7E474B",
    medium: "#5B353A",
    dark: "#3A1E25",
  },
  secondary: {
    pastel: "#E8ECF2",
    light: "#C7D1DA",
    main: "#51697E",
    medium: "#455B6E",
    dark: "#364858",
  },
};

const grayThemePalette = {
  text: {
    primary: "#252321",
    secondary: "#666461",
    secondaryTransparent: "rgba(37, 35, 33, 0.69)",
    disabled: "#A3A19F",
    white: common.white,
  },
  icon: {
    primary: "#464542",
    secondary: "#7A7875",
    secondaryTransparent: "rgba(70, 69, 66, 0.72)",
  },
  input: {
    background: common.white,
    backgroundDisabled: "#FCFAF7",
    border: "#C2C0BD",
    borderDisabled: "#E5E3E0",
  },
  background: {
    page: "#F8F6F3",
    card: common.white,
    overlay: "rgba(37, 35, 33, 0.3)",
    tooltip: "#252321",
  },
  divider: "#E5E3E0",
  border: "#E5E3E0",
  buttonDisabled: "#E5E3E0",
  black: "#252321",
  gray800: "#464542",
  gray700: "#666461",
  gray600: "#7A7875",
  gray500: "#A3A19F",
  gray400: "#C2C0BD",
  gray300: "#E5E3E0",
  gray200: "#F2F0ED",
  gray100: "#F8F6F3",
  gray50: "#FCFAF7",
  white: common.white,
  white36: "rgba(255, 255, 255, 0.36)",
  white50: "rgba(255, 255, 255, 0.5)",
};

const globalThemePalette = {
  ...grayThemePalette,
  ...semanticThemePalette,
};

const globalTypography = {
  h1: {
    fontFamily: "inter",
    fontSize: pxToRem(80),
    fontWeight: 400,
    lineHeight: "94px",
  },
  h2: {
    fontFamily: "inter",
    fontSize: pxToRem(56),
    fontWeight: 400,
    lineHeight: "68px",
  },
  h3: {
    fontFamily: "inter",
    fontSize: pxToRem(44),
    fontWeight: 500,
    lineHeight: "53px",
  },
  h4: {
    fontFamily: "inter",
    fontSize: pxToRem(32),
    fontWeight: 500,
    lineHeight: "39px",
  },
  h5: {
    fontFamily: "inter",
    fontSize: pxToRem(22),
    fontWeight: 500,
    lineHeight: "26px",
  },
  h6: {
    fontFamily: "inter",
    fontSize: pxToRem(18),
    fontWeight: 400,
    lineHeight: "24px",
  },
  subtitle1: {
    fontFamily: "inter",
    fontSize: pxToRem(18),
    fontWeight: 500,
    lineHeight: "24px",
  },
  subtitle2: {
    fontFamily: "inter",
    fontSize: pxToRem(16),
    fontWeight: 500,
    lineHeight: "22px",
  },
  subtitle3: {
    fontFamily: "inter",
    fontSize: pxToRem(14),
    fontWeight: 500,
    lineHeight: "20px",
  },
  subtitle4: {
    fontFamily: "inter",
    fontSize: pxToRem(10),
    fontWeight: 500,
    lineHeight: "14px",
  },
  body1: {
    fontFamily: "inter",
    fontSize: pxToRem(16),
    fontWeight: 400,
    lineHeight: "22px",
  },
  body1bold: {
    fontFamily: "inter",
    fontSize: pxToRem(16),
    fontWeight: 500,
    lineHeight: "22px",
  },
  body2: {
    fontFamily: "inter",
    fontSize: pxToRem(14),
    fontWeight: 400,
    lineHeight: "20px",
  },
  body2bold: {
    fontFamily: "inter",
    fontSize: pxToRem(14),
    fontWeight: 500,
    lineHeight: "20px",
  },
  body3: {
    fontFamily: "inter",
    fontSize: pxToRem(12),
    fontWeight: 400,
    lineHeight: "16px",
  },
  body3bold: {
    fontFamily: "inter",
    fontSize: pxToRem(12),
    fontWeight: 500,
    lineHeight: "16px",
  },
  body4: {
    fontFamily: "inter",
    fontSize: pxToRem(10),
    fontWeight: 400,
    lineHeight: "14px",
  },
  body4bold: {
    fontFamily: "inter",
    fontSize: pxToRem(10),
    fontWeight: 500,
    lineHeight: "14px",
  },
  caption: {
    fontFamily: "inter",
    fontSize: pxToRem(12),
    fontWeight: 400,
    lineHeight: "16px",
  },
  overline: {
    fontFamily: "inter",
    fontSize: pxToRem(12),
    fontWeight: 500,
    letterSpacing: "0.5px",
    lineHeight: "16px",
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
          lineHeight: "24px",
          fontWeight: 400,
          letterSpacing: "0.15px",
          backgroundColor: globalThemePalette.input.background,
          borderColor: globalThemePalette.input.border,

          "&:active": {
            borderWidth: "2px",
          },

          "&.Mui-disabled": {
            backgroundColor: globalThemePalette.input.backgroundDisabled,
            borderColor: globalThemePalette.input.borderDisabled,
            color: globalThemePalette.text.disabled,

            "& .MuiInputAdornment-root svg": {
              color: globalThemePalette.text.disabled,
            },
          },

          "& input::placeholder": {
            color: globalThemePalette.text.disabled,
          },

          // styling for input number so it does not have arrows
          "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button":
            {
              display: "none",
            },
          "& input[type=number]": {
            MozAppearance: "textfield",
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
    MuiSelect: {
      defaultProps: {
        IconComponent: ExpandMoreIcon,
      },
    },
    MuiAutocomplete: {
      defaultProps: {
        popupIcon: React.createElement(ExpandMoreIcon),
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
                backgroundColor: globalThemePalette.gray500,
              },
            },
            "&.Mui-checked": {
              transform: "translateX(18px)",
              color: globalThemePalette.white,
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
          "& .Mui-focusVisible": {
            "& + .MuiSwitch-track": {
              border: "1px solid",
              borderColor: globalThemePalette.text.primary,
            },
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "16px",
          padding: "24px",
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: `
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
          padding: "8px 16px",
          textTransform: "none",
          borderRadius: "24px",
          minHeight: "26px",
          "&.Mui-selected": {
            backgroundColor: globalThemePalette.white,
            color: globalThemePalette.black,
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
          backgroundColor: globalThemePalette.white,
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
          fontSize: pxToRem(14),
          fontWeight: 500,
          lineHeight: "20px",
          color: globalThemePalette.text.primary,
          textDecoration: `underline solid ${globalThemePalette.text.primary}`,
          textUnderlineOffset: "4px",
          "&:hover": {
            color: globalThemePalette.text.secondary,
            textDecoration: `underline solid ${globalThemePalette.gray600}`,
          },
          "&:focus-visible": {
            outlineColor: globalThemePalette.text.secondary,
          },
          "&.inverted": {
            color: globalThemePalette.text.secondary,
            textDecoration: `underline solid ${globalThemePalette.gray600}`,
            "&:hover": {
              color: globalThemePalette.text.primary,
              textDecoration: `underline solid ${globalThemePalette.text.primary}`,
            },
          },
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          letterSpacing: 0,
          boxShadow: "none",
          fontFamily: "inter",
          fontSize: pxToRem(14),
          fontWeight: 500,
          lineHeight: "20px",
          textTransform: "none",
          borderRadius: "24px !important",
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
          border: "1px solid transparent",
          ":focus-visible": {
            border: `1px solid ${globalThemePalette.white}`,
            boxShadow: `0px 0px 0px 4.5px ${globalThemePalette.white}`,
            outline: `2px solid ${globalThemePalette.text.primary}`,
          },
          "&.MuiButton-containedWarning:not(.Mui-disabled)": {
            color: globalThemePalette.text.primary,
            ":hover": {
              backgroundColor: globalThemePalette.warning.medium,
            },
            ":active": {
              backgroundColor: globalThemePalette.warning.dark,
            },
          },
          "&.MuiButton-containedError:not(.Mui-disabled)": {
            backgroundColor: globalThemePalette.error.medium,
            ":hover": {
              backgroundColor: globalThemePalette.error.dark,
            },
            ":active": {
              backgroundColor: globalThemePalette.error.darkHover,
            },
          },
          "&.MuiButton-containedInfo:not(.Mui-disabled)": {
            ":hover": {
              backgroundColor: globalThemePalette.info.medium,
            },
            ":active": {
              backgroundColor: globalThemePalette.info.dark,
            },
          },
          "&.MuiButton-containedSuccess:not(.Mui-disabled)": {
            backgroundColor: globalThemePalette.success.medium,
            ":hover": {
              backgroundColor: globalThemePalette.success.dark,
            },
            ":active": {
              backgroundColor: globalThemePalette.success.darkHover,
            },
          },
          "&.MuiButton-containedTertiary:not(.Mui-disabled)": {
            color: globalThemePalette.white,
            ":hover": {
              backgroundColor: globalThemePalette.tertiary.medium,
            },
            ":active": {
              backgroundColor: globalThemePalette.tertiary.dark,
            },
          },
        },
        outlined: {
          borderColor: globalThemePalette.input.border,
          backgroundColor: "rgba(255,255,255, 50%)",
          ":hover": {
            backgroundColor: "rgba(255,255,255, 50%)",
          },
          ":focus-visible": {
            boxShadow: `0px 0px 0px 4.5px ${globalThemePalette.white}`,
            outline: `2px solid ${globalThemePalette.text.primary}`,
          },
          "&.MuiButton-outlinedWarning:not(.Mui-disabled)": {
            borderColor: globalThemePalette.warning.main,
            color: globalThemePalette.text.primary,
            ":hover": {
              boxShadow: `0px 0px 0px 1px ${globalThemePalette.warning.dark}`,
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
              boxShadow: `0px 0px 0px 1px ${globalThemePalette.error.dark}`,
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
              boxShadow: `0px 0px 0px 1px ${globalThemePalette.info.dark}`,
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
              boxShadow: `0px 0px 0px 1px ${globalThemePalette.success.dark}`,
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

          "&.Mui-disabled": {
            color: `${globalThemePalette.text.disabled}!important`,
          },
          ":focus-visible": {
            textDecoration: "underline",
          },
          "&.MuiButton-textTertiary": {
            color: globalThemePalette.text.primary,
            ":hover": {
              color: globalThemePalette.text.secondary,
            },
          },
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
      defaultProps: {
        variantMapping: {
          subtitle3: "h6",
          subtitle4: "h6",
          body3: "p",
          body4: "p",
          body1bold: "p",
          body2bold: "p",
          body3bold: "p",
          body4bold: "p",
        },
      },
      styleOverrides: {
        ...globalTypography,
      },
    },
    MuiMenu: {
      styleOverrides: {
        root: {
          "& .MuiMenu-paper": {
            border: "1px solid",
            borderColor: globalThemePalette.border,
            borderRadius: "8px",
          },
        },
      },
    },
    MuiMenuItem: {
      defaultProps: {},
      styleOverrides: {
        root: {
          fontFamily: "inter",
          whiteSpace: "normal",
          ".MuiTouchRipple-root": {
            display: "none",
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
          border: "1px solid",
          color: globalThemePalette.text.primary,
          alignItems: "center",
          padding: defaultMuiTheme.spacing(2),
          ...globalTypography.body2,
          "& .MuiAlert-message": {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            flexWrap: "wrap",
            gap: 8,
          },
          "& .MuiAlert-icon": {
            padding: 0,
            minWidth: "24px",
            minHeight: "24px",
            alignItems: "center",
            justifyContent: "center",
          },
        },
        message: {
          padding: 0,
        },
        icon: {
          marginRight: defaultMuiTheme.spacing(1.5),
        },
        standardSuccess: {
          backgroundColor: globalThemePalette.success.pastel,
          borderColor: globalThemePalette.success.light,
        },
        standardError: {
          backgroundColor: globalThemePalette.error.pastel,
          borderColor: globalThemePalette.error.light,
        },
        standardInfo: {
          backgroundColor: globalThemePalette.info.pastel,
          borderColor: globalThemePalette.info.light,
        },
        standardWarning: {
          backgroundColor: globalThemePalette.warning.pastel,
          borderColor: globalThemePalette.warning.light,
        },
        filledSuccess: {
          backgroundColor: globalThemePalette.success.light,
          borderColor: globalThemePalette.success.light,
        },
        filledError: {
          backgroundColor: globalThemePalette.error.light,
          borderColor: globalThemePalette.error.light,
        },
        filledInfo: {
          backgroundColor: globalThemePalette.info.light,
          borderColor: globalThemePalette.info.light,
        },
        filledWarning: {
          backgroundColor: globalThemePalette.warning.light,
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
          color: globalThemePalette.text.primary,
          minHeigh: "15px",
          lineHeight: "16px",
          letterSpacing: "0.4px",
          marginLeft: 0,
          fontFamily: "inter",
          fontWeight: 400,
          marginRight: 0,
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
    MuiListItemButton: {
      defaultProps: {
        disableRipple: true,
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
