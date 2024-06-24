import {
  RadioGroupProps as MuiRadioGroupProps,
  RadioGroup as MuiRadioGroup,
  FormControl,
  FormLabel,
} from "@mui/material";
import { ReactNode } from "react";

type AgronodMuiRadioGroupBaseProps = Pick<
  MuiRadioGroupProps,
  "value" | "onChange" | "row" | "children"
>;
export interface AgronodRadioGroupProps extends AgronodMuiRadioGroupBaseProps {
  label?: ReactNode;
  radios: { value: string; label: string }[];
}

const StyledMuiRadioGroup = (props: AgronodRadioGroupProps) => (
  <MuiRadioGroup onChange={props.onChange} row={props.row}>
    {props.children}
  </MuiRadioGroup>
);

const AgronodRadioGroup = (props: AgronodRadioGroupProps) => {
  return (
    <FormControl>
      {props.label ?? <FormLabel>{props.label}</FormLabel>}
      <StyledMuiRadioGroup {...props} />
    </FormControl>
  );
};

export default AgronodRadioGroup;
