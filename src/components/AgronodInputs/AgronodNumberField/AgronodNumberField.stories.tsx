import { StoryFn, Meta } from "@storybook/react-vite";
import AgronodNumberField, { NumberFieldProps } from "./AgronodNumberField";
import { InputAdornment } from "@mui/material";

export default {
  title: "Shared Components/Inputs/Agronod Number Field",
  component: AgronodNumberField,
  parameters: {
    componentSubtitle:
      "This number field is used for numeric input with formatting.",
    docs: {
      description: {
        component: `<p>It provides numeric formatting, support for separators, and other input functionalities.</p>`,
      },
    },
  },
  argTypes: {
    label: {
      description:
        "Description of the input field above it. It uses the <code>body2bold</code> typography variant according to design.",
      control: { type: "text" },
    },
    value: {
      control: {
        type: "number",
      },
    },
    emptyStyle: {
      description:
        "This argument reflects how the input will look when empty. It can be highlighted with a background color or the default white.",
    },
    helperText: {
      description:
        "Text below the input field that can be an error or informational.",
      control: { type: "text" },
    },
    tooltipText: {
      description: "Will show on hover over the input field.",
    },
    warning: {
      control: { type: "boolean" },
    },
  },
} as Meta<typeof AgronodNumberField>;

const Template: StoryFn<NumberFieldProps> = (args) => (
  <AgronodNumberField {...args} fullWidth={false} sx={{ width: 200 }} />
);

export const AgronodNumberFieldDefault = Template.bind({});
AgronodNumberFieldDefault.args = {
  placeholder: "Enter a number",
  label: "Base number input with label",
};

export const AgronodNumberFieldWithHelperText = Template.bind({});
AgronodNumberFieldWithHelperText.args = {
  helperText: "Helper text",
};

export const AgronodNumberFieldWithEndAdornment = Template.bind({});
AgronodNumberFieldWithEndAdornment.args = {
  label: "Adornment input",
  InputProps: {
    endAdornment: <InputAdornment position="end">units</InputAdornment>,
  },
};

export const AgronodNumberFieldDisabled = Template.bind({});
AgronodNumberFieldDisabled.args = {
  label: "Input label",
  helperText: "Disabled state",
  disabled: true,
};

export const AgronodNumberFieldError = Template.bind({});
AgronodNumberFieldError.args = {
  placeholder: "Enter a number",
  label: "Input error",
  error: true,
};

export const AgronodNumberFieldErrorWithIcon = Template.bind({});
AgronodNumberFieldErrorWithIcon.args = {
  label: "Input error",
  helperText: "Error with icon",
  error: true,
  hasIcon: true,
};

export const AgronodNumberFieldWarning = Template.bind({});
AgronodNumberFieldWarning.args = {
  helperText: "Helper text",
  warning: true,
};

export const AgronodNumberFieldWarningWithIcon = Template.bind({});
AgronodNumberFieldWarningWithIcon.args = {
  label: "Input warning with icon",
  warning: true,
  hasIcon: true,
  placeholder: "Input warning",
};

export const AgronodNumberFieldHighlightedWhenEmpty = Template.bind({});
AgronodNumberFieldHighlightedWhenEmpty.args = {
  label: "Input highlighted",
  emptyStyle: "highlighted",
  placeholder: "Enter a number",
};

export const AgronodNumberFieldWithTooltip = Template.bind({});
AgronodNumberFieldWithTooltip.args = {
  emptyStyle: "highlighted",
  placeholder: "hover for tooltip",
  tooltipText: "This is a tooltip",
};
