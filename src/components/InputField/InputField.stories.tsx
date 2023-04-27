import { ComponentStory, ComponentMeta } from "@storybook/react";
import InputField from "./InputField";

export default {
  title: "Components/InputField",
  component: InputField,
  argTypes: {
    inputLabel: {
      control: {
        type: "text",
        expanded: true,
      },
    },
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
          "tel",
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
    placeholder: {
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

export const DefaultInputField: ComponentStory<typeof InputField> = ({
  ...args
}) => <InputField value={args.value} {...args} />;
DefaultInputField.args = {
  name: "defaultInputField",
  placeholder: "default input text",
  type: "text",
  id: "defaultInputField",
};

export const InputFieldWithLabelAndHelperText: ComponentStory<
  typeof InputField
> = ({ ...args }) => <InputField value={args.value} {...args} />;
InputFieldWithLabelAndHelperText.args = {
  inputLabel: "Personnumer",
  helperText: "this is example of helper text",
  name: "inputTextWithLabel",
  type: "text",
  id: "inputTextWithLabel",
};

export const InputFieldRequired: ComponentStory<typeof InputField> = ({
  ...args
}) => <InputField value={args.value} {...args} />;
InputFieldRequired.args = {
  required: true,
  inputLabel: "Personnumer",
  name: "inputTextWithLabel",
  type: "text",
  id: "inputTextWithLabel",
};

export const InputFieldError: ComponentStory<typeof InputField> = ({
  ...args
}) => <InputField value={args.value} {...args} />;
InputFieldError.args = {
  required: true,
  error: true,
  inputLabel: "Personnumer",
  helperText: "this is error text",
  name: "inputTextWithLabel",
  type: "text",
  id: "inputTextWithLabel",
};

export const InputFieldDisabled: ComponentStory<typeof InputField> = ({
  ...args
}) => <InputField value={args.value} {...args} />;
InputFieldDisabled.args = {
  required: true,
  disabled: true,
  inputLabel: "Personnumer",
  helperText: "this is example of disabled input",
  name: "inputDisabled",
  type: "text",
  id: "inputDisabled",
};

export const InputFieldPassword: ComponentStory<typeof InputField> = ({
  ...args
}) => <InputField value={args.value} {...args} />;
InputFieldPassword.args = {
  inputLabel: "Password",
  helperText: "this is example of password input",
  name: "inputPassword",
  value: "MyPassword",
  type: "password",
  id: "inputDisabled",
};

export const InputFieldDate: ComponentStory<typeof InputField> = ({
  ...args
}) => <InputField value={args.value} {...args} />;
InputFieldDate.args = {
  inputLabel: "Date",
  helperText: "this is example of date type of input",
  name: "inputDate",
  type: "date",
  id: "inputDate",
};
