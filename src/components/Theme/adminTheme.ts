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

const adminTheme = createBrandTheme(adminPrimary);

export default adminTheme;
