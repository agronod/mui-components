// The bundle references its images relative to itself (new URL(..., import.meta.url)).
// When a Vite app's dev server pre-bundles this package, the bundle is served
// from node_modules/.vite/deps, where those images do not exist, so they fail
// to load silently. The agronodMuiComponents plugin (vite-plugin/index.ts)
// prevents that. Production builds and Vitest load the bundle from other
// paths, so this only fires in that dev server case.
if (import.meta.url.includes("/.vite/deps/")) {
  console.warn(
    "@agronod/mui-components: Vite pre-bundled this package, so its images will not load. " +
      "Add its Vite plugin to vite.config.ts and restart the dev server:\n\n" +
      '  import { agronodMuiComponents } from "@agronod/mui-components/vite";\n\n' +
      "  plugins: [agronodMuiComponents(), ...]",
  );
}

export {};
