import { Meta, StoryFn } from "@storybook/react";
import Support from "./Support";
import { Box } from "@mui/material";

export default {
  title: "Shared components/Support",
  component: Support,
  parameters: {
    componentSubtitle: "Support button is used in Agronod and Agrosfär",
    docs: {
      description: {
        component: `<p>In component you can choose which menu items will component have and what action on click will be executed</p>`,
      },
    },
  },
  argTypes: {
    buttonSize: {
      control: {
        type: "radio",
        default: "large",
      },
      options: ["small", "large"],
    },
    menuPosition: {
      control: {
        type: "radio",
        default: "large",
      },
      options: ["top", "bottom"],
    },
  },
} as Meta<typeof Support>;

export const SupportDefault: StoryFn<typeof Support> = (props) => (
  <Support {...props} />
);
SupportDefault.args = {
  buttonSize: "large",
  menuPosition: "bottom",
  QALink: "https://www.agronod.com/fragor",
  supportEmail: "support@agronod.com",
  supportTelephone: "070 955 3720",
};
export const SupoprtBottomPositioned: StoryFn<typeof Support> = (props) => (
  <Box sx={{ position: "absolute", bottom: 0 }}>
    <Support {...props} />
  </Box>
);
SupoprtBottomPositioned.args = {
  buttonSize: "large",
  menuPosition: "top",
  QALink: "https://www.agronod.com/fragor",
  supportEmail: "support@agronod.com",
  supportTelephone: "070 955 3720",
};
