import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./Button";
import { MuiArrowBackIcon, MuiArrowForwardIcon } from "../../StoryIcons";

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
      type: { name: "function", required: true },
      control: {
        type: "text",
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
        expanded: true,
      },
    },
    startIcon: {
      control: {
        type: "ReactNode",
        expanded: true,
      },
    },
    endIcon: {
      control: {
        type: "ReactNode",
        expanded: true,
      },
    },
    loading: {
      control: {
        type: "boolean",
        expanded: true,
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
ButtonOutlined.parameters = {
  docs: {
    description: {
      story: `<p>Default <code>Button</code> comes with two variants: <code>contained</code> and <code>outlined</code>.</p><p>In our project <code>contained</code> is used for "Primary Buttons" and <code>outlined</code> for "Secondary Buttons". But all other properties they share.</p>`,
    },
  },
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
  loading,
  ...rest
}) => (
  <Button loading={loading} {...rest}>
    {children}
  </Button>
);
ButtonLoader.args = {
  children: "Button not loading",
  variant: "contained",
  loading: true,
};

export const ButtonThatLooksLikeLink: ComponentStory<typeof Button> = ({
  children,
  ...rest
}) => <Button {...rest}>{children}</Button>;
ButtonThatLooksLikeLink.args = {
  children: "Button link",
  variant: "text",
};
ButtonThatLooksLikeLink.parameters = {
  docs: {
    description: {
      story: `<p>This button is <code>variant="text"</code> underline was added as global styling to this button so it reflects it's purpose.</p>`,
    },
  },
};

export const ButtonIconLeft: ComponentStory<typeof Button> = ({
  children,
  ...rest
}) => <Button {...rest}>{children}</Button>;
ButtonIconLeft.args = {
  children: "Button with icon on left",
  variant: "contained",
  startIcon: <MuiArrowBackIcon />,
};

export const ButtonIconRight: ComponentStory<typeof Button> = ({
  children,
  ...rest
}) => <Button {...rest}>{children}</Button>;
ButtonIconRight.args = {
  children: "Button with icon on right",
  variant: "contained",
  endIcon: <MuiArrowForwardIcon />,
};
