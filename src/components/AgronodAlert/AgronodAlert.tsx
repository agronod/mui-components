import { AlertTitle, Box, Alert as MuiAlert, AlertProps as MuiAlertProps } from "@mui/material";
import { AgronodIcon } from "../AgronodIcon";

type AgronodAlertBaseProps = Pick<
MuiAlertProps,
  "severity" | "variant" | "sx" | "children" | "icon" | "onClose"  | "action"
>;

export interface AgronodAlertProps extends AgronodAlertBaseProps {
  title?: string,
  behindCard?: boolean,
}

const AgronodAlert = ({variant, title, children, behindCard, sx, action, ...rest} : AgronodAlertProps) => {
  const standardIconMapping = {
    success: <AgronodIcon name="successOutlined" fontSize="small" color="success"/>,
    warning: <AgronodIcon name="warningOutlined" fontSize="small" color="warning"/>,
    error: <AgronodIcon name="errorOutlined" fontSize="small" color="error"/>,
    info: <AgronodIcon name="infoOutlined" fontSize="small" color="info"/>,
  };

  const filledIconMapping = {
    success: <AgronodIcon name="successContained" fontSize="small" color="success"/>,
    warning:<AgronodIcon name="warningContained" fontSize="small" color="warning"/>,
    error: <AgronodIcon name="errorContained" fontSize="small" color="error"/>,
    info: <AgronodIcon name="infoContained" fontSize="small" color="info"/>,
  };

  const iconMapping =
    variant === "filled" ? filledIconMapping : standardIconMapping;

  return (
    <MuiAlert iconMapping={iconMapping} variant={variant} {...rest} sx={behindCard ? {
      paddingTop: 3,
      marginTop: -2,
      paddingBottom: 1,
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
      zIndex: -1,
      position: "relative",
      ...sx
    } : sx}>
      <Box>
        {title  && <AlertTitle>{title}</AlertTitle> }
        {children}
      </Box>
      {action && <Box sx={(theme) => ({
        [theme.breakpoints.down("sm")]: {
          width: "100%",
          "& > *" : {width: "100%"}
        }
      })}>{action}</Box>}
    </MuiAlert>
  );
};

export default AgronodAlert;
