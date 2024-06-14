import { Link as MuiLink, LinkProps as MuiLinkProps } from "@mui/material";
type AgronodLinkBaseProps = MuiLinkProps;

export interface AgronodLinkProps extends AgronodLinkBaseProps {
  type: "classic" | "inverted";
}

const AgronodLink = ({ type, className, ...rest }: AgronodLinkProps) => {
  return (
    <MuiLink
      className={type === "inverted" ? `inverted ${className}` : className}
      {...rest}
    />
  );
};

export default AgronodLink;
