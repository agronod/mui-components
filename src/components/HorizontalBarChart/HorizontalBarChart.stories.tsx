import { StoryFn, Meta } from "@storybook/react";
import HorizontalBarChart, {
  HorizontalBarChartData,
} from "./HorizontalBarChart";
import { Box } from "@mui/material";

export default {
  title: "Components/HorizontalBarChart",
  argTypes: {},
} as Meta<typeof HorizontalBarChart>;

const data: HorizontalBarChartData[] = [
  {
    id: "1",
    name: "Inköpta varor",
    value: 2000,
    color: "#AA7605",
  },
  {
    id: "2",
    name: "Lustgas from mark",
    value: 4000,
    color: "#AA7605",
  },
  {
    id: "3",
    name: "Koldioxid from mark",
    value: 200,
    color: "#AA7605",
  },
  {
    id: "4",
    name: "Energi",
    value: 100,
    color: "#AA7605",
  },
];

const stackedData: HorizontalBarChartData[] = [
  {
    id: "1",
    name: "Inköpta varor",
    value: [1.23, 2.27],
    color: ["#AA7605", "#59B87F"],
  },
  {
    id: "2",
    name: "Lustgas from mark",
    value: [1, 2],
    color: ["#AA7605", "#59B87F"],
  },
  {
    id: "3",
    name: "Koldioxid from mark",
    value: [3.245, 1.456],
    color: ["#AA7605", "#59B87F"],
  },
  {
    id: "4",
    name: "Energi",
    value: [3, 4],
    color: ["#AA7605", "#59B87F"],
  },
];

export const HorizontalBarChartDefault: StoryFn<typeof HorizontalBarChart> = ({
  ...args
}) => (
  <Box sx={{ backgroundColor: "#FFF", padding: 2, height: 300 }}>
    <HorizontalBarChart {...args} />
  </Box>
);

HorizontalBarChartDefault.args = {
  data: data,
};

export const HorizontalBarChartStacked: StoryFn<typeof HorizontalBarChart> = ({
  ...args
}) => (
  <Box sx={{ backgroundColor: "#FFF", padding: 2 }}>
    <Box height={300}>
      <HorizontalBarChart {...args} />
    </Box>
  </Box>
);

HorizontalBarChartStacked.args = {
  data: stackedData,
};
