import { StoryFn, Meta } from "@storybook/react-vite";
import AgronodSwitch from "./AgronodSwitch";

export default {
  title: "Shared Components/Switch",
  component: AgronodSwitch,
  parameters: {
    componentSubtitle: "Used in forms and consent options.",
    docs: {
      description: {
        component: `<p>Simple component used as a part of bigger molecules.</p>`,
      },
    },
  },
  argTypes: {
    label: {
      description:
        "Label added when wanting additional information. It is adding <code>FormControlLabel</code> component around switch.",
      control: {
        type: "text",
      },
    },
  },
} as Meta<typeof AgronodSwitch>;

export const SwitchDefault: StoryFn<typeof AgronodSwitch> = ({
  ...args
}) => <AgronodSwitch {...args} />;

export const SwitchChecked: StoryFn<typeof AgronodSwitch> = ({
  ...args
}) => <AgronodSwitch {...args} />;
SwitchChecked.args = {
  checked: true,
};

export const SwitchWithLabel: StoryFn<typeof AgronodSwitch> = ({
  ...args
}) => <AgronodSwitch {...args} />;

SwitchWithLabel.args = {
  label: "This is a label",
};

export const SwitchDisabled: StoryFn<typeof AgronodSwitch> = ({
  ...args
}) => <AgronodSwitch {...args} />;
SwitchDisabled.args = {
  disabled: true,
};
