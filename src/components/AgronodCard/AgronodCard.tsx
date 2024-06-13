import { Card as MuiCard, CardProps as MuiCardProps } from "@mui/material";

type AgronodCardBaseProps = Pick<
  MuiCardProps,
  | "children"
  | "sx"
  | "onClick"
  | "id"
  | "classes"
  | "className"
  | "style"
  | "ref"
  | "component"
>;

export interface AgronodCardProps extends AgronodCardBaseProps {
  id?: string;
}

const AgronodCard = ({ id, children, ...rest }: AgronodCardProps) => {
  return (
    <MuiCard variant="outlined" id={id} {...rest}>
      {children && children}
    </MuiCard>
  );
};

export default AgronodCard;
