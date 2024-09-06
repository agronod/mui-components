import { Meta, StoryFn } from "@storybook/react";
import AgronodSelect from "./AgronodSelect";
import { useState } from "react";
import {
  FormControl,
  FormLabel,
  MenuItem,
  Box,
  ListItemText,
} from "@mui/material";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import { AgronodCheckbox } from "../../AgronodCheckbox";
import { AgronodChip } from "../../AgronodChip";

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

export default {
  title: "Shared Components/Select",
  component: AgronodSelect,
  parameters: {
    docs: {
      source: { language: "tsx" },
    },
  },
  argTypes: {
    disabled: {
      control: { type: "boolean" },
    },
    label: {
      control: { type: "text" },
    },
    sx: {
      control: { type: "object" },
    },
  },
} as Meta<typeof AgronodSelect>;

export const SelectSingle: StoryFn<typeof AgronodSelect> = ({
  label,
  ...rest
}) => {
  const [value, setValue] = useState(names[0]);
  const handleChange = (event: any) => setValue(event.target.value);

  return (
    <FormControl sx={{ m: 1, width: 300 }}>
      {label && <FormLabel>{label}</FormLabel>}
      <AgronodSelect value={value} {...rest} onChange={handleChange}>
        {names.map((name) => (
          <MenuItem key={name} value={name}>
            {name}
          </MenuItem>
        ))}
      </AgronodSelect>
    </FormControl>
  );
};
SelectSingle.args = {
  label: "Choose option",
};

export const SelectWithIcon: StoryFn<typeof AgronodSelect> = ({
  label,
  ...rest
}) => {
  const [value, setValue] = useState(names[0]);
  const handleChange = (event: any) => setValue(event.target.value);

  return (
    <FormControl sx={{ m: 1, width: 300 }}>
      {label && <FormLabel>{label}</FormLabel>}
      <AgronodSelect
        value={value}
        {...rest}
        onChange={handleChange}
        renderValue={() => value}
      >
        {names.map((name) => (
          <MenuItem key={name} value={name}>
            <ListItemText primary={name} />
            {name === value && <CheckRoundedIcon />}
          </MenuItem>
        ))}
      </AgronodSelect>
    </FormControl>
  );
};
SelectWithIcon.args = {
  label: "Choose option",
};

export const SelectMultiple: StoryFn<typeof AgronodSelect> = ({
  label,
  ...rest
}) => {
  const [value, setValue] = useState<string[]>([]);

  const handleChange = (event: any) => {
    const {
      target: { value },
    } = event;
    setValue(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <FormControl sx={{ m: 1, width: 300 }}>
      {label && <FormLabel>{label}</FormLabel>}
      <AgronodSelect value={value} {...rest} onChange={handleChange} multiple>
        {names.map((name) => (
          <MenuItem key={name} value={name}>
            {name}
          </MenuItem>
        ))}
      </AgronodSelect>
    </FormControl>
  );
};
SelectMultiple.args = {
  label: "Choose options",
};

export const SelectMultipleCheckbox: StoryFn<typeof AgronodSelect> = ({
  label,
  ...rest
}) => {
  const [value, setValue] = useState<string[]>([]);

  const handleChange = (event: any) => {
    const {
      target: { value },
    } = event;
    setValue(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <FormControl sx={{ m: 1, width: 300 }}>
      {label && <FormLabel>{label}</FormLabel>}
      <AgronodSelect
        multiple
        value={value}
        {...rest}
        fullWidth
        onChange={handleChange}
        renderValue={(selected) => (selected as string[]).join(", ")}
      >
        {names.map((name) => (
          <MenuItem key={name} value={name}>
            <AgronodCheckbox checked={value.indexOf(name) > -1} />
            <ListItemText primary={name} />
          </MenuItem>
        ))}
      </AgronodSelect>
    </FormControl>
  );
};
SelectMultipleCheckbox.args = {
  label: "Choose options",
};

export const SelectMultipleChip: StoryFn<typeof AgronodSelect> = ({
  label,
  ...rest
}) => {
  const [value, setValue] = useState<string[]>([]);

  const handleChange = (event: any) => {
    const {
      target: { value },
    } = event;
    setValue(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <FormControl sx={{ m: 1, width: 300 }}>
      <AgronodSelect
        multiple
        value={value}
        fullWidth
        {...rest}
        onChange={handleChange}
        renderValue={(selected) => (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
            {(selected as string[]).map((val) => (
              <AgronodChip key={val} label={val} />
            ))}
          </Box>
        )}
      >
        {names.map((name) => (
          <MenuItem key={name} value={name}>
            <AgronodCheckbox checked={value.indexOf(name) > -1} />
            <ListItemText primary={name} />
          </MenuItem>
        ))}
      </AgronodSelect>
    </FormControl>
  );
};
SelectMultipleChip.args = {
  label: "Choose options",
};
