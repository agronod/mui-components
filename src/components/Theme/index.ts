import { baseTheme } from "./baseTheme";
import ThemeProvider, { useTheme } from "./ThemeProvider";
import agronodTheme from "./agronodTheme";
import adminTheme from "./adminTheme";
import agrosfarTheme from "./agrosfarTheme";
import agrosfarDarkTheme from "./agrosfarDarkTheme";
import {
  dataVizPalette,
  dataVizCategorical,
  dataVizCategoricalOrder,
  dataVizCategoricalSafeMax,
  dataVizSteps,
} from "./dataVizPalette";
import type {
  DataVizPalette,
  DataVizRamp,
  DataVizRampName,
  DataVizStep,
} from "./dataVizPalette";

export {
  ThemeProvider,
  useTheme,
  baseTheme,
  agronodTheme,
  adminTheme,
  agrosfarTheme,
  agrosfarDarkTheme,
  dataVizPalette,
  dataVizCategorical,
  dataVizCategoricalOrder,
  dataVizCategoricalSafeMax,
  dataVizSteps,
};
export type { DataVizPalette, DataVizRamp, DataVizRampName, DataVizStep };
