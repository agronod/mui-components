import { StoryFn, Meta } from "@storybook/react";
import { Button, IconButton } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { LoaderCircular } from "../Loaders";

export default {
  title: "Shared components/Buttons",
  component: Button,
  parameters: {
    componentSubtitle:
      "Buttons allow users to take actions, and make choices, with a single tap.",
    docs: {
      description: {
        component: `<div>Buttons communicate actions that users can take. They are typically placed throughout your UI, in places like:
          <ul><li>Modal windows</li>
          <li>Forms</li>
          <li>Cards</li>
          <li>Toolbars</li></ul></div>
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
      control: {
        type: "radio",
        default: "contained",
      },
      options: ["contained", "outlined", "text"],
    },
    color: {
      control: {
        type: "select",
      },
      options: [
        "primary",
        "secondary",
        "tertiary",
        "success",
        "error",
        "info",
        "warning",
      ],
    },

    size: {
      control: {
        type: "select",
      },
      options: ["small", "medium"],
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
} as Meta<typeof Button>;

export const ButtonContained: StoryFn<typeof Button> = ({
  children,
  ...rest
}) => <Button {...rest}>{children}</Button>;
ButtonContained.args = {
  children: "Button Contained",
  variant: "contained",
};

export const ButtonOutlined: StoryFn<typeof Button> = ({
  children,
  ...rest
}) => <Button {...rest}>{children}</Button>;
ButtonOutlined.args = {
  children: "Button Outlined",
  variant: "outlined",
};

export const ButtonText: StoryFn<typeof Button> = ({ children, ...rest }) => (
  <Button {...rest}>{children}</Button>
);
ButtonText.args = {
  children: "Button Text",
  variant: "text",
};

export const ButtonDisabled: StoryFn<typeof Button> = ({
  children,
  ...rest
}) => <Button {...rest}>{children}</Button>;
ButtonDisabled.args = {
  children: "Button Disabled",
  variant: "contained",
  disabled: true,
};

export const ButtonFullWidth: StoryFn<typeof Button> = ({
  children,
  ...rest
}) => <Button {...rest}>{children}</Button>;
ButtonFullWidth.args = {
  children: "Button Full Width",
  variant: "contained",
  fullWidth: true,
};

export const ButtonCustomWidth: StoryFn<typeof Button> = ({
  children,
  ...rest
}) => <Button {...rest}>{children}</Button>;
ButtonCustomWidth.args = {
  children: "Button Custom Width",
  variant: "contained",
  sx: { minWidth: "500px" },
};

export const ButtonLoader: StoryFn<typeof Button> = ({ children, ...rest }) => (
  <Button
    disabled={true}
    {...rest}
    startIcon={
      <LoaderCircular align="center" color="inherit" size={15} thickness={5} />
    }
  >
    Loading
  </Button>
);
ButtonLoader.args = {
  variant: "contained",
};

export const ButtonIconLeft: StoryFn<typeof Button> = ({
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

export const ButtonIconRight: StoryFn<typeof Button> = ({
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

export const IconButtonDefault: StoryFn<typeof IconButton> = ({
  children,
  ...rest
}) => <IconButton {...rest}>{children}</IconButton>;
IconButtonDefault.args = {
  children: <CloseRoundedIcon />,
};
