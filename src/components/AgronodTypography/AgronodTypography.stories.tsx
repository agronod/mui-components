import { StoryFn, Meta } from "@storybook/react-vite";
import AgronodTypography, { AgronodTypographyProps } from "./AgronodTypography";

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
}: AgronodTypographyProps) => <AgronodTypography {...rest}>{children}</AgronodTypography>;

Headline1.args = {
  children: "The quick brown fox jumps over the lazy dog.",
  variant: "h1",
};

export const Headline2: StoryFn<typeof AgronodTypography> = ({
  children,
  ...rest
}: AgronodTypographyProps) => <AgronodTypography {...rest}>{children}</AgronodTypography>;

Headline2.args = {
  children: "The quick brown fox jumps over the lazy dog.",
  variant: "h2",
};

export const Headline3: StoryFn<typeof AgronodTypography> = ({
  children,
  ...rest
}: AgronodTypographyProps) => <AgronodTypography {...rest}>{children}</AgronodTypography>;

Headline3.args = {
  children: "The quick brown fox jumps over the lazy dog.",
  variant: "h3",
};

export const Headline4: StoryFn<typeof AgronodTypography> = ({
  children,
  ...rest
}: AgronodTypographyProps) => <AgronodTypography {...rest}>{children}</AgronodTypography>;

Headline4.args = {
  children: "The quick brown fox jumps over the lazy dog.",
  variant: "h4",
};

export const Headline5: StoryFn<typeof AgronodTypography> = ({
  children,
  ...rest
}: AgronodTypographyProps) => <AgronodTypography {...rest}>{children}</AgronodTypography>;

Headline5.args = {
  children: "The quick brown fox jumps over the lazy dog.",
  variant: "h5",
};

export const Headline6: StoryFn<typeof AgronodTypography> = ({
  children,
  ...rest
}: AgronodTypographyProps) => <AgronodTypography {...rest}>{children}</AgronodTypography>;

Headline6.args = {
  children: "The quick brown fox jumps over the lazy dog.",
  variant: "h6",
};

export const Subtitle1: StoryFn<typeof AgronodTypography> = ({
  children,
  ...rest
}: AgronodTypographyProps) => <AgronodTypography {...rest}>{children}</AgronodTypography>;

Subtitle1.args = {
  children: "The quick brown fox jumps over the lazy dog.",
  variant: "subtitle1",
};

export const Subtitle2: StoryFn<typeof AgronodTypography> = ({
  children,
  ...rest
}: AgronodTypographyProps) => <AgronodTypography {...rest}>{children}</AgronodTypography>;

Subtitle2.args = {
  children: "The quick brown fox jumps over the lazy dog.",
  variant: "subtitle2",
};

export const Subtitle3: StoryFn<typeof AgronodTypography> = ({
  children,
  ...rest
}: AgronodTypographyProps) => <AgronodTypography {...rest}>{children}</AgronodTypography>;

Subtitle3.args = {
  children: "The quick brown fox jumps over the lazy dog.",
  variant: "subtitle3",
};

export const Subtitle4: StoryFn<typeof AgronodTypography> = ({
  children,
  ...rest
}: AgronodTypographyProps) => <AgronodTypography {...rest}>{children}</AgronodTypography>;

Subtitle4.args = {
  children: "The quick brown fox jumps over the lazy dog.",
  variant: "subtitle4",
};

export const Body1: StoryFn<typeof AgronodTypography> = ({
  children,
  ...rest
}: AgronodTypographyProps) => <AgronodTypography {...rest}>{children}</AgronodTypography>;

Body1.args = {
  children: "The quick brown fox jumps over the lazy dog.",
  variant: "body1",
};

export const Body1bold: StoryFn<typeof AgronodTypography> = ({
  children,
  ...rest
}: AgronodTypographyProps) => <AgronodTypography {...rest}>{children}</AgronodTypography>;

Body1bold.args = {
  children: "The quick brown fox jumps over the lazy dog.",
  variant: "body1bold",
};

export const Body2: StoryFn<typeof AgronodTypography> = ({
  children,
  ...rest
}: AgronodTypographyProps) => <AgronodTypography {...rest}>{children}</AgronodTypography>;

Body2.args = {
  children: "The quick brown fox jumps over the lazy dog.",
  variant: "body2",
};

export const Body2bold: StoryFn<typeof AgronodTypography> = ({
  children,
  ...rest
}: AgronodTypographyProps) => <AgronodTypography {...rest}>{children}</AgronodTypography>;

Body2bold.args = {
  children: "The quick brown fox jumps over the lazy dog.",
  variant: "body2bold",
};

export const Body3: StoryFn<typeof AgronodTypography> = ({
  children,
  ...rest
}: AgronodTypographyProps) => <AgronodTypography {...rest}>{children}</AgronodTypography>;

Body3.args = {
  children: "The quick brown fox jumps over the lazy dog.",
  variant: "body3",
};

export const Body3bold: StoryFn<typeof AgronodTypography> = ({
  children,
  ...rest
}: AgronodTypographyProps) => <AgronodTypography {...rest}>{children}</AgronodTypography>;

Body3bold.args = {
  children: "The quick brown fox jumps over the lazy dog.",
  variant: "body3bold",
};

export const Body4: StoryFn<typeof AgronodTypography> = ({
  children,
  ...rest
}: AgronodTypographyProps) => <AgronodTypography {...rest}>{children}</AgronodTypography>;

Body4.args = {
  children: "The quick brown fox jumps over the lazy dog.",
  variant: "body4",
};

export const Body4bold: StoryFn<typeof AgronodTypography> = ({
  children,
  ...rest
}: AgronodTypographyProps) => <AgronodTypography {...rest}>{children}</AgronodTypography>;

Body4bold.args = {
  children: "The quick brown fox jumps over the lazy dog.",
  variant: "body4bold",
};

export const Caption: StoryFn<typeof AgronodTypography> = ({
  children,
  ...rest
}: AgronodTypographyProps) => <AgronodTypography {...rest}>{children}</AgronodTypography>;

Caption.args = {
  children: "This is caption",
  variant: "caption",
};

export const Overline: StoryFn<typeof AgronodTypography> = ({
  children,
  ...rest
}: AgronodTypographyProps) => <AgronodTypography {...rest}>{children}</AgronodTypography>;

Overline.args = {
  children: "This is overline",
  variant: "overline",
};
