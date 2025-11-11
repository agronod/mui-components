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
  ListSubheader,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { ReactNode, useEffect, useRef, useState, useMemo } from "react";
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
  padding: 0, // Remove default padding so group headers stick to the very top
}));

const StyledGroupHeader = styled(ListSubheader)(({ theme }) => ({
  backgroundColor: theme.palette.background.page,
  lineHeight: "16px",
  padding: "8px 8px",
  color: theme.palette.text.secondary,
  position: "sticky",
  top: -1, // Align to the very top, accounting for border
  zIndex: 2, // Higher z-index to ensure it stays above scrolling items
  textTransform: "uppercase",
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
  getGroupLabel?: (option: T) => string;
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

type FlattenedItem<T> = {
  type: "group" | "option";
  group?: string;
  option?: T;
  index?: number; // Original index in filteredOptions
};

const AgronodAutocompleteSearch = <T,>({
  options,
  value,
  onOptionChange,
  isOptionSelected,
  isOptionDisabled,
  nameSelector,
  getOptionLabel,
  getGroupLabel,
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

  const filteredOptions = useMemo(() => {
    return options.filter((option) => {
      const optionLabel = getOptionLabel(option).toLowerCase().normalize("NFC");
      const normalizedInput = inputValue.toLowerCase().normalize("NFC");
      return optionLabel.includes(normalizedInput);
    });
  }, [options, inputValue, getOptionLabel]);

  // Create flattened list with group headers when getGroupLabel is provided
  const flattenedItems = useMemo<FlattenedItem<T>[]>(() => {
    if (!getGroupLabel) {
      return filteredOptions.map((option, index) => ({
        type: "option" as const,
        option,
        index,
      }));
    }

    // Group options by their group label
    const grouped = filteredOptions.reduce((acc, option, index) => {
      const group = getGroupLabel(option);
      if (!acc[group]) {
        acc[group] = [];
      }
      acc[group].push({ option, index });
      return acc;
    }, {} as Record<string, Array<{ option: T; index: number }>>);

    // Flatten into a list with group headers
    const result: FlattenedItem<T>[] = [];
    Object.keys(grouped)
      .sort()
      .forEach((group) => {
        result.push({ type: "group", group });
        grouped[group].forEach(({ option, index }) => {
          result.push({ type: "option", option, index });
        });
      });

    return result;
  }, [filteredOptions, getGroupLabel]);

  const handleOptionChange = (option: T) => {
    onOptionChange(option);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (!open) return;

    const findNextOptionIndex = (
      startIndex: number,
      direction: 1 | -1
    ): number => {
      let index = startIndex;
      while (index >= 0 && index < flattenedItems.length) {
        index += direction;
        if (
          index >= 0 &&
          index < flattenedItems.length &&
          flattenedItems[index].type === "option"
        ) {
          return index;
        }
      }
      return startIndex;
    };

    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        setFocusedIndex((prev) => {
          if (prev === -1) {
            // Find first option
            const firstOptionIndex = flattenedItems.findIndex(
              (item) => item.type === "option"
            );
            return firstOptionIndex !== -1 ? firstOptionIndex : -1;
          }
          return findNextOptionIndex(prev, 1);
        });
        break;
      case "ArrowUp":
        event.preventDefault();
        setFocusedIndex((prev) => {
          if (prev === -1) {
            // Find last option
            for (let i = flattenedItems.length - 1; i >= 0; i--) {
              if (flattenedItems[i].type === "option") {
                return i;
              }
            }
            return -1;
          }
          return findNextOptionIndex(prev, -1);
        });
        break;
      case "Enter":
        event.preventDefault();
        if (focusedIndex >= 0 && focusedIndex < flattenedItems.length) {
          const item = flattenedItems[focusedIndex];
          if (item.type === "option" && item.option) {
            handleOptionChange(item.option);
          }
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
              {flattenedItems.map((item, flatIndex) => {
                if (item.type === "group") {
                  return (
                    <StyledGroupHeader key={`group-${item.group}`}>
                      {item.group}
                    </StyledGroupHeader>
                  );
                }

                const option = item.option as T;
                const originalIndex = item.index ?? flatIndex;

                return (
                  <MenuItem
                    {...getOptionProps({ option, index: originalIndex })}
                    key={`option-${originalIndex}`}
                    onClick={() => handleOptionChange(option)}
                    disabled={isOptionDisabled(option)}
                    selected={isOptionSelected(option)}
                    sx={[
                      {
                        // Dense MenuItem styling - MUI's dense prop doesn't work due to fixed height override
                        // This is a known MUI issue: https://github.com/mui/material-ui/issues/16488
                        maxHeight: "36px",
                        paddingTop: "0px",
                        paddingBottom: "0px",
                      },
                      (theme) =>
                        focusedIndex === flatIndex
                          ? {
                              backgroundColor: isOptionSelected(option)
                                ? `${theme.palette.primary.light}!important`
                                : `${theme.palette.primary.pastel}!important`,
                            }
                          : {
                              backgroundColor: "",
                            },
                    ]}
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
                      <AgronodTypography variant="body1">
                        {getOptionLabel(option)}
                      </AgronodTypography>
                      {additionalInfoText && (
                        <AgronodTypography
                          color="text.disabled"
                          variant="body1"
                        >
                          {additionalInfoText(option)}
                        </AgronodTypography>
                      )}
                    </Stack>
                  </MenuItem>
                );
              })}

              {filteredOptions.length === 0 && noOptionsText && (
                <MenuItem
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    maxHeight: "36px",
                    paddingTop: "0px",
                    paddingBottom: "0px",
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
