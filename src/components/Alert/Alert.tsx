import { styled, Alert as MuiAlert, AlertProps } from "@mui/material";
import { ErrorIcon } from "../../assets";
import {
  CheckCircleRounded,
  InfoRounded,
  WarningRounded,
} from "@mui/icons-material";

const StyledAlert = styled(MuiAlert)(({ theme, severity }) => ({}));

export default function Alert(props: AlertProps) {
  return (
    <StyledAlert
      iconMapping={{
        error: <ErrorIcon />,
        success: <CheckCircleRounded />,
        info: <InfoRounded />,
        warning: <WarningRounded />,
      }}
      variant="standard"
      {...props}
    />
  );
}
