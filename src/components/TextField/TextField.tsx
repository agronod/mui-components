import {
  InputAdornment,
  TextField as MuiTextField,
  TextFieldProps,
} from "@mui/material";
import { ErrorIcon } from "../../assets";

export default function TextField(props: TextFieldProps) {
  return (
    <MuiTextField
      {...props}
      InputProps={{
        endAdornment: props.error && (
          <InputAdornment position="end">
            <ErrorIcon />
          </InputAdornment>
        ),
      }}
    ></MuiTextField>
  );
}
