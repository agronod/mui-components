import { ComponentStory, ComponentMeta } from "@storybook/react";
import ButtonLInk from "./ButtonLink";
import { MuiArrowBackIcon, MuiArrowForwardIcon } from "../../StoryIcons";

export default {
  title: "Components/Atoms/Buttons/ButtonLInk",
  component: ButtonLInk,
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
} as ComponentMeta<typeof ButtonLInk>;

export const ButtonLInkBack: ComponentStory<typeof ButtonLInk> = ({
  children,
  ...args
}) => <ButtonLInk {...args}>{children}</ButtonLInk>;
ButtonLInkBack.args = {
  children: "Go back",
  disabled: false,
  startIcon: <MuiArrowBackIcon />,
};

export const ButtonLInkForward: ComponentStory<typeof ButtonLInk> = ({
  children,
  ...args
}) => <ButtonLInk {...args}>{children}</ButtonLInk>;
ButtonLInkForward.args = {
  children: "Go forward",
  disabled: false,
  endIcon: <MuiArrowForwardIcon />,
};

export const ButtonLInkDisabled: ComponentStory<typeof ButtonLInk> = ({
  children,
  ...args
}) => <ButtonLInk {...args}>{children}</ButtonLInk>;
ButtonLInkDisabled.args = {
  children: "I am disabled",
  disabled: true,
  endIcon: <MuiArrowForwardIcon />,
};
