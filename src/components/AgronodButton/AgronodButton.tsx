import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from "@mui/material";

type AgronodButtonBaseProps = MuiButtonProps;

export interface AgronodButtonProps extends AgronodButtonBaseProps {
  to?: string;
}

const AgronodButton = ({ children, ...rest }: AgronodButtonProps) => {
  return <MuiButton {...rest}>{children && children}</MuiButton>;
};

export default AgronodButton;
