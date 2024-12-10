import {
  MenuItem,
  Stack,
  InputAdornment,
  Box,
  useAutocomplete,
  styled,
  Collapse,
  MenuList,
  AutocompleteGroupedOption,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { ReactNode, useEffect, useRef, useState } from "react";
import { AgronodChip } from "../../AgronodChip";
import { AgronodCheckbox } from "../../AgronodCheckbox";
import { AgronodTypography } from "../../AgronodTypography";
import { AgronodTextField } from "../../AgronodInputs/AgronodTextField";

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

type AutocompleteProps<T> = {
  options: T[];
  value: T[];
  onOptionChange: (value: T) => void;
  isOptionSelected: (value: T) => boolean;
  isOptionDisabled: (value: T) => boolean;
  nameSelector: (value: T) => string | undefined;
  isOptionEqualToValue: (option: T, value: T) => boolean;
  getOptionLabel: (value: T) => string;
  filterOptions?: string[];
  placeholder?: string;
  noOptionsText?: string;
  additionalInfoText?: (value: T) => number;
  maxWidth?: string;
  noOptionsAlertMessage?: ReactNode;
};

interface OptionWithFilterProps {
  [key: string]: string | number; // Define properties that are used in filterOptions
}

type ExtendedAutocompleteProps<T> = AutocompleteProps<T> & {
  options: (T | AutocompleteGroupedOption<T>)[];
};

const AgronodAutocompleteSearch = <T,>({
  options,
  value,
  onOptionChange,
  isOptionSelected,
  isOptionDisabled,
  nameSelector,
  getOptionLabel,
  filterOptions,
  placeholder,
  noOptionsText,
  additionalInfoText,
  maxWidth,
  noOptionsAlertMessage,
}: ExtendedAutocompleteProps<T>) => {
  const [open, setOpen] = useState<boolean>(false);
  const listRef = useRef<HTMLUListElement>(null); // Reference to the scrollable listbox
  const {
    getRootProps,
    getInputProps,
    getTagProps,
    getListboxProps,
    getOptionProps,
    focused,
    inputValue,
  } = useAutocomplete({
    id: "autocomplete-search",
    value: value,
    multiple: true,
    options: options,
    getOptionLabel: getOptionLabel,
  });

  const filteredOptions = options.filter((option) =>
    filterOptions?.some((filter) => {
      const optionValue = String((option as OptionWithFilterProps)[filter])
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
      const normalizedInput = inputValue
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
      return optionValue.includes(normalizedInput);
    })
  );

  const handleOptionChange = (option: T) => {
    const scrollPosition = listRef.current?.scrollTop || 0;

    onOptionChange(option);
    requestAnimationFrame(() => {
      if (listRef.current) {
        listRef.current.scrollTop = scrollPosition;
      }
    });
  };

  useEffect(() => {
    setOpen(focused);
  }, [focused]);

  return (
    <Box {...getRootProps()} sx={{ maxWidth: maxWidth }}>
      <Stack
        flexDirection="row"
        gap={1}
        sx={{ marginBottom: 2 }}
        flexWrap="wrap"
      >
        {value.map((option: T, index: number) => {
          const { key, ...restProps } = getTagProps({ index });
          return (
            <AgronodChip
              key={key}
              {...restProps}
              size="medium"
              label={nameSelector(option)}
              handleOnDelete={() => onOptionChange(option)}
            />
          );
        })}
      </Stack>
      <Box>
        <AgronodTextField
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
            <StyledMenuList
              dense
              {...getListboxProps()}
              ref={listRef}
              sx={{ borderRadius: 1 }}
            >
              {filteredOptions.map((option, index) => (
                <MenuItem
                  dense
                  {...getOptionProps({ option: option as T, index })}
                  key={index}
                  onClick={() => handleOptionChange(option as T)}
                  disabled={isOptionDisabled(option as T)}
                  selected={isOptionSelected(option as T)}
                >
                  <AgronodCheckbox
                    checked={isOptionSelected(option as T)}
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
                    <AgronodTypography variant="body1">
                      {nameSelector(option as T)}
                    </AgronodTypography>
                    {additionalInfoText && (
                      <AgronodTypography color="text.disabled" variant="body1">
                        {additionalInfoText(option as T)}
                      </AgronodTypography>
                    )}
                  </Stack>
                </MenuItem>
              ))}

              {filteredOptions.length === 0 && noOptionsText !== undefined && (
                <MenuItem
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    "&:hover": {
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  <AgronodTypography
                    sx={{ textAlign: "left", width: "100%" }}
                    variant="body1"
                    color="text.disabled"
                  >
                    {noOptionsText}
                  </AgronodTypography>
                </MenuItem>
              )}
              {noOptionsAlertMessage}
            </StyledMenuList>
          )}
        </Collapse>
      </Box>
    </Box>
  );
};

export default AgronodAutocompleteSearch;
