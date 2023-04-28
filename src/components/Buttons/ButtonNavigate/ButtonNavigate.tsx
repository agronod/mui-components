import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from "@mui/material";

type ButtonNavigateBaseProps = Pick<
  MuiButtonProps,
  "disabled" | "sx" | "startIcon" | "endIcon"
>;

export interface ButtonNavigateProps extends ButtonNavigateBaseProps {
  children: React.ReactNode;
  sx?: any;
  onClick?: () => any | void;
}

const ButtonNavigate = ({ children, ...rest }: ButtonNavigateProps) => (
  <MuiButton variant="text" {...rest}>
    {children}
  </MuiButton>
);

export default ButtonNavigate;
