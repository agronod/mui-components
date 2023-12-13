import { Alert as MuiAlert, AlertProps } from "@mui/material";
import { CheckCircleOutline } from "@mui/icons-material";

const Alert = (props: AlertProps) => {
  return (
    <MuiAlert
      iconMapping={{
        success: <CheckCircleOutline fontSize="small" />,
      }}
      variant="standard"
      {...props}
    />
  );
};

export default Alert;
