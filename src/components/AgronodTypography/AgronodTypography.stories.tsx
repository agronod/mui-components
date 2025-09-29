import { StoryFn, Meta } from "@storybook/react-vite";
import AgronodTypography from "./AgronodTypography";

const componentDescription = `<div>
<p>In our <code>baseTheme.tsx</code> we added overrides for different headlines and other fonts.</p>
<p>All types should match with design in Figma by names and props.</p>
<p><a target='_blank' href='https://material.io/design/typography/the-type-system.html'>Go to material design</a> for more information about typography component.
</div>`;

export default {
  title: "Shared Components/Typography",
  component: AgronodTypography,
  parameters: {
    componentSubtitle:
      "Use typography to present your design and content as clearly and efficiently as possible.",
    docs: {
      description: {
        component: componentDescription,
      },
    },
    previewTabs: {
      canvas: { hidden: true },
    },
  },
} as Meta<typeof AgronodTypography>;

export const Headline1: StoryFn<typeof AgronodTypography> = ({
  children,
  ...rest
}) => <AgronodTypography {...rest}>{children}</AgronodTypography>;

Headline1.args = {
  children: "The quick brown fox jumps over the lazy dog.",
  variant: "h1",
};

export const Headline2: StoryFn<typeof AgronodTypography> = ({
  children,
  ...rest
}) => <AgronodTypography {...rest}>{children}</AgronodTypography>;

Headline2.args = {
  children: "The quick brown fox jumps over the lazy dog.",
  variant: "h2",
};

export const Headline3: StoryFn<typeof AgronodTypography> = ({
  children,
  ...rest
}) => <AgronodTypography {...rest}>{children}</AgronodTypography>;

Headline3.args = {
  children: "The quick brown fox jumps over the lazy dog.",
  variant: "h3",
};

export const Headline4: StoryFn<typeof AgronodTypography> = ({
  children,
  ...rest
}) => <AgronodTypography {...rest}>{children}</AgronodTypography>;

Headline4.args = {
  children: "The quick brown fox jumps over the lazy dog.",
  variant: "h4",
};

export const Headline5: StoryFn<typeof AgronodTypography> = ({
  children,
  ...rest
}) => <AgronodTypography {...rest}>{children}</AgronodTypography>;

Headline5.args = {
  children: "The quick brown fox jumps over the lazy dog.",
  variant: "h5",
};

export const Headline6: StoryFn<typeof AgronodTypography> = ({
  children,
  ...rest
}) => <AgronodTypography {...rest}>{children}</AgronodTypography>;

Headline6.args = {
  children: "The quick brown fox jumps over the lazy dog.",
  variant: "h6",
};

export const subtitle1: StoryFn<typeof AgronodTypography> = ({
  children,
  ...rest
}) => <AgronodTypography {...rest}>{children}</AgronodTypography>;

subtitle1.args = {
  children: "The quick brown fox jumps over the lazy dog.",
  variant: "subtitle1",
};

export const subtitle2: StoryFn<typeof AgronodTypography> = ({
  children,
  ...rest
}) => <AgronodTypography {...rest}>{children}</AgronodTypography>;

subtitle2.args = {
  children: "The quick brown fox jumps over the lazy dog.",
  variant: "subtitle2",
};

export const subtitle3: StoryFn<typeof AgronodTypography> = ({
  children,
  ...rest
}) => <AgronodTypography {...rest}>{children}</AgronodTypography>;

subtitle3.args = {
  children: "The quick brown fox jumps over the lazy dog.",
  variant: "subtitle3",
};

export const subtitle4: StoryFn<typeof AgronodTypography> = ({
  children,
  ...rest
}) => <AgronodTypography {...rest}>{children}</AgronodTypography>;

subtitle4.args = {
  children: "The quick brown fox jumps over the lazy dog.",
  variant: "subtitle4",
};

export const body1: StoryFn<typeof AgronodTypography> = ({
  children,
  ...rest
}) => <AgronodTypography {...rest}>{children}</AgronodTypography>;

body1.args = {
  children: "The quick brown fox jumps over the lazy dog.",
  variant: "body1",
};

export const body1bold: StoryFn<typeof AgronodTypography> = ({
  children,
  ...rest
}) => <AgronodTypography {...rest}>{children}</AgronodTypography>;

body1bold.args = {
  children: "The quick brown fox jumps over the lazy dog.",
  variant: "body1bold",
};

export const body2: StoryFn<typeof AgronodTypography> = ({
  children,
  ...rest
}) => <AgronodTypography {...rest}>{children}</AgronodTypography>;

body2.args = {
  children: "The quick brown fox jumps over the lazy dog.",
  variant: "body2",
};

export const body2bold: StoryFn<typeof AgronodTypography> = ({
  children,
  ...rest
}) => <AgronodTypography {...rest}>{children}</AgronodTypography>;

body2bold.args = {
  children: "The quick brown fox jumps over the lazy dog.",
  variant: "body2bold",
};

export const body3: StoryFn<typeof AgronodTypography> = ({
  children,
  ...rest
}) => <AgronodTypography {...rest}>{children}</AgronodTypography>;

body3.args = {
  children: "The quick brown fox jumps over the lazy dog.",
  variant: "body3",
};

export const body3bold: StoryFn<typeof AgronodTypography> = ({
  children,
  ...rest
}) => <AgronodTypography {...rest}>{children}</AgronodTypography>;

body3bold.args = {
  children: "The quick brown fox jumps over the lazy dog.",
  variant: "body3bold",
};

export const body4: StoryFn<typeof AgronodTypography> = ({
  children,
  ...rest
}) => <AgronodTypography {...rest}>{children}</AgronodTypography>;

body4.args = {
  children: "The quick brown fox jumps over the lazy dog.",
  variant: "body4",
};

export const body4bold: StoryFn<typeof AgronodTypography> = ({
  children,
  ...rest
}) => <AgronodTypography {...rest}>{children}</AgronodTypography>;

body4bold.args = {
  children: "The quick brown fox jumps over the lazy dog.",
  variant: "body4bold",
};

export const caption: StoryFn<typeof AgronodTypography> = ({
  children,
  ...rest
}) => <AgronodTypography {...rest}>{children}</AgronodTypography>;

caption.args = {
  children: "This is caption",
  variant: "caption",
};

export const overline: StoryFn<typeof AgronodTypography> = ({
  children,
  ...rest
}) => <AgronodTypography {...rest}>{children}</AgronodTypography>;

overline.args = {
  children: "This is overline",
  variant: "overline",
};
