import { styled, Alert as MuiAlert, AlertProps } from "@mui/material";
import { ErrorIcon } from "../../assets";

const StyledAlert = styled(MuiAlert)(({ theme, severity }) => ({}));

export default function Alert(props: AlertProps) {
  return (
    <StyledAlert
      iconMapping={{
        error: <ErrorIcon />,
      }}
      {...props}
    ></StyledAlert>
  );
}
