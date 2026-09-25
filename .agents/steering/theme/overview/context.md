# Theme System
Keywords: theme, ThemeProvider, createTheme, deepmerge, palette, baseTheme, brandTheme, createBrandTheme, agronodTheme, adminTheme, agrosfarTheme, agrosfarDarkTheme, dataVizPalette, themeAugmentation, module augmentation, fonts, Inter, Roboto, hint pastel light main medium dark

## Layers

```mermaid
flowchart TD
    viz["dataVizPalette.ts\nchart-only ramps (gold/green/blue/brown/coral/purple ×7 steps) + other"]
    base["baseTheme.ts\nbaseThemeOptions: typography, semantic palette\n(error/warning/info/success/secondary), dataViz, component overrides,\nInter font-face, pxToRem"]
    aug["themeAugmentation.ts\ndeclare module '@mui/material/styles'\nextends Palette, TypeText, TypeBackground…"]
    brand["brandTheme.ts\ncreateBrandTheme(primary): Agronod-style overrides around any primary scale"]
    ag["agronodTheme.ts\nprimary = yellow scale"]
    adm["adminTheme.ts\nprimary = burgundy scale"]
    as["agrosfarTheme.ts"]
    asd["agrosfarDarkTheme.ts"]
    prov["ThemeProvider.tsx\ncreateTheme(deepmerge(baseThemeOptions, options))"]
    app["Consumer App.tsx\n<ThemeProvider options={agronodTheme}>"]
    viz --> base
    base --> brand & as & asd
    brand --> ag & adm
    aug -. types .-> base & ag & adm & as & asd
    ag & adm & as & asd --> app --> prov
    prov --> mui["MUI ThemeProvider + CssBaseline + Emotion ThemeProvider"]
```

`baseThemeOptions` holds everything shared. A brand theme is a `ThemeOptions` object with its own `primary` scale that the consumer passes to the library's `ThemeProvider`. The provider deep-merges brand options over the base **before** `createTheme`, so MUI derives `light`/`dark`/`contrastText` from the merged palette. Passing the options as a second `createTheme` argument would merge after derivation and is not equivalent; that is why `deepmerge` from `@mui/utils` is imported directly and `@mui/utils` is a declared peer.

## Palette scale

Every semantic and brand colour uses the same seven-step scale: `hint`, `pastel`, `light`, `main`, `medium`, `dark`, plus `*Hover` variants where interaction states exist. These names are not MUI defaults; `themeAugmentation.ts` adds them to `Palette`/`PaletteOptions` so `theme.palette.primary.medium` type-checks. The augmentation is imported for side effects in `ThemeProvider.tsx` (`import "./themeAugmentation"`) and published through the `.d.ts` output, so consumers get the same typings.

`agronodTheme` and `adminTheme` share every component override: both call `createBrandTheme(primary)` in `brandTheme.ts`, which merges the given primary scale over `globalThemePalette`. The `*Hover` steps are optional in a scale; the factory falls back to the next darker step. Agrosfär has its own override set because its interaction states differ.

There is no `tertiary` colour any more. The former burgundy `tertiary` scale is the Admin theme's primary; charts that need a distinct accent use `theme.palette.dataViz.coral[600]`.

Brand theme files compute derived colours with a throwaway theme:

```ts
const tempTheme = createTheme({ palette: agronodThemePalette });
const themePalette = tempTheme.palette;   // then use themePalette.primary.medium in styleOverrides
```
This avoids hard-coding hex values twice.

## Data-visualization palette

`dataVizPalette.ts` holds chart-only colours, exposed on every theme as `theme.palette.dataViz` and as standalone exports (`dataVizPalette`, `dataVizCategorical`, `dataVizCategoricalOrder`). Six ramps (gold, green, blue, brown, coral, purple) with Figma step names 700 (darkest) → 100 (lightest); 600 is the series colour. `other` is a single neutral (= gray500) for the residual bucket. Nominal series take colours in `dataVizCategoricalOrder` and never cycle; past four series fold the tail into `other`. Source of truth is the "Data Visualization Colors" Figma page — never hardcode these hexes in components.

## Fonts

- **Inter** is bundled: `baseTheme.ts` imports the TTF files from `Theme/fonts/inter/static/` and registers `@font-face` through `MuiCssBaseline` overrides. Vite inlines or emits them into `dist`.
- **Roboto** and **Material Icons** are not bundled. The consuming app loads them (Storybook does it in `.storybook/preview.tsx` via `@fontsource/*`, which is why those packages are devDependencies).

## Exports

`Theme/index.ts` exports `ThemeProvider`, `useTheme` (typed wrapper around MUI's), `baseTheme`, `agronodTheme`, `adminTheme`, `agrosfarTheme`, `agrosfarDarkTheme`, plus the `dataViz*` palette exports. Storybook's toolbar switches between the four brand themes through the `theme` global in `preview.tsx`.

## Rules

- MUST add new palette keys to `themeAugmentation.ts` first; a key that exists in the object but not in the augmentation compiles in the theme file and fails in every component that reads it.
- MUST keep the `deepmerge`-then-`createTheme` order in `ThemeProvider`.
- PREFER adding component `styleOverrides` in `baseTheme.ts` when they are brand-independent, and in the brand file only when the colour differs per brand.
- AVOID hex literals outside `Theme/`; components read `theme.palette`.
- AVOID `createTheme` in components; the provider is the only place a theme is created at runtime.

## References
- Key files: `src/components/Theme/ThemeProvider.tsx`, `src/components/Theme/baseTheme.ts`, `src/components/Theme/dataVizPalette.ts`, `src/components/Theme/themeAugmentation.ts`, `src/components/Theme/brandTheme.ts`, `src/components/Theme/agronodTheme.ts`, `src/components/Theme/adminTheme.ts`, `src/components/Theme/fonts/`
- Related contexts: [[components/patterns]], [[storybook/overview]], [[library/dependencies]]
