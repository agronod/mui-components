import { Meta } from "@storybook/react";
import Tooltip from "./Tooltip";
import { Button } from "@mui/material";

export default {
  title: "Shared Components/Tooltip",
  argTypes: {
    arrow: {
      control: {
        type: "boolean",
      },
      options: ["true", "false"],
    },
    placement: {
      description:
        "<p>The Tooltip has <code>12 placement</code> choices. They don't have directional arrows; instead, they rely on motion emanating from the source to convey direction.</p> <p>Priority over this property have natural position of the element.</p>",
      control: {
        type: "select",
      },
      options: [
        "bottom-end",
        "bottom-start",
        "bottom",
        "left-end",
        "left-start",
        "left",
        "right-end",
        "right-start",
        "right",
        "top-end",
        "top-start",
        "top",
      ],
    },
    title: {
      control: {
        type: "text",
      },
    },
  },
  parameters: {
    componentSubtitle:
      "Tooltips display informative text when users hover over, focus on, or tap an element.",
  },
} as Meta<typeof Tooltip>;

export const TooltipDefault = ({ ...args }) => (
  <Tooltip title="Some text" {...args}>
    <Button variant="contained">Hover</Button>
  </Tooltip>
);
TooltipDefault.args = {
  title: "Some text",
  arrow: true,
};
export const TooltipWithoutArrow = ({ ...args }) => (
  <Tooltip title="Some text" {...args}>
    <Button variant="contained">Hover</Button>
  </Tooltip>
);
TooltipWithoutArrow.args = {
  title: "Some text",
  arrow: false,
};
export const TooltipPlacementRight = ({ ...args }) => (
  <Tooltip title="Some text" {...args}>
    <Button variant="contained">Hover</Button>
  </Tooltip>
);
TooltipPlacementRight.args = {
  title: "Some text",
  arrow: true,
  placement: "right",
};
