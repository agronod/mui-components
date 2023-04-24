import { ComponentStory, ComponentMeta } from "@storybook/react";
import Card from "./Card";

export default {
  title: "Components/Card",
  component: Card,
  parameters: {
    componentSubtitle: "Card is used in multiple places and components",
    docs: {
      description: {
        component: `<div>We can se it as:
          <ul><li>Aside card for menus and forms</li>
          <li>Card information blocks</li></ul></div>
          `,
      },
    },
  },
  argTypes: {
    children: {
      type: { name: "function", required: true },
      control: {
        type: "text",
      },
    },
    variant: {
      control: {
        type: "radio",
        options: ["outlined", "elevation", "none"],
      },
    },
    centeredContent: {
      control: {
        type: "boolean",
      },
    },
    positionLeft: {
      control: {
        type: "boolean",
      },
    },
    positionRight: {
      control: {
        type: "boolean",
      },
    },
    padding: {
      control: { type: "range", min: 0, max: 100 },
    },
  },
} as ComponentMeta<typeof Card>;

export const CardDefault: ComponentStory<typeof Card> = ({
  children,
  ...rest
}) => <Card {...rest}>{children}</Card>;
CardDefault.args = {
  children: "Card Default",
};
