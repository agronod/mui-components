import {
  InputAdornment,
  Select as MuiSelect,
  SelectProps,
  FormHelperText,
  Stack,
  Box,
  Tooltip,
} from "@mui/material";
import { useMemo, useState } from "react";
import { AgronodIcon } from "../../AgronodIcon";

interface Item {
  id?: string;
  namn?: string;
}

export type CustomSelectProps = SelectProps & {
  tooltipText?: string;
  helperText?: string;
  hideHelperText?: boolean;
  hasIcon?: boolean;
  warning?: boolean;
  emptyStyle?: "highlighted" | "default";
  multiple?: boolean;
  items?: Item[];
  placeholder?: string;
};

export default function AgronodSelect({
  tooltipText,
  helperText,
  hideHelperText,
  hasIcon = false,
  warning,
  emptyStyle = "default",
  error,
  placeholder,
  multiple = false,
  value,
  onChange,
  ...rest
}: CustomSelectProps) {
  const [anchorEl, setAnchorEl] = useState<Element | null>(null);
  const [open, setOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const handleOpen = (event: React.SyntheticEvent<Element, Event>) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setTimeout(() => {
      setAnchorEl(null);
    }, 200);
  };

  const icon = useMemo(() => {
    if (error && hasIcon) {
      return <AgronodIcon name="errorContained" color="error" />;
    } else if (warning && hasIcon) {
      return <AgronodIcon name="warningContained" color="warning" />;
    } else {
      return null;
    }
  }, [error, warning, hasIcon]);

  const isEmptyValue = (value: string[] | string): boolean => {
    if (Array.isArray(value)) {
      return value.length === 0;
    } else {
      return typeof value === "string" && value.length === 0;
    }
  };

  return (
    <Box
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      sx={{ width: rest.fullWidth ? "100%" : "220px" }}
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
        <Stack
          alignItems="flex-end"
          sx={{ width: rest.fullWidth ? "100%" : "220px" }}
        >
          <MuiSelect
            {...rest}
            multiple={multiple}
            open={open}
            displayEmpty={true}
            variant="outlined"
            onClose={handleClose}
            onOpen={handleOpen}
            value={value}
            onChange={onChange}
            sx={[
              (theme) => ({
                "&.MuiInputBase-root": {
                  width: rest.fullWidth ? "100%" : "220px",
                  backgroundColor:
                    !error &&
                    !warning &&
                    emptyStyle === "highlighted" &&
                    isEmptyValue(value as string | string[])
                      ? theme.palette.secondary.pastel
                      : undefined,
                  "&::before": {
                    color: theme.palette.text.disabled,
                    position: "absolute",
                    width: "80%",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    pointerEvents: "none",
                    display: isEmptyValue(value as string | string[])
                      ? "block"
                      : "none"
                  },
                }
              }),
              placeholder ? {
                "&.MuiInputBase-root": {
                  "&::before": {
                    content: `"${placeholder}"`
                  }
                }
              } : {
                "&.MuiInputBase-root": {
                  "&::before": {
                    content: null
                  }
                }
              },
              icon ? {
                "&.MuiInputBase-root": {
                  "&::before": {
                    left: "45px"
                  }
                }
              } : {
                "&.MuiInputBase-root": {
                  "&::before": {
                    left: "14px"
                  }
                }
              },
              (theme) => (error ? {
                "&.MuiInputBase-root:not(.Mui-disabled)": {
                  backgroundColor: theme.palette.error.pastel
                }
              } : {
                "&.MuiInputBase-root:not(.Mui-disabled)": {
                  backgroundColor: warning
                    ? theme.palette.warning.pastel
                    : undefined
                }
              }),
              (theme) => (error ? {
                "&.MuiInputBase-root:not(.Mui-disabled)": {
                  "& fieldset": {
                    borderColor: theme.palette.error.main
                  }
                }
              } : {
                "&.MuiInputBase-root:not(.Mui-disabled)": {
                  "& fieldset": {
                    borderColor: warning
                      ? theme.palette.warning.main
                      : undefined
                  }
                }
              }),
              (theme) => (error ? {
                "&.MuiInputBase-root:not(.Mui-disabled)": {
                  "&:hover fieldset": {
                    borderColor: theme.palette.error.main
                  }
                }
              } : {
                "&.MuiInputBase-root:not(.Mui-disabled)": {
                  "&:hover fieldset": {
                    borderColor: warning
                      ? theme.palette.warning.main
                      : undefined
                  }
                }
              }),
              (theme) => (error ? {
                "&.MuiInputBase-root:not(.Mui-disabled)": {
                  "&.Mui-focused fieldset": {
                    borderColor: theme.palette.error.main
                  }
                }
              } : {
                "&.MuiInputBase-root:not(.Mui-disabled)": {
                  "&.Mui-focused fieldset": {
                    borderColor: warning
                      ? theme.palette.warning.main
                      : undefined
                  }
                }
              })
            ]}
            MenuProps={{
              anchorEl: anchorEl,
              PaperProps: {
                style: {
                  width: anchorEl ? anchorEl.clientWidth + 14 : "auto",
                  maxHeight: "70vh",
                  maxWidth: "none",
                  marginLeft: "-8px",
                },
              },
            }}
            startAdornment={
              icon && hasIcon ? (
                <InputAdornment position="start">{icon}</InputAdornment>
              ) : (
                <></>
              )
            }
          />
          {helperText && !hideHelperText && (
            <FormHelperText
              error={error && !warning}
              sx={{ textAlign: "left", width: "100%" }}
            >
              {helperText}
            </FormHelperText>
          )}
        </Stack>
      </Tooltip>
    </Box>
  );
}
