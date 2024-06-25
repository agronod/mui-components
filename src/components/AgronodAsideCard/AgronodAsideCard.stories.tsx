import { StoryFn, Meta } from "@storybook/react";
import AgronodAsideCard from "./AgronodAsideCard";
import { Theme } from "@mui/material";
import { AgronodTypography } from "../AgronodTypography";
import { AgronodAlert } from "../AgronodAlert";
import { AgronodIcon } from "../AgronodIcon";

export default {
  title: "Shared Components/AsideCard",
  component: AgronodAsideCard,
  parameters: {
    componentSubtitle:
      "Card that has borders on one side and it is attached to the other.",
    docs: {
      description: {
        component: `<p>This card can be used for aside navigation, menus, aside forms. On mobile it is stuck to the bottom and has top borders.</p>
          `,
      },
    },
  },
  argTypes: {
    children: {
      description:
        "This can be any group of components that creates content for a card.",
    },
    centeredContent: {
      control: {
        type: "boolean",
      },
    },
    position: {
      control: {
        type: "radio",
      },
      options: ["left", "right"],
    },
    variant: {
      control: {
        type: "select",
      },
      options: ["elevation", "outlined", "none"],
    },
    padding: {
      control: { type: "range", min: 0, max: 100 },
    },
    sx: {
      control: {
        type: "object",
      },
    },
  },
} as Meta<typeof AgronodAsideCard>;

export const AsideCardRight: StoryFn<typeof AgronodAsideCard> = ({
  children,
  ...rest
}) => (
  <AgronodAsideCard
    sx={(theme: Theme) => ({
      width: "50%",
      float: rest.position,
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        float: "none",
        position: "absolute",
        bottom: 0,
        left: 0,
      },
    })}
    {...rest}
  >
    {children}
  </AgronodAsideCard>
);
AsideCardRight.args = {
  children: (
    <>
      <AgronodTypography align="center" variant="h4">
        Right sided example
      </AgronodTypography>
      <AgronodAlert severity="info" sx={{ mt: 2 }}>
        This is card that is floated right with content that is not centered.
      </AgronodAlert>
    </>
  ),
  position: "right",
  centeredContent: false,
  padding: 4,
  variant: "elevation",
};

export const AsideCardLeft: StoryFn<typeof AgronodAsideCard> = ({
  children,
  ...rest
}) => (
  <AgronodAsideCard sx={{ width: "50%", float: rest.position }} {...rest}>
    {children}
  </AgronodAsideCard>
);
AsideCardLeft.args = {
  children: (
    <>
      <AgronodIcon name="successOutlined" color="success" />
      <AgronodTypography align="center" variant="h4" sx={{ mt: 2 }}>
        Left sided example
      </AgronodTypography>
      <AgronodAlert severity="info" sx={{ mt: 2 }}>
        This is card that is floated left with content centered.
      </AgronodAlert>
    </>
  ),
  position: "left",
  centeredContent: true,
  padding: 4,
  variant: "elevation",
};
