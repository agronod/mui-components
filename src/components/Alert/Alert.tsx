import { Alert as MuiAlert, AlertProps, useTheme } from "@mui/material";
import {
  CheckCircleOutlineRounded,
  WarningAmberRounded,
  ErrorOutlineRounded,
  InfoOutlined,
  WarningOutlined,
  ErrorOutlined,
} from "@mui/icons-material";

const Alert = (props: AlertProps) => {
  const theme = useTheme();
  const standardIconMapping = {
    success: <CheckCircleOutlineRounded fontSize="small" />,
    warning: <WarningAmberRounded fontSize="small" />,
    error: <ErrorOutlineRounded fontSize="small" />,
    info: <InfoOutlined fontSize="small" />,
  };

  const filledIconMapping = {
    success: <CheckCircleOutlineRounded color="success" fontSize="small" />,
    warning: <WarningOutlined color="warning" fontSize="small" />,
    error: <ErrorOutlined color="error" fontSize="small" />,
    info: <InfoOutlined color="info" fontSize="small" />,
  };

  const iconMapping =
    props.variant === "filled" ? filledIconMapping : standardIconMapping;

  return (
    <MuiAlert iconMapping={iconMapping} variant={props.variant} {...props} />
  );
};

export default Alert;
