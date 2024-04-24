import {
  MenuItem,
  Stack,
  TextField,
  InputAdornment,
  Box,
  useAutocomplete,
  styled,
  Collapse,
  Typography,
  MenuList,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useMemo, useState } from "react";
import { AgronodChip } from "../AgronodChip";
import { AgronodCheckbox } from "../AgronodCheckbox";

type AutocompleteProps<T> = {
  options: any[];
  value: any[];
  onOptionChange: (value: T) => void;
  isOptionSelected: (value: T) => boolean;
  isOptionDisabled: (value: T) => boolean;
  nameSelector: (value: T) => string | undefined;
  isOptionEqualToValue: (option: any, value: T) => boolean;
  getOptionLabel: (value: T) => string;
  filterOptions?: string[];
  placeholder?: string;
  noOptionsText: string;
  additionalInfoText?: (value: T) => string;
  maxWidth?: string;
};

const AutocompleteSearch = <T,>({
  options,
  value,
  onOptionChange,
  isOptionSelected,
  isOptionDisabled,
  nameSelector,
  isOptionEqualToValue,
  getOptionLabel,
  filterOptions,
  placeholder,
  noOptionsText,
  additionalInfoText,
  maxWidth,
}: AutocompleteProps<T>) => {
  const [open, setOpen] = useState<boolean | undefined>();
  const [availableOptions, setAvailableOptions] = useState<any[]>([]);

  const {
    getRootProps,
    getInputProps,
    getTagProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    focused,
  } = useAutocomplete({
    id: "autocomplete-search",
    value: value,
    multiple: true,
    options: options,
    getOptionLabel: getOptionLabel,
    isOptionEqualToValue: isOptionEqualToValue,
    filterOptions: filterOptions
      ? (options, { inputValue }) => {
          const filteredOptions = options.filter((option) =>
            filterOptions.some((filter) =>
              option[filter]
                .toString()
                .toLowerCase()
                .includes(inputValue.toLowerCase())
            )
          );

          return filteredOptions;
        }
      : undefined,
    onInputChange: () => {
      setAvailableOptions(groupedOptions);
    },
  });

  const StyledMenuList = styled(MenuList)(({ theme }) => ({
    border: "1px solid",
    backgroundColor: theme.palette.background.card,
    borderColor: theme.palette.border,
    borderRadius: "4px",
    marginTop: "2px",
    maxHeight: "280px",
    maxWidth: "100%",
    overflow: "auto",
  }));

  useMemo(() => {
    if (focused) {
      setAvailableOptions(groupedOptions);
      setOpen(true);
    } else {
      // this will prevent closing dropdown emmediately after loosing focus, that was interfering with clicking on other buttons because height was changing
      setTimeout(() => {
        if (open === undefined) {
          return;
        }
        setOpen(false);
        setAvailableOptions(groupedOptions);
      }, 200);
    }
  }, [focused]);

  return (
    <Box {...getRootProps()} sx={{ maxWidth: maxWidth }}>
      <Stack
        flexDirection="row"
        gap={1}
        sx={{ marginBottom: 2 }}
        flexWrap="wrap"
      >
        {value.map((option: any, index: number) => (
          <AgronodChip
            {...getTagProps({ index })}
            size="medium"
            label={nameSelector(option)}
            handleOnDelete={() => onOptionChange(option)}
          />
        ))}
      </Stack>
      <Box>
        <TextField
          placeholder={placeholder}
          fullWidth={true}
          inputProps={{ ...getInputProps() }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon
                  sx={(theme) => ({
                    color: theme.palette.icon.secondary,
                  })}
                />
              </InputAdornment>
            ),
          }}
        />

        <Collapse in={open}>
          {open && (
            <StyledMenuList dense {...getListboxProps()}>
              {availableOptions.map((option, index) => (
                <MenuItem
                  {...getOptionProps({ option, index })}
                  key={index}
                  onClick={() => onOptionChange(option)}
                  disabled={isOptionDisabled(option)}
                  selected={isOptionSelected(option)}
                >
                  <AgronodCheckbox
                    checked={isOptionSelected(option)}
                    size="small"
                  />
                  <Stack
                    flexDirection="row"
                    width="100%"
                    gap={2}
                    sx={(theme) => ({
                      [theme.breakpoints.down("sm")]: {
                        justifyContent: "space-between",
                      },
                    })}
                  >
                    <Typography variant="body1">
                      {nameSelector(option)}
                    </Typography>
                    {additionalInfoText && (
                      <Typography color="text.disabled" variant="body1">
                        {additionalInfoText(option)}
                      </Typography>
                    )}
                  </Stack>
                </MenuItem>
              ))}

              {availableOptions.length === 0 &&
                open &&
                noOptionsText !== undefined && (
                  <MenuItem>
                    <Typography variant="body1" color="text.disabled">
                      {noOptionsText}
                    </Typography>
                  </MenuItem>
                )}
            </StyledMenuList>
          )}
        </Collapse>
      </Box>
    </Box>
  );
};

export default AutocompleteSearch;
