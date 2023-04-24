import {
  FormControl,
  FormLabel,
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
} from "@mui/material";

type InputFieldBaseProps = Pick<
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
  | "sx"
  | "placeholder"
>;

export interface InputFieldProps extends InputFieldBaseProps {
  inputLabel?: string;
  errorText?: string;
}

const InputField = (props: InputFieldProps) => (
  <FormControl fullWidth={props.fullWidth}>
    {props.inputLabel && (
      <FormLabel
        disabled={props.disabled}
        required={props.required}
        htmlFor={props.id}
        error={props.error ? true : false}
        style={{ fontWeight: 500, marginBottom: "8px" }}
      >
        {props.inputLabel}
      </FormLabel>
    )}
    <MuiTextField
      InputLabelProps={{
        shrink: false,
        color: "secondary",
      }}
      variant="outlined"
      helperText={props.error ? props.errorText : props.helperText}
      {...props}
    ></MuiTextField>
  </FormControl>
);

export default InputField;
