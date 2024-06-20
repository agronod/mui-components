import {
  SwitchProps as MuiSwitchProps,
  Switch as MuiSwitch,
  FormControlLabel,
} from "@mui/material";
import { ReactNode } from "react";

type AgronodMuiSwitchBaseProps = Pick<
  MuiSwitchProps,
  "checked" | "color" | "disabled" | "onChange" | "onClick"
>;

export interface AgronodSwitchProps extends AgronodMuiSwitchBaseProps {
  label?: ReactNode;
}


const StyledMuiSwitch = (props: AgronodSwitchProps) => (
  <MuiSwitch
    disabled={props.disabled}
    onChange={props.onChange}
    onClick={props.onClick}
    color={props.color}
    disableRipple={true}
    checked={props.checked}
  />
);

const AgronodSwitch = (props: AgronodSwitchProps) => {
  return props.label ? (
    <FormControlLabel
      label={props.label}
      disabled={props.disabled}
      control={<StyledMuiSwitch {...props} />}
    />
  ) : (
    <StyledMuiSwitch {...props} />
  );
};

export default AgronodSwitch;
