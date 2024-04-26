import {
  CheckboxProps as MuiCheckboxProps,
  Checkbox as MuiCheckbox,
  FormControlLabel,
} from "@mui/material";

type AgronodMuiCheckboxBaseProps = Pick<
  MuiCheckboxProps,
  "size" | "color" | "disabled" | "checked"
>;

export interface AgronodCheckboxProps extends AgronodMuiCheckboxBaseProps {
  label?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const StyledMuiCheckbox = (props: AgronodCheckboxProps) => (
  <MuiCheckbox
    disabled={props.disabled}
    onChange={(e) => props.onChange && props.onChange(e)}
    onClick={(e) => props.onClick && props.onClick(e)}
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
        // since svg has some space in relation to path, this size matches 24px looks
        fontSize: "32px",

        [theme.breakpoints.down("md")]: {
          fontSize: props.size === "small" ? "32px" : "42.67px", // since svg has some space in relation to path, 42.67px size matches 32px looks
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
