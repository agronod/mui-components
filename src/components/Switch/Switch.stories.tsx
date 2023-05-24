import { FormControlLabel, Switch } from "@mui/material";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/Switch",
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
} as ComponentMeta<typeof Switch>;

export const SwitchDefault: ComponentStory<typeof Switch> = ({ ...args }) => (
  <Switch disableRipple {...args} />
);

export const SwitchWithLabel: ComponentStory<typeof FormControlLabel> = ({
  ...args
}) => <FormControlLabel {...args} control={<Switch />} />;
SwitchWithLabel.args = {
  label: "this is label",
};

export const SwitchDisabled: ComponentStory<typeof FormControlLabel> = ({
  ...args
}) => <FormControlLabel {...args} control={<Switch />} />;
SwitchDisabled.args = {
  label: "disabled",
  disabled: true,
};
