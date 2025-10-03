import {
  IconButton as MuiIconButton,
  IconButtonProps,
} from "@mui/material";

export type AgronodButtonIconProps = IconButtonProps;

const AgronodButtonIcon = ({ children, ...rest }: AgronodButtonIconProps) => {
  return <MuiIconButton {...rest}>{children}</MuiIconButton>;
};

export default AgronodButtonIcon;
