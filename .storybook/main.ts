import { mergeConfig, defineConfig } from "vite";
import svgrPlugin from "vite-plugin-svgr";

module.exports = {
  framework: {
    name: "@storybook/react-vite",
  },
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  docs: {
    defaultName: "About",
  },
  addons: [
    {
      name: "@storybook/addon-docs",
      options: {
        transcludeMarkdown: true,
      },
    },
    "@storybook/addon-actions",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-links",
    "@storybook/addon-themes",
    "@chromatic-com/storybook",
    "@storybook/blocks",
  ],
  logLevel: "debug",
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
  core: {
    disableTelemetry: true,
    builder: "@storybook/builder-vite",
  },
  viteFinal: async (config) => {
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
