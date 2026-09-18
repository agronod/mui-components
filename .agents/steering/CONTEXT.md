# AI Context Documentation
Generated: 2026-09-17 12:49
Commit: 9a11977fd938fdbdab6b5a1d14ca200cb5d6ca2a
Mode: initial

## Last Updated
- Updated: library, components, theme, storybook (all created)
- Structure: created
- Files analyzed: 28 (package.json, vite.config.ts, tsconfig*.json, eslint.config.mjs, both workflows, README.md, .storybook/*, src/index.ts, component and theme barrels, AgronodDialog, Header, VerticalBarChart, AgronodIcon, ThemeProvider, baseTheme, agronodTheme, themeAugmentation, story files)

## Structure
- library: what the package is, how Vite lib mode builds and externalizes it, dependency section policy and version-range rules, lockstep families, security-update state, release and CI flow
- components: folder and barrel conventions, naming, story taxonomy, MUI wrapper pattern (`slotProps` + `mergeSlotProps`), styled `variants`, hand-written SVG charts vs recharts, svgr icon registry
- theme: base + brand theme layering, `deepmerge` before `createTheme`, seven-step palette scale and module augmentation, bundled Inter vs consumer-loaded Roboto
- storybook: Storybook 10 react-vite config, story conventions, Chromatic as the only regression gate

## Usage
Load with context-prime skill for task-specific context.
