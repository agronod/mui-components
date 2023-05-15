import { styled, Alert as MuiAlert, AlertProps } from "@mui/material";
import { CheckCircleIcon, ErrorIcon } from "../../assets";
import { CheckCircleOutline } from "@mui/icons-material";

const StyledAlert = styled(MuiAlert)(({ theme, severity }) => ({}));

export default function Alert(props: AlertProps) {
  return (
    <StyledAlert
      variant="outlined"
      iconMapping={{
        success: <CheckCircleOutline />,
      }}
      {...props}
    ></StyledAlert>
  );
}
