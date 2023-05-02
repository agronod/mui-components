import { common } from "@mui/material/colors";
import { globalThemePallete } from "./baseTheme";
import createPalette from "@mui/material/styles/createPalette";

const agrosfarThemePallete = {
  primary: {
    pastel: "#E0F0EA",
    light: "#B4D9CA",
    main: "#2F8560",
    medium: "#216545",
    dark: "#123F25",
  },
  secondary: {
    pastel: "#F1ECE7",
    light: "#DAD0C7",
    main: "#68523D",
    medium: "#564230",
    dark: "#443023",
  },
  ...globalThemePallete,
};

const themePallete = createPalette(agrosfarThemePallete);

const agrosfarTheme = {
  palette: themePallete,
  components: {
    MuiCheckbox: {
      styleOverrides: {
        root: {
          "&.Mui-checked": {
            color: themePallete.primary.dark,
          },
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          color: themePallete.text.primary,
          ":hover": {
            backgroundColor: themePallete.primary.light,
          },
          "&.Mui-selected": {
            backgroundColor: themePallete.primary.light,
            ":hover": {
              backgroundColor: themePallete.primary.light,
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
              fill: themePallete.primary.medium,
            },
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        outlined: {
          ":hover": {
            borderWidth: "2px",
          },
          ":active": {
            backgroundColor: themePallete.primary.pastel,
          },
          "&.MuiButton-outlinedSecondary": {
            color: themePallete.secondary.main,
            ":hover": {
              borderColor: themePallete.secondary.dark,
            },
            ":active": {
              backgroundColor: themePallete.secondary.pastel,
            },
          },
        },
        text: {
          ":hover": {
            textDecoration: "underline",
            color: themePallete.primary.medium,
            backgroundColor: "transparent",
          },
          ":active": {
            color: themePallete.primary.dark,
          },
          "&.MuiButton-textSecondary": {
            color: themePallete.secondary.main,
            ":hover": {
              color: `${themePallete.secondary.medium}`,
            },
            ":active": {
              color: `${themePallete.secondary.dark}`,
            },
          },
        },
      },
    },
  },
};

export default agrosfarTheme;
