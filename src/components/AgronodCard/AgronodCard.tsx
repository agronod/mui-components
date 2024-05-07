import { SxProps, Theme, Card as MuiCard } from "@mui/material";

type AgronodCardProps = {
  children?: JSX.Element | JSX.Element[];
  sx?: SxProps<Theme>;
  id?: string;
};

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
