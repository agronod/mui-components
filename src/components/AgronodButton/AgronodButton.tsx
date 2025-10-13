import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from "@mui/material";
import { forwardRef } from "react";

type AgronodButtonBaseProps = MuiButtonProps;

export interface AgronodButtonProps extends AgronodButtonBaseProps {
  to?: string;
}

const AgronodButton = forwardRef<HTMLButtonElement, AgronodButtonProps>(
  ({ children, ...rest }, ref) => {
    return (
      <MuiButton ref={ref} disableElevation={true} {...rest}>
        {children && children}
      </MuiButton>
    );
  }
);

AgronodButton.displayName = "AgronodButton";

export default AgronodButton;
