import {
  Typography as MuiTypography,
  TypographyProps as MuiTypographyProps,
} from "@mui/material";

type TypographyBaseProps = Pick<
  MuiTypographyProps,
  "variant" | "color" | "children"
>;

export interface TypographyProps extends TypographyBaseProps {
  component?: TypographyProps["variant"];
}

const Typography = ({ children, ...props }: MuiTypographyProps) => {
  return <MuiTypography {...props}>{children}</MuiTypography>;
};

export default Typography;
