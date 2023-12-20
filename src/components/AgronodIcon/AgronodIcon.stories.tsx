import { Stack } from "@mui/material";
import AgronodIcon from "./AgronodIcon";
import { StoryFn } from "@storybook/react";

export default {
  title: "Base/Agronod Icons",
  component: AgronodIcon,
  argTypes: {
    name: {
      description:
        "<div><code>icon-account</code></div><div><code>icon-avtal</code></div><div><code>icon-hem</code></div><div><code>icon-kontrollpanel</code></div><div><code>icon-mail</code></div><div><code>icon-marknadkonkurrens</code></div><div><code>icon-orgnummer</code></div><div><code>icon-profile</code></div><div><code>icon-settings</code></div>",
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
  <AgronodIcon {...rest} />
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
