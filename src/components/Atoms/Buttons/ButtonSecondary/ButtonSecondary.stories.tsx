import { ComponentStory, ComponentMeta } from "@storybook/react";
import ButtonSecondary from "./ButtonSecondary";
import LoaderCircular from "../../Loaders/Spinner";
import { MuiArrowBackIcon, MuiArrowForwardIcon } from "../../StoryIcons";

export default {
  title: "Components/Atoms/Buttons/ButtonSecondary",
  component: ButtonSecondary,
  argTypes: {
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
} as ComponentMeta<typeof ButtonSecondary>;

export const Secondary: ComponentStory<typeof ButtonSecondary> = ({
  children,
  ...args
}) => <ButtonSecondary {...args}>{children}</ButtonSecondary>;
Secondary.args = {
  children: "Button Secondary",
};

export const SecondaryDisabled: ComponentStory<typeof ButtonSecondary> = ({
  children,
  ...args
}) => <ButtonSecondary {...args}>{children}</ButtonSecondary>;
SecondaryDisabled.args = {
  children: "Button Disabled",
  disabled: true,
};

export const SecondaryFullWidth: ComponentStory<typeof ButtonSecondary> = ({
  children,
  ...args
}) => <ButtonSecondary {...args}>{children}</ButtonSecondary>;
SecondaryFullWidth.args = {
  children: "Button Full Width",
  fullWidth: true,
};

export const SecondaryCustomWidth: ComponentStory<typeof ButtonSecondary> = ({
  children,
  ...args
}) => <ButtonSecondary {...args}>{children}</ButtonSecondary>;
SecondaryCustomWidth.args = {
  children: "Button Custom Width",
  sx: { minWidth: "500px" },
};

export const SecondaryLoader: ComponentStory<typeof ButtonSecondary> = ({
  children,
  loading,
  ...args
}) => (
  <ButtonSecondary loading={loading} {...args}>
    {children}
  </ButtonSecondary>
);
SecondaryLoader.args = {
  children: "Button not loading",
  loading: true,
};

export const SecondaryIconLeft: ComponentStory<typeof ButtonSecondary> = ({
  children,
  ...args
}) => <ButtonSecondary {...args}>{children}</ButtonSecondary>;
SecondaryIconLeft.args = {
  children: "Button with icon on left",
  startIcon: <MuiArrowBackIcon />,
};

export const SecondaryIconRight: ComponentStory<typeof ButtonSecondary> = ({
  children,
  ...args
}) => <ButtonSecondary {...args}>{children}</ButtonSecondary>;
SecondaryIconRight.args = {
  children: "Button with icon on right",
  endIcon: <MuiArrowForwardIcon />,
};
