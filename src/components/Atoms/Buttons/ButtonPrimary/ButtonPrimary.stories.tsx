import { ComponentStory, ComponentMeta } from "@storybook/react";
import ButtonPrimary from "./ButtonPrimary";
import LoaderCircular from "../../Loaders/Spinner";
import { MuiArrowBackIcon, MuiArrowForwardIcon } from "../../StoryIcons";

export default {
  title: "Components/Atoms/Buttons/ButtonPrimary",
  component: ButtonPrimary,
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
} as ComponentMeta<typeof ButtonPrimary>;

export const Primary: ComponentStory<typeof ButtonPrimary> = ({
  children,
  ...args
}) => <ButtonPrimary {...args}>{children}</ButtonPrimary>;
Primary.args = {
  children: "Button Primary",
  disabled: false,
  fullWidth: false,
};

export const PrimaryDisabled: ComponentStory<typeof ButtonPrimary> = ({
  children,
  ...args
}) => <ButtonPrimary {...args}>{children}</ButtonPrimary>;
PrimaryDisabled.args = {
  children: "Button Disabled",
  disabled: true,
  fullWidth: false,
};

export const PrimaryFullWidth: ComponentStory<typeof ButtonPrimary> = ({
  children,
  ...args
}) => <ButtonPrimary {...args}>{children}</ButtonPrimary>;
PrimaryFullWidth.args = {
  children: "Button Full Width",
  disabled: false,
  fullWidth: true,
};

export const PrimaryCustomWidth: ComponentStory<typeof ButtonPrimary> = ({
  children,
  ...args
}) => <ButtonPrimary {...args}>{children}</ButtonPrimary>;
PrimaryCustomWidth.args = {
  children: "Button Custom Width",
  disabled: false,
  fullWidth: false,
  sx: { minWidth: "500px" },
};

export const PrimaryLoader: ComponentStory<typeof ButtonPrimary> = ({
  children,
  ...args
}) => <ButtonPrimary {...args}>{children}</ButtonPrimary>;
PrimaryLoader.args = {
  children: <LoaderCircular align="center" size={20} />,
  disabled: false,
  fullWidth: false,
};

export const PrimaryIconLeft: ComponentStory<typeof ButtonPrimary> = ({
  children,
  ...args
}) => <ButtonPrimary {...args}>Button with icon on left</ButtonPrimary>;
PrimaryIconLeft.args = {
  disabled: false,
  fullWidth: false,
  startIcon: <MuiArrowBackIcon />,
};

export const PrimaryIconRight: ComponentStory<typeof ButtonPrimary> = ({
  children,
  ...args
}) => <ButtonPrimary {...args}>{children}</ButtonPrimary>;
PrimaryIconRight.args = {
  children: "Button with icon on right",
  disabled: false,
  fullWidth: false,
  endIcon: <MuiArrowForwardIcon />,
};
