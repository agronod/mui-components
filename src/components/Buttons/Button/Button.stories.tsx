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
    },
    variant: {
      description:
        "<p>The variants to use: <code>outlined</code> and <code>contained</code></p>",
      type: { name: "string", required: true },
      table: { type: { summary: null } },
      control: {
        type: "radio",
        options: ["contained", "outlined"],
        default: "contained",
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

export const ButtonDefault: ComponentStory<typeof Button> = ({
  children,
  ...rest
}) => <Button {...rest}>{children}</Button>;
ButtonDefault.args = {
  children: "Button Default",
  variant: "contained",
};

export const ButtonDefaultOutlined: ComponentStory<typeof Button> = ({
  children,
  ...rest
}) => <Button {...rest}>{children}</Button>;
ButtonDefaultOutlined.args = {
  children: "Button Default Outlined",
  variant: "outlined",
};
ButtonDefaultOutlined.parameters = {
  docs: {
    description: {
      story: `<p>Default <code>Button</code> comes with two variants: <code>contained</code> and <code>outlined</code>.</p><p>In our project <code>contained</code> is used for "Primary Buttons" and <code>outlined</code> for "Secondary Buttons". But all other properties they share.</p>`,
    },
  },
};

export const DefaultDisabled: ComponentStory<typeof Button> = ({
  children,
  ...rest
}) => <Button {...rest}>{children}</Button>;
DefaultDisabled.args = {
  children: "Button Disabled",
  variant: "contained",
  disabled: true,
};

export const DefaultFullWidth: ComponentStory<typeof Button> = ({
  children,
  ...rest
}) => <Button {...rest}>{children}</Button>;
DefaultFullWidth.args = {
  children: "Button Full Width",
  variant: "contained",
  fullWidth: true,
};

export const DefaultCustomWidth: ComponentStory<typeof Button> = ({
  children,
  ...rest
}) => <Button {...rest}>{children}</Button>;
DefaultCustomWidth.args = {
  children: "Button Custom Width",
  variant: "contained",
  sx: { minWidth: "500px" },
};

export const DefaultLoader: ComponentStory<typeof Button> = ({
  children,
  loading,
  ...rest
}) => (
  <Button loading={loading} {...rest}>
    {children}
  </Button>
);
DefaultLoader.args = {
  children: "Button not loading",
  variant: "contained",
  loading: true,
};

export const DefaultIconLeft: ComponentStory<typeof Button> = ({
  children,
  ...rest
}) => <Button {...rest}>{children}</Button>;
DefaultIconLeft.args = {
  children: "Button with icon on left",
  variant: "contained",
  startIcon: <MuiArrowBackIcon />,
};

export const DefaultIconRight: ComponentStory<typeof Button> = ({
  children,
  ...rest
}) => <Button {...rest}>{children}</Button>;
DefaultIconRight.args = {
  children: "Button with icon on right",
  variant: "contained",
  endIcon: <MuiArrowForwardIcon />,
};
