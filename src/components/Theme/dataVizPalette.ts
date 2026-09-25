/**
 * Data-visualization palette.
 *
 * Source of truth is the "Data Visualization Colors" Figma page. Step naming
 * matches Figma: 700 is darkest, 100 is lightest and 600 is the brand colour
 * that also appears in the categorical palette. Every ramp has seven steps;
 * `other` is a single neutral reserved for the residual "everything else"
 * bucket and is never used as a series colour of its own.
 *
 * Use it for charts only. Semantic UI colours (primary, secondary, success…)
 * stay in the theme palettes.
 */

export const dataVizSteps = [700, 600, 500, 400, 300, 200, 100] as const;
export type DataVizStep = (typeof dataVizSteps)[number];
export type DataVizRamp = Record<DataVizStep, string>;

const ramp = (hexes: readonly [string, string, string, string, string, string, string]): DataVizRamp => ({
  700: hexes[0],
  600: hexes[1],
  500: hexes[2],
  400: hexes[3],
  300: hexes[4],
  200: hexes[5],
  100: hexes[6],
});

export const dataVizRampNames = ["gold", "green", "blue", "brown", "coral", "purple"] as const;
export type DataVizRampName = (typeof dataVizRampNames)[number];

export type DataVizPalette = Record<DataVizRampName, DataVizRamp> & {
  /** Neutral for the residual "Other" bucket. Same value as gray500. */
  other: string;
};

export const dataVizPalette: DataVizPalette = {
  gold: ramp(["#C4911C", "#E5B34F", "#ECC472", "#F2D495", "#F6E1B3", "#FAECD1", "#FDF6EA"]),
  green: ramp(["#1A5C3F", "#2F8560", "#4FA17F", "#76BC9F", "#98CDB7", "#CCE6DB", "#E8F5EE"]),
  blue: ramp(["#314A59", "#51697E", "#728A9B", "#93AAB7", "#B4C8D2", "#D3E1E8", "#ECF2F5"]),
  brown: ramp(["#4C3B29", "#68523D", "#8A7259", "#AB9578", "#C8B59B", "#DFD3C2", "#F2ECE5"]),
  coral: ramp(["#CD625B", "#EF837C", "#F39D97", "#F6B5B1", "#F9CECA", "#FBE2E0", "#FDF2F1"]),
  purple: ramp(["#56425C", "#775681", "#937599", "#AE95B2", "#C8B6CC", "#DDD4E0", "#F0ECF2"]),
  other: "#A3A19F",
};

/**
 * Categorical (nominal) series order, most separable first. Assign in this
 * order and never cycle. Measured worst-case pairwise ΔE across normal,
 * deuteranope and protanope vision: 2 → 82.2, 3 → 34.9, 4 → 26.0,
 * 5 → 10.1 (fails), 6 → 2.0 (fails: blue/purple collapse under deuteranopia).
 * Past four series, fold the tail into `other` or use small multiples.
 */
export const dataVizCategoricalOrder: readonly DataVizRampName[] = [
  "gold",
  "blue",
  "brown",
  "coral",
  "green",
  "purple",
];
export const dataVizCategoricalSafeMax = 4;

/** Series colours (step 600) in categorical order. */
export const dataVizCategorical = dataVizCategoricalOrder.map(
  (name) => dataVizPalette[name][600]
);
