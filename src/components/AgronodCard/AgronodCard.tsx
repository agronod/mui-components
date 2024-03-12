import { SxProps, Theme, Card as MuiCard } from "@mui/material";

interface Props {
  children: JSX.Element | JSX.Element[];
  sx?: SxProps<Theme>;
}

const AgronodCard = (props: Props) => {
  return (
    <MuiCard sx={[props.sx as (theme: Theme) => any]} variant="outlined">
      {props.children}
    </MuiCard>
  );
};

export default AgronodCard;
