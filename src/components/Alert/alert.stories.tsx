import { Meta, StoryFn } from "@storybook/react";
import { AlertTitle, Typography } from "@mui/material";
import Alert from "./Alert";

export default {
  title: "Shared components/Alert",
  component: Alert,
  parameters: {
    docs: {
      description: {
        component: `<p>An alert displays a short, important message in a way that attracts the user's attention without interrupting the user's task.</p>`,
      },
    },
  },
  argTypes: {
    children: {
      type: { name: "symbol", required: true },
    },
    severity: {
      control: {
        type: "select",
      },
      options: ["error", "info", "success", "warning"],
    },
    variant: {
      control: {
        type: "select",
      },
      options: ["standard", "filled"],
    },
    sx: {
      control: {
        type: "object",
      },
    },
  },
} as Meta<typeof Alert>;

const Template: StoryFn<typeof Alert> = ({ children, ...rest }) => (
  <Alert {...rest}>{children}</Alert>
);

export const AlertDefault = Template.bind({});
AlertDefault.args = {
  children: "Description",
  severity: "info",
  variant: "standard",
};

export const AlertWithTitle = Template.bind({});
AlertWithTitle.args = {
  children: (
    <>
      <AlertTitle>Title</AlertTitle>
      <Typography variant="body2">
        This can be just text or wrapped in any Typography variant
      </Typography>
    </>
  ),
  severity: "warning",
  variant: "standard",
};
