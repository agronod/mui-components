import {
  Typography as MuiTypography,
  TypographyProps as MuiTypographyProps,
} from "@mui/material";

type AgronodTypographyBaseProps = MuiTypographyProps;

export interface AgronodTypographyProps extends AgronodTypographyBaseProps {}

const AgronodTypography = (props: AgronodTypographyProps) => (
  <MuiTypography {...props} />
);

export default AgronodTypography;
