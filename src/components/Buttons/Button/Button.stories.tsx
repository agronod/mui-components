import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { LoaderCircular } from "../../Loaders";

export default {
  title: "Components/Buttons/Button",
  component: Button,
  parameters: {
    componentSubtitle:
      "Buttons allow users to take actions, and make choices, with a single tap.",
    docs: {
      description: {
        component: `Buttons communicate actions that users can take. They are typically placed throughout your UI, in places like:
          <ul><li>Modal windows</li>
          <li>Forms</li>
          <li>Cards</li>
          <li>Toolbars</li></ul>
          `,
      },
    },
  },
  argTypes: {
    children: {
      control: {
        type: "text",
        required: true,
      },
    },
    variant: {
      description:
        "<p>The variants to use: <code>outlined</code>, <code>contained</code> and <code>text</code></p>",
      type: { name: "string", required: true },
      table: { type: { summary: null } },
      control: {
        type: "radio",
        options: ["contained", "outlined", "text"],
        default: "contained",
      },
    },
    color: {
      control: {
        type: "select",
        options: [
          "primary",
          "secondary",
          "success",
          "error",
          "info",
          "warning",
        ],
      },
    },
    size: {
      control: {
        type: "select",
        options: ["small", "medium"],
      },
    },
    type: {
      control: {
        type: "select",
      },
    },
    disabled: {
      control: {
        type: "boolean",
      },
    },
    fullWidth: {
      control: {
        type: "boolean",
      },
    },
    sx: {
      control: {
        type: "object",
      },
    },
  },
} as ComponentMeta<typeof Button>;

export const ButtonContained: ComponentStory<typeof Button> = ({
  children,
  ...rest
}) => <Button {...rest}>{children}</Button>;
ButtonContained.args = {
  children: "Button Contained",
  variant: "contained",
};

export const ButtonOutlined: ComponentStory<typeof Button> = ({
  children,
  ...rest
}) => <Button {...rest}>{children}</Button>;
ButtonOutlined.args = {
  children: "Button Outlined",
  variant: "outlined",
};

export const ButtonText: ComponentStory<typeof Button> = ({
  children,
  ...rest
}) => <Button {...rest}>{children}</Button>;
ButtonText.args = {
  children: "Button Text",
  variant: "text",
};

export const ButtonDisabled: ComponentStory<typeof Button> = ({
  children,
  ...rest
}) => <Button {...rest}>{children}</Button>;
ButtonDisabled.args = {
  children: "Button Disabled",
  variant: "contained",
  disabled: true,
};

export const ButtonFullWidth: ComponentStory<typeof Button> = ({
  children,
  ...rest
}) => <Button {...rest}>{children}</Button>;
ButtonFullWidth.args = {
  children: "Button Full Width",
  variant: "contained",
  fullWidth: true,
};

export const ButtonCustomWidth: ComponentStory<typeof Button> = ({
  children,
  ...rest
}) => <Button {...rest}>{children}</Button>;
ButtonCustomWidth.args = {
  children: "Button Custom Width",
  variant: "contained",
  sx: { minWidth: "500px" },
};

export const ButtonLoader: ComponentStory<typeof Button> = ({
  children,
  ...rest
}) => (
  <Button disabled={true} {...rest}>
    <LoaderCircular align="center" color="inherit" size={20} thickness={5} />
  </Button>
);
ButtonLoader.args = {
  variant: "contained",
};

export const ButtonIconLeft: ComponentStory<typeof Button> = ({
  children,
  ...rest
}) => (
  <Button startIcon={<ArrowBack />} {...rest}>
    {children}
  </Button>
);
ButtonIconLeft.args = {
  children: "Button with icon on left",
  variant: "contained",
};

export const ButtonIconRight: ComponentStory<typeof Button> = ({
  children,
  ...rest
}) => (
  <Button endIcon={<ArrowForward />} {...rest}>
    {children}
  </Button>
);
ButtonIconRight.args = {
  children: "Button with icon on right",
  variant: "contained",
};
