// MUI v7 type augmentations

declare module "@mui/material/styles" {
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
      hint?: string;
      pastel: string;
      light: string;
      main: string;
      medium: string;
      dark: string;
    };
  }

  interface PaletteOptions {
    text?: Partial<TypeText>;
    icon?: {
      primary?: string;
      secondary?: string;
      secondaryTransparent?: string;
    };
    input?: {
      background?: string;
      backgroundDisabled?: string;
      border?: string;
      borderDisabled?: string;
    };
    background?: Partial<TypeBackground>;
    divider?: string;
    border?: string;
    buttonDisabled?: string;
    black?: string;
    gray800?: string;
    gray700?: string;
    gray600?: string;
    gray500?: string;
    gray400?: string;
    gray300?: string;
    gray200?: string;
    gray100?: string;
    gray50?: string;
    white?: string;
    white36?: string;
    white50?: string;
    tertiary?: {
      hint?: string;
      pastel?: string;
      light?: string;
      main?: string;
      medium?: string;
      dark?: string;
    };
  }

  interface PaletteColor {
    hint?: string;
    pastel?: string;
    mainHover?: string;
    medium?: string;
    mediumHover?: string;
    darkHover?: string;
  }

  interface SimplePaletteColorOptions {
    hint?: string;
    pastel?: string;
    mainHover?: string;
    medium?: string;
    mediumHover?: string;
    darkHover?: string;
  }
}

declare module "@mui/material/Typography" {
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

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    tertiary: true;
  }
}

// Empty export to make this a module
export {};
