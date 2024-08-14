import { Stack } from "@mui/material";
import AgronodIcon from "./AgronodIcon";
import { Meta, StoryFn } from "@storybook/react";

import exampleImage from "../../assets/extractionIconExample.png";

const iconArray = [
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
  "gris",
  "vaxtodling",
  "warningOutlined",
  "warningContained",
  "infoOutlined",
  "infoContained",
  "successOutlined",
  "successContained",
  "errorOutlined",
  "errorContained",
];

const componentDescription = `<div>
<p>Other icons are from <a href="https://mui.com/material-ui/material-icons/" target="_blank">Material UI </a> <b> (use “round” variation when possible)</b>.</p>
<p>From design, we should extract 24x24 so it matches with MUI.</p>
<p><b>Good example:</b></p>
<img src="${exampleImage}" alt="Icon Example" />
<p>Ensure the <code>fill</code> property in the SVG is utilized correctly to allow for dynamic color assignment to the icon shapes, ensuring the icons appear correctly within the application.</p>
<p>To display an icon in this story, you need to:</p>
<p>1. Import icon in storybook assets/icons</p>
<p>2. Add the icon name to the iconArray</p>
</div>`;

const iconArgDescription = iconArray
  .map((icon) => `<div><code>${icon}</code></div>`)
  .join("");

export default {
  title: "Custom Icons/Icons",
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
      options: iconArray,
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

export const AgronodIconSingle: StoryFn<typeof AgronodIcon> = (props) => (
  <AgronodIcon {...props} />
);
AgronodIconSingle.args = {
  name: "epost",
  fontSize: "small",
};

// TODO: nicer gallery icon display: check IconGallery Storybook
export const AgronodIconsGallery: StoryFn<typeof AgronodIcon> = ({
  name,
  ...rest
}) => (
  <Stack flexDirection="row" gap={3} flexWrap="wrap">
    {iconArray.map((icon) => (
      <AgronodIcon key={icon} name={icon} {...rest} />
    ))}
  </Stack>
);

AgronodIconsGallery.args = {
  fontSize: "large",
};
