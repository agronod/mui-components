import { StoryFn, Meta } from "@storybook/react";
import AgronodCheckbox from "./AgronodCheckbox";

export default {
  title: "Shared components/Agronod Checkbox",
  component: AgronodCheckbox,
  argTypes: {
    label: {
      description:
        "Label added when wanting additional information. It is adding FormControlLabel component around checkbox",
      control: {
        type: "text",
      },
    },
    handleOnChange: {
      description: "Controling onChange event",
      control: {
        type: "function",
      },
    },
    handleOnClick: {
      description: "Controling onClick event",
      control: {
        type: "function",
      },
    },
  },
} as Meta<typeof AgronodCheckbox>;

export const CheckboxDefault: StoryFn<typeof AgronodCheckbox> = ({
  ...args
}) => <AgronodCheckbox {...args} />;

export const CheckboxChecked: StoryFn<typeof AgronodCheckbox> = ({
  ...args
}) => <AgronodCheckbox {...args} />;
CheckboxChecked.args = {
  checked: true,
};

export const CheckboxWithLabel: StoryFn<typeof AgronodCheckbox> = ({
  ...args
}) => <AgronodCheckbox {...args} />;
CheckboxWithLabel.args = {
  label: "this is label",
};

export const CheckboxDisabled: StoryFn<typeof AgronodCheckbox> = ({
  ...args
}) => <AgronodCheckbox {...args} />;
CheckboxDisabled.args = {
  label: "disabled",
  disabled: true,
};
