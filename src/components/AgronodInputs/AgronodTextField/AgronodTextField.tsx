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
  | "label"
>;

export interface AgronodTextFieldProps extends AgronodTextFieldBaseProps {
  status?: "warning" | "error" | "default";
  emptyStyle?: "highlighted" | "default";
  helperText?: string;
  hideHelperText?: boolean;
  tooltipText?: string;
  hasIcon?: boolean;
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
  const icon = useMemo(() => {
    if (status === "error" && hasIcon) {
      return <AgronodIcon name="errorContained" color="error" />;
    }
    if (status === "warning" && hasIcon) {
      return <AgronodIcon name="warningContained" color="warning" />;
    }
    return null;
  }, [status, hasIcon]);

  const helperTextHeightOffset = useMemo(
    () => (rest.size === "small" ? "10px" : "8px"),
    [rest.size]
  );

  return (
    <Box
      style={{
        position: "relative",
      }}
    >
      <InputAdornment
        sx={{
          position: "absolute",
          zIndex: 999,
          top:
            !hideHelperText &&
            helperText !== undefined &&
            helperText.length !== 0
              ? `calc(50% - ${helperTextHeightOffset})`
              : "50%",
          left: "12px",
        }}
        position="start"
      >
        {icon}
      </InputAdornment>
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
          "& .MuiInputBase-input": {
            paddingLeft:
              hasIcon && (status === "error" || status === "warning")
                ? "46px"
                : "14px",
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
                status === "default" && emptyStyle === "highlighted"
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
    </Box>
  );
};

const AgronodTextField = ({
  status = "default",
  emptyStyle = "default",
  helperText,
  hideHelperText,
  tooltipText,
  hasIcon = false,
  textAligment = "left",
  endAndorment,
  label,
  ...rest
}: AgronodTextFieldProps) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <Box
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
      }}
    >
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
