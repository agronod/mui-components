import {
  FormControl,
  FormLabel,
  InputLabel,
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
} from "@mui/material";

type InputTextBaseProps = Pick<
  MuiTextFieldProps,
  | "disabled"
  | "error"
  | "fullWidth"
  | "helperText"
  | "name"
  | "required"
  | "type"
  | "value"
  | "onChange"
  | "id"
>;

interface InputTextProps extends InputTextBaseProps {
  inputLabel?: string;
  sx?: any;
}

const InputText = (props: InputTextProps) => (
  <FormControl>
    <FormLabel
      required={true}
      htmlFor={props.id}
      error={props.error ? true : false}
      sx={props.sx}
    >
      {props.inputLabel}
    </FormLabel>
    <MuiTextField
      placeholder={props.inputLabel}
      InputLabelProps={{
        shrink: false,
        color: "secondary",
      }}
      variant="outlined"
      helperText={props.error || props.helperText ? props.helperText : false}
      {...props}
    ></MuiTextField>
  </FormControl>
);

export default InputText;
