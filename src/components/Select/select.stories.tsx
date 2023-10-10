import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { StoryFn, Meta } from "@storybook/react";

export default {
  title: "Components/Select",
  component: Select,
  argTypes: {
    disabled: {
      control: {
        type: "boolean",
      },
    },
    label: {
      control: {
        type: "text",
      },
    },
    sx: {
      control: {
        type: "object",
      },
    },
  },
} as Meta<typeof Select>;

export const SelectDefault: StoryFn<typeof Select> = ({ ...args }) => (
  <FormControl>
    <InputLabel>{args.label}</InputLabel>
    <Select value={1} {...args}>
      <MenuItem value={1}>Option 1</MenuItem>
      <MenuItem value={2}>Option 2</MenuItem>
      <MenuItem value={3}>Option 3</MenuItem>
    </Select>
  </FormControl>
);
SelectDefault.args = {
  label: "This is a label",
};
