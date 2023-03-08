import { styled, Alert as MuiAlert, AlertProps } from "@mui/material";
import { ErrorIcon } from "../../assets";

const StyledAlert = styled(MuiAlert)(({ theme }) => ({}));

export default function Alert(props: AlertProps) {
  return (
    <MuiAlert
      iconMapping={{
        error: <ErrorIcon />,
      }}
      {...props}
    ></MuiAlert>
  );
}
