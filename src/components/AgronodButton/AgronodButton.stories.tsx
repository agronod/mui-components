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

export const ButtonContained: StoryFn<typeof AgronodButton> = ({
  children,
  ...rest
}) => <AgronodButton {...rest}>{children}</AgronodButton>;
ButtonContained.args = {
  children: "Button Contained",
  variant: "contained",
};

export const ButtonOutlined: StoryFn<typeof AgronodButton> = ({
  children,
  ...rest
}) => <AgronodButton {...rest}>{children}</AgronodButton>;
ButtonOutlined.args = {
  children: "Button Outlined",
  variant: "outlined",
};

export const ButtonText: StoryFn<typeof AgronodButton> = ({
  children,
  ...rest
}) => <AgronodButton {...rest}>{children}</AgronodButton>;
ButtonText.args = {
  children: "Button Text",
  variant: "text",
};

export const ButtonDisabled: StoryFn<typeof AgronodButton> = ({
  children,
  ...rest
}) => <AgronodButton {...rest}>{children}</AgronodButton>;
ButtonDisabled.args = {
  children: "Button Disabled",
  variant: "contained",
  disabled: true,
};

export const ButtonFullWidth: StoryFn<typeof AgronodButton> = ({
  children,
  ...rest
}) => <AgronodButton {...rest}>{children}</AgronodButton>;
ButtonFullWidth.args = {
  children: "Button Full Width",
  variant: "contained",
  fullWidth: true,
};

export const ButtonCustomWidth: StoryFn<typeof AgronodButton> = ({
  children,
  ...rest
}) => <AgronodButton {...rest}>{children}</AgronodButton>;
ButtonCustomWidth.args = {
  children: "Button Custom Width",
  variant: "contained",
  sx: { minWidth: "500px" },
};

export const ButtonLoader: StoryFn<typeof AgronodButton> = ({
  children,
  ...rest
}) => (
  <AgronodButton
    disabled={true}
    {...rest}
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

export const ButtonIconLeft: StoryFn<typeof AgronodButton> = ({
  children,
  ...rest
}) => (
  <AgronodButton startIcon={<ArrowBack />} {...rest}>
    {children}
  </AgronodButton>
);
ButtonIconLeft.args = {
  children: "Button with icon on left",
  variant: "contained",
};

export const ButtonIconRight: StoryFn<typeof AgronodButton> = ({
  children,
  ...rest
}) => (
  <AgronodButton endIcon={<ArrowForward />} {...rest}>
    {children}
  </AgronodButton>
);
ButtonIconRight.args = {
  children: "Button with icon on right",
  variant: "contained",
};
