import { Stack } from "@mui/material";
import AgronodIcon from "./AgronodIcon";
import { StoryFn } from "@storybook/react";

export default {
  title: "Base/Agronod Icons",
  component: AgronodIcon,
  argTypes: {
    name: {
      description:
        "<p>The names to use: <code>icon-account</code>, <code>icon-avtal</code> and <code>icon-hem</code></p>",
      control: {
        type: "select",
      },
      options: [
        "icon-account",
        "icon-avtal",
        "icon-hem",
        "icon-kontrollpanel",
        "icon-mail",
        "icon-marknadkonkurrens",
        "icon-orgnummer",
        "icon-profile",
        "icon-settings",
      ],
    },
    color: {
      control: {
        type: "select",
      },
      options: [
        "none",
        "primary",
        "secondary",
        "tertiary",
        "success",
        "error",
        "info",
        "warning",
      ],
    },

    fontSize: {
      control: {
        type: "select",
      },
      options: ["small", "medium", "large"],
    },
    sx: {
      control: {
        type: "object",
      },
    },
  },
};

export const AgronodIconOne: StoryFn<typeof AgronodIcon> = ({ ...rest }) => (
  <Stack flexDirection="row" gap={3} flexWrap="wrap">
    <AgronodIcon {...rest} />
  </Stack>
);
AgronodIconOne.args = {
  name: "icon-account",
  fontSize: "small",
};

export const AgronodIcons: StoryFn<typeof AgronodIcon> = ({
  name,
  ...rest
}) => (
  <Stack flexDirection="row" gap={3} flexWrap="wrap">
    <AgronodIcon name="icon-account" {...rest} />
    <AgronodIcon name="icon-avtal" {...rest} />
    <AgronodIcon name="icon-hem" {...rest} />
    <AgronodIcon name="icon-kontrollpanel" {...rest} />
    <AgronodIcon name="icon-mail" {...rest} />
    <AgronodIcon name="icon-marknadkonkurrens" {...rest} />
    <AgronodIcon name="icon-orgnummer" {...rest} />
    <AgronodIcon name="icon-profile" {...rest} />
    <AgronodIcon name="icon-settings" {...rest} />
  </Stack>
);
AgronodIcons.args = {
  fontSize: "small",
};
