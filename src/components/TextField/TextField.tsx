import {
  InputAdornment,
  styled,
  TextField as MuiTextField,
  TextFieldProps,
  Tooltip,
  Typography,
} from "@mui/material";
import { ErrorIcon, WarningIcon } from "../../assets";

const StyledTextField = styled(MuiTextField)(({ theme, error, variant }) => ({
  "& .MuiInputBase-input": {
    width:
      error && `calc(100% - ${theme.spacing(variant !== "standard" ? 4 : 3)});`,
  },
  "& .MuiInputAdornment-root": {
    position: error && "absolute",
    left: -43, // error && variant !== "standard" ? theme.spacing(1) : 0,
  },
}));

export default function TextField(
  props: TextFieldProps & { alertText?: string; alert?: boolean }
) {
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
