import {
  IconButton as MuiIconButton,
  IconButtonProps as IconButtonProps,
} from "@mui/material";

type AgronodButtonIconBaseProps = IconButtonProps;

export interface AgronodButtonIconProps extends AgronodButtonIconBaseProps {}

const AgronodButtonIcon = ({ children, ...rest }: AgronodButtonIconProps) => {
  return <MuiIconButton {...rest}>{children}</MuiIconButton>;
};

export default AgronodButtonIcon;
