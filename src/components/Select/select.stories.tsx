import {
  Box,
  Chip,
  FormControl,
  FormLabel,
  ListItemText,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import { StoryFn, Meta } from "@storybook/react";
import { useState } from "react";
import { AgronodCheckbox } from "../AgronodCheckbox";

export default {
  title: "Shared components/Select",
  component: Select,
  parameters: {
    docs: {
      source: { language: "tsx" },
    },
  },
  argTypes: {
    disabled: {
      control: {
        type: "boolean",
      },
    },
    label: {
      control: {
        type: "text",
      },
    },
    sx: {
      control: {
        type: "object",
      },
    },
  },
} as Meta<typeof Select>;

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

export const SelectSingle: StoryFn<typeof Select> = ({ label, ...rest }) => {
  const [value, setValue] = useState(names[0]);
  const handleChange = (event: any) => setValue(event.target.value);
  return (
    <FormControl sx={{ m: 1, width: 300 }}>
      {label && <FormLabel>{label}</FormLabel>}
      <Select value={value} {...rest} onChange={handleChange}>
        {names.map((name) => (
          <MenuItem key={name} value={name}>
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
SelectSingle.args = {
  label: "choose option",
};

export const SelectWithIcon: StoryFn<typeof Select> = ({ label, ...rest }) => {
  const [value, setValue] = useState(names[0]);
  const handleChange = (event: any) => setValue(event.target.value);
  return (
    <FormControl sx={{ m: 1, width: 300 }}>
      {label && <FormLabel>{label}</FormLabel>}
      <Select
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
      </Select>
    </FormControl>
  );
};
SelectWithIcon.args = {
  label: "choose option",
};

export const SelectMultiple: StoryFn<typeof Select> = ({ label, ...rest }) => {
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
      <Select value={value} {...rest} onChange={handleChange} multiple>
        <MenuItem value={1}>Option 1</MenuItem>
        <MenuItem value={2}>Option 2</MenuItem>
        <MenuItem value={3}>Option 3</MenuItem>
      </Select>
    </FormControl>
  );
};
SelectMultiple.args = {
  label: "choose option",
};

export const SelectMultipleCheckbox: StoryFn<typeof Select> = ({
  label,
  ...rest
}) => {
  const [value, setValue] = useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof value>) => {
    const {
      target: { value },
    } = event;
    setValue(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <FormControl sx={{ m: 1, width: 300 }}>
      {label && <FormLabel>{label}</FormLabel>}
      <Select
        id="demo-multiple-checkbox"
        multiple
        value={value}
        onChange={handleChange}
        renderValue={(selected) => selected.join(", ")}
      >
        {names.map((name) => (
          <MenuItem key={name} value={name}>
            <AgronodCheckbox checked={value.indexOf(name) > -1} />
            <ListItemText primary={name} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
SelectMultipleCheckbox.args = {
  label: "choose option",
};

export const SelectMultipleChip: StoryFn<typeof Select> = ({
  label,
  ...rest
}) => {
  const [value, setValue] = useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof value>) => {
    const {
      target: { value },
    } = event;
    setValue(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <FormControl sx={{ m: 1, width: 300 }}>
      {label && <FormLabel>{label}</FormLabel>}
      <Select
        id="demo-multiple-checkbox"
        multiple
        value={value}
        onChange={handleChange}
        renderValue={(selected) => (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
            {selected.map((value) => (
              <Chip key={value} label={value} />
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
      </Select>
    </FormControl>
  );
};
SelectMultipleChip.args = {
  label: "choose option",
};
