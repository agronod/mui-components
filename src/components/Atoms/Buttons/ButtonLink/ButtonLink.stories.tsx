import { ComponentStory, ComponentMeta } from "@storybook/react";
import ButtonLink from "./ButtonLink";
import { MuiArrowBackIcon, MuiArrowForwardIcon } from "../../StoryIcons";

export default {
  title: "Components/Atoms/Buttons/ButtonLink",
  component: ButtonLink,
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
} as ComponentMeta<typeof ButtonLink>;

export const ButtonLinkBack: ComponentStory<typeof ButtonLink> = ({
  children,
  ...args
}) => <ButtonLink {...args}>{children}</ButtonLink>;
ButtonLinkBack.args = {
  children: "Go back",
  startIcon: <MuiArrowBackIcon />,
};

export const ButtonLinkForward: ComponentStory<typeof ButtonLink> = ({
  children,
  ...args
}) => <ButtonLink {...args}>{children}</ButtonLink>;
ButtonLinkForward.args = {
  children: "Go forward",
  endIcon: <MuiArrowForwardIcon />,
};

export const ButtonLinkDisabled: ComponentStory<typeof ButtonLink> = ({
  children,
  ...args
}) => <ButtonLink {...args}>{children}</ButtonLink>;
ButtonLinkDisabled.args = {
  children: "I am disabled",
  disabled: true,
  endIcon: <MuiArrowForwardIcon />,
};
