import { Typography } from "@mui/material";

type ProgressIndicatorProps = {
  active: number;
  total: number;
};

const ProgressIndicator = (props: ProgressIndicatorProps) => {
  return (
    <Typography variant="overline" color="text.secondary">
      step {props.active} av {props.total}
    </Typography>
  );
};

export default ProgressIndicator;
