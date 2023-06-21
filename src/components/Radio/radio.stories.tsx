import { FormControlLabel, Radio } from "@mui/material";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/Radio",
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
} as ComponentMeta<typeof Radio>;

export const RadioDefault: ComponentStory<typeof Radio> = ({ ...args }) => (
  <Radio {...args} />
);

export const RadioWithLabel: ComponentStory<typeof FormControlLabel> = ({
  ...args
}) => <FormControlLabel {...args} control={<Radio />} />;
RadioWithLabel.args = {
  label: "This is a label",
};

export const RadioDisabled: ComponentStory<typeof FormControlLabel> = ({
  ...args
}) => <FormControlLabel {...args} control={<Radio />} />;
RadioDisabled.args = {
  label: "Disabled",
  disabled: true,
};
