import { mergeConfig, defineConfig } from "vite";
import svgrPlugin from "vite-plugin-svgr";

module.exports = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-docs",
    "@storybook/addon-storysource",
    "@chromatic-com/storybook",
    "@storybook/addon-themes"
  ],

  framework: {
    name: "@storybook/react-vite",
    options: {},
  },

  docs: {},

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

  typescript: {
    reactDocgen: "react-docgen-typescript"
  }
};
