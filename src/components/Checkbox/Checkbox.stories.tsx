import { Checkbox, FormControlLabel } from "@mui/material";
import { StoryFn, Meta } from "@storybook/react";

export default {
  title: "Common Components/Checkbox",
  component: Checkbox,
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
  },
} as Meta<typeof Checkbox>;

export const CheckboxDefault: StoryFn<typeof Checkbox> = ({ ...args }) => (
  <Checkbox {...args} />
);

export const CheckboxChecked: StoryFn<typeof Checkbox> = ({ ...args }) => (
  <Checkbox {...args} />
);
CheckboxChecked.args = {
  checked: true,
};

export const CheckboxWithLabel: StoryFn<typeof FormControlLabel> = ({
  ...args
}) => <FormControlLabel {...args} control={<Checkbox />} />;
CheckboxWithLabel.args = {
  label: "this is label",
};

export const CheckboxDisabled: StoryFn<typeof FormControlLabel> = ({
  ...args
}) => <FormControlLabel {...args} control={<Checkbox />} />;
CheckboxDisabled.args = {
  label: "disabled",
  disabled: true,
};
