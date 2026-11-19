// The bundle references its images relative to itself (new URL(..., import.meta.url)).
// When a Vite app's dev server pre-bundles this package, the bundle is served
// from the dependency cache, where those images do not exist, so they fail to
// load silently. The agronodMuiComponents plugin (vite-plugin/index.ts)
// prevents that. Production builds and Vitest load the bundle from other
// paths, so this only fires in that dev server case.

// The consuming app's bundler replaces process.env.NODE_ENV, as it does for
// React and MUI, which drops this whole block from production bundles.
declare const process: { env: { NODE_ENV?: string } };

// Vite serves a pre-bundled dependency as <cacheDir>/deps/<name>.js?v=<hash>.
// cacheDir is node_modules/.vite by default, but apps and Storybook move it,
// so match the part that stays the same.
const PRE_BUNDLED = /\/deps\/[^/?]+\.js\?v=/;

if (process.env.NODE_ENV !== "production" && PRE_BUNDLED.test(import.meta.url)) {
  console.warn(
    "@agronod/mui-components: Vite pre-bundled this package, so its images will not load. " +
      "Add its Vite plugin to vite.config.ts and restart the dev server:\n\n" +
      '  import { agronodMuiComponents } from "@agronod/mui-components/vite";\n\n' +
      "  plugins: [agronodMuiComponents(), ...]",
  );
}

export {};
