import { StoryFn, Meta } from "@storybook/react";
import { Link } from "@mui/material";

export default {
  title: "Common Components/Link",
  component: Link,
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
    children: {
      control: {
        type: "text",
        required: true,
      },
    },

    className: {
      control: {
        type: "select",
      },
      options: ["default", "inverted"],
    },
    sx: {
      control: {
        type: "object",
      },
    },
  },
} as Meta<typeof Link>;

export const LinkDefault: StoryFn<typeof Link> = ({ children, ...rest }) => (
  <Link {...rest}>{children}</Link>
);
LinkDefault.args = {
  children: "this is link",
  className: "default",
  href: "#",
};

export const LinkSecondary: StoryFn<typeof Link> = ({ children, ...rest }) => (
  <Link {...rest}>{children}</Link>
);
LinkSecondary.args = {
  children: "this is secondary link",
  className: "inverted",
  href: "#",
};
