import { StoryFn, Meta } from "@storybook/react-vite";
import AgronodLink, { AgronodLinkProps } from "./AgronodLink";

export default {
  title: "Shared Components/Link",
  component: AgronodLink,
  parameters: {
    componentSubtitle:
      "Links are styled component that are used to navigate to a new page in or out of the project.",
    docs: {
      description: {
        component: `<p>If we want our link to be secondary text color we can add <code>className="inverted"</code>, then link will behave inverted from primary</p>`,
      },
    },
  },

  argTypes: {
    type: {
      description: "Inverted link has different colors by default and on hover",
      control: {
        type: "select",
      },
      options: ["classic", "inverted"],
    },
  },
} as Meta<typeof AgronodLink>;

export const AgronodLinkDefault: StoryFn<typeof AgronodLink> = ({ children, ...rest }: AgronodLinkProps) => (
  <AgronodLink {...rest}>{children}</AgronodLink>
);
AgronodLinkDefault.args = {
  children: "this is link",
  type:"classic",
  href: "#",
};

export const AgronodLinkInverted: StoryFn<typeof AgronodLink> = ({ children, ...rest }: AgronodLinkProps) => (
  <AgronodLink {...rest}>{children}</AgronodLink>
);
AgronodLinkInverted.args = {
  children: "this is inverted link",
  type: "inverted",
  href: "#",
};
