import { SimplePaletteColorOptions as MuiSimplePaletteColorOptions } from "@mui/material/styles/createPalette";

declare module "@mui/material/styles/createPalette" {
  interface SimplePaletteColorOptions extends MuiSimplePaletteColorOptions {
    medium?: string;
  }
}
