import { StoryFn, Meta } from "@storybook/react-vite";
import AgronodRadio from "./AgronodRadio";

export default {
  title: "Shared Components/Radio",
  component: AgronodRadio,
  parameters: {
    componentSubtitle: "Used in forms",
    docs: {
      description: {
        component: `<p>Simple component used as a part of bigger molecules.</p>`,
      },
    },
  },
  argTypes: {
    label: {
      description:
        "Label added when wanting additional information. It is adding <code>FormControlLabel</code> component around radio.",
      control: {
        type: "text",
      },
    },
  },
} as Meta<typeof AgronodRadio>;

export const SwitchDefault: StoryFn<typeof AgronodRadio> = ({
  ...args
}) => <AgronodRadio {...args} />;

export const SwitchChecked: StoryFn<typeof AgronodRadio> = ({
  ...args
}) => <AgronodRadio {...args} />;
SwitchChecked.args = {
  checked: true,
};

export const SwitchWithLabel: StoryFn<typeof AgronodRadio> = ({
  ...args
}) => <AgronodRadio {...args} />;

SwitchWithLabel.args = {
  label: "This is a label",
};

export const SwitchDisabled: StoryFn<typeof AgronodRadio> = ({
  ...args
}) => <AgronodRadio {...args} />;
SwitchDisabled.args = {
  disabled: true,
};
