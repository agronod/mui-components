import {
  InputAdornment,
  styled,
  TextField as MuiTextField,
  TextFieldProps,
} from "@mui/material";
import { ErrorIcon } from "../../assets";

const StyledTextField = styled(MuiTextField)(({ theme, error, variant }) => ({
  "& .MuiInputBase-input": {
    width:
      error && `calc(100% - ${theme.spacing(variant !== "standard" ? 4 : 3)});`,
  },
  "& .MuiInputAdornment-root": {
    position: error && "absolute",
    right: error && variant !== "standard" ? theme.spacing(1) : 0,
  },
}));

export default function TextField(props: TextFieldProps) {
  return (
    <StyledTextField
      {...props}
      InputProps={{
        endAdornment: props.error ? (
          <InputAdornment position="end">
            <ErrorIcon />
          </InputAdornment>
        ) : (
          props.InputProps?.endAdornment
        ),
      }}
    ></StyledTextField>
  );
}
