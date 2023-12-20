import { Alert as MuiAlert, AlertProps } from "@mui/material";
import {
  CheckCircleOutlineRounded,
  WarningAmberRounded,
  ErrorOutlineRounded,
} from "@mui/icons-material";

const Alert = (props: AlertProps) => {
  return (
    <MuiAlert
      iconMapping={{
        success: <CheckCircleOutlineRounded fontSize="small" />,
        warning: <WarningAmberRounded fontSize="small" />,
        error: <ErrorOutlineRounded fontSize="small" />,
      }}
      variant="standard"
      {...props}
    />
  );
};

export default Alert;
