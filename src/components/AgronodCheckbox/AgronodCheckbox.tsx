import {
  CheckboxProps as MuiCheckboxProps,
  Checkbox as MuiCheckbox,
  FormControlLabel,
} from "@mui/material";

type AgronodMuiCheckboxBaseProps = Pick<
  MuiCheckboxProps,
  "size" | "color" | "disabled" | "checked" | "onChange" | "onClick"
>;

export interface AgronodCheckboxProps extends AgronodMuiCheckboxBaseProps {
  label?: string;
  handleOnChange?: () => void;
  handleOnClick?: () => void;
}

const StyledMuiCheckbox = (props: AgronodCheckboxProps) => (
  <MuiCheckbox
    disabled={props.disabled}
    onChange={props.handleOnChange}
    onClick={props.onClick}
    color={props.color}
    checked={props.checked}
    disableRipple={true}
    sx={(theme) => ({
      color: theme.palette.input.border,
      paddingY: props.size === "small" ? 0 : "9px",
      "&.Mui-disabled": {
        color: theme.palette.border,
      },
      "&.Mui-focusVisible": {
        "& path": {
          outline: `1px solid ${theme.palette.text.primary} !important`,
          borderRadius: "1px",
        },
      },

      "& .MuiSvgIcon-root": {
        fontSize: "24px",

        [theme.breakpoints.down("md")]: {
          fontSize: props.size === "small" ? "24px" : "32px",
        },
      },
    })}
  />
);

const AgronodCheckbox = (props: AgronodCheckboxProps) => {
  return props.label ? (
    <FormControlLabel
      label={props.label}
      disabled={props.disabled}
      control={<StyledMuiCheckbox {...props} />}
    />
  ) : (
    <StyledMuiCheckbox {...props} />
  );
};

export default AgronodCheckbox;
