import {
  InputAdornment,
  styled,
  TextField as MuiTextField,
  TextFieldProps,
  Typography,
} from "@mui/material";
import { ErrorIcon, WarningIcon } from "../../assets";
import Tooltip from "../Tooltip/Tooltip";

type Props = TextFieldProps & {
  alertText?: string | React.ReactNode;
  alert?: boolean;
};

const StyledTextField = styled(MuiTextField)<Props>(
  ({ theme, error, variant, alert }) => ({
    "& .MuiInputBase-input": {
      width:
        (error || alert) &&
        `calc(100% - ${theme.spacing(variant !== "standard" ? 4 : 3)});`,
    },
    "& .MuiInputAdornment-root": {
      position: (error || alert) && "absolute",
      left: (error || alert) && variant !== "standard" ? -30 : 0,
    },
  })
);

export default function TextField(props: Props) {
  return (
    <StyledTextField
      {...props}
      InputProps={{
        startAdornment:
          props.error || props.alert ? (
            <Tooltip
              title={
                <Typography>
                  {props.helperText ? props.helperText : props.alertText}
                </Typography>
              }
              placement="top-start"
            >
              <InputAdornment position="start">
                {props.error ? <ErrorIcon /> : <WarningIcon />}
              </InputAdornment>
            </Tooltip>
          ) : (
            <></>
          ),
        endAdornment:
          props.error || props.alert ? <></> : props.InputProps?.endAdornment,
      }}
    ></StyledTextField>
  );
}
