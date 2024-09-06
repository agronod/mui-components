import { Box, SelectProps, SelectChangeEvent, MenuItem } from "@mui/material";
import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
  useState,
} from "react";
import { AgronodSelect } from "../AgronodSelect";
import { AgronodChip } from "../../AgronodChip";

interface Item {
  id?: string;
  namn?: string;
}

interface SelectChipProps {
  items: Item[];
  value: string[];
  children?: JSX.Element[] | JSX.Element | undefined;
  error?: boolean;
  warning?: boolean;
  helperText?: string;
  hideHelperText?: boolean;
  placeholder?: string;
  tooltipText?: string;
  hasIcon?: boolean;
  emptyStyle?: "highlighted" | "default";
}

export default function AgronodSelectChip({
  children,
  value,
  items,
  ...props
}: SelectProps<string[]> & SelectChipProps) {
  const [selectOpen, setSelectOpen] = useState(false);

  const localOnChange = (
    event: SelectChangeEvent<string[]>,
    c:
      | string
      | number
      | boolean
      | ReactElement<any, string | JSXElementConstructor<any>>
      | ReactFragment
      | ReactPortal
      | null
      | undefined
  ) => {
    if (props.onChange) {
      props.onChange(event, c);
    }
  };

  return (
    <AgronodSelect
      {...props}
      multiple
      value={value}
      open={selectOpen}
      onOpen={() => setSelectOpen(true)}
      onClose={() => setSelectOpen(false)}
      onChange={(e, c) => localOnChange(e as SelectChangeEvent<string[]>, c)}
      renderValue={(selected: any) => (
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
          {selected.map((x: string) => (
            <AgronodChip
              size="small"
              key={x}
              label={items.find((y) => y.id === x)?.namn || x}
            />
          ))}
        </Box>
      )}
    >
      {!!children && children}
    </AgronodSelect>
  );
}
