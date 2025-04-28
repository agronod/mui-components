import {
  AlertTitle,
  Box,
  Alert as MuiAlert,
  AlertProps as MuiAlertProps,
  SxProps,
  Theme,
} from "@mui/material";
import { AgronodIcon } from "../AgronodIcon";
import AgronodAlertLoading from "./AgronodAlertLoading";

type AgronodAlertSeverity = MuiAlertProps["severity"] | "loading";
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
> & { severity?: AgronodAlertSeverity };

export interface AgronodAlertProps extends AgronodAlertBaseProps {
  title?: React.ReactNode | string;
  behindCard?: boolean;
  behindCardZIndex?: number;
}

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
  const standardIconMapping = {
    success: <AgronodIcon name="successOutlined" color="success" />,
    warning: <AgronodIcon name="warningOutlined" color="warning" />,
    error: <AgronodIcon name="errorOutlined" color="error" />,
    info: <AgronodIcon name="infoOutlined" color="info" />,
  };

  const filledIconMapping = {
    success: <AgronodIcon name="successContained" color="success" />,
    warning: <AgronodIcon name="warningContained" color="warning" />,
    error: <AgronodIcon name="errorContained" color="error" />,
    info: <AgronodIcon name="infoContained" color="info" />,
  };

  const iconMapping =
    variant === "filled" ? filledIconMapping : standardIconMapping;

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
      children={children}
      behindCard={behindCard}
      behindCardZIndex={behindCardZIndex}
      sx={sx}
      action={action}
      severity={severity}
      styleObject={styleObject}
      {...rest}
    />
  ) : (
    <MuiAlert
      iconMapping={iconMapping}
      variant={variant}
      severity={severity}
      {...rest}
      sx={[behindCard ? { ...styleObject } : {}, sx as (theme: Theme) => any]}
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

export default AgronodAlert;
