import { AlertTitle, Box, Alert as MuiAlert, SxProps } from "@mui/material";
import { LoaderCircular } from "../Loaders";
import { AgronodAlertProps } from "./AgronodAlert";
import { useTheme } from "../Theme";

const AgronodAlertLoading = ({
  styleObject,
  variant,
  title,
  children,
  behindCard,
  behindCardZIndex,
  sx,
  action,
  severity,
  ...rest
}: AgronodAlertProps & { styleObject: SxProps }) => {
  const theme = useTheme();
  return (
    <MuiAlert
      icon={rest.icon ? rest.icon : <LoaderCircular color="secondary" size={18} />}
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
        {title && <AlertTitle>{title}</AlertTitle>}
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
