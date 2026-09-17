import {
  AlertTitle,
  Box,
  Alert as MuiAlert,
  AlertProps as MuiAlertProps,
  SxProps,
} from "@mui/material";
import { AgronodIcon } from "../AgronodIcon";
import AgronodAlertLoading from "./AgronodAlertLoading";

type AgronodAlertSeverity =
  "success" | "info" | "warning" | "error" | "loading";

type AgronodAlertBaseProps = Pick<
  MuiAlertProps,
  | "variant"
  | "sx"
  | "children"
  | "icon"
  | "onClose"
  | "action"
  | "classes"
  | "closeText"
  | "color"
  | "role"
  | "className"
  | "ref"
  | "component"
  | "slots"
  | "slotProps"
> & { severity?: AgronodAlertSeverity };

export interface AgronodAlertProps extends AgronodAlertBaseProps {
  title?: React.ReactNode | string;
  behindCard?: boolean;
  behindCardZIndex?: number;
}

// Design system default: filled icons for every variant (PF-1155).
const iconMapping: MuiAlertProps["iconMapping"] = {
  success: <AgronodIcon name="successContained" color="success" />,
  warning: <AgronodIcon name="warningContained" color="warning" />,
  error: <AgronodIcon name="errorContained" color="error" />,
  info: <AgronodIcon name="infoContained" color="info" />,
};

const AgronodAlert = ({
  variant,
  title,
  children,
  behindCard,
  behindCardZIndex,
  sx,
  action,
  severity,
  ...rest
}: AgronodAlertProps) => {
  const styleObject: SxProps = {
    paddingTop: 3,
    marginTop: -2,
    paddingBottom: 1,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    zIndex: behindCardZIndex ? behindCardZIndex : -1,
    position: "relative",
  };

  return severity === "loading" ? (
    <AgronodAlertLoading
      variant={variant}
      title={title}
      behindCard={behindCard}
      behindCardZIndex={behindCardZIndex}
      sx={sx}
      action={action}
      severity={severity}
      styleObject={styleObject}
      {...rest}
    >
      {children}
    </AgronodAlertLoading>
  ) : (
    <MuiAlert
      iconMapping={iconMapping}
      variant={variant}
      severity={severity}
      {...rest}
      sx={[behindCard ? styleObject : {}, ...(Array.isArray(sx) ? sx : [sx])]}
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

export default AgronodAlert;
