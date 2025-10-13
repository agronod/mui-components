import {
  Typography as MuiTypography,
  TypographyProps as MuiTypographyProps,
} from "@mui/material";
import { forwardRef } from "react";

export type AgronodTypographyProps = MuiTypographyProps;

const AgronodTypography = forwardRef<HTMLSpanElement, AgronodTypographyProps>(
  (props, ref) => <MuiTypography ref={ref} {...props} />
);

AgronodTypography.displayName = "AgronodTypography";

export default AgronodTypography;
