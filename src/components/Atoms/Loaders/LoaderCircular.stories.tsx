import { ComponentStory, ComponentMeta } from "@storybook/react";
import LoaderCircular from "./LoaderCrcular";
import ButtonPrimary from "../Buttons/ButtonPrimary/ButtonPrimary";

export default {
  title: "Components/Atoms/Loaders/LoaderCircular",
  component: LoaderCircular,
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
} as ComponentMeta<typeof LoaderCircular>;

export const Button: ComponentStory<typeof LoaderCircular> = ({ ...args }) => (
  <ButtonPrimary>
    <LoaderCircular {...args} />
  </ButtonPrimary>
);
Button.args = {
  size: 20,
  align: "center",
  thickness: 5,
};
