import {
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
  InputAdornment,
  Box,
  FormControlLabel,
  FormHelperText,
  Stack,
  Theme,
  SxProps,
} from "@mui/material";
import { useMemo, useState } from "react";
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
  | "helperText"
  | "error"
>;

export interface AgronodTextFieldProps extends AgronodTextFieldBaseProps {
  warning?: boolean;
  emptyStyle?: "highlighted" | "default";
  hideHelperText?: boolean;
  tooltipText?: string;
  hasIcon?: boolean;
  textAlignment?: string;
}

const StyledMuiTextField = ({
  emptyStyle,
  hideHelperText,
  helperText,
  hasIcon,
  textAlignment,
  ...rest
}: AgronodTextFieldProps) => {
  const icon = useMemo(() => {
    if (rest.error && hasIcon) {
      return <AgronodIcon name="errorContained" color="error" />;
    } else if (rest.warning && hasIcon) {
      return <AgronodIcon name="warningContained" color="warning" />;
    } else {
      return null;
    }
  }, [rest.error, rest.warning, hasIcon]);

  const helperTextHeightOffset = useMemo(
    () => (rest.size === "small" ? "10px" : "8px"),
    [rest.size]
  );

  return (
    <Box
      sx={{
        width: rest.fullWidth ? "100%" : "220px",
      }}
    >
      <Box sx={{ position: "relative" }}>
        {hasIcon && (
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
        )}
        <MuiTextField
          InputLabelProps={{
            color: "secondary",
            shrink: false,
          }}
          variant="outlined"
          placeholder={rest.placeholder} // Ensure placeholder is passed
          sx={(theme) => ({
            "& .MuiInputBase-root": {
              width: rest.fullWidth ? "100%" : "220px",
            },
            "& .MuiInputBase-input": {
              paddingLeft:
                hasIcon && (rest.error || rest.warning) ? "46px" : "14px",
              textAlign: textAlignment ? textAlignment : "left",
            },
            "& .MuiInputBase-root:not(.Mui-disabled)": {
              backgroundColor: rest.error
                ? theme.palette.error.pastel
                : rest.warning
                  ? theme.palette.warning.pastel
                  : undefined,

              "& fieldset": {
                borderColor: rest.error
                  ? theme.palette.error.main
                  : rest.warning
                    ? theme.palette.warning.main
                    : undefined,
              },

              "&:hover fieldset": {
                borderColor: rest.error
                  ? theme.palette.error.main
                  : rest.warning
                    ? theme.palette.warning.main
                    : undefined,
              },

              "&.Mui-focused fieldset": {
                borderColor: rest.error
                  ? theme.palette.error.main
                  : rest.warning
                    ? theme.palette.warning.main
                    : undefined,
              },
            },
            "& .MuiInputBase-root:has(input[value='']):not(:has(.MuiChip-root)):not(.Mui-disabled)":
              {
                backgroundColor:
                  !rest.error && !rest.warning && emptyStyle === "highlighted"
                    ? theme.palette.secondary.pastel
                    : undefined,
              },
          })}
          {...rest}
        />
      </Box>
      {!hideHelperText && helperText !== undefined && (
        <FormHelperText
          error={rest.error}
          sx={{
            width: rest.fullWidth ? "100%" : "220px",
          }}
        >
          {helperText}
        </FormHelperText>
      )}
    </Box>
  );
};

const AgronodTextField = ({
  emptyStyle = "default",
  helperText,
  hideHelperText = false,
  tooltipText,
  hasIcon = false,
  textAlignment = "left",
  label,
  sx,
  ...rest
}: AgronodTextFieldProps) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const styleObject: SxProps = {
    display: "inline-flex",
    alignItems: "center",
    width: rest.fullWidth ? "100%" : "220px",
  };

  return (
    <Box
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      sx={[{ ...styleObject }, sx as (theme: Theme) => any]}
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
                width: rest.fullWidth ? "100%" : "220px",
              }}
              componentsProps={{
                typography: {
                  variant: "body2bold",
                  alignSelf: "flex-start",
                  color: rest.error ? "error.medium" : "text.secondary",
                  marginBottom: "4px",
                },
              }}
              label={label}
              disabled={rest.disabled}
              control={
                <StyledMuiTextField
                  emptyStyle={emptyStyle}
                  hideHelperText={hideHelperText}
                  helperText={helperText}
                  hasIcon={hasIcon}
                  textAlignment={textAlignment}
                  {...rest}
                />
              }
            />
          ) : (
            <StyledMuiTextField
              emptyStyle={emptyStyle}
              hideHelperText={hideHelperText}
              helperText={helperText}
              hasIcon={hasIcon}
              textAlignment={textAlignment}
              {...rest}
            />
          )}
        </>
      </Tooltip>
    </Box>
  );
};

export default AgronodTextField;
