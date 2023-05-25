import { ComponentMeta, ComponentStory } from "@storybook/react";
import { AlertTitle } from "@mui/material";
import Alert from "./Alert";

export default {
  title: "Components/Alert",
  component: Alert,
  parameters: {
    docs: {
      description: {
        component: `<p>An alert displays a short, important message in a way that attracts the user's attention without interrupting the user's task.</p>
          `,
      },
    },
  },
  argTypes: {
    variant: {
      defaultValue: "standard",
      type: "string",
      options: ["filled", "outlined", "standard"],
    },
    severity: {
      control: {
        type: "select",
        options: ["error", "info", "success", "warning"],
      },
    },
    sx: {
      control: {
        type: "object",
      },
    },
  },
} as ComponentMeta<typeof Alert>;

export const AlertDefault: ComponentStory<typeof Alert> = ({ ...rest }) => (
  <Alert {...rest}>
    <AlertTitle>Alert title</AlertTitle>
    This is an information message!
  </Alert>
);
AlertDefault.args = {};
