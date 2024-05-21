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
    "@storybook/addon-themes",
  ],

  framework: {
    name: "@storybook/react-vite",
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
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      // Speeds up Storybook build time
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      },
      // Makes union prop types like variant and size appear as select controls
      shouldExtractLiteralValuesFromEnum: true,
      // Makes string and boolean types that can be undefined appear as inputs and switches
      shouldRemoveUndefinedFromOptional: true,
      // Filter out third-party props from node_modules except @mui packages
      propFilter: (prop) =>
        prop.parent
          ? !/node_modules\/(?!@mui)/.test(prop.parent.fileName)
          : true,
    },
  },
};
