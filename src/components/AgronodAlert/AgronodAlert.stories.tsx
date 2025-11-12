import { Meta, StoryFn } from "@storybook/react-vite";
import AgronodAlert, { AgronodAlertProps } from "./AgronodAlert";
import { AgronodCard } from "../AgronodCard";
import { AgronodTypography } from "../AgronodTypography";
import { AgronodButton } from "../AgronodButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default {
  title: "Shared Components/Alert",
  component: AgronodAlert,
  parameters: {
    componentSubtitle:
      "An alert displays a short, important message in a way that attracts the user's attention without interrupting the user's task.",
    docs: {
      description: {
        component: `<div><p>We are using in our designs system two types of Alert, <code>standard</code> and <code>filled</code>.</p><p>Alerts are used as self standing elements or attached elements, usually to <code>AgronodCard</code> commponent. if they are attached they lose top borders and have smaller paddings.</p></div>`,
      },
    },
  },
  argTypes: {
    variant: {
      description:
        "In our design system we use <code>standard</code> and <code>filled</code> options for variant.",
      control: {
        type: "select",
      },
      options: ["standard", "filled"],
    },
    title: {
      description:
        "Title attribute adds AlertTitle to the alert it is undefined by default.",
      defaultValue: undefined,
      control: {
        type: "text",
      },
    },
    behindCardZIndex: {
      description:
        "Default value is set to <code>-1</code> but if you have already multiple zIndexes this can adjust card behind element correctly.",
      defaultValue: -1,
      control: {
        type: "number",
      },
    },
  },
} as Meta<typeof AgronodAlert>;

export const Info: StoryFn<typeof AgronodAlert> = ({
  children,
  ...rest
}: AgronodAlertProps) => <AgronodAlert {...rest}>{children}</AgronodAlert>;

Info.args = {
  children: "This is an alert with severity info",
  severity: "info",
  variant: "standard",
};

export const Error: StoryFn<typeof AgronodAlert> = ({
  children,
  ...rest
}: AgronodAlertProps) => <AgronodAlert {...rest}>{children}</AgronodAlert>;

Error.args = {
  children: "This is an alert with severity error",
  severity: "error",
  variant: "standard",
};

export const Success: StoryFn<typeof AgronodAlert> = ({
  children,
  ...rest
}: AgronodAlertProps) => <AgronodAlert {...rest}>{children}</AgronodAlert>;

Success.args = {
  children: "This is an alert with severity success",
  severity: "success",
  variant: "standard",
};

export const Warning: StoryFn<typeof AgronodAlert> = ({
  children,
  ...rest
}: AgronodAlertProps) => <AgronodAlert {...rest}>{children}</AgronodAlert>;

Warning.args = {
  children: "This is an alert with severity warning",
  severity: "warning",
  variant: "standard",
};

export const Loading: StoryFn<typeof AgronodAlert> = ({
  children,
  ...rest
}: AgronodAlertProps) => <AgronodAlert {...rest}>{children}</AgronodAlert>;

Loading.args = {
  children: "This is an alert with severity loading",
  severity: "loading",
  variant: "standard",
};

export const WithTitle: StoryFn<typeof AgronodAlert> = ({
  children,
  ...rest
}: AgronodAlertProps) => <AgronodAlert {...rest}>{children}</AgronodAlert>;

WithTitle.args = {
  title: "This is title",
  children: (
    <AgronodTypography variant="body2">
      This is text wrapped in typography variant
    </AgronodTypography>
  ),
  severity: "info",
  variant: "standard",
};

export const WithoutIcon: StoryFn<typeof AgronodAlert> = ({
  children,
  ...rest
}: AgronodAlertProps) => <AgronodAlert {...rest}>{children}</AgronodAlert>;

WithoutIcon.args = {
  title: "This is title",
  children: "Alert without icon",
  severity: "info",
  icon: false,
};

export const WithCloseButton: StoryFn<typeof AgronodAlert> = ({
  children,
  ...rest
}: AgronodAlertProps) => <AgronodAlert {...rest}>{children}</AgronodAlert>;

WithCloseButton.args = {
  title: "Closable",
  children: "Alert supports close button click event",
  severity: "error",
  onClose: () => {
    alert("close event triggered");
  },
};

export const WithActionProperty: StoryFn<typeof AgronodAlert> = ({
  children,
  ...rest
}: AgronodAlertProps) => <AgronodAlert {...rest}>{children}</AgronodAlert>;

WithActionProperty.args = {
  title: "Action property",
  children: "Alert supports close button click event",
  severity: "success",
  variant: "standard",
  action: (
    <AgronodButton
      variant="outlined"
      color="success"
      size="small"
      onClick={() => alert("action triggered")}
    >
      Trigger action
    </AgronodButton>
  ),
};

export const BehindCard: StoryFn<typeof AgronodAlert> = ({
  children,
  ...rest
}: AgronodAlertProps) => (
  <>
    <AgronodCard sx={(theme) => ({ borderColor: theme.palette.error.light })}>
      <p>this is card</p>
    </AgronodCard>
    <AgronodAlert {...rest}>{children}</AgronodAlert>
  </>
);

BehindCard.args = {
  children: "Alert that is attached to a card",
  severity: "info",
  behindCard: true,
};

export const CustomIcon: StoryFn<typeof AgronodAlert> = ({
  children,
  ...rest
}: AgronodAlertProps) => <AgronodAlert {...rest}>{children}</AgronodAlert>;

CustomIcon.args = {
  children: "Alert with custom icon",
  severity: "info",
  variant: "standard",
  icon: <ArrowBackIcon />,
};
