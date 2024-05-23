import { Stack } from "@mui/material";
import AgronodIcon from "./AgronodIcon";
import { Meta, StoryFn } from "@storybook/react";

const componentDescription = `<div>
<p>Other icons are from <a href="https://mui.com/material-ui/material-icons/" target="_blakn">Material UI </a> <b> (use “round” variation when possible)</b>.</p>
<p>From design, we should extract 24x24 so it matches with MUI.</p>
<p>Ensure the <code>fill</code> property in the SVG is utilized correctly to allow for dynamic color assignment to the icon shapes, ensuring the icons appear correctly within the application.</p>
<p>To display an icon in this story, you need to:</p>
<p>1. Add the icon to the stack render section in the <code>AgronodIcons</code> story</p>
<p>2. Add the icon name to the dropdown options in the <code>argTypes.name.options</code> array.</p>
</div>`;

const iconArgDescription = `<div><code>epost</code></div>
<div><code>navAvtal</code></div>
<div><code>navDatadelningsInstallningar</code></div>
<div><code>navForetagAnvandare</code></div>
<div><code>navHem</code></div>
<div><code>navKontrollpanel</code></div>
<div><code>navMarknadKonkurrens</code></div>
<div><code>orgnummer</code></div>
<div><code>profil</code></div>
<div><code>notkreatur</code></div>
<div><code>mjolk</code></div>
<div><code>vaxtodling</code></div>
<div><code>warningOutlined</code></div>
<div><code>warningContained</code></div>
<div><code>infoOutlined</code></div>
<div><code>infoContained</code></div>
<div><code>successOutlined</code></div>
<div><code>successContained</code></div>
<div><code>errorOutlined</code></div>
<div><code>errorContained</code></div>`;

export default {
  title: "Base/Agronod Icons",
  component: AgronodIcon,
  parameters: {
    componentSubtitle:
      "Agronod-specific icons are used for navigation and prominent icons",
    docs: {
      description: {
        component: componentDescription,
      },
    },
  },
  argTypes: {
    name: {
      description: iconArgDescription,
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
        "warningOutlined",
        "warningContained",
        "infoOutlined",
        "infoContained",
        "successOutlined",
        "successContained",
        "errorOutlined",
        "errorContained",
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

export const AgronodIconSingle: StoryFn<typeof AgronodIcon> = ({ ...args }) => (
  <AgronodIcon {...args} />
);
AgronodIconSingle.args = {
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
    <AgronodIcon name="warningContained" color="warning" {...rest} />
    <AgronodIcon name="warningOutlined" color="warning" {...rest} />
    <AgronodIcon name="infoOutlined" color="info" {...rest} />
    <AgronodIcon name="infoContained" color="info" {...rest} />
    <AgronodIcon name="successOutlined" color="success" {...rest} />
    <AgronodIcon name="successContained" color="success" {...rest} />
    <AgronodIcon name="errorOutlined" color="error" {...rest} />
    <AgronodIcon name="errorContained" color="error" {...rest} />
  </Stack>
);

AgronodIcons.args = {
  fontSize: "small",
};
