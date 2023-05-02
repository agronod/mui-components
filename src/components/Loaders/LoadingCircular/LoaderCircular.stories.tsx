import { ComponentStory, ComponentMeta } from "@storybook/react";
import LoaderCircular from "./LoaderCircular";
import Button from "../../Buttons/Button/Button";

export default {
  title: "Components/Loaders/LoaderCircular",
  component: LoaderCircular,
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
} as ComponentMeta<typeof LoaderCircular>;

export const LoaderCircularDefault: ComponentStory<typeof LoaderCircular> = ({
  ...args
}) => <LoaderCircular {...args} />;

LoaderCircularDefault.args = {
  color: "primary",
  align: "center",
};

export const LoaderCircularInButton: ComponentStory<typeof LoaderCircular> = ({
  ...args
}) => (
  <Button variant="contained" loading={true}>
    <LoaderCircular {...args} />
  </Button>
);
LoaderCircularInButton.args = {
  size: 20,
  align: "center",
  thickness: 5,
  color: "inherit",
};

LoaderCircularInButton.parameters = {
  docs: {
    description: {
      story:
        "Showing how spinner can look if used in button with specific <code>size</code> and <code>align</code> and <code>color</code> inherit.",
    },
  },
};