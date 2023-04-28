import { ComponentStory, ComponentMeta } from "@storybook/react";
import ButtonNavigate from "./ButtonNavigate.js";
import { MuiArrowBackIcon, MuiArrowForwardIcon } from "../../StoryIcons.js";

export default {
  title: "Components/Buttons/ButtonNavigate",
  component: ButtonNavigate,
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
} as ComponentMeta<typeof ButtonNavigate>;

export const ButtonNavigateBack: ComponentStory<typeof ButtonNavigate> = ({
  children,
  ...rest
}) => <ButtonNavigate {...rest}>{children}</ButtonNavigate>;
ButtonNavigateBack.args = {
  children: "Go back",
  startIcon: <MuiArrowBackIcon />,
};

export const ButtonNavigateForward: ComponentStory<typeof ButtonNavigate> = ({
  children,
  ...rest
}) => <ButtonNavigate {...rest}>{children}</ButtonNavigate>;
ButtonNavigateForward.args = {
  children: "Go forward",
  endIcon: <MuiArrowForwardIcon />,
};

export const ButtonNavigateDisabled: ComponentStory<typeof ButtonNavigate> = ({
  children,
  ...rest
}) => <ButtonNavigate {...rest}>{children}</ButtonNavigate>;
ButtonNavigateDisabled.args = {
  children: "I am disabled",
  disabled: true,
  endIcon: <MuiArrowForwardIcon />,
};
