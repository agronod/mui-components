import { Meta, StoryFn } from "@storybook/react";
import { AlertTitle, Box, Typography } from "@mui/material";
import Alert from "./Alert";

export default {
  title: "Common Components/Alert",
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
    children: {
      type: { name: "symbol", required: true },
    },
    severity: {
      control: {
        type: "select",
      },
      options: ["error", "info", "success", "warning"],
    },
    sx: {
      control: {
        type: "object",
      },
    },
  },
} as Meta<typeof Alert>;

export const AlertDefault: StoryFn<typeof Alert> = ({ children, ...rest }) => (
  <Alert {...rest}>{children}</Alert>
);
AlertDefault.args = {
  children: "Description",
};

export const AlertWithTitle: StoryFn<typeof Alert> = ({
  children,
  ...rest
}) => <Alert {...rest}>{children}</Alert>;
AlertWithTitle.args = {
  children: (
    <>
      <AlertTitle>Title</AlertTitle>
      <Typography variant="body2">
        This can be just text or wrapped in any Typography variant
      </Typography>
    </>
  ),
};
