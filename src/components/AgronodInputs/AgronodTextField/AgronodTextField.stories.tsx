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
} as Meta<typeof AgronodTextField>;

export const AgronodTextFieldDefault: StoryFn<typeof AgronodTextField> = ({
  ...args
}) => {
  return <AgronodTextField {...args} />;
};
AgronodTextFieldDefault.args = {
  placeholder: "Input placeholder",
  label: "Base input with label",
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
