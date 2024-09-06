import { Meta, StoryFn } from "@storybook/react";
import AgronodSelectChip from "./AgronodSelectChip";
import { useState } from "react";
import { Box, ListItemText, MenuItem } from "@mui/material";
import { AgronodCheckbox } from "../../AgronodCheckbox";
import { names } from "../AgronodSelect/AgronodSelect.stories";

const items = names.map((name, index) => ({
  id: index.toString(),
  namn: name,
}));

export default {
  title: "Shared Components/AgronodSelectChip",
  component: AgronodSelectChip,
  parameters: {
    docs: {
      source: { language: "tsx" },
    },
  },
} as Meta<typeof AgronodSelectChip>;

export const MultipleSelection: StoryFn<typeof AgronodSelectChip> = ({
  ...args
}) => {
  const [value, setValue] = useState<string[]>([]);

  const handleChange = (event: any) => {
    setValue(event.target.value);
  };

  return (
    <Box sx={{ width: 300 }}>
      <AgronodSelectChip
        {...args}
        value={value}
        items={items}
        onChange={handleChange}
      >
        {items?.map((x) => (
          <MenuItem value={x.id} key={x.id}>
            <AgronodCheckbox checked={value.indexOf(x.id) > -1} size="small" />
            <ListItemText primary={x.namn} />
          </MenuItem>
        ))}
      </AgronodSelectChip>
    </Box>
  );
};
MultipleSelection.args = {
  placeholder: "Choose options",
};

export const SingleSelection: StoryFn<typeof AgronodSelectChip> = ({
  ...args
}) => {
  const [value, setValue] = useState<string[]>([]);

  const handleChange = (event: any) => {
    setValue(event.target.value);
  };

  return (
    <Box sx={{ width: 300 }}>
      <AgronodSelectChip
        {...args}
        multiple={false}
        value={value}
        items={items}
        onChange={handleChange}
      >
        {items?.map((x) => (
          <MenuItem value={x.id} key={x.id}>
            <AgronodCheckbox checked={value.indexOf(x.id) > -1} size="small" />
            <ListItemText primary={x.namn} />
          </MenuItem>
        ))}
      </AgronodSelectChip>
    </Box>
  );
};
SingleSelection.args = {
  placeholder: "Choose an option",
};
