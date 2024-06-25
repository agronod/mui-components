import { AgronodTypography } from "../AgronodTypography";

type ProgressIndicatorProps = {
  active: number;
  total: number;
};

const ProgressIndicator = (props: ProgressIndicatorProps) => {
  return (
    <AgronodTypography variant="overline" color="text.secondary">
      steg {props.active} av {props.total}
    </AgronodTypography>
  );
};

export default ProgressIndicator;
