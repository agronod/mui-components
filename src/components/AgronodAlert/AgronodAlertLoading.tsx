import { AlertTitle, Box, Alert as MuiAlert, SxProps } from "@mui/material";
import { AgronodAlertProps } from "./AgronodAlert";
import { useTheme } from "../Theme";
import { AgronodIcon } from "../AgronodIcon";

const AgronodAlertLoading = ({
  styleObject,
  variant,
  title,
  children,
  behindCard,
  behindCardZIndex: _behindCardZIndex,
  sx,
  action,
  severity: _severity,
  icon,
  ...rest
}: AgronodAlertProps & { styleObject: SxProps }) => {
  const theme = useTheme();
  return (
    <MuiAlert
      // `??` so that `icon={false}` still hides the icon, matching MuiAlert.
      icon={
        icon ?? <AgronodIcon name="loadingSpinnerStatic" color="secondary" />
      }
      variant={variant}
      {...rest}
      sx={[
        behindCard ? { ...styleObject } : {},
        {
          backgroundColor: theme.palette.secondary.pastel,
          borderColor: theme.palette.secondary.light,
        },
        ...(Array.isArray(sx) ? sx : [sx || {}]),
      ]}
    >
      <Box>
        {title && <AlertTitle variant="body2bold">{title}</AlertTitle>}
        {children}
      </Box>
      {action && (
        <Box
          sx={(theme) => ({
            [theme.breakpoints.down("sm")]: {
              width: "100%",
              "& > *": { width: "100%" },
            },
          })}
        >
          {action}
        </Box>
      )}
    </MuiAlert>
  );
};

export default AgronodAlertLoading;
