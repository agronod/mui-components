import { Meta, StoryFn } from "@storybook/react";
import AgronodSupport from "./AgronodSupport";
import { Box } from "@mui/material";

export default {
  title: "Shared Components/Support",
  component: AgronodSupport,
  parameters: {
    componentSubtitle: "AgronodSupport button is used in Agronod and Agrosfär",
    docs: {
      description: {
        component: `<p>Component consist of button, menu with options and modal where we can see main support information.</p>`,
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
    supportEmail: {
      description: "When this is <code>undefined</code> email will be hidden",
      control: {
        type: "text",
      },
    },
    supportTelephone: {
      description:
        "When this is <code>undefined</code> telephone number will be hidden",
      control: {
        type: "text",
      },
    },
    respondTime: {
      description:
        "Custom message for respond time or any other additional info at the end.",
      control: {
        type: "text",
      },
    },
  },
} as Meta<typeof AgronodSupport>;

export const SupportDefault: StoryFn<typeof AgronodSupport> = (props) => (
  <AgronodSupport {...props} />
);
SupportDefault.args = {
  buttonSize: "large",
  menuPosition: "bottom",
  QALink: "https://www.agronod.com/fragor",
  supportEmail: "support@agronod.com",
  supportTelephone: "070 955 3720",
};

export const SupportBottomPositioned: StoryFn<typeof AgronodSupport> = (
  props
) => (
  <Box sx={{ position: "absolute", bottom: 0 }}>
    <AgronodSupport {...props} />
  </Box>
);
SupportBottomPositioned.args = {
  buttonSize: "large",
  menuPosition: "top",
  QALink: "https://www.agronod.com/fragor",
  supportEmail: "support@agronod.com",
  supportTelephone: "070 955 3720",
};

export const SupportWithoutPhoneNumber: StoryFn<typeof AgronodSupport> = (
  props
) => (
  <Box sx={{ position: "absolute", bottom: 0 }}>
    <AgronodSupport {...props} />
  </Box>
);
SupportWithoutPhoneNumber.args = {
  buttonSize: "large",
  menuPosition: "top",
  QALink: "https://www.agronod.com/fragor",
  supportEmail: "support@agronod.com",
  supportTelephone: undefined,
};

export const SupportWithoutEmail: StoryFn<typeof AgronodSupport> = (props) => (
  <Box sx={{ position: "absolute", bottom: 0 }}>
    <AgronodSupport {...props} />
  </Box>
);
SupportWithoutEmail.args = {
  buttonSize: "large",
  menuPosition: "top",
  QALink: "https://www.agronod.com/fragor",
  supportEmail: undefined,
  supportTelephone: "070 955 3720",
};

export const SupportWithCustomTimeMessage: StoryFn<typeof AgronodSupport> = (
  props
) => (
  <Box sx={{ position: "absolute", bottom: 0 }}>
    <AgronodSupport {...props} />
  </Box>
);
SupportWithCustomTimeMessage.args = {
  buttonSize: "large",
  menuPosition: "top",
  QALink: "https://www.agronod.com/fragor",
  supportEmail: "support@agronod.com",
  supportTelephone: "070 955 3720",
  respondTime: "We do not respond on weekends!",
};

export const SupportMobileVersion: StoryFn<typeof AgronodSupport> = (props) => (
  <Box sx={{ position: "absolute", bottom: 0 }}>
    <AgronodSupport {...props} />
  </Box>
);
SupportMobileVersion.args = {
  menuPosition: "top",
  QALink: "https://www.agronod.com/fragor",
  supportEmail: undefined,
  supportTelephone: "070 955 3720",
  isMobile: true,
};
