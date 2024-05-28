import {
  Theme,
  Card as MuiCard,
  CardProps as MuiCardProps,
} from "@mui/material";

type AgronodCardBaseProps = Pick<MuiCardProps, "children" | "sx">;

export interface AgronodCardProps extends AgronodCardBaseProps {
  id?: string;
}

const AgronodCard = (props: AgronodCardProps) => {
  return (
    <MuiCard
      sx={[props.sx as (theme: Theme) => any]}
      variant="outlined"
      id={props.id}
    >
      {props.children && props.children}
    </MuiCard>
  );
};

export default AgronodCard;
