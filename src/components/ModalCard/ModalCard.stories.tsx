import { ComponentStory, ComponentMeta } from "@storybook/react";
import ModalCard from "./ModalCard";
import { Box, Button, Stack, Typography } from "@mui/material";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";

export default {
  title: "Components/ModalCard",
  component: ModalCard,
  parameters: {
    componentSubtitle: "Responsive Modal Card",
    docs: {
      description: {
        component: `<p>Modal Card is responsive custom component that you import from @agronod/muicomponents</p>
          `,
      },
    },
  },
  argTypes: {
    children: {
      type: { name: "symbol", required: true },
    },
    title: {
      control: {
        type: "text",
        required: true,
      },
    },
    open: {
      control: {
        type: "boolean",
        required: true,
      },
    },
    subtitle: {
      control: {
        type: "text",
      },
    },
    cardWidth: {
      control: {
        type: "text",
      },
    },
    sx: {
      control: {
        type: "object",
        expanded: true,
      },
    },
  },
} as ComponentMeta<typeof ModalCard>;

export const ModalCardDefault: ComponentStory<typeof ModalCard> = ({
  children,
  ...rest
}) => <ModalCard {...rest}>{children}</ModalCard>;
ModalCardDefault.args = {
  title: "Modal card example",
  open: true,
  subtitle:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  children: (
    <Box>
      <p>this is test paragraph 1</p>
      <Button variant="contained">Test button</Button>
    </Box>
  ),
};

export const ModalCardWithIcon: ComponentStory<typeof ModalCard> = ({
  children,
  ...rest
}) => <ModalCard {...rest}>{children}</ModalCard>;
ModalCardWithIcon.args = {
  title: "Modal card example title",
  subtitle: "Modal card example subtitle",
  open: true,
  children: (
    <Box>
      <p>Modal card example children</p>
      <Button variant="contained">Test button</Button>
    </Box>
  ),
  icon: <ErrorOutlineOutlinedIcon color="error" fontSize="large" />,
};
