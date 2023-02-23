import {
  InputAdornment,
  styled,
  TextField as MuiTextField,
  TextFieldProps,
  Tooltip,
  Typography,
} from "@mui/material";
import { ErrorIcon } from "../../assets";

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

export default function TextField(props: TextFieldProps) {
  return (
    <StyledTextField
      {...props}
      InputProps={{
        startAdornment: props.error ? (
          <Tooltip
            title={<Typography>{props.helperText}</Typography>}
            placement="top-start"
          >
            <InputAdornment position="start">
              <ErrorIcon />
            </InputAdornment>
          </Tooltip>
        ) : (
          <></>
        ),
        endAdornment: props.error ? <></> : props.InputProps?.endAdornment,
      }}
    ></StyledTextField>
  );
}
