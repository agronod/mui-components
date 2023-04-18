import { ComponentStory, ComponentMeta } from "@storybook/react";
import InputField from "./InputField";

export default {
  title: "Components/FormElements/InputField",
  component: InputField,
  argTypes: {
    disabled: {
      control: {
        type: "boolean",
        expanded: true,
      },
    },
    error: {
      control: {
        type: "boolean",
        expanded: true,
      },
    },
    fullWidth: {
      control: {
        type: "boolean",
        expanded: true,
      },
    },
    helperText: {
      control: {
        type: "text",
        expanded: true,
      },
    },
    label: {
      control: {
        type: "text",
        expanded: true,
      },
    },
    name: {
      control: {
        type: "text",
        expanded: true,
      },
    },
    required: {
      control: {
        type: "boolean",
        expanded: true,
      },
    },
    type: {
      control: {
        type: "select",
        options: [
          "text",
          "password",
          "number",
          "email",
          "url",
          "date",
          "datetime-local",
        ],
        expanded: true,
      },
    },
    value: {
      control: {
        type: "text",
        expanded: true,
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
  },
} as ComponentMeta<typeof InputField>;

export const DefaultInputText: ComponentStory<typeof InputField> = ({
  ...args
}) => <InputField value={args.value} {...args} />;
DefaultInputText.args = {
  name: "defaultInputText",
  type: "text",
  id: "defaultInputText",
};

export const InputFieldWithLabel: ComponentStory<typeof InputField> = ({
  ...args
}) => <InputField value={args.value} inputLabel="Personnumer" {...args} />;
DefaultInputText.args = {
  name: "defaultInputText",
  type: "text",
  id: "defaultInputText",
};
