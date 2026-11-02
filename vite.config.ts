import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgrPlugin from "vite-plugin-svgr";
import dts from "vite-plugin-dts";
import { peerDependencies } from "./package.json";
import typescript from "@rollup/plugin-typescript";

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
      external: Object.keys(peerDependencies),
      plugins: [
        typescript({
          tsconfig: "./tsconfig-build.json",
        }),
      ],
    },
  },
  plugins: [react(), svgrPlugin(), dts()],
});
