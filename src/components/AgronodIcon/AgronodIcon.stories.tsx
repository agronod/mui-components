import { Stack, SvgIconProps } from "@mui/material";
import AgronodIcon from "./AgronodIcon";
import { Meta, StoryFn } from "@storybook/react";

export default {
  title: "Base/Agronod Icons",
  component: AgronodIcon,

  argTypes: {
    name: {
      description:
        "<div><code>epost</code></div><div><code>navAvtal</code></div><div><code>navDatadelningsInstallningar</code></div><div><code>navForetagAnvandare</code></div><div><code>navHem</code></div><div><code>navKontrollpanel</code></div><div><code>orgnummer</code></div><div><code>navMarknadKonkurrens</code></div><div><code>profil</code></div>",
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
        "notkreatur",
        "mjolk",
        "vaxtodling",
        "warning",
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
} as Meta<typeof AgronodIcon>;

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
    <AgronodIcon name="notkreatur" {...rest} />
    <AgronodIcon name="mjolk" {...rest} />
    <AgronodIcon name="vaxtodling" {...rest} />
    <AgronodIcon name="warning" color="warning" {...rest} />
  </Stack>
);
AgronodIcons.args = {
  fontSize: "small",
};
