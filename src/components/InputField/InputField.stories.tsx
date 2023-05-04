import { ComponentStory, ComponentMeta } from "@storybook/react";
import { FormControl, FormLabel, TextField } from "@mui/material";

export default {
  title: "Components/InputField",
  component: TextField,
  argTypes: {
    children: {
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
} as ComponentMeta<typeof TextField>;

export const DefaultInputField: ComponentStory<typeof TextField> = ({
  ...args
}) => (
  <TextField
    InputLabelProps={{
      shrink: false,
      color: "secondary",
    }}
    {...args}
  />
);
DefaultInputField.args = {
  variant: "outlined",
  name: "defaultInputField",
  placeholder: "default input text",
  type: "text",
  id: "defaultInputField",
  fullWidth: true,
};

export const InputFieldWithLabelAndHelperText: ComponentStory<
  typeof TextField
> = ({ children, ...rest }) => (
  <FormControl fullWidth={rest.fullWidth}>
    <FormLabel>{children}</FormLabel>
    <TextField
      InputLabelProps={{
        shrink: false,
        color: "secondary",
      }}
      {...rest}
    />
  </FormControl>
);
InputFieldWithLabelAndHelperText.args = {
  children: "Personnummer",
  helperText: "this is example of helper text",
  placeholder: "Personnummer",
  name: "inputTextWithLabel",
  type: "text",
  id: "inputTextWithLabel",
  fullWidth: true,
};

export const InputFieldRequired: ComponentStory<typeof TextField> = ({
  children,
  ...rest
}) => (
  <FormControl>
    <FormLabel required={rest.required}>{children}</FormLabel>
    <TextField
      InputLabelProps={{
        shrink: false,
        color: "secondary",
      }}
      {...rest}
    />
  </FormControl>
);
InputFieldRequired.args = {
  children: "Personnummer",
  placeholder: "Personnummer",
  required: true,
  label: "Personnummer",
  name: "inputTextWithLabel",
  type: "text",
  id: "inputTextWithLabel",
};

export const InputFieldError: ComponentStory<typeof TextField> = ({
  children,
  ...rest
}) => (
  <FormControl>
    <FormLabel error={rest.error}>{children}</FormLabel>
    <TextField
      InputLabelProps={{
        shrink: false,
        color: "secondary",
      }}
      {...rest}
    />
  </FormControl>
);
InputFieldError.args = {
  children: "Personnummer",
  required: true,
  error: true,
  placeholder: "Personnummer",
  helperText: "this is error text",
  name: "inputTextWithLabel",
  type: "text",
  id: "inputTextWithLabel",
};

export const InputFieldDisabled: ComponentStory<typeof TextField> = ({
  ...args
}) => (
  <TextField
    InputLabelProps={{
      shrink: false,
      color: "secondary",
    }}
    {...args}
  />
);
InputFieldDisabled.args = {
  placeholder: "disabled",
  disabled: true,
  helperText: "this is example of disabled input",
  name: "inputDisabled",
  type: "text",
  id: "inputDisabled",
};

export const InputFieldPassword: ComponentStory<typeof TextField> = ({
  ...args
}) => (
  <TextField
    InputLabelProps={{
      shrink: false,
      color: "secondary",
    }}
    {...args}
  />
);
InputFieldPassword.args = {
  placeholder: "Password",
  helperText: "this is example of password input",
  name: "inputPassword",
  value: "MyPassword",
  type: "password",
  id: "inputDisabled",
};

export const InputFieldDate: ComponentStory<typeof TextField> = ({
  ...args
}) => (
  <TextField
    InputLabelProps={{
      shrink: false,
      color: "secondary",
    }}
    {...args}
  />
);
InputFieldDate.args = {
  placeholder: "Date",
  helperText: "this is example of date type of input",
  name: "inputDate",
  type: "date",
  id: "inputDate",
};
