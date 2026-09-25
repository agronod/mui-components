import createBrandTheme, { BrandPrimaryScale } from "./brandTheme";

export const agronodPrimary: BrandPrimaryScale = {
  hint: "#FFFBF0",
  pastel: "#FFF5D9",
  light: "#FDECB5",
  main: "#F2CB6C",
  mainHover: "#DDBA65",
  medium: "#E6B34F",
  mediumHover: "#D2A54A",
  dark: "#C3872F",
  darkHover: "#B37D2E",
};

const agronodTheme = createBrandTheme(agronodPrimary);

export default agronodTheme;
