import {
  FormControl,
  FormLabel,
  Checkbox as MuiCheckbox,
  CheckboxProps as MuiCheckboxProps,
} from "@mui/material";

type CheckboxBaseProps = Pick<
  MuiCheckboxProps,
  "checked" | "disabled" | "color" | "id" | "onChange" | "sx" | "value"
>;

interface CheckboxProps extends CheckboxBaseProps {
  label?: string;
}

const Checkbox = (props: CheckboxProps) => (
  <FormControl
    style={{
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    }}
  >
    <MuiCheckbox {...props} />
    {props.label && (
      <FormLabel disabled={props.disabled} htmlFor={props.id}>
        {props.label}
      </FormLabel>
    )}
  </FormControl>
);
export default Checkbox;
