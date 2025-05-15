import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgrPlugin from "vite-plugin-svgr";
import dts from "vite-plugin-dts";
import { peerDependencies } from "./package.json";
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
      external: Object.keys(peerDependencies),
      plugins: [
        typescript({
          tsconfig: "./tsconfig-build.json",
        }),
      ],
    },
  },
  plugins: [react(), svgrPlugin(
    {
      svgrOptions: {
        plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
        svgoConfig: {
          plugins: [
            {
              name: "prefixIds",
              params: {
                delim: '',
                prefix: () => `${Math.random()}`
              }
            }
          ],
        },
      },
      include: '**/*.svg?react',
    }
  ), dts()],
});
