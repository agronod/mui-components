import { StoryFn, Meta } from "@storybook/react";
import AgronodTextField from "./AgronodTextField";

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
        "Description of input field above it. It is <code>body2bold</code> typography variant according to desing.",
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
        "This argument reflects how will input look when empty. It can be higlighted with background color or default white.",
    },
    helperText: {
      description:
        "Text below input field that can be error or just informational",
    },
    tooltipText: {
      description: "Will show on hover over input field.",
    },
    hasIcon: {
      description:
        "Default is <code>false</code>, if it is <code>true</code icon will show on error and warrning",
    },
  },
} as Meta<typeof AgronodTextField>;

export const AgronodTextFieldDefault: StoryFn<typeof AgronodTextField> = ({
  ...args
}) => {
  return <AgronodTextField {...args} />;
};
AgronodTextFieldDefault.args = {
  placeholder: "Input placeholder",
  label: "Base input with label and value",
};

export const AgronodTextFieldWithHelperText: StoryFn<
  typeof AgronodTextField
> = ({ ...args }) => {
  return <AgronodTextField {...args} />;
};
AgronodTextFieldWithHelperText.args = {
  helperText: "Helper text",
};

export const AgronodTextFieldWithEndAndorment: StoryFn<
  typeof AgronodTextField
> = ({ ...args }) => {
  return <AgronodTextField {...args} />;
};
AgronodTextFieldWithEndAndorment.args = {
  label: "Andorment input",
  endAndorment: "kg",
};

export const AgronodTextFieldDisabled: StoryFn<typeof AgronodTextField> = ({
  ...args
}) => {
  return <AgronodTextField {...args} />;
};
AgronodTextFieldDisabled.args = {
  label: "Input label",
  helperText: "Disabled state",
  disabled: true,
};

export const AgronodTextFieldError: StoryFn<typeof AgronodTextField> = ({
  ...args
}) => {
  return <AgronodTextField {...args} />;
};
AgronodTextFieldError.args = {
  placeholder: "Input placeholder",
  label: "Input error",
  status: "error",
};

export const AgronodTextFieldErrorWithIcon: StoryFn<
  typeof AgronodTextField
> = ({ ...args }) => {
  return <AgronodTextField {...args} />;
};
AgronodTextFieldErrorWithIcon.args = {
  label: "Input error",
  helperText: "Error with icon",
  status: "error",
  hasIcon: true,
};

export const AgronodTextFieldWarning: StoryFn<typeof AgronodTextField> = ({
  ...args
}) => {
  return <AgronodTextField {...args} />;
};
AgronodTextFieldWarning.args = {
  helperText: "Helper text",
  status: "warning",
};

export const AgronodTextFieldWarningWithIcon: StoryFn<
  typeof AgronodTextField
> = ({ ...args }) => {
  return <AgronodTextField {...args} />;
};
AgronodTextFieldWarningWithIcon.args = {
  label: "Input warning with icon",
  status: "warning",
  hasIcon: true,
  placeholder: "Änge",
};

export const AgronodTextFieldHighlightedWhenEmpty: StoryFn<
  typeof AgronodTextField
> = ({ ...args }) => {
  return <AgronodTextField {...args} />;
};
AgronodTextFieldHighlightedWhenEmpty.args = {
  label: "Input highlighted",
  emptyStyle: "highlighted",
  placeholder: "Änge",
};
