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
        "epost",
        "navAvtal",
        "navDatadelningsInstallningar",
        "navForetagAnvandare",
        "navHem",
        "navKontrollpanel",
        "navMarknadKonkurrens",
        "orgnummer",
        "profil",
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
  name: "epost",
  fontSize: "small",
};

export const AgronodIcons: StoryFn<typeof AgronodIcon> = ({
  name,
  ...rest
}) => (
  <Stack flexDirection="row" gap={3} flexWrap="wrap">
    <AgronodIcon name="epost" {...rest} />
    <AgronodIcon name="navAvtal" {...rest} />
    <AgronodIcon name="navDatadelningsInstallningar" {...rest} />
    <AgronodIcon name="navForetagAnvandare" {...rest} />
    <AgronodIcon name="navHem" {...rest} />
    <AgronodIcon name="navKontrollpanel" {...rest} />
    <AgronodIcon name="navMarknadKonkurrens" {...rest} />
    <AgronodIcon name="orgnummer" {...rest} />
    <AgronodIcon name="profil" {...rest} />
  </Stack>
);
AgronodIcons.args = {
  fontSize: "small",
};
