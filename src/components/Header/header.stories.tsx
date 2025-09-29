import { Meta, StoryFn } from "@storybook/react-vite";
import { BrowserRouter } from "react-router-dom";
import { Box } from "@mui/material";
import Header from "./Header";

export default {
  title: "Agrosfär Exclusive/Header",
  component: Header,
  parameters: {},
  argTypes: {
    children: {
      type: { name: "symbol", required: true },
    },
  },
} as Meta<typeof Header>;

export const HeaderDefault: StoryFn<typeof Header> = ({ ...rest }) => (
  <BrowserRouter>
    <Box sx={{ minHeight: "90px" }}>
      <Header {...rest} />
    </Box>
  </BrowserRouter>
);
HeaderDefault.args = {};
