import { Box, SelectProps, SelectChangeEvent } from "@mui/material";
import React, { ReactNode, useState } from "react";
import { AgronodSelect } from "../AgronodSelect";
import { AgronodChip } from "../../AgronodChip";

interface Item {
  id?: string;
  namn?: string;
}

export interface SelectChipProps {
  items: Item[];
  value: string[];
  children?: React.JSX.Element[] | React.JSX.Element | undefined;
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

  return (
    <AgronodSelect
      {...props}
      multiple
      value={value}
      open={selectOpen}
      onOpen={() => setSelectOpen(true)}
      onClose={() => setSelectOpen(false)}
      onChange={(e, c) => {
        if (props.onChange) {
          props.onChange(e as SelectChangeEvent<string[]>, c);
        }
      }}
      renderValue={(selected): ReactNode => (
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
          {(selected as Array<string>).map((x: string) => (
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
