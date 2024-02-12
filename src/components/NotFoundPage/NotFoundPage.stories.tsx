import { Meta, StoryFn } from "@storybook/react";
import NotFoundPage from "./NotFoundPage";

export default {
  title: "Components/NotFoundPage",
  component: NotFoundPage,
  parameters: {
    componentSubtitle:
      "This is general not found page with dynamic link to home and theme background color",
    docs: {},
  },
  argTypes: {
    PageLink: {
      control: {
        type: "text",
      },
    },
    maxWidth: {
      control: {
        type: "text",
      },
    },
  },
} as Meta<typeof NotFoundPage>;

export const NotFoundPageDefault: StoryFn<typeof NotFoundPage> = (props) => (
  <NotFoundPage {...props} />
);
NotFoundPageDefault.args = {
  backgroundColor: "#FDECB5",
};

export const NotFoundPageWithMaxWidth: StoryFn<typeof NotFoundPage> = (
  props
) => <NotFoundPage {...props} />;
NotFoundPageWithMaxWidth.args = {
  maxWidth: "1088px",
  backgroundColor: "#FDECB5",
};
