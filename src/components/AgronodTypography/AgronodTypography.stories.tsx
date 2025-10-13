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

export const Headline1: StoryFn<typeof AgronodTypography> = (args) => (
  <AgronodTypography {...args} />
);

Headline1.args = {
  children: "The quick brown fox jumps over the lazy dog.",
  variant: "h1",
};

export const Headline2: StoryFn<typeof AgronodTypography> = (args) => (
  <AgronodTypography {...args} />
);

Headline2.args = {
  children: "The quick brown fox jumps over the lazy dog.",
  variant: "h2",
};

export const Headline3: StoryFn<typeof AgronodTypography> = (args) => (
  <AgronodTypography {...args} />
);

Headline3.args = {
  children: "The quick brown fox jumps over the lazy dog.",
  variant: "h3",
};

export const Headline4: StoryFn<typeof AgronodTypography> = (args) => (
  <AgronodTypography {...args} />
);

Headline4.args = {
  children: "The quick brown fox jumps over the lazy dog.",
  variant: "h4",
};

export const Headline5: StoryFn<typeof AgronodTypography> = (args) => (
  <AgronodTypography {...args} />
);

Headline5.args = {
  children: "The quick brown fox jumps over the lazy dog.",
  variant: "h5",
};

export const Headline6: StoryFn<typeof AgronodTypography> = (args) => (
  <AgronodTypography {...args} />
);

Headline6.args = {
  children: "The quick brown fox jumps over the lazy dog.",
  variant: "h6",
};

export const Subtitle1: StoryFn<typeof AgronodTypography> = (args) => (
  <AgronodTypography {...args} />
);

Subtitle1.args = {
  children: "The quick brown fox jumps over the lazy dog.",
  variant: "subtitle1",
};

export const Subtitle2: StoryFn<typeof AgronodTypography> = (args) => (
  <AgronodTypography {...args} />
);

Subtitle2.args = {
  children: "The quick brown fox jumps over the lazy dog.",
  variant: "subtitle2",
};

export const Subtitle3: StoryFn<typeof AgronodTypography> = (args) => (
  <AgronodTypography {...args} />
);

Subtitle3.args = {
  children: "The quick brown fox jumps over the lazy dog.",
  variant: "subtitle3",
};

export const Subtitle4: StoryFn<typeof AgronodTypography> = (args) => (
  <AgronodTypography {...args} />
);

Subtitle4.args = {
  children: "The quick brown fox jumps over the lazy dog.",
  variant: "subtitle4",
};

export const Body1: StoryFn<typeof AgronodTypography> = (args) => (
  <AgronodTypography {...args} />
);

Body1.args = {
  children: "The quick brown fox jumps over the lazy dog.",
  variant: "body1",
};

export const Body1bold: StoryFn<typeof AgronodTypography> = (args) => (
  <AgronodTypography {...args} />
);

Body1bold.args = {
  children: "The quick brown fox jumps over the lazy dog.",
  variant: "body1bold",
};

export const Body2: StoryFn<typeof AgronodTypography> = (args) => (
  <AgronodTypography {...args} />
);

Body2.args = {
  children: "The quick brown fox jumps over the lazy dog.",
  variant: "body2",
};

export const Body2bold: StoryFn<typeof AgronodTypography> = (args) => (
  <AgronodTypography {...args} />
);

Body2bold.args = {
  children: "The quick brown fox jumps over the lazy dog.",
  variant: "body2bold",
};

export const Body3: StoryFn<typeof AgronodTypography> = (args) => (
  <AgronodTypography {...args} />
);

Body3.args = {
  children: "The quick brown fox jumps over the lazy dog.",
  variant: "body3",
};

export const Body3bold: StoryFn<typeof AgronodTypography> = (args) => (
  <AgronodTypography {...args} />
);

Body3bold.args = {
  children: "The quick brown fox jumps over the lazy dog.",
  variant: "body3bold",
};

export const Body4: StoryFn<typeof AgronodTypography> = (args) => (
  <AgronodTypography {...args} />
);

Body4.args = {
  children: "The quick brown fox jumps over the lazy dog.",
  variant: "body4",
};

export const Body4bold: StoryFn<typeof AgronodTypography> = (args) => (
  <AgronodTypography {...args} />
);

Body4bold.args = {
  children: "The quick brown fox jumps over the lazy dog.",
  variant: "body4bold",
};

export const Caption: StoryFn<typeof AgronodTypography> = (args) => (
  <AgronodTypography {...args} />
);

Caption.args = {
  children: "This is caption",
  variant: "caption",
};

export const Overline: StoryFn<typeof AgronodTypography> = (args) => (
  <AgronodTypography {...args} />
);

Overline.args = {
  children: "This is overline",
  variant: "overline",
};
