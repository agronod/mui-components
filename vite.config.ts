import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import svgrPlugin from "vite-plugin-svgr";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      // name: "mui-components",
      // fileName: "mui-components",
      name: "mui-components",
      fileName: (format) => `mui-components.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "react-router-dom", "@mui/material"],
      output: {
        globals: {
          react: "React",
          "react-dom": "react-dom",
          "react-router-dom": "react-router-dom",
          "@mui/material": "@mui/material",
        },
        // assetFileNames: ({ name }) => {
        //   if (/\.(gif|jpe?g|png|svg)$/.test(name ?? "")) {
        //     return "assets/images/[name]-[hash][extname]";
        //   }

        //   if (/\.(otf|ttf)$/.test(name ?? "")) {
        //     return "assets/fonts/[name]-[hash][extname]";
        //   }

        //   if (/\.css$/.test(name ?? "")) {
        //     return "assets/css/[name]-[hash][extname]";
        //   }

        //   // default value
        //   // ref: https://rollupjs.org/guide/en/#outputassetfilenames
        //   return "assets/[name]-[hash][extname]";
        // },
      },
    },
  },
  plugins: [react(), tsconfigPaths(), svgrPlugin(), dts()],
});
