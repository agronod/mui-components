import { StoryFn, Meta } from "@storybook/react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import AgronodButtonIcon from "./AgronodButtonIcon";

export default {
  title: "Shared Components/Button Icon",
  component: AgronodButtonIcon,
  parameters: {
    componentSubtitle:
      "ButtonIcon is used in cases where we want to display just plain icon but get all functions of a button.",
    docs: {
      description: {
        component: `<p>Advantage of using ButtonIcon over ordinary icon with click event is that it gives us accessibility advantages and has prestyled focus design.</p>`,
      },
    },
  },
} as Meta<typeof AgronodButtonIcon>;

export const AgronodButtonIconDefault: StoryFn<typeof AgronodButtonIcon> = (
  props
) => <AgronodButtonIcon {...props} />;

AgronodButtonIconDefault.args = {
  children: <CloseRoundedIcon />,
};
