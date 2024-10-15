import {
  CheckboxProps as MuiCheckboxProps,
  Checkbox as MuiCheckbox,
  FormControlLabel,
  Typography,
  Box,
} from "@mui/material";
import { ReactNode } from "react";
import { isSafari } from "react-device-detect";

type AgronodMuiCheckboxBaseProps = Pick<
  MuiCheckboxProps,
  "size" | "color" | "disabled" | "checked" | "onChange" | "onClick"
>;

export interface AgronodCheckboxProps extends AgronodMuiCheckboxBaseProps {
  label?: ReactNode;
  noPadding?: boolean;
  description?: string;
}

const StyledMuiCheckbox = (props: AgronodCheckboxProps) => (
  <MuiCheckbox
    disabled={props.disabled}
    onChange={props.onChange}
    onClick={props.onClick}
    color={props.color}
    checked={props.checked}
    disableRipple={true}
    sx={(theme) => ({
      color: theme.palette.input.border,
      padding: props.noPadding === true ? 0 : "9px",
      paddingY: props.size === "small" || props.noPadding === true ? 0 : "9px",
      display: "inline-grid",
      "&.MuiCheckbox-root input": isSafari ? { pointerEvents: "auto" } : null,

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
  return (
    <div>
      {props.label ? (
        <FormControlLabel
          label={
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              {props.label}
              {props.description && (
                <Typography color="text.secondary" variant="caption">
                  {props.description}
                </Typography>
              )}
            </Box>
          }
          disabled={props.disabled}
          control={<StyledMuiCheckbox {...props} />}
        />
      ) : (
        <StyledMuiCheckbox {...props} />
      )}
    </div>
  );
};

export default AgronodCheckbox;
