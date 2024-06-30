import { StoryFn, Meta } from "@storybook/react";
import AgronodTextField from "./AgronodTextField";
import { InputAdornment } from "@mui/material";

export default {
  title: "Shared Components/Inputs/Agronod Text Field",
  component: AgronodTextField,
  parameters: {
    componentSubtitle: "This text field is base for <b>all</b> input fields.",
    docs: {
      description: {
        component: `<p>It is used to build Selects, other types of input. It contains base typography settings, and states such <code>disabled</code>,<code>error</code>,<code>warrning</code>...</p>
          `,
      },
    },
  },
  argTypes: {
    textAligment: {
      description:
        "This field is used to set value and placeholder of input field text alignment.",
    },
    label: {
      description:
        "Description of input field above it. It is <code>body2bold</code> typography variant according to design.",
      control: { type: "text" },
    },
    type: {
      control: {
        type: "text",
      },
    },
    value: {
      control: {
        type: "text",
      },
    },
    emptyStyle: {
      description:
        "This argument reflects how the input will look when empty. It can be highlighted with background color or default white.",
    },
    helperText: {
      description:
        "Text below input field that can be an error or just informational.",
      control: { type: "text" },
    },
    tooltipText: {
      description: "Will show on hover over input field.",
    },
    hasIcon: {
      description:
        "Default is <code>false</code>. If it is <code>true</code>, an icon will show on error and warning.",
    },
    warning: {
      control: { type: "boolean" },
    },
  },
} as Meta<typeof AgronodTextField>;

const Template: StoryFn<typeof AgronodTextField> = (args) => (
  <AgronodTextField {...args} />
);

export const AgronodTextFieldDefault = Template.bind({});
AgronodTextFieldDefault.args = {
  placeholder: "Input placeholder",
  label: "Base input with label and value",
};

export const AgronodTextFieldWithHelperText = Template.bind({});
AgronodTextFieldWithHelperText.args = {
  helperText: "Helper text",
};

export const AgronodTextFieldWithEndAndorment = Template.bind({});
AgronodTextFieldWithEndAndorment.args = {
  label: "Adornment input",
  InputProps: {
    endAdornment: <InputAdornment position="end">timmar</InputAdornment>,
  },
};

export const AgronodTextFieldDisabled = Template.bind({});
AgronodTextFieldDisabled.args = {
  label: "Input label",
  helperText: "Disabled state",
  disabled: true,
};

export const AgronodTextFieldError = Template.bind({});
AgronodTextFieldError.args = {
  placeholder: "Input placeholder",
  label: "Input error",
  error: true,
};

export const AgronodTextFieldErrorWithIcon = Template.bind({});
AgronodTextFieldErrorWithIcon.args = {
  label: "Input error",
  helperText: "Error with icon",
  error: true,
  hasIcon: true,
};

export const AgronodTextFieldWarning = Template.bind({});
AgronodTextFieldWarning.args = {
  helperText: "Helper text",
  warning: true,
};

export const AgronodTextFieldWarningWithIcon = Template.bind({});
AgronodTextFieldWarningWithIcon.args = {
  label: "Input warning with icon",
  warning: true,
  hasIcon: true,
  placeholder: "Input warning",
};

export const AgronodTextFieldHighlightedWhenEmpty = Template.bind({});
AgronodTextFieldHighlightedWhenEmpty.args = {
  label: "Input highlighted",
  emptyStyle: "highlighted",
  placeholder: "Input placeholder",
};

export const AgronodTextFieldWithTooltip = Template.bind({});
AgronodTextFieldWithTooltip.args = {
  emptyStyle: "highlighted",
  placeholder: "hover for tooltip",
  tooltipText: "This is tooltip",
};
