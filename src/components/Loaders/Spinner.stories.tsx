import { ComponentStory, ComponentMeta } from "@storybook/react";
import Spinner from "./Spinner";
import Button from "../Buttons/Button/Button";

export default {
  title: "Components/Loaders/Spinner",
  component: Spinner,
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
} as ComponentMeta<typeof Spinner>;

export const SpinnerDefault: ComponentStory<typeof Spinner> = ({ ...args }) => (
  <Spinner {...args} />
);

SpinnerDefault.args = {
  color: "primary",
  align: "center",
};

export const SpinnerInButton: ComponentStory<typeof Spinner> = ({
  ...args
}) => (
  <Button variant="contained" loading={true}>
    <Spinner {...args} />
  </Button>
);
SpinnerInButton.args = {
  size: 20,
  align: "center",
  thickness: 5,
  color: "inherit",
};

SpinnerInButton.parameters = {
  docs: {
    description: {
      story:
        "Showing how spinner can look if used in button with specific <code>size</code> and <code>align</code> and <code>color</code> inherit.",
    },
  },
};
