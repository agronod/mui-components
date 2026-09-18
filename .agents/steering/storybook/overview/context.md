# Storybook
Keywords: storybook, stories, chromatic, addon-docs, addon-themes, react-vite, preview, main.ts, autodocs, MDX, visual regression, openssl-legacy-provider

## Setup

Storybook 10 with the `@storybook/react-vite` framework. Config lives in `.storybook/`:

- `main.ts`: stories glob `../src/**/*.mdx` and `../src/**/*.stories.@(js|jsx|ts|tsx)`; addons `addon-docs` (with `transcludeMarkdown`), `addon-links`, `addon-themes`, `@chromatic-com/storybook`; `react-docgen-typescript` with a `propFilter` that hides third-party props except `@mui/*`, so MUI props show as controls; `viteFinal` adds `vite-plugin-svgr` so `?react` SVG imports work in stories; telemetry disabled.
- `preview.tsx`: wraps every story in the library's `ThemeProvider`, driven by a `theme` toolbar global (`Agronod`, `Agrosfar`, `AgrosfarDark`); loads Roboto and Material Icons via `@fontsource/*`; `tags: ["autodocs"]` so every component gets an About page (`docs.defaultName: "About"`); `storySort.order` fixes the sidebar order: Intro Pages, Design Tokens, Custom Icons, Agrosfär Exclusive, Shared Components.
- `preview-head.html` for extra head tags.

## Story conventions

```tsx
import { StoryFn, Meta } from "@storybook/react-vite";
export default { title: "Shared Components/Dialog", component: AgronodDialog } as Meta<typeof AgronodDialog>;
export const Default: StoryFn<typeof AgronodDialog> = (args) => { /* local state, then <AgronodDialog {...args} /> */ };
Default.args = {};
```

- Types come from `@storybook/react-vite`, not `@storybook/react`.
- Stories are `StoryFn` render functions, not CSF3 objects. Interactive components (dialogs, modals) hold `useState` inside the story to open themselves.
- Helper content components (`BasicActions`, `BasicContent`) are defined in the story file and reuse library components (`AgronodButton`, `AgronodTypography`), never raw MUI where a wrapper exists.
- Reference pages are MDX in `src/introPages/` (`Introduction.mdx`, `Changelog.mdx`) and the colour token story in `src/designTokens/Colors/`.

## Commands

```bash
npm run storybook          # dev server on 6006
npm run build-storybook    # static build to storybook-static/, used as a CI-equivalent gate
```
Both scripts set `NODE_OPTIONS=--openssl-legacy-provider`. It is a leftover from webpack-era builds and is harmless on Node 24, but it is the first thing to remove if a future Node rejects the flag.

## Chromatic

`.github/workflows/chromatic.yml` runs the Chromatic action on every push to `main` with the `CHROMATIC_PROJECT_TOKEN` secret. It is the only automated visual regression check, and there are no unit tests, so a component without a story is untested.

## Rules

- MUST give every component a story under the right taxonomy prefix, see [[components/overview]].
- MUST keep Storybook packages on one version, see lockstep families in [[library/dependencies]].
- PREFER `args`-driven stories so controls work in the docs page.
- AVOID adding addons the upgrade tool proposes without checking they are wanted; `@storybook/addon-mcp` was declined in 2026-09.

## References
- Key files: `.storybook/main.ts`, `.storybook/preview.tsx`, `src/components/AgronodDialog/AgronodDialog.stories.tsx`, `.github/workflows/chromatic.yml`
- Related contexts: [[components/overview]], [[theme/overview]], [[library/release]]
