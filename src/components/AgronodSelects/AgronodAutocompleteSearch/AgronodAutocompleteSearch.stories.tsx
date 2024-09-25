import { Meta, StoryFn } from "@storybook/react";
import AgronodAutocompleteSearch from "./AgronodAutocompleteSearch";
import { films } from "./MockData";
import { useState } from "react";
import { AgronodAlert } from "../../AgronodAlert";
import { Box, Divider } from "@mui/material";

export default {
  title: "Agrosfär Exclusive/Autocomplete Search",
  component: AgronodAutocompleteSearch,
  parameters: {
    componentSubtitle:
      "Autocomplete Search component is used in Agrosfär to search and check multiple parameters.",
    docs: {
      description: {
        component: `<p>This component is build with <b>custom multiselect UI elements</b> but based on <code>useAutocomplete</code> hook that gives it all functionalities and methods.</p><p>See more in <a href="custom multiselect UI elements" target="_blank"> MUI documentation</a>.</p>
          `,
      },
    },
  },
  argTypes: {
    placeholder: {
      description: "<div>Text in input field to indicate action for user</div>",
      control: {
        type: "text",
      },
    },
    noOptionsText: {
      description:
        "<div>Text to display when there are no results for options searched.</div>",
      control: {
        type: "text",
      },
    },
    filterOptions: {
      description:
        "<div>Filter array tells us which parameter from object are searchable.</div>",
      control: {
        type: "object",
      },
    },
    maxWidth: {
      description:
        "<div>Determines max with for whole component, by default it is full width of container.</div>",
      control: {
        type: "text",
      },
    },
    options: {
      description: "<div>Data array of object that goes in select.</div>",
      control: {
        type: "object",
      },
    },
    value: {
      description:
        "<div>The value of the autocomplete. The value must have reference equality with the option in order to be selected.<p>You can customize the equality behavior with the <code>isOptionEqualToValue</code> prop.</p></div>",
      control: {
        type: "object",
      },
    },
    onOptionChange: {
      description: `<div>Callback fired when the value changes. 
        <p>Format :<code>onOptionChange={(value) => void}</code></p> </div>`,
    },
    isOptionEqualToValue: {
      description: `<div>Used to determine if the option represents the given value. Uses strict equality by default.
        <p>Both arguments need to be handled, an option can only match with one value.</p>
        <p>Format: <code>isOptionEqualToValue={(option, value) => option?.id === value?.id}</code></p>
        <p><code>option</code> The option to test.</p>
        <p><code>value</code> The value to test against.</p>
         </div>`,
    },
    getOptionLabel: {
      description: `<div>Function that returns the option label. 
      <p>Format :<code>getOptionLabel={(option) => option.title}</code></p>
         </div>`,
    },
    nameSelector: {
      description: `<div>Function that returns name for chip component.
      <p>Format :<code>nameSelector={(option) => option?.title}</code></p>
         </div>`,
    },
    isOptionDisabled: {
      description: `<div>Function that returns is option disabled for each option.
      <p>Format :<code>isOptionDisabled={(option) => Boolean(option.isDisabled)}</code></p>
         </div>`,
    },
    isOptionSelected: {
      description: `<div>Function that returns is option selected for each option.
      <p>Format :<code>isOptionSelected={(option) =></code></p>
      <p><code>Boolean(
          values.filter((v) => v.selected).find((v) => v?.id === option?.id)
        )
      }</code></p>
         </div>`,
    },
    additionalInfoText: {
      description: `<div>Function that returns additional text we want to show.
      <p>Format :<code>additionalInfoText={(option) => option.year}</code></p>
         </div>`,
    },
  },
} as Meta<typeof AgronodAutocompleteSearch>;

export const AgronodAutocompleteSearchDefault: StoryFn<
  typeof AgronodAutocompleteSearch
> = ({ ...args }) => {
  const [values, setValues] = useState(films);

  const handleSelect = (value: any) => {
    const newValues = values.map((v: any) => {
      if (v.id === value.id) {
        v.selected = !value.selected;
      }
      return v;
    });
    setValues(newValues);
  };
  return (
    <AgronodAutocompleteSearch
      placeholder={args.placeholder}
      noOptionsText={args.noOptionsText}
      filterOptions={args.filterOptions}
      maxWidth={args.maxWidth}
      options={values}
      value={values.filter((v) => v.selected)}
      onOptionChange={handleSelect}
      isOptionEqualToValue={(option, value) => option?.id === value?.id}
      getOptionLabel={(option) => option.title}
      nameSelector={(option) => option?.title}
      isOptionDisabled={(option) => Boolean(option.isDisabled)}
      isOptionSelected={(option) =>
        Boolean(
          values.filter((v) => v.selected).find((v) => v?.id === option?.id)
        )
      }
      additionalInfoText={(option) => option.year}
    />
  );
};

AgronodAutocompleteSearchDefault.args = {
  placeholder: "Search movies by title or year",
  noOptionsText: "No Results found",
  filterOptions: ["title", "year"],
  maxWidth: "100%",
};

export const AgronodAutocompleteSearchAlertMessage: StoryFn<
  typeof AgronodAutocompleteSearch
> = ({ ...args }) => {
  const [values, setValues] = useState(films);

  const handleSelect = (value: any) => {
    const newValues = values.map((v: any) => {
      if (v.id === value.id) {
        v.selected = !value.selected;
      }
      return v;
    });
    setValues(newValues);
  };
  return (
    <AgronodAutocompleteSearch
      placeholder={args.placeholder}
      noOptionsText={args.noOptionsText}
      filterOptions={args.filterOptions}
      maxWidth={args.maxWidth}
      options={values}
      value={values.filter((v) => v.selected)}
      onOptionChange={handleSelect}
      isOptionEqualToValue={(option, value) => option?.id === value?.id}
      getOptionLabel={(option) => option.title}
      nameSelector={(option) => option?.title}
      isOptionDisabled={(option) => Boolean(option.isDisabled)}
      isOptionSelected={(option) =>
        Boolean(
          values.filter((v) => v.selected).find((v) => v?.id === option?.id)
        )
      }
      noOptionsAlertMessage={
        <Box sx={{ p: 2 }}>
          <Divider
            sx={{ mb: 1, mt: 1, width: "100%" }}
            orientation="horizontal"
          />
          <AgronodAlert
            variant="standard"
            title="Alert"
            severity="info"
            sx={{ width: "100%" }}
          >
            This is an alert message
          </AgronodAlert>
        </Box>
      }
      additionalInfoText={(option) => option.year}
    />
  );
};

AgronodAutocompleteSearchAlertMessage.args = {
  placeholder: "Search movies by title or year",
  noOptionsText: "No Results found",
  filterOptions: ["title", "year"],
  maxWidth: "100%",
};
