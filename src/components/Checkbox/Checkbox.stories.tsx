import { ComponentStory, ComponentMeta } from "@storybook/react";
import Checkbox from "./Checkbox";

export default {
  title: "Components/Checkbox",
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
    color: {
      control: {
        type: "select",
        options: [
          "inherit",
          "primary",
          "secondary",
          "error",
          "info",
          "success",
          "warning",
        ],
      },
    },
    id: {
      control: {
        type: "text",
        expanded: true,
      },
    },
    sx: {
      control: {
        type: "object",
        expanded: true,
      },
    },
    value: {
      control: {
        type: "text",
        expanded: true,
      },
    },
  },
} as ComponentMeta<typeof Checkbox>;

export const CheckboxDefault: ComponentStory<typeof Checkbox> = ({
  ...args
}) => <Checkbox {...args} />;

export const CheckboxChecked: ComponentStory<typeof Checkbox> = ({
  ...args
}) => <Checkbox {...args} />;
CheckboxChecked.args = {
  checked: true,
};

export const CheckboxWithLabel: ComponentStory<typeof Checkbox> = ({
  ...args
}) => <Checkbox {...args} />;
CheckboxWithLabel.args = {
  id: "checkboxWithLabel",
  label: "This is a label",
  value: "checkboxWithLabel",
};

export const CheckboxDisabled: ComponentStory<typeof Checkbox> = ({
  ...args
}) => <Checkbox {...args} />;
CheckboxDisabled.args = {
  disabled: true,
  id: "checkboxWithLabel",
  label: "This is disabled",
  value: "checkboxWithLabel",
};
