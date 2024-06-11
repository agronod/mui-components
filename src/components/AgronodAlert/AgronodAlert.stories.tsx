import { Meta, StoryFn } from "@storybook/react";
import { Button, Typography } from "@mui/material";
import AgronodAlert from "./AgronodAlert";
import { AgronodCard } from "../AgronodCard";
import { LoaderCircular } from "../Loaders";

export default {
  title: "Shared Components/Alert",
  component: AgronodAlert,
  parameters: {
    componentSubtitle:
      "An alert displays a short, important message in a way that attracts the user's attention without interrupting the user's task..",
    docs: {
      description: {
        component: `<div><p>We are using in our designs system two types of Alert, <code>standard</code> and <code>filled</code>.</p><p>Alerts are used as self standing elements or attached elements, usually to <code>AgronodCard</code> commponent. if they are attached they lose top borders and have smaller paddings.</p></div>`,
      },
    },
  },
 
  argTypes: {
    variant: {
      description: "In our design system we use <code>standard</code> and <code>filled</code> options for variant.",
     control: {
        type: "select",
      },
      options: ["standard", "filled"],
    },
    title: {
      description: "Title attribute adds AlertTitle to the alert it is undefined by default.",
      defaultValue: undefined,
      control: {
        type: "text",
      },
    }
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

export const AgronodAlertWithTitle: StoryFn<typeof AgronodAlert> = ({
  children,
  ...rest
}) => <AgronodAlert {...rest}>{children}</AgronodAlert>;

AgronodAlertWithTitle.args = {
  title:"This is title",
  children: (
   
      <Typography variant="body2">
       This is text wrapped in typography variant
      </Typography>
   
  ),
  severity: "warning",
  variant: "standard",
};

export const AgronodAlertWithoutIcon: StoryFn<typeof AgronodAlert> = ({
  children,
  ...rest
}) => <AgronodAlert {...rest}>{children}</AgronodAlert>;

AgronodAlertWithoutIcon.args = {
  title:"This is title",
  children: "Alert without icon",
  severity: "success",
  variant: "filled",
  icon: false
};

export const AgronodAlertWithCloseButton: StoryFn<typeof AgronodAlert> = ({
  children,
  ...rest
}) => <AgronodAlert {...rest}>{children}</AgronodAlert>;

AgronodAlertWithCloseButton.args = {
  title:"Closable",
  children: "Alert supports close button click event",
  severity: "error",
  variant: "filled",
  onClose: () => { alert("close event triggered")}
};

export const AgronodAlertWithActionProperty: StoryFn<typeof AgronodAlert> = ({
  children,
  ...rest
}) => <AgronodAlert {...rest}>{children}</AgronodAlert>;

AgronodAlertWithActionProperty.args = {
  title:"Action property",
  children: "Alert supports close button click event",
  severity: "success",
  variant: "standard",
  action : 
    <Button variant="outlined" color="success" size="small" onClick={() => alert("action triggered")}>
      Trigger action
    </Button>
  
};

export const AgronodAlertBehindCard: StoryFn<typeof AgronodAlert> = ({
  children,
  ...rest
}) => 
<>
  <AgronodCard sx={(theme) => ({ borderColor: theme.palette.error.light })}><p>this is card</p></AgronodCard>
  <AgronodAlert {...rest}>{children}</AgronodAlert>
</>;

AgronodAlertBehindCard.args = {
  children: "Alert that is attached to a card",
  
  severity: "error",
  variant: "filled",
  behindCard: true,
  action : 
  <Button variant="outlined" color="error" size="small" onClick={() => alert("action triggered")}>
    Trigger action
  </Button>
};

export const AgronodAlertCustomIcon: StoryFn<typeof AgronodAlert> = ({
  children,
  ...rest
}) => 
<>
  <AgronodCard sx={(theme) => ({ borderColor: theme.palette.warning.light })}><p>this is card</p></AgronodCard>
  <AgronodAlert {...rest}>{children}</AgronodAlert>
</>;

AgronodAlertCustomIcon.args = {
  children: "Alert with custom icon element",
  severity: "warning",
  variant: "standard",
  behindCard: true,
  icon: <LoaderCircular color="warning" size={15}/>,
};
