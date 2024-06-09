import { StoryFn, Meta } from "@storybook/react";
import AgronodCheckbox from "./AgronodCheckbox";

export default {
  title: "Shared Components/Checkbox",
  component: AgronodCheckbox,
  parameters: {
    componentSubtitle: "Used in forms and consent options.",
    docs: {
      description: {
        component: `<p>Simple component used as a part of bigger molecules. MUI default sizes are changed to accomodate design.</p>`,
      },
    },
  },
  argTypes: {
    label: {
      description:
        "Label added when wanting additional information. It is adding <code>FormControlLabel</code> component around checkbox",
      control: {
        type: "text",
      },
    },
    size: {
      description:
        "The size of the component. small is equivalent to small icon size on mobile and dense padding.",
      control: {
        type: "select",
      },
      options: ["small", "medium"],
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
