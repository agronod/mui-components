import { mergeConfig, defineConfig } from "vite";
import svgrPlugin from "vite-plugin-svgr";

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-docs",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-vite",
  },
  features: {
    storyStoreV7: true,
  },
  docs: {
    autodocs: true,
  },
  async viteFinal(config) {
    // Merge custom configuration into the default config
    return mergeConfig(
      config,
      defineConfig({
        plugins: [svgrPlugin()],
        server: {
          port: 3000,
        },
      })
    );
  },
};
