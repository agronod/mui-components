import { ComponentStory, ComponentMeta } from "@storybook/react";
import Spinner from "./Spinner";
import ButtonPrimary from "../Buttons/ButtonPrimary/ButtonPrimary";

export default {
  title: "Components/Atoms/Loaders/Spinner",
  component: Spinner,
  argTypes: {
    size: {
      control: {
        type: "number",
      },
    },
    align: {
      control: {
        type: "select",
        options: ["flex-start", "center", "flex-end"],
      },
    },
    thickness: {
      control: {
        type: "number",
      },
    },
  },
} as ComponentMeta<typeof Spinner>;

export const ButtonSpinner: ComponentStory<typeof Spinner> = ({ ...args }) => (
  <ButtonPrimary loading={true}>
    <Spinner {...args} />
  </ButtonPrimary>
);
ButtonSpinner.args = {
  size: 20,
  align: "center",
  thickness: 5,
};
