import { FormControlLabel, Radio } from "@mui/material";
import { StoryFn, Meta } from "@storybook/react";

export default {
  title: "Shared components/Radio",
  component: Radio,
  argTypes: {
    checked: {
      control: {
        type: "boolean",
      },
    },
    disabled: {
      control: {
        type: "boolean",
      },
    },
    disableRipple: {
      control: {
        type: "boolean",
      },
    },
    id: {
      control: {
        type: "text",
      },
    },
    inputProps: {
      control: {
        type: "object",
      },
    },
    sx: {
      control: {
        type: "object",
      },
    },
    label: {
      control: {
        type: "text",
      },
    },
    classes: {
      control: {
        type: "object",
      },
    },
    onChange: {
      table: {
        category: "Events",
      },
    },
  },
} as Meta<typeof Radio>;

export const RadioDefault: StoryFn<typeof Radio> = ({ ...args }) => (
  <Radio {...args} />
);

export const RadioWithLabel: StoryFn<typeof FormControlLabel> = ({
  ...args
}) => <FormControlLabel {...args} control={<Radio />} />;
RadioWithLabel.args = {
  label: "This is a label",
};

export const RadioDisabled: StoryFn<typeof FormControlLabel> = ({
  ...args
}) => <FormControlLabel {...args} control={<Radio />} />;
RadioDisabled.args = {
  label: "Disabled",
  disabled: true,
};
