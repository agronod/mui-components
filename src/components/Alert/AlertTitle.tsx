import {
  styled,
  AlertTitle as MuiAlertTitle,
  AlertTitleProps,
} from "@mui/material";

const StyledAlertTitle = styled(MuiAlertTitle)(({ theme }) => ({}));

export default function AlertTitle(props: AlertTitleProps) {
  return <StyledAlertTitle {...props}></StyledAlertTitle>;
}
