import { FormControlLabel, Switch } from "@mui/material";
import { StoryFn, Meta } from "@storybook/react";

export default {
  title: "Shared Components/Switch",
  component: Switch,
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
    defaultChecked: {
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
} as Meta<typeof Switch>;

export const SwitchDefault: StoryFn<typeof Switch> = ({ ...args }) => (
  <Switch disableRipple {...args} />
);

export const SwitchWithLabel: StoryFn<typeof FormControlLabel> = ({
  ...args
}) => <FormControlLabel {...args} control={<Switch />} />;
SwitchWithLabel.args = {
  label: "this is label",
};

export const SwitchDisabled: StoryFn<typeof FormControlLabel> = ({
  ...args
}) => <FormControlLabel {...args} control={<Switch />} />;
SwitchDisabled.args = {
  label: "disabled",
  disabled: true,
};
