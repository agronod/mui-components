import { Meta, StoryFn } from "@storybook/react-vite";
import AgronodAlert from "./AgronodAlert";
import { AgronodCard } from "../AgronodCard";
import { LoaderCircular } from "../Loaders";
import { AgronodTypography } from "../AgronodTypography";
import { AgronodButton } from "../AgronodButton";
import { Warning } from "@mui/icons-material";

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

export const AgronodAlertDefault: StoryFn<typeof AgronodAlert> = ({
  children,
  ...rest
}) => <AgronodAlert {...rest}>{children}</AgronodAlert>;

AgronodAlertDefault.args = {
  children: "This is just normal description as a string",
  severity: "info",
  variant: "standard",
};

export const AgronodAlertError: StoryFn<typeof AgronodAlert> = ({
  children,
  ...rest
}) => <AgronodAlert {...rest}>{children}</AgronodAlert>;

AgronodAlertError.args = {
  children: "This is an alert with severity error",
  severity: "error",
  variant: "standard",
};

export const AgronodAlertWithTitle: StoryFn<typeof AgronodAlert> = ({
  children,
  ...rest
}) => <AgronodAlert {...rest}>{children}</AgronodAlert>;

AgronodAlertWithTitle.args = {
  title: "This is title",
  children: (
    <AgronodTypography variant="body2">
      This is text wrapped in typography variant
    </AgronodTypography>
  ),
  severity: "warning",
  variant: "standard",
};

export const AgronodAlertWithoutIcon: StoryFn<typeof AgronodAlert> = ({
  children,
  ...rest
}) => <AgronodAlert {...rest}>{children}</AgronodAlert>;

AgronodAlertWithoutIcon.args = {
  title: "This is title",
  children: "Alert without icon",
  severity: "success",
  icon: false,
  variant: "filled",
};

export const AgronodAlertWithCloseButton: StoryFn<typeof AgronodAlert> = ({
  children,
  ...rest
}) => <AgronodAlert {...rest}>{children}</AgronodAlert>;

AgronodAlertWithCloseButton.args = {
  title: "Closable",
  children: "Alert supports close button click event",
  severity: "error",
  variant: "filled",
  onClose: () => {
    alert("close event triggered");
  },
};

export const AgronodAlertWithActionProperty: StoryFn<typeof AgronodAlert> = ({
  children,
  ...rest
}) => <AgronodAlert {...rest}>{children}</AgronodAlert>;

AgronodAlertWithActionProperty.args = {
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

export const AgronodAlertBehindCard: StoryFn<typeof AgronodAlert> = ({
  children,
  ...rest
}) => (
  <>
    <AgronodCard sx={(theme) => ({ borderColor: theme.palette.error.light })}>
      <p>this is card</p>
    </AgronodCard>
    <AgronodAlert {...rest}>{children}</AgronodAlert>
  </>
);

AgronodAlertBehindCard.args = {
  children: "Alert that is attached to a card",
  severity: "error",
  variant: "filled",
  behindCard: true,
  action: (
    <AgronodButton
      variant="outlined"
      color="error"
      size="small"
      onClick={() => alert("action triggered")}
    >
      Trigger action
    </AgronodButton>
  ),
};

export const AgronodAlertCustomIcon: StoryFn<typeof AgronodAlert> = ({
  children,
  ...rest
}) => (
  <>
    <AgronodCard sx={(theme) => ({ borderColor: theme.palette.warning.light })}>
      <p>this is card</p>
    </AgronodCard>
    <AgronodAlert {...rest}>{children}</AgronodAlert>
  </>
);

AgronodAlertCustomIcon.args = {
  children: "Alert with custom icon element",
  severity: "warning",
  variant: "standard",
  behindCard: true,
  icon: <LoaderCircular color="warning" size={15} />,
};


export const AgronodAlertLoadingDefault: StoryFn<typeof AgronodAlert> = ({
  children,
  ...rest
}) => (
  <>
    <AgronodAlert {...rest}>{children}</AgronodAlert>
  </>
);


AgronodAlertLoadingDefault.args = {
  children: "Loading default",
  severity: "loading",
  variant: "standard",
  behindCard: false,
};


export const AgronodAlertLoadingBehindCard: StoryFn<typeof AgronodAlert> = ({
  children,
  ...rest
}) => (
  <>
    <AgronodCard sx={(theme) => ({ borderColor: theme.palette.info.light })}>
      <p>this is card</p>
    </AgronodCard>
    <AgronodAlert {...rest}>{children}</AgronodAlert>
  </>
);

AgronodAlertLoadingBehindCard.args = {
  children: "Loading behind card",
  severity: "loading",
  variant: "standard",
  behindCard: true,
};


export const AgronodAlertLoadingCustomIcon: StoryFn<typeof AgronodAlert> = ({
  children,
  ...rest
}) => (
  <>
    <AgronodCard sx={(theme) => ({ borderColor: theme.palette.info.light })}>
      <p>this is card</p>
    </AgronodCard>
    <AgronodAlert {...rest}>{children}</AgronodAlert>
  </>
);

AgronodAlertLoadingCustomIcon.args = {
  children: "Loading with custom icon",
  severity: "loading",
  variant: "standard",
  behindCard: true,
  icon: <Warning color="warning"  />,
};

