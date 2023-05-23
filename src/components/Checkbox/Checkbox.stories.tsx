import { Checkbox, FormControlLabel } from "@mui/material";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/Checkbox",
  component: FormControlLabel,
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
} as ComponentMeta<typeof FormControlLabel>;

export const CheckboxDefault: ComponentStory<typeof FormControlLabel> = ({
  ...args
}) => <FormControlLabel {...args} control={<Checkbox />} />;

export const CheckboxChecked: ComponentStory<typeof FormControlLabel> = ({
  ...args
}) => <FormControlLabel {...args} control={<Checkbox />} />;
CheckboxChecked.args = {
  checked: true,
};

export const CheckboxWithLabel: ComponentStory<typeof FormControlLabel> = ({
  ...args
}) => <FormControlLabel {...args} control={<Checkbox />} />;
CheckboxWithLabel.args = {
  label: "this is label",
};

export const CheckboxDisabled: ComponentStory<typeof FormControlLabel> = ({
  ...args
}) => <FormControlLabel {...args} control={<Checkbox />} />;
CheckboxDisabled.args = {
  label: "disabled",
  disabled: true,
};
