import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from "@mui/material";
import Spinner from "../../Loaders/Spinner";

type ButtonBaseProps = Pick<
  MuiButtonProps,
  "disabled" | "fullWidth" | "sx" | "startIcon" | "endIcon"
>;

interface ButtonSecondaryProps extends ButtonBaseProps {
  children: React.ReactNode;
  loading?: boolean;
  disabled?: boolean;
  sx?: any;
  onClick?: () => any | void;
}

const ButtonSecondary = ({
  children,
  loading,
  disabled,
  startIcon,
  endIcon,
  ...rest
}: ButtonSecondaryProps) => (
  <MuiButton
    variant="outlined"
    disabled={loading || disabled ? true : false}
    startIcon={loading ? null : startIcon}
    endIcon={loading ? null : endIcon}
    {...rest}
  >
    {loading ? <Spinner align="center" size={20} /> : children}
  </MuiButton>
);

export default ButtonSecondary;
