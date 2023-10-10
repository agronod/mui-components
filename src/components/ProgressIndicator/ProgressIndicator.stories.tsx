import { StoryFn, Meta } from "@storybook/react";
import ProgressIndicator from "./ProgressIndicator";

export default {
  title: "Components/ProgressIndicator",
  component: ProgressIndicator,
  parameters: {
    componentSubtitle: "Textual stepper component",
    docs: {
      description: {
        component: `<p>This component shows us if we have several steps in modal or other components to finishs</p>
          `,
      },
    },
  },
  argTypes: {
    active: {
      description: "This number indicates which is active step.",
      control: {
        type: "number",
        required: true,
      },
    },
    total: {
      description:
        "This number indicates how many steps we have in total to go through.",
      control: {
        type: "number",
        required: true,
      },
    },
  },
} as Meta<typeof ProgressIndicator>;

export const ProgressIndicatorDefault: StoryFn<typeof ProgressIndicator> = ({
  ...rest
}) => {
  return (
    <>
      <ProgressIndicator {...rest} />
    </>
  );
};
ProgressIndicatorDefault.args = {
  active: 1,
  total: 25,
};
