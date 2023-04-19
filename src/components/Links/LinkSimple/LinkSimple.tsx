import { Link as MuiLink, LinkProps as MuiLinkProps } from "@mui/material";

type LinkBaseProps = Pick<
  MuiLinkProps,
  "children" | "classes" | "sx" | "underline"
>;

export interface LinkProps extends LinkBaseProps {}

const Link = ({ children, ...rest }: LinkProps) => (
  <MuiLink {...rest} style={{ cursor: "pointer" }}>
    {children}
  </MuiLink>
);
export default Link;
