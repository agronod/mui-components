import { SimplePaletteColorOptions as MuiSimplePaletteColorOptions } from "@mui/material/styles/createPalette";

declare module "*.eot";
declare module "*.ttf";
declare module "*.otf";
declare module "*.jpg";
declare module "*.png";

declare module "@mui/material/styles/createPalette" {
  interface SimplePaletteColorOptions extends MuiSimplePaletteColorOptions {
    medium?: string;
  }
}
