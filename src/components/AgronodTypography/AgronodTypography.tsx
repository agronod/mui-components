import { Typography as MuiTypography, TypographyProps as MuiTypographyProps } from '@mui/material';

type AgronodTypographyBaseProps = Pick<MuiTypographyProps, "children" | "variant" | "sx" | "align" | "component" | "paragraph" | "variantMapping" | "className" | "style" | "ref">;

export interface AgronodTypographyProps extends AgronodTypographyBaseProps {
}

const AgronodTypography = (props: AgronodTypographyProps) => (
  <MuiTypography
   {...props}
  />
);

export default AgronodTypography;
