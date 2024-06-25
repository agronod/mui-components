import { useMemo, useState } from "react";
import {
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
  InputAdornment,
  Box,
  FormControlLabel,
} from "@mui/material";
import { Tooltip } from "../../Tooltip";
import { AgronodIcon } from "../../AgronodIcon";

//TODO: test it in projects (especially Agrosfär) and modify if needed
type AgronodTextFieldBaseProps = Pick<
  MuiTextFieldProps,
  | "sx"
  | "children"
  | "classes"
  | "role"
  | "className"
  | "ref"
  | "component"
  | "placeholder"
  | "disabled"
  | "autoFocus"
  | "fullWidth"
  | "name"
  | "id"
  | "type"
  | "value"
  | "onChange"
  | "onFocus"
  | "onBlur"
  | "size"
  | "inputProps"
  | "InputProps"
>;

export interface AgronodTextFieldProps extends AgronodTextFieldBaseProps {
  status?: "warning" | "error" | "default";
  emptyStyle?: "highlighted" | "default";
  helperText?: string;
  hideHelperText?: boolean;
  tooltipText?: string;
  hasIcon?: boolean;
  label?: string;
  textAligment?: string;
  endAndorment?: string | JSX.Element;
}

const StyledMuiTextField = ({
  status,
  emptyStyle,
  hideHelperText,
  helperText,
  hasIcon,
  textAligment,
  ...rest
}: AgronodTextFieldProps) => {
  return (
    <MuiTextField
      InputLabelProps={{
        color: "secondary",
        shrink: false,
      }}
      variant="outlined"
      sx={(theme) => ({
        "& .MuiOutlinedInput-input": {
          textAlign: textAligment ? textAligment : "left",
          width: "220px",
        },
        "& .MuiOutlinedInput-root:not(.Mui-disabled)": {
          backgroundColor:
            status === "warning"
              ? theme.palette.warning.pastel
              : status === "error"
                ? theme.palette.error.pastel
                : undefined,

          "& fieldset": {
            borderColor:
              status === "warning" ? theme.palette.warning.main : undefined,
          },

          "&:hover fieldset": {
            borderColor:
              status === "warning" ? theme.palette.warning.main : undefined,
          },

          "&.Mui-focused fieldset": {
            borderColor:
              status === "warning" ? theme.palette.warning.main : undefined,
          },
        },
        "& .MuiOutlinedInput-root:has(input[value='']):not(:has(.MuiChip-root)):not(.Mui-disabled)":
          {
            backgroundColor:
              emptyStyle === "highlighted"
                ? theme.palette.secondary.pastel
                : undefined,
          },
      })}
      error={status === "error"}
      helperText={
        !hideHelperText && helperText !== undefined ? helperText : undefined
      }
      {...rest}
    />
  );
};

const AgronodTextField = ({
  status = "default",
  emptyStyle = "default",
  helperText,
  hideHelperText,
  tooltipText,
  hasIcon = false,
  label,
  textAligment = "left",
  endAndorment,
  ...rest
}: AgronodTextFieldProps) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const icon = useMemo(() => {
    if (status === "error" && hasIcon) {
      return <AgronodIcon name="errorContained" color="error" />;
    }
    if (status === "warning" && hasIcon) {
      return <AgronodIcon name="warningContained" color="warning" />;
    }
    return null;
  }, [status, hasIcon]);

  return (
    <Box
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      style={{
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
      }}
    >
      <InputAdornment
        sx={{
          position: "absolute",
          zIndex: 999,
          top: "50%",
          left: "12px",
        }}
        position="start"
      >
        {icon}
      </InputAdornment>
      <Tooltip
        open={showTooltip && tooltipText !== undefined}
        placement="top"
        arrow
        title={tooltipText}
      >
        <>
          {label ? (
            <FormControlLabel
              labelPlacement="top"
              sx={{
                textAlign: "right",
                margin: 0,
                width: rest.fullWidth ? "100%" : "auto",
              }}
              componentsProps={{
                typography: {
                  variant: "body2bold",
                  alignSelf: "flex-start",
                  color: status === "error" ? "error.medium" : "text.secondary",
                  marginBottom: "4px",
                },
              }}
              label={label}
              disabled={rest.disabled}
              control={
                <StyledMuiTextField
                  status={status}
                  emptyStyle={emptyStyle}
                  hideHelperText={hideHelperText}
                  helperText={helperText}
                  hasIcon={hasIcon}
                  textAligment={textAligment}
                  {...rest}
                />
              }
            />
          ) : (
            <StyledMuiTextField
              status={status}
              emptyStyle={emptyStyle}
              hideHelperText={hideHelperText}
              helperText={helperText}
              hasIcon={hasIcon}
              textAligment={textAligment}
              {...rest}
            />
          )}
        </>
      </Tooltip>
    </Box>
  );
};

export default AgronodTextField;
