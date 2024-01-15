import { StoryFn, Meta } from "@storybook/react";
import VerticalBarChart, { VerticalBarChartData } from "./VerticalBarChart";
import { Box } from "@mui/material";

export default {
  title: "Components/VerticalBarChart",
  argTypes: {},
} as Meta<typeof VerticalBarChart>;

const data: VerticalBarChartData[] = [
  {
    id: "1",
    name: "Potatis",
    value: 2000,
  },
  {
    id: "2",
    name: "Helsäd (Korn/Havre50%50%)",
    value: 4000,
  },
  {
    id: "3",
    name: "Vete",
    value: 200,
  },
  {
    id: "4",
    name: "Raps",
    value: 100,
  },
  {
    id: "5",
    name: "Åkerböna",
    value: 100,
  },
  {
    id: "6",
    name: "Okänt",
    value: 100,
  },
];

export const VerticalBarChartDefault: StoryFn<typeof VerticalBarChart> = ({
  ...args
}) => (
  <Box sx={{ backgroundColor: "#FFF", padding: 2 }}>
    <Box width={"50%"}>
      <VerticalBarChart {...args} />
    </Box>
  </Box>
);

VerticalBarChartDefault.args = {
  data: data,
};

export const VerticalBarChartSelected: StoryFn<typeof VerticalBarChart> = ({
  ...args
}) => (
  <Box sx={{ backgroundColor: "#FFF", padding: 2 }}>
    <Box width={225}>
      <VerticalBarChart {...args} />
    </Box>
  </Box>
);

VerticalBarChartSelected.args = {
  data: data,
  selectedId: "2",
};
