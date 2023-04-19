import { ComponentStory, ComponentMeta } from "@storybook/react";
import Loader from "./Loader";
import Button from "../Buttons/Button/Button";

export default {
  title: "Components/Loaders/Loader",
  component: Loader,
  argTypes: {
    size: {
      control: {
        type: "number",
      },
    },
    align: {
      control: {
        type: "select",
        options: ["flex-start", "center", "flex-end"],
      },
    },
    thickness: {
      control: {
        type: "number",
      },
    },
    color: {
      control: {
        type: "select",
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
  },
} as ComponentMeta<typeof Loader>;

export const LoaderDefault: ComponentStory<typeof Loader> = ({ ...args }) => (
  <Loader {...args} />
);

LoaderDefault.args = {
  color: "primary",
  align: "center",
};

export const LoaderInButton: ComponentStory<typeof Loader> = ({ ...args }) => (
  <Button variant="contained" loading={true}>
    <Loader {...args} />
  </Button>
);
LoaderInButton.args = {
  size: 20,
  align: "center",
  thickness: 5,
  color: "inherit",
};

LoaderInButton.parameters = {
  docs: {
    description: {
      story:
        "Showing how spinner can look if used in button with specific <code>size</code> and <code>align</code> and <code>color</code> inherit.",
    },
  },
};
