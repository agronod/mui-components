import { Link as MuiLink, LinkProps as MuiLinkProps, SxProps, Theme, useTheme } from '@mui/material';

type AgronodLinkBaseProps = Pick<
MuiLinkProps,
"children" | "className" | "href" | "classes" | "color" | "sx" | "variant" | "display" | "displayPrint" | "whiteSpace" | "align" | "paragraph" | "ref" | "component"
>;;

export interface AgronodLinkProps extends AgronodLinkBaseProps {
  type: "classic" | "inverted"
}

const AgronodLink = ({type, className, ...rest}: AgronodLinkProps) => {
  return (
  <MuiLink
  className={type === "inverted" ? `inverted ${className}` : className}
   {...rest}
  />
)};

export default AgronodLink;
