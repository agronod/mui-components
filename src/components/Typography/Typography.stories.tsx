import { Typography } from "@mui/material";
import { StoryFn, Meta } from "@storybook/react";

export default {
  title: "Base/Typography",
  component: Typography,
  parameters: {
    componentSubtitle: "Typography component has all text variants available",
    docs: {
      description: {
        component:
          "<p>To use this compoent from our Storyboook, import it from <code>@mui-agronod</code> and not from materialUi, since we added our base theme overrides for different headlines and other fonts</p><p>Use typography to present your design and content as clearly and efficiently as possible.</p><p>For typography we use object defined in <code>baseTheme</code>.</p><a target='_blank' href='https://material.io/design/typography/the-type-system.html'>Go to material design for more</a>",
      },
    },
    previewTabs: {
      canvas: { hidden: true },
    },
    viewMode: "docs",
  },
  argTypes: {
    children: {
      control: {
        type: "text",
        required: true,
      },
    },
    textAlign: {
      control: {
        type: "text",
      },
    },
    variant: {
      description:
        "<p>Is used to get styles and look for component that are defined in base theme.</p>",
      control: {
        type: "select",
      },
      options: [
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "subtitle1",
        "subtitle2",
        "body1",
        "subtitle2",
        "body2",
        "subtitle3",
        "body3",
        "body4",
        "caption",
        "overline",
      ],
    },
    component: {
      description:
        "<p>If we want to use styles from one component but have it rendered as other component we use this property.</p>",
      control: {
        type: "select",
      },
      options: [
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "subtitle1",
        "subtitle2",
        "body1",
        "subtitle2",
        "body2",
        "subtitle3",
        "body3",
        "body4",
        "caption",
        "overline",
      ],
    },
    color: {
      description:
        "<p>Here we can use all colors we defined in our base theme object.</p>",
      control: {
        type: "select",
      },
      options: [
        "primary",
        "secondary",
        "text.primary",
        "text.secondary",
        "disabled",
        "error.main",
        "info.main",
        "success.main",
        "warning.main",
      ],
    },
  },
} as Meta<typeof Typography>;

export const Headline1: StoryFn<typeof Typography> = ({
  children,
  ...rest
}) => <Typography {...rest}>{children}</Typography>;

Headline1.args = {
  children: "This is h1",
  variant: "h1",
};

export const Headline2: StoryFn<typeof Typography> = ({
  children,
  ...rest
}) => <Typography {...rest}>{children}</Typography>;

Headline2.args = {
  children: "This is h2",
  variant: "h2",
};

export const Headline3: StoryFn<typeof Typography> = ({
  children,
  ...rest
}) => <Typography {...rest}>{children}</Typography>;

Headline3.args = {
  children: "This is h3",
  variant: "h3",
};

export const Headline4: StoryFn<typeof Typography> = ({
  children,
  ...rest
}) => <Typography {...rest}>{children}</Typography>;

Headline4.args = {
  children: "This is h4",
  variant: "h4",
};

export const Headline5: StoryFn<typeof Typography> = ({
  children,
  ...rest
}) => <Typography {...rest}>{children}</Typography>;

Headline5.args = {
  children: "This is h5",
  variant: "h5",
};

export const Headline6: StoryFn<typeof Typography> = ({
  children,
  ...rest
}) => <Typography {...rest}>{children}</Typography>;

Headline6.args = {
  children: "This is h6",
  variant: "h6",
};

export const subtitle1: StoryFn<typeof Typography> = ({
  children,
  ...rest
}) => <Typography {...rest}>{children}</Typography>;

subtitle1.args = {
  children: "This is subtitle1",
  variant: "subtitle1",
};

export const subtitle2: StoryFn<typeof Typography> = ({
  children,
  ...rest
}) => <Typography {...rest}>{children}</Typography>;

subtitle2.args = {
  children: "This is subtitle2",
  variant: "subtitle2",
};

export const subtitle3: StoryFn<typeof Typography> = ({
  children,
  ...rest
}) => <Typography {...rest}>{children}</Typography>;

subtitle3.args = {
  children: "This is subtitle3",
  variant: "subtitle3",
};

export const body1: StoryFn<typeof Typography> = ({ children, ...rest }) => (
  <Typography {...rest}>{children}</Typography>
);

body1.args = {
  children: "This is body1",
  variant: "body1",
};

export const body2: StoryFn<typeof Typography> = ({ children, ...rest }) => (
  <Typography {...rest}>{children}</Typography>
);

body2.args = {
  children: "This is body2",
  variant: "body2",
};

export const body3: StoryFn<typeof Typography> = ({ children, ...rest }) => (
  <Typography {...rest}>{children}</Typography>
);

body3.args = {
  children: "This is body3",
  variant: "body3",
};

export const body4: StoryFn<typeof Typography> = ({ children, ...rest }) => (
  <Typography {...rest}>{children}</Typography>
);

body4.args = {
  children: "This is body4",
  variant: "body4",
};

export const caption: StoryFn<typeof Typography> = ({ children, ...rest }) => (
  <Typography {...rest}>{children}</Typography>
);

caption.args = {
  children: "This is caption",
  variant: "caption",
};

export const overline: StoryFn<typeof Typography> = ({ children, ...rest }) => (
  <Typography {...rest}>{children}</Typography>
);

overline.args = {
  children: "This is overline",
  variant: "overline",
};
