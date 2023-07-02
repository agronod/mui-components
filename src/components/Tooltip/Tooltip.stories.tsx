import { ComponentMeta } from "@storybook/react";
import Tooltip from "./Tooltip";
import { Button } from "@mui/material";

export default {
  title: "Components/Tooltip",
  argTypes: {},
  parameters: {
    componentSubtitle:
      "Tooltips display informative text when users hover over, focus on, or tap an element.",
  },
} as ComponentMeta<typeof Tooltip>;

export const TooltipDefault = () => (
  <Tooltip title="Some text">
    <Button variant="contained">Hover</Button>
  </Tooltip>
);
