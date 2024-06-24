import { StoryFn, Meta } from "@storybook/react";
import AgronodRadioGroup from "./AgronodRadioGroup";
import { FormControl, FormControlLabel } from "@mui/material";
import AgronodRadio from "../AgronodRadio/AgronodRadio";
import { useState } from "react";

export default {
  title: "Shared Components/RadioGroup",
  component: AgronodRadioGroup,
  parameters: {
    componentSubtitle: "Used in forms",
    docs: {
      description: {
        component: `<p>Simple component used as a part of bigger molecules. Used together with <code>AgronodRadio</code></p>`,
      },
    },
  },
  argTypes: {
    label: {
      description:
        "Label added when wanting additional information. It is adding <code>FormControlLabel</code> component around radio.",
      control: {
        type: "text",
      },
    },
  },
} as Meta<typeof AgronodRadioGroup>;

const radioButtons = [
  { label: "one", value: "one" },
  { label: "two", value: "two" },
];

export const RadioGroupDefault: StoryFn<typeof AgronodRadioGroup> = ({
  ...args
}) => {
  return <AgronodRadioGroup {...args} />;
};

RadioGroupDefault.args = {
  value: "one",
  row: false,
  children: radioButtons.map((radio) => {
    return <AgronodRadio value={radio.value} label={radio.label} />;
  }),
};

export const RadioGroupWithLabel: StoryFn<typeof AgronodRadioGroup> = ({
  ...args
}) => {
  return <AgronodRadioGroup {...args} />;
};

RadioGroupWithLabel.args = {
  value: "one",
  row: false,
  label: "This is a label",
  children: radioButtons.map((radio) => {
    return <AgronodRadio value={radio.value} label={radio.label} />;
  }),
};
