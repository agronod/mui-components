import { Meta, StoryFn } from "@storybook/react";
import NotFoundPage from "./NotFoundPage";
import { useTheme } from "@mui/material";

export default {
  title: "Components/NotFoundPage",
  component: NotFoundPage,
  parameters: {
    componentSubtitle:
      "This is general not found page with dynamic link to home and theme background color",
    docs: {},
  },
  argTypes: {
    pageLink: {
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

export const NotFoundPageDefault: StoryFn<typeof NotFoundPage> = ({
  backgroundColor,
  ...rest
}) => {
  const theme = useTheme();
  return (
    <NotFoundPage
      backgroundColor={theme.palette.primary.light ?? "#FFF5D9"}
      {...rest}
    />
  );
};

NotFoundPageDefault.args = {};

export const NotFoundPageWithMaxWidth: StoryFn<typeof NotFoundPage> = ({
  backgroundColor,
  ...rest
}) => {
  const theme = useTheme();
  return (
    <NotFoundPage
      backgroundColor={theme.palette.primary.light ?? "#FFF5D9"}
      {...rest}
    />
  );
};
NotFoundPageWithMaxWidth.args = {
  maxWidth: "1088px",
};
