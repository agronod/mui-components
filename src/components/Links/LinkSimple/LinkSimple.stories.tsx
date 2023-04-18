import { ComponentStory, ComponentMeta } from "@storybook/react";
import LinkSimple from "./LinkSimple";

export default {
  title: "Components/Links/LinkSimple",
  component: LinkSimple,
  argTypes: {
    children: {
      type: { name: "function", required: true },
    },
    classes: {
      control: {
        type: "text",
      },
    },
    sx: {
      control: {
        type: "object",
        expanded: true,
      },
    },
    underline: {
      control: {
        type: "select",
        options: ["none", "hover", "always"],
      },
    },
  },
} as ComponentMeta<typeof LinkSimple>;

export const LinkSimpleDefault: ComponentStory<typeof LinkSimple> = ({
  children,
  ...rest
}) => <LinkSimple {...rest}>{children}</LinkSimple>;
LinkSimpleDefault.args = {
  children: "this is link default",
};
