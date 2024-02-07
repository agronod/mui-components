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
    color: "#73140C",
  },
  {
    id: "2",
    name: "Helsäd (Korn/Havre50%50%)",
    value: 4000,
    color: "#852411",
  },
  {
    id: "3",
    name: "Vete",
    value: 200,
    color: "#923F00",
  },
  {
    id: "4",
    name: "Raps",
    value: 100,
    color: "#A26100",
  },
  {
    id: "5",
    name: "Åkerböna",
    value: 100,
    color: "#AA7605",
  },
  {
    id: "6",
    name: "Okänt",
    value: 4000,
    color: "#AB8838",
  },
];

const data2: VerticalBarChartData[] = [
  {
    id: "1",
    name: "Potatis",
    value: 0.5,
    color: "#73140C",
  },
  {
    id: "2",
    name: "Helsäd (Korn/Havre50%50%)",
    value: 4,
    color: "#852411",
  },
  {
    id: "3",
    name: "Vete",
    value: 3.5,
    color: "#923F00",
  },
  {
    id: "4",
    name: "Raps",
    value: 2.1,
    color: "#A26100",
  },
  {
    id: "5",
    name: "Åkerböna",
    value: 2.15,
    color: "#AA7605",
  },
  {
    id: "6",
    name: "Okänt",
    value: 4,
    color: "#AB8838",
  },
];

export const VerticalBarChartDefault: StoryFn<typeof VerticalBarChart> = ({
  ...args
}) => (
  <Box sx={{ backgroundColor: "#FFF", padding: 2 }}>
    <Box width={"100%"} height={600}>
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
    <Box width={300} height={600}>
      <VerticalBarChart {...args} />
    </Box>
  </Box>
);

VerticalBarChartSelected.args = {
  data: data2,
  selectedId: "3",
};
