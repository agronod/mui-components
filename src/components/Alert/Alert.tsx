import { styled, Alert as MuiAlert, AlertProps } from "@mui/material";
import { ErrorIconLarge } from "../../assets";

const StyledAlert = styled(MuiAlert)(({ theme }) => ({}));

export default function Alert(props: AlertProps) {
  return (
    <MuiAlert
      iconMapping={{
        error: <ErrorIconLarge width={20} height={20} />,
      }}
      {...props}
    ></MuiAlert>
  );
}
