import {
  Typography as MuiTypography,
  TypographyProps as MuiTypographyProps,
} from "@mui/material";

type TypographyBaseProps = Pick<
  MuiTypographyProps,
  "variant" | "color" | "children"
>;

export interface LocalTypographyProps extends TypographyBaseProps {
  component?: MuiTypographyProps["variant"];
}

const Typography = ({ children, ...props }: LocalTypographyProps) => {
  return <MuiTypography {...props}>{children}</MuiTypography>;
};

export default Typography;
