import { StoryFn, Meta } from "@storybook/react";
import { Stack, Typography } from "@mui/material";
import AgronodCard from "./AgronodCard";

export default {
  title: "Shared Components/Card",
  component: AgronodCard,
  parameters: {
    componentSubtitle: "Base Outlined white Card container",
    docs: {
      description: {
        component: `<p>Used as base container in Agronod and Agrosfär. It is made of MUI Card component <code>variant="outlined"</code> with specific padding that can be overriden with <code>sx</code> property.</p>
          `,
      },
    },
  },
} as Meta<typeof AgronodCard>;

export const AgronodCardDefault: StoryFn<typeof AgronodCard> = ({
  children,
  sx,
  ...rest
}) => {
  return (
    <AgronodCard {...rest} sx={sx}>
      {children}
    </AgronodCard>
  );
};
AgronodCardDefault.args = {
  children: (
    <Stack gap={2}>
      <Typography variant="h2">Lorem Ipsum</Typography>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Typography>
    </Stack>
  ),
};

export const AgronodCardModifiedStyles: StoryFn<typeof AgronodCard> = ({
  children,
  sx,
  ...rest
}) => {
  return (
    <AgronodCard {...rest} sx={sx}>
      {children}
    </AgronodCard>
  );
};
AgronodCardModifiedStyles.args = {
  children: (
    <Stack gap={2}>
      <Typography variant="h2">Lorem Ipsum</Typography>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Typography>
    </Stack>
  ),
  sx: (theme) => ({
    backgroundColor: theme.palette.primary.light,
    borderColor: theme.palette.primary.dark,
  }),
};
