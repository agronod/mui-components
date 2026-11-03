import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgrPlugin from "vite-plugin-svgr";
import dts from "vite-plugin-dts";
import { peerDependencies, dependencies } from "./package.json";
import typescript from "@rollup/plugin-typescript";
import type { Plugin } from "vite";

// Lists the bundle's external imports for the agronodMuiComponents Vite plugin
// (vite-plugin/index.ts), which pre-bundles them in apps that exclude this package.
const optimizeDepsList = (): Plugin => ({
  name: "optimize-deps-list",
  generateBundle(options, bundle) {
    if (options.format !== "es") return;
    const imports = new Set<string>();
    for (const output of Object.values(bundle)) {
      if (output.type === "chunk") output.imports.forEach((id) => imports.add(id));
    }
    this.emitFile({
      type: "asset",
      fileName: "optimize-deps.json",
      source: JSON.stringify([...imports].sort(), null, 2) + "\n",
    });
  },
});

export default defineConfig({
  // Images are imported with ?no-inline so the library build emits them as
  // files instead of base64 in the bundle. A relative base makes the bundle
  // reference them relative to itself, so the consuming app's bundler resolves
  // and copies them.
  base: "./",
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "@agronod/mui-components",
      fileName: (format) => `index.${format}.js`,
      formats: ["es", "umd"],
    },
    rollupOptions: {
      // Everything a consumer installs (peers and runtime dependencies) stays
      // external so the app uses its own single copy. The regex covers deep
      // imports such as @mui/icons-material/Close, which the exact package
      // names above would not match and would otherwise be bundled.
      external: [
        ...Object.keys(peerDependencies),
        ...Object.keys(dependencies),
        /^@mui\//,
      ],
      plugins: [
        typescript({
          tsconfig: "./tsconfig-build.json",
        }),
      ],
    },
  },
  plugins: [react(), svgrPlugin(), dts(), optimizeDepsList()],
});
