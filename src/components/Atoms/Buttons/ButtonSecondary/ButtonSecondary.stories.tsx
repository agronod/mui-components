import { ComponentStory, ComponentMeta } from "@storybook/react";
import ButtonSecondary from "./ButtonSecondary";
import LoaderCircular from "../../Loaders/LoaderCrcular";
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
  },
} as ComponentMeta<typeof ButtonSecondary>;

export const Secondary: ComponentStory<typeof ButtonSecondary> = ({
  children,
  ...args
}) => <ButtonSecondary {...args}>{children}</ButtonSecondary>;
Secondary.args = {
  children: "Button Secondary",
  disabled: false,
  fullWidth: false,
};

export const SecondaryDisabled: ComponentStory<typeof ButtonSecondary> = ({
  children,
  ...args
}) => <ButtonSecondary {...args}>{children}</ButtonSecondary>;
SecondaryDisabled.args = {
  children: "Button Disabled",
  disabled: true,
  fullWidth: false,
};

export const SecondaryFullWidth: ComponentStory<typeof ButtonSecondary> = ({
  children,
  ...args
}) => <ButtonSecondary {...args}>{children}</ButtonSecondary>;
SecondaryFullWidth.args = {
  children: "Button Full Width",
  disabled: false,
  fullWidth: true,
};

export const SecondaryCustomWidth: ComponentStory<typeof ButtonSecondary> = ({
  children,
  ...args
}) => <ButtonSecondary {...args}>{children}</ButtonSecondary>;
SecondaryCustomWidth.args = {
  children: "Button Custom Width",
  disabled: false,
  fullWidth: false,
  sx: { minWidth: "500px" },
};

export const SecondaryLoader: ComponentStory<typeof ButtonSecondary> = ({
  children,
  ...args
}) => <ButtonSecondary {...args}>{children}</ButtonSecondary>;
SecondaryLoader.args = {
  children: <LoaderCircular align="center" size={20} />,
  disabled: false,
  fullWidth: false,
};

export const SecondaryIconLeft: ComponentStory<typeof ButtonSecondary> = ({
  children,
  ...args
}) => <ButtonSecondary {...args}>Button with icon on left</ButtonSecondary>;
SecondaryIconLeft.args = {
  disabled: false,
  fullWidth: false,
  startIcon: <MuiArrowBackIcon />,
};

export const SecondaryIconRight: ComponentStory<typeof ButtonSecondary> = ({
  children,
  ...args
}) => <ButtonSecondary {...args}>{children}</ButtonSecondary>;
SecondaryIconRight.args = {
  children: "Button with icon on right",
  disabled: false,
  fullWidth: false,
  endIcon: <MuiArrowForwardIcon />,
};
