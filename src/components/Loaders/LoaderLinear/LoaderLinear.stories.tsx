import { StoryFn, Meta } from "@storybook/react";
import LoaderLinear from "./LoaderLinear";

export default {
  title: "Shared components/Loaders/LoaderLinear",
  component: LoaderLinear,
  parameters: {
    docs: {
      description: {
        component: `This loader is used in project to show loading above all components
          value <code>isGlobal</code> in this case should be true and then loader will get <code>position: fixed</code>
          `,
      },
    },
  },
  argTypes: {
    sx: {
      control: { type: "text" },
    },
    value: {
      control: { type: "range", min: 0, max: 100 },
    },
    valueBuffer: {
      control: { type: "range", min: 0, max: 100 },
    },
    isGlobal: {
      description:
        "<p>When this property is set to true <code>LoaderLinear</code> gets <code>position: fixed</code> in code and it is sticky to the top</p>",
      control: {
        disable: true,
      },
    },
    color: {
      control: {
        type: "select",
      },
      options: [
        "inherit",
        "primary",
        "secondary",
        "error",
        "info",
        "success",
        "warning",
      ],
    },
  },
} as Meta<typeof LoaderLinear>;

export const LoaderLinearDefault: StoryFn<typeof LoaderLinear> = ({
  ...args
}) => <LoaderLinear {...args} />;

LoaderLinearDefault.args = {
  color: "primary",
};
