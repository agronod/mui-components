import {
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
  InputAdornment,
  Box,
  FormControlLabel,
  FormHelperText,
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
  warning,
  sx: externalSx,
  ...rest
}: AgronodTextFieldProps) => {
  const icon = useMemo(() => {
    if (rest.error && hasIcon) {
      if (rest.disabled) {
        return <AgronodIcon name="errorContained" color="disabled" />;
      }
      return <AgronodIcon name="errorContained" color="error" />;
    } else if (warning && hasIcon) {
      if (rest.disabled) {
        return <AgronodIcon name="warningContained" color="disabled" />;
      }
      return <AgronodIcon name="warningContained" color="warning" />;
    } else {
      return null;
    }
  }, [rest.error, warning, rest.disabled, hasIcon]);

  return (
    <Box
      sx={{
        width: rest.fullWidth ? "100%" : "220px",
      }}
    >
      <Box
        sx={{ position: "relative", width: rest.fullWidth ? "100%" : "220px" }}
      >
        {hasIcon && icon !== null && (
          <InputAdornment
            sx={{
              position: "absolute",
              zIndex: 999,
              top: "50%",
              left: "12px",
              transform: "translateY(-50%)",
            }}
            position="start"
          >
            {icon}
          </InputAdornment>
        )}
        <MuiTextField
          autoComplete="off"
          InputLabelProps={{
            color: "secondary",
            shrink: false,
          }}
          variant="outlined"
          placeholder={rest.placeholder} // Ensure placeholder is passed
          {...rest}
          sx={[
            (theme) => ({
              "& .MuiInputBase-root": {
                width: rest.fullWidth ? "100%" : "220px",
              },
              "& .MuiInputBase-input": {
                paddingLeft: hasIcon && (rest.error || warning) ? "46px" : "14px",
                textAlign: textAlignment || "left",
              },
              "& .MuiInputBase-root:not(.Mui-disabled)": {
                backgroundColor: rest.error
                  ? theme.palette.error.pastel
                  : warning
                    ? theme.palette.warning.pastel
                    : undefined,
                "& fieldset": {
                  borderColor: rest.error
                    ? theme.palette.error.main
                    : warning
                      ? theme.palette.warning.main
                      : undefined,
                },
                "&:hover fieldset": {
                  borderColor: rest.error
                    ? theme.palette.error.main
                    : warning
                      ? theme.palette.warning.main
                      : undefined,
                },
                "&.Mui-focused fieldset": {
                  borderColor: rest.error
                    ? theme.palette.error.main
                    : warning
                      ? theme.palette.warning.main
                      : undefined,
                },
              },
              "& .MuiInputBase-root:has(input[value='']):not(:has(.MuiChip-root)):not(.Mui-disabled)":
                {
                  backgroundColor:
                    !rest.error && !warning && emptyStyle === "highlighted"
                      ? theme.palette.secondary.pastel
                      : undefined,
                },
            }),
            ...(Array.isArray(externalSx) ? externalSx : externalSx ? [externalSx] : []),
          ]}
        />
      </Box>
      {!hideHelperText && helperText !== undefined && (
        <FormHelperText
          // error={rest.error} //removed in favour of own color definition below
          disabled={rest.disabled}
          sx={(theme) => ({
            width: rest.fullWidth ? "100%" : "220px",
            color: rest.error
              ? theme.palette.error.medium
              : warning
                ? theme.palette.warning.dark
                : theme.palette.text.secondary,
          })}
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
      sx={[{ ...styleObject }, ...(Array.isArray(sx) ? sx : [sx])]}
    >
      <Tooltip
        placement="top"
        open={showTooltip && tooltipText !== undefined}
        arrow
        title={tooltipText || ""}
        sx={{
          width: rest.fullWidth ? "100%" : "220px",
        }}
      >
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
                color: rest.error
                  ? "error.medium"
                  : rest.warning
                    ? "warning.dark"
                    : "text.secondary",
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
      </Tooltip>
    </Box>
  );
};

export default AgronodTextField;
