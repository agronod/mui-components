import { Meta, StoryFn } from "@storybook/react";
import ErrorPagesContent from "./ErrorPagesContent";
import { useTheme } from "@mui/material";

export default {
  title: "Shared Components/Error Pages Content",
  component: ErrorPagesContent,
  parameters: {
    componentSubtitle:
      "This is general Not Found Page with dynamic background color",
    docs: {
      description: {
        component:
          "<p>it is used on 404 pages, when page does not exist and it takes several arguments (description in docs) to make sure it is dynamic and adjustable for all projects</p>",
      },
    },
  },
  argTypes: {
    pageLink: {
      control: {
        type: "text",
      },
      description:
        "page link is button which goes to homepage, it can be absolute or relative",
    },
    pageEmail: {
      control: {
        type: "text",
      },
      description: "email which is shown in contact us part",
    },
    backgroundColor: {
      control: {
        type: "color",
        disable: true,
      },
      description:
        "Background color is used to change color of background image, it case presented in matches <code>theme.palette.primary.light</code> which takes Agronod or Agrosphere theme primary colors.",
    },
    maxWidth: {
      control: {
        type: "text",
      },
      description:
        "Max width is applied on upper part of the page with text and button, it does not affect image part of component",
    },
    calculatedHeight: {
      control: {
        type: "text",
      },
      description:
        "This is usefull when we have header menu to send calculated height in so it does not have scroll, otherwise it's default value is <code>100dvh</code> you can use expression like <code>calc(100dvh - 45px)</code> to get dynamic height minus static element.",
    },
  },
} as Meta<typeof ErrorPagesContent>;

export const ErrorPagesContentDefault: StoryFn<typeof ErrorPagesContent> = ({
  backgroundColor,
  ...rest
}) => {
  const theme = useTheme();
  return (
    <ErrorPagesContent
      backgroundColor={theme.palette.primary.light ?? "#FFF5D9"}
      {...rest}
    />
  );
};

ErrorPagesContentDefault.args = {
  pageEmail: "support@agronod.com",
  pageLink: "https://main--626a5b4b1abebb004a4657a8.chromatic.com/",
  calculatedHeight: "calc(100dvh - 45px)",
  pageType: 404,
};

export const ErrorPagesContentWithMaxWidth: StoryFn<
  typeof ErrorPagesContent
> = ({ backgroundColor, ...rest }) => {
  const theme = useTheme();
  return (
    <ErrorPagesContent
      backgroundColor={theme.palette.primary.light ?? "#FFF5D9"}
      {...rest}
    />
  );
};
ErrorPagesContentWithMaxWidth.args = {
  maxWidth: "990px",
  pageEmail: "support@agronod.com",
  pageLink: "https://main--626a5b4b1abebb004a4657a8.chromatic.com/",
  pageType: 404,
};

export const ErrorPagesContentServerError: StoryFn<
  typeof ErrorPagesContent
> = ({ backgroundColor, ...rest }) => {
  const theme = useTheme();
  return (
    <ErrorPagesContent
      backgroundColor={theme.palette.primary.light ?? "#FFF5D9"}
      {...rest}
    />
  );
};
ErrorPagesContentServerError.args = {
  pageEmail: "support@agronod.com",
  pageLink: "https://main--626a5b4b1abebb004a4657a8.chromatic.com/",
  pageType: 500,
};
