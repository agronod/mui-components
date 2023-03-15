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
      // output: {
      //   globals: {
      //     react: "React",
      //     "react-dom": "react-dom",
      //     "react-router-dom": "react-router-dom",
      //     "@mui/material": "@mui/material",
      //   },
      //   // assetFileNames: ({ name }) => {
      //   //   if (/\.(gif|jpe?g|png|svg)$/.test(name ?? "")) {
      //   //     return "assets/images/[name]-[hash][extname]";
      //   //   }

      //   //   if (/\.(otf|ttf)$/.test(name ?? "")) {
      //   //     return "assets/fonts/[name]-[hash][extname]";
      //   //   }

      //   //   if (/\.css$/.test(name ?? "")) {
      //   //     return "assets/css/[name]-[hash][extname]";
      //   //   }

      //   //   // default value
      //   //   // ref: https://rollupjs.org/guide/en/#outputassetfilenames
      //   //   return "assets/[name]-[hash][extname]";
      //   // },
      // },
    },
  },
  plugins: [react(), svgrPlugin(), dts()],
});
