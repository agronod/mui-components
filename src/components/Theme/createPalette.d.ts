// Seems to be needed for extensions to work

// eslint-disable-next-line @typescript-eslint/no-unused-vars

import createPalette from "@mui/material/styles/createPalette";

declare module "@mui/material/styles/createPalette" {
  interface SimplePaletteColorOptions {
    medium?: string;
  }

  interface PaletteColor {
    medium?: string;
  }
}
