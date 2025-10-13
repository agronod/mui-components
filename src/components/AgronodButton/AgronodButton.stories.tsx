import { StoryFn, Meta } from "@storybook/react-vite";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { LoaderCircular } from "../Loaders";
import AgronodButton from "./AgronodButton";

export default {
  title: "Shared Components/Button",
  component: AgronodButton,
  parameters: {
    componentSubtitle:
      "Buttons allow users to take actions, and make choices, with a single tap.",
    docs: {
      description: {
        component: `<div>Buttons communicate actions that users can take. They are typically placed throughout your UI, in places like:
          <ul><li>Modal windows</li>
          <li>Forms</li>
          <li>Cards</li>
          <li>Toolbars</li></ul></div>
          `,
      },
    },
  },
} as Meta<typeof AgronodButton>;

export const ButtonContained: StoryFn<typeof AgronodButton> = (args) => (
  <AgronodButton {...args} />
);
ButtonContained.args = {
  children: "Button Contained",
  variant: "contained",
};

export const ButtonOutlined: StoryFn<typeof AgronodButton> = (args) => (
  <AgronodButton {...args} />
);
ButtonOutlined.args = {
  children: "Button Outlined",
  variant: "outlined",
};

export const ButtonText: StoryFn<typeof AgronodButton> = (args) => (
  <AgronodButton {...args} />
);
ButtonText.args = {
  children: "Button Text",
  variant: "text",
};

export const ButtonDisabled: StoryFn<typeof AgronodButton> = (args) => (
  <AgronodButton {...args} />
);
ButtonDisabled.args = {
  children: "Button Disabled",
  variant: "contained",
  disabled: true,
};

export const ButtonFullWidth: StoryFn<typeof AgronodButton> = (args) => (
  <AgronodButton {...args} />
);
ButtonFullWidth.args = {
  children: "Button Full Width",
  variant: "contained",
  fullWidth: true,
};

export const ButtonCustomWidth: StoryFn<typeof AgronodButton> = (args) => (
  <AgronodButton {...args} />
);
ButtonCustomWidth.args = {
  children: "Button Custom Width",
  variant: "contained",
  sx: { minWidth: "500px" },
};

export const ButtonLoader: StoryFn<typeof AgronodButton> = (args) => (
  <AgronodButton
    {...args}
    disabled={true}
    startIcon={
      <LoaderCircular align="center" color="inherit" size={15} thickness={5} />
    }
  >
    Loading
  </AgronodButton>
);
ButtonLoader.args = {
  variant: "contained",
};

export const ButtonIconLeft: StoryFn<typeof AgronodButton> = (args) => (
  <AgronodButton {...args} startIcon={<ArrowBack />} />
);
ButtonIconLeft.args = {
  children: "Button with icon on left",
  variant: "contained",
};

export const ButtonIconRight: StoryFn<typeof AgronodButton> = (args) => (
  <AgronodButton {...args} endIcon={<ArrowForward />} />
);
ButtonIconRight.args = {
  children: "Button with icon on right",
  variant: "contained",
};
