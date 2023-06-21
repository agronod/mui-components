import { ComponentMeta, ComponentStory } from "@storybook/react";
import Header from "./Header";
import { BrowserRouter } from "react-router-dom";
import { Box } from "@mui/material";

export default {
  title: "Components/Header",
  component: Header,
  parameters: {},
  argTypes: {},
} as ComponentMeta<typeof Header>;

export const HeaderDefault: ComponentStory<typeof Header> = ({ ...rest }) => (
  <BrowserRouter>
    <Header {...rest} />
  </BrowserRouter>
);
HeaderDefault.args = {};
