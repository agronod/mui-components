import { Meta } from "@storybook/react-vite";
import Tooltip from "./Tooltip";
import { AgronodButton } from "../AgronodButton";
import { Box } from "@mui/material";
import { AgronodTypography } from "../AgronodTypography";

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
    <AgronodButton variant="contained">Hover</AgronodButton>
  </Tooltip>
);
TooltipDefault.args = {
  title: "Some text",
  arrow: true,
};
export const TooltipWithoutArrow = ({ ...args }) => (
  <Tooltip title="Some text" {...args}>
    <AgronodButton variant="contained">Hover</AgronodButton>
  </Tooltip>
);
TooltipWithoutArrow.args = {
  title: "Some text",
  arrow: false,
};
export const TooltipPlacementRight = ({ ...args }) => (
  <Tooltip title="Some text" {...args}>
    <AgronodButton variant="contained">Hover</AgronodButton>
  </Tooltip>
);
TooltipPlacementRight.args = {
  title: "Some text",
  arrow: true,
  placement: "right",
};

export const TooltipWithReactNodeTitle = ({ ...args }) => (
  <Tooltip
    slotProps={{
      tooltip: {
        sx: {
          backgroundColor: "orange",
          color: "black",
        },
      },
      arrow: {
        sx: {
          color: "red",
        },
      },
    }}
    title={
      <Box>
        <AgronodTypography variant="subtitle2">
          Custom Tooltip Title
        </AgronodTypography>
        <AgronodTypography variant="body2">
          This is a tooltip with a ReactNode as the title. You can include any
          custom layout, styling, or components here.
        </AgronodTypography>
      </Box>
    }
    {...args}
  >
    <AgronodButton variant="contained">
      Hover for ReactNode Tooltip
    </AgronodButton>
  </Tooltip>
);
TooltipWithReactNodeTitle.args = {
  arrow: true,
  placement: "top",
};
