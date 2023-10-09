import { Meta, StoryFn } from "@storybook/react";
import Header from "./Header";
import { BrowserRouter } from "react-router-dom";
import { Box } from "@mui/material";

export default {
  title: "Components/Header",
  component: Header,
  parameters: {},
  argTypes: {},
} as Meta<typeof Header>;

export const HeaderDefault: StoryFn<typeof Header> = ({ ...rest }) => (
  <BrowserRouter>
    <Box sx={{ minHeight: "90px" }}>
      <Header {...rest} />
    </Box>
  </BrowserRouter>
);
HeaderDefault.args = {};
