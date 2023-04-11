import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from "@mui/material";

type ButtonPrimaryBaseProps = Pick<
  MuiButtonProps,
  "disabled" | "fullWidth" | "sx" | "startIcon" | "endIcon"
>;

interface ButtonPrimaryProps extends ButtonPrimaryBaseProps {
  children: React.ReactNode;
  sx?: any;
  onClick?: () => any | void;
}

const ButtonPrimary = ({ children, ...rest }: ButtonPrimaryProps) => (
  <MuiButton variant="contained" {...rest}>
    {children}
  </MuiButton>
);

export default ButtonPrimary;
