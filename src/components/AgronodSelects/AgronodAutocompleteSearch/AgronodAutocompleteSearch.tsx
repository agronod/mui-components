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
  placeholder,
  noOptionsText,
  additionalInfoText,
  isOptionEqualToValue,
  maxWidth,
  noOptionsAlertMessage,
}: ExtendedAutocompleteProps<T>) => {
  const [open, setOpen] = useState<boolean>(false);
  const [focusedIndex, setFocusedIndex] = useState<number>(-1);
  const listRef = useRef<HTMLUListElement>(null);

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
    getOptionLabel,
    isOptionEqualToValue,
  });

  const filteredOptions = options.filter((option) => {
    const optionLabel = getOptionLabel(option).toLowerCase().normalize("NFC");
    const normalizedInput = inputValue.toLowerCase().normalize("NFC");
    return optionLabel.includes(normalizedInput);
  });

  const handleOptionChange = (option: T) => {
    onOptionChange(option);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (!open) return;

    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        setFocusedIndex((prev) =>
          Math.min(prev + 1, filteredOptions.length - 1)
        );
        break;
      case "ArrowUp":
        event.preventDefault();
        setFocusedIndex((prev) => Math.max(prev - 1, 0));
        break;
      case "Enter":
        event.preventDefault();
        if (focusedIndex >= 0 && focusedIndex < filteredOptions.length) {
          handleOptionChange(filteredOptions[focusedIndex]);
        }
        break;
      case "Escape":
        setOpen(false);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    setOpen(focused);
    setFocusedIndex(-1);
  }, [focused]);

  useEffect(() => {
    if (focusedIndex >= 0 && listRef.current) {
      const focusedItem = listRef.current.children[focusedIndex] as HTMLElement;
      focusedItem?.scrollIntoView({ block: "nearest" });
    }
  }, [focusedIndex]);

  return (
    <Box
      {...getRootProps()}
      sx={{ maxWidth: maxWidth }}
      onKeyDown={handleKeyDown}
    >
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
          fullWidth
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
                  sx={[
                    {},
                    (theme) => (focusedIndex === index ? {
                      backgroundColor: isOptionSelected(option as T)
                          ? `${theme.palette.primary.light}!important`
                          : `${theme.palette.primary.pastel}!important`
                    } : {
                      backgroundColor: ""
                    })
                  ]}
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
                      {getOptionLabel(option)}
                    </AgronodTypography>
                    {additionalInfoText && (
                      <AgronodTypography color="text.disabled" variant="body1">
                        {additionalInfoText(option as T)}
                      </AgronodTypography>
                    )}
                  </Stack>
                </MenuItem>
              ))}

              {filteredOptions.length === 0 && noOptionsText && (
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
