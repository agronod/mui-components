import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgrPlugin from "vite-plugin-svgr";
import dts from "vite-plugin-dts";
import { peerDependencies, dependencies } from "./package.json";
import typescript from "@rollup/plugin-typescript";

export default defineConfig({
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
  plugins: [react(), svgrPlugin(), dts()],
});
