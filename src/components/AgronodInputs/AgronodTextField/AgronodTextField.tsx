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
  endAndorment,
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
  }, [status]);

  return (
    <MuiTextField
      InputLabelProps={{
        color: "secondary",
        shrink: false,
      }}
      InputProps={{
        startAdornment: icon !== null && (
          <InputAdornment position="start">{icon}</InputAdornment>
        ),
        endAdornment: endAndorment !== undefined && (
          <InputAdornment position="start">{endAndorment}</InputAdornment>
        ),
      }}
      variant="outlined"
      sx={(theme) => ({
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
        "& .MuiOutlinedInput-input": {
          textAlign: textAligment ? textAligment : "left",
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
  hideHelperText,
  tooltipText,
  hasIcon = false,
  label,
  textAligment = "left",
  endAndorment,
  ...rest
}: AgronodTextFieldProps) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const generateTooltipText = useMemo(() => {
    if ((status === "error" || status === "warning") && tooltipText) {
      return tooltipText;
    } else {
      return tooltipText;
    }
  }, [status, tooltipText, rest.helperText]);

  return (
    <Box
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <Tooltip
        open={showTooltip && !!generateTooltipText}
        placement="top"
        arrow
        title={generateTooltipText ? generateTooltipText : ""}
      >
        {label ? (
          <FormControlLabel
            labelPlacement="top"
            sx={{ textAlign: "left" }}
            componentsProps={{
              typography: {
                variant: "body2bold",
                alignSelf: "flex-start",
                color:
                  status === "error"
                    ? "error.medium"
                    : status === "warning"
                      ? "warning.medium"
                      : "text.secondary",
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
                helperText={rest.helperText}
                hasIcon={hasIcon}
                textAligment={textAligment}
                endAndorment={endAndorment}
                {...rest}
              />
            }
          />
        ) : (
          <StyledMuiTextField
            status={status}
            emptyStyle={emptyStyle}
            hideHelperText={hideHelperText}
            helperText={rest.helperText}
            hasIcon={hasIcon}
            textAligment={textAligment}
            endAndorment={endAndorment}
            {...rest}
          />
        )}
      </Tooltip>
    </Box>
  );
};

export default AgronodTextField;
