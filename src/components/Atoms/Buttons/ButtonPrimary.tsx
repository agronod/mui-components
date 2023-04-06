import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from "@mui/material";

type ButtonBaseProps = Pick<MuiButtonProps, "disabled" | "fullWidth" | "sx">;

interface ButtonPrimaryBaseProps extends ButtonBaseProps {
  children: React.ReactNode;
  sx?: any;
  onClick?: () => any | void;
}

const ButtonPrimary = ({ children, ...rest }: ButtonPrimaryBaseProps) => (
  <MuiButton variant="contained" {...rest}>
    {children}
  </MuiButton>
);

export default ButtonPrimary;
