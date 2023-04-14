import { ComponentStory, ComponentMeta } from "@storybook/react";
import ButtonPrimary from "./ButtonPrimary";
import LoaderCircular from "../../Loaders/Spinner";
import { MuiArrowBackIcon, MuiArrowForwardIcon } from "../../StoryIcons";
import Spinner from "../../Loaders/Spinner";

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
    loading: {
      control: {
        type: "boolean",
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
};

export const PrimaryDisabled: ComponentStory<typeof ButtonPrimary> = ({
  children,
  ...args
}) => <ButtonPrimary {...args}>{children}</ButtonPrimary>;
PrimaryDisabled.args = {
  children: "Button Disabled",
  disabled: true,
};

export const PrimaryFullWidth: ComponentStory<typeof ButtonPrimary> = ({
  children,
  ...args
}) => <ButtonPrimary {...args}>{children}</ButtonPrimary>;
PrimaryFullWidth.args = {
  children: "Button Full Width",
  fullWidth: true,
};

export const PrimaryCustomWidth: ComponentStory<typeof ButtonPrimary> = ({
  children,
  ...args
}) => <ButtonPrimary {...args}>{children}</ButtonPrimary>;
PrimaryCustomWidth.args = {
  children: "Button Custom Width",
  sx: { minWidth: "500px" },
};

export const PrimaryLoader: ComponentStory<typeof ButtonPrimary> = ({
  children,
  loading,
  ...args
}) => (
  <ButtonPrimary loading={loading} {...args}>
    {children}
  </ButtonPrimary>
);
PrimaryLoader.args = {
  children: "Button not loading",
  loading: true,
};

export const PrimaryIconLeft: ComponentStory<typeof ButtonPrimary> = ({
  children,
  ...args
}) => <ButtonPrimary {...args}>{children}</ButtonPrimary>;
PrimaryIconLeft.args = {
  children: "Button with icon on left",
  startIcon: <MuiArrowBackIcon />,
};

export const PrimaryIconRight: ComponentStory<typeof ButtonPrimary> = ({
  children,
  ...args
}) => <ButtonPrimary {...args}>{children}</ButtonPrimary>;
PrimaryIconRight.args = {
  children: "Button with icon on right",
  endIcon: <MuiArrowForwardIcon />,
};
