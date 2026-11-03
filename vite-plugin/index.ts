import { readFileSync } from "node:fs";
import type { Plugin } from "vite";

const PACKAGE = "@agronod/mui-components";

/**
 * Vite plugin for apps that use @agronod/mui-components.
 *
 * The bundle references its images relative to itself, so the dev server must
 * serve it from node_modules rather than pre-bundle it into .vite/deps. Excluding
 * it alone breaks the app: Vite then also skips the packages the bundle imports,
 * and CommonJS ones among them cannot load in the browser. This plugin excludes
 * the bundle and pre-bundles each of its imports instead.
 */
export function agronodMuiComponents(): Plugin {
  // Written by the library build from the bundle's external imports.
  const imports: string[] = JSON.parse(
    readFileSync(new URL("../optimize-deps.json", import.meta.url), "utf8"),
  );

  return {
    name: "agronod-mui-components",
    config: () => ({
      optimizeDeps: {
        exclude: [PACKAGE],
        include: imports.map((dependency) => `${PACKAGE} > ${dependency}`),
      },
    }),
  };
}
