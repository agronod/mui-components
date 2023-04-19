import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from "@mui/material";

type ButtonLinkBaseProps = Pick<
  MuiButtonProps,
  "disabled" | "sx" | "startIcon" | "endIcon"
>;

export interface ButtonLinkProps extends ButtonLinkBaseProps {
  children: React.ReactNode;
  sx?: any;
  onClick?: () => any | void;
}

const ButtonLink = ({ children, ...rest }: ButtonLinkProps) => (
  <MuiButton variant="text" {...rest}>
    {children}
  </MuiButton>
);

export default ButtonLink;
