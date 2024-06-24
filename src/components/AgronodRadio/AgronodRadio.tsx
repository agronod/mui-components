import {
  RadioProps as MuiRadioProps,
  Radio as MuiRadio,
  FormControlLabel,
} from "@mui/material";
import { ReactNode } from "react";

type AgronodMuiRadioBaseProps = Pick<
  MuiRadioProps,
  "checked" | "disabled" | "onChange" | "onClick" | "value"
>;

export interface AgronodRadioProps extends AgronodMuiRadioBaseProps {
  label?: ReactNode;
}


const StyledMuiRadio = (props: AgronodRadioProps) => (
  <MuiRadio
    disabled={props.disabled}
    onChange={props.onChange}
    onClick={props.onClick}
    disableRipple={true}
    checked={props.checked}
    value={props.value}
    sx={(theme) => ({
      "&.Mui-disabled .MuiSvgIcon-root path": {
        fill: theme.palette.border
      },

      "&:hover .MuiSvgIcon-root path": {
        fill: props.checked ? theme.palette.primary.mainHover : theme.palette.text.secondary
      },

      "&.Mui-focusVisible": {
        "& svg:first-child": {
          border: `1px solid ${theme.palette.text.primary}`,
          borderRadius: "25px",
        },
      },
    })}
  />
);

const AgronodRadio = (props: AgronodRadioProps) => {
  return props.label ? (
    <FormControlLabel
      label={props.label}
      disabled={props.disabled}
      control={<StyledMuiRadio {...props} />}
    />
  ) : (
    <StyledMuiRadio {...props} />
  );
};

export default AgronodRadio;
