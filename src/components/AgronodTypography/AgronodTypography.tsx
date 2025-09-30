import {
  Typography as MuiTypography,
  TypographyProps as MuiTypographyProps,
} from "@mui/material";

export type AgronodTypographyProps = MuiTypographyProps;

const AgronodTypography = (props: AgronodTypographyProps) => (
  <MuiTypography {...props} />
);

export default AgronodTypography;
