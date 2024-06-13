import { Meta, StoryFn } from "@storybook/react";
import AgronodChip from "./AgronodChip";

export default {
  title: "Shared Components/Chip",
  component: AgronodChip,
  parameters: {
    componentSubtitle: "Chip component is used independently but also as part of other components like Dropdown Selects.",
    docs: {
      description: {
        component: `<p>Base for this component is MUI Chip but it is specifically design for certain purposes. MUI Chip is used for other components like Step component.</p>
          `,
      },
    },
  },
  argTypes: {
    disabled: {
      control: {
        type: "boolean",
      },
    },
    color: {
      control: {
        type: "select",
      },
      options: [
        "primary",
        "secondary",
        "tertiary",
        "success",
        "error",
        "info",
        "warning",
        "default",
      ],
    },
  },
} as Meta<typeof AgronodChip>;

export const AgronodChipDefault: StoryFn<typeof AgronodChip> = ({
  ...args
}) => <AgronodChip {...args} />;

AgronodChipDefault.args = {
  label: "default",
};

export const AgronodChipWithDelete: StoryFn<typeof AgronodChip> = ({
  handleOnDelete,
  ...rest
}) => <AgronodChip {...rest} handleOnDelete={() => alert("on Delete")} />;

AgronodChipWithDelete.args = {
  label: "Has delete",
};
