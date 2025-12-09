import {
  SwitchProps as MuiSwitchProps,
  Switch as MuiSwitch,
  FormControlLabel,
  SxProps,
  Theme,
} from "@mui/material";
import { ReactNode } from "react";

type AgronodMuiSwitchBaseProps = Pick<
  MuiSwitchProps,
  "checked" | "disabled" | "onChange" | "onClick"
>;

export interface AgronodSwitchProps extends AgronodMuiSwitchBaseProps {
  label?: ReactNode;
  sx?: SxProps<Theme>;
}


const StyledMuiSwitch = (props: AgronodSwitchProps) => (
  <MuiSwitch
    disabled={props.disabled}
    onChange={props.onChange}
    onClick={props.onClick}
    disableRipple={true}
    checked={props.checked}
    sx={props.sx}
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
