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
  alerttext?: string | React.ReactNode;
  alert?: boolean;
};

const StyledTextField = styled(MuiTextField)<Props>(
  ({ theme, error, variant, alert }) => ({
    "& .MuiInputBase-input": {
      width: `calc(100% - ${theme.spacing(variant !== "standard" ? 4 : 3)});`,
    },
    "& .MuiInputAdornment-root": {
      left: 0,
    },
    "& .MuiInputAdornment-positionStart": {
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
                  {props.helperText ? props.helperText : props.alerttext}
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
        endAdornment: props.InputProps?.endAdornment,
      }}
    ></StyledTextField>
  );
}
