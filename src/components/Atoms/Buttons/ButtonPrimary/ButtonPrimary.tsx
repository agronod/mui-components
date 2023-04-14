import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from "@mui/material";
import Spinner from "../../Loaders/Spinner";

type ButtonPrimaryBaseProps = Pick<
  MuiButtonProps,
  "disabled" | "fullWidth" | "sx" | "startIcon" | "endIcon"
>;

interface ButtonPrimaryProps extends ButtonPrimaryBaseProps {
  children: React.ReactNode;
  loading?: boolean;
  disabled?: boolean;
  sx?: any;
  onClick?: () => any | void;
}

const ButtonPrimary = ({
  children,
  loading,
  disabled,
  startIcon,
  endIcon,
  ...rest
}: ButtonPrimaryProps) => (
  <MuiButton
    variant="contained"
    disabled={loading || disabled ? true : false}
    startIcon={loading ? null : startIcon}
    endIcon={loading ? null : endIcon}
    {...rest}
  >
    {loading ? <Spinner align="center" size={20} /> : children}
  </MuiButton>
);
export default ButtonPrimary;
