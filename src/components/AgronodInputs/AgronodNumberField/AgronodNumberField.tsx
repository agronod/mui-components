import { useCallback } from "react";
import { TextFieldProps } from "@mui/material";
import { NumericFormat } from "react-number-format";
import { AgronodTextField } from "../AgronodTextField";

export type NumberFieldProps = Omit<TextFieldProps, "onChange"> & {
  warning?: boolean;
  tooltipText?: string;
  hideHelperText?: boolean;
  onChange: (value: number | undefined) => void;
  decimalScale?: number;
  thousandSeparator?: string;
  decimalSeparator?: string;
  emptyStyle?: "highlighted" | "default";
  textAlignment?: string;
  hasIcon?: boolean;
};

export default function AgronodNumberField({
  onChange,
  hideHelperText,
  emptyStyle = "default",
  textAlignment = "right",
  fullWidth = true,
  ...props
}: NumberFieldProps) {
  const onNumberChange = useCallback(
    (values: {
      floatValue: number | undefined;
      formattedValue: string;
      value: string;
    }) => {
      if (isNaN(Number(values.floatValue))) {
        onChange(undefined);
      } else {
        onChange(Number(values.floatValue));
      }
    },
    [onChange]
  );

  return (
    <NumericFormat
      {...props}
      value={props.value !== undefined ? props.value?.toString() : ""}
      defaultValue={
        props.defaultValue !== undefined ? props.defaultValue?.toString() : ""
      }
      type="text"
      customInput={AgronodTextField}
      onValueChange={onNumberChange}
      onWheel={(event: React.WheelEvent<HTMLInputElement>) => {
        event.currentTarget.blur();
      }}
      onFocus={(event: React.FocusEvent<HTMLInputElement>) => {
        event.target.select();
      }}
      emptyStyle={emptyStyle}
      placeholder={props.placeholder}
      textAlignment={textAlignment}
      thousandSeparator=" "
      decimalScale={3}
      decimalSeparator={","}
      allowNegative={false}
      fullWidth={fullWidth}
    />
  );
}
