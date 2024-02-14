import { StoryFn, Meta } from "@storybook/react";
import AsideCard from "./AsideCard";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  TextField,
  Theme,
  Typography,
} from "@mui/material";

export default {
  title: "Common Components/AsideCard",
  component: AsideCard,
  parameters: {
    componentSubtitle: "AsideCard is used in multiple places and components",
    docs: {
      description: {
        component: `<p>We can see it used for menus and forms</p>
          `,
      },
    },
  },
  argTypes: {
    children: {
      type: { name: "symbol", required: true },
    },
    centeredContent: {
      control: {
        type: "boolean",
      },
    },
    position: {
      control: {
        type: "radio",
      },
      options: ["left", "right"],
    },
    variant: {
      control: {
        type: "select",
      },
      options: ["elevation", "outlined", "none"],
    },
    padding: {
      control: { type: "range", min: 0, max: 100 },
    },
    sx: {
      control: {
        type: "object",
      },
    },
  },
} as Meta<typeof AsideCard>;

export const AsideCardRight: StoryFn<typeof AsideCard> = ({
  children,
  ...rest
}) => (
  <AsideCard
    sx={(theme: Theme) => ({
      width: "50%",
      float: rest.position,
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        float: "none",
        position: "absolute",
        bottom: 0,
        left: 0,
      },
    })}
    {...rest}
  >
    {children}
  </AsideCard>
);
AsideCardRight.args = {
  children: (
    <Box width="100%" display="grid" gap={3}>
      <Typography align="center" variant="h3">
        Just example
      </Typography>
      <FormControl fullWidth={true}>
        <FormLabel>Personnummer</FormLabel>
        <TextField
          InputLabelProps={{
            color: "secondary",
            shrink: false,
          }}
          helperText="this is example of helper text"
          id="inputTextWithLabel"
          name="inputTextWithLabel"
          placeholder="Personnummer"
          type="text"
        />
      </FormControl>

      <Button fullWidth={true} variant="contained">
        Lorem Ipsum
      </Button>
    </Box>
  ),
  position: "right",
  centeredContent: true,
  padding: 4,
  variant: "elevation",
};

export const AsideCardLeft: StoryFn<typeof AsideCard> = ({
  children,
  ...rest
}) => (
  <AsideCard sx={{ width: "50%", float: rest.position }} {...rest}>
    {children}
  </AsideCard>
);
AsideCardLeft.args = {
  children: (
    <Box width="100%" display="grid" gap={3}>
      <Typography align="center" variant="h3">
        Just example
      </Typography>
      <FormControl fullWidth={true}>
        <FormLabel>Personnummer</FormLabel>
        <TextField
          InputLabelProps={{
            color: "secondary",
            shrink: false,
          }}
          helperText="this is example of helper text"
          id="inputTextWithLabel"
          name="inputTextWithLabel"
          placeholder="Personnummer"
          type="text"
        />
      </FormControl>

      <Button fullWidth={true} variant="contained">
        Lorem Ipsum
      </Button>
    </Box>
  ),
  position: "left",
  centeredContent: true,
  padding: 4,
  variant: "elevation",
};
