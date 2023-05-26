import { styled, Alert as MuiAlert, AlertProps } from "@mui/material";
import { CheckCircleOutline } from "@mui/icons-material";

const StyledAlert = styled(MuiAlert)(({ theme, severity }) => ({}));

export default function Alert(props: AlertProps) {
  return (
    <StyledAlert
      iconMapping={{
        success: <CheckCircleOutline fontSize="small" />,
      }}
      variant="standard"
      {...props}
    />
  );
}
