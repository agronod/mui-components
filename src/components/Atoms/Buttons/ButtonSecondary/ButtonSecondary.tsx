import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from "@mui/material";

type ButtonBaseProps = Pick<
  MuiButtonProps,
  "disabled" | "fullWidth" | "sx" | "startIcon" | "endIcon"
>;

interface ButtonSecondaryProps extends ButtonBaseProps {
  children: React.ReactNode;
  sx?: any;
  onClick?: () => any | void;
}

const ButtonSecondary = ({ children, ...rest }: ButtonSecondaryProps) => (
  <MuiButton variant="outlined" {...rest}>
    {children}
  </MuiButton>
);

export default ButtonSecondary;
