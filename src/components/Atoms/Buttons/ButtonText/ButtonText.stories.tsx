import { ComponentStory, ComponentMeta } from "@storybook/react";
import ButtonText from "./ButtonText";
import { MuiArrowBackIcon, MuiArrowForwardIcon } from "../../StoryIcons";

export default {
  title: "Components/Atoms/Buttons/ButtonText",
  component: ButtonText,
  argTypes: {
    disabled: {
      control: {
        type: "boolean",
        expanded: true,
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
} as ComponentMeta<typeof ButtonText>;

export const ButtonTextBack: ComponentStory<typeof ButtonText> = ({
  children,
  ...args
}) => <ButtonText {...args}>{children}</ButtonText>;
ButtonTextBack.args = {
  children: "Go back",
  disabled: false,
  startIcon: <MuiArrowBackIcon />,
};

export const ButtonTextForward: ComponentStory<typeof ButtonText> = ({
  children,
  ...args
}) => <ButtonText {...args}>{children}</ButtonText>;
ButtonTextForward.args = {
  children: "Go forward",
  disabled: false,
  endIcon: <MuiArrowForwardIcon />,
};

export const ButtonTextDisabled: ComponentStory<typeof ButtonText> = ({
  children,
  ...args
}) => <ButtonText {...args}>{children}</ButtonText>;
ButtonTextDisabled.args = {
  children: "I am disabled",
  disabled: true,
  endIcon: <MuiArrowForwardIcon />,
};
