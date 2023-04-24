import { ComponentStory, ComponentMeta } from "@storybook/react";
import Card from "./Card";
import { Button } from "../Buttons";
import { InputField } from "../InputField";
import { Box } from "@mui/material";
import { Typography } from "../Typography";

export default {
  title: "Components/Card",
  component: Card,
  parameters: {
    componentSubtitle: "Card is used in multiple places and components",
    docs: {
      description: {
        component: `<div>We can se it as:
          <ul><li>Aside card for menus and forms</li>
          <li>Card information blocks</li></ul></div>
          `,
      },
    },
  },
  argTypes: {
    children: {
      type: { name: "function", required: true },
    },
    variant: {
      control: {
        type: "radio",
        options: ["outlined", "elevation", "none"],
      },
    },
    centeredContent: {
      control: {
        type: "boolean",
      },
    },
    positionLeft: {
      control: {
        type: "boolean",
      },
    },
    positionRight: {
      control: {
        type: "boolean",
      },
    },
    padding: {
      control: { type: "range", min: 0, max: 100 },
    },
    sx: {
      control: {
        type: "object",
        expanded: true,
      },
    },
  },
} as ComponentMeta<typeof Card>;

export const CardDefault: ComponentStory<typeof Card> = ({
  children,
  ...rest
}) => <Card {...rest}>{children}</Card>;
CardDefault.args = {
  children: (
    <Box width="50%" maxWidth="400px" display="grid" gap={3}>
      <Typography variant="h3">Just example</Typography>
      <InputField fullWidth={true} placeholder="Lorem Ipsum" />
      <InputField fullWidth={true} placeholder="Lorem Ipsum" />

      <Button fullWidth={true} variant="contained">
        Lorem Ipsum
      </Button>
    </Box>
  ),
  centeredContent: true,
  padding: 4,
  // @ts-ignore
  variant: "none",
};

export const CardElevated: ComponentStory<typeof Card> = ({
  children,
  ...rest
}) => <Card {...rest}>{children}</Card>;
CardElevated.args = {
  children: (
    <Box width="50%" maxWidth="400px" display="grid" gap={3}>
      <Typography variant="h3">Just example</Typography>
      <InputField fullWidth={true} placeholder="Lorem Ipsum" />
      <InputField fullWidth={true} placeholder="Lorem Ipsum" />

      <Button fullWidth={true} variant="contained">
        Lorem Ipsum
      </Button>
    </Box>
  ),
  centeredContent: true,
  padding: 4,
  variant: "elevation",
};

export const CardOutlined: ComponentStory<typeof Card> = ({
  children,
  ...rest
}) => <Card {...rest}>{children}</Card>;
CardOutlined.args = {
  children: (
    <Box width="50%" maxWidth="400px" display="grid" gap={3}>
      <Typography variant="h3">Just example</Typography>
      <InputField fullWidth={true} placeholder="Lorem Ipsum" />
      <InputField fullWidth={true} placeholder="Lorem Ipsum" />

      <Button fullWidth={true} variant="contained">
        Lorem Ipsum
      </Button>
    </Box>
  ),
  centeredContent: true,
  padding: 4,
  variant: "outlined",
};
