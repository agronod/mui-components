import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from "@mui/material";
import Spinner from "../../Loaders/Spinner";

type ButtonBaseProps = Pick<
  MuiButtonProps,
  "disabled" | "fullWidth" | "sx" | "startIcon" | "endIcon" | "variant" | "type"
>;

interface ButtonProps extends ButtonBaseProps {
  children: React.ReactNode;
  loading?: boolean;
  disabled?: boolean;
  sx?: any;
  onClick?: () => any | void;
}

const Button = ({
  children,
  loading,
  disabled,
  startIcon,
  endIcon,
  ...rest
}: ButtonProps) => (
  <MuiButton
    disabled={loading || disabled ? true : false}
    startIcon={loading ? null : startIcon}
    endIcon={loading ? null : endIcon}
    {...rest}
  >
    {loading ? <Spinner align="center" color="inherit" size={20} /> : children}
  </MuiButton>
);
export default Button;
