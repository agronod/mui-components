import { StoryFn, Meta } from "@storybook/react";
import HorizontalBarChart, {
  HorizontalBarChartData,
  SubCategory,
} from "./HorizontalBarChart";
import { Box } from "@mui/material";

export default {
  title: "Agrosfär Exclusive/Horizontal Bar Chart",
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
    name: "Koldioxid från mark",
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

const tooltipData: SubCategory[] = [
  {
    name: "Metanavgång från fodersmältning",
    utslappskategoriId: "Inköpta varor",
    value: 563.5748122210299,
    percentage: 100,
  },
  {
    name: "Metanutsläpp",
    utslappskategoriId: "Energi",
    value: 30.17129821932792,
    percentage: 93,
  },
  {
    name: "Direkt lustgasavgång",
    utslappskategoriId: "Energi",
    value: 1.9585399860326453,
    percentage: 6.1,
  },
  {
    name: "Indirekt lustgasavgång",
    utslappskategoriId: "Energi",
    value: 0.3738838896496834,
    percentage: 1,
  },
  {
    name: "Produktion av grovfoder",
    utslappskategoriId: "Lustgas from mark",
    value: 9.933518956584601,
    percentage: 2,
  },
  {
    name: "Produktion av kraftfoder",
    utslappskategoriId: "Lustgas from mark",
    value: 450.54197429882146,
    percentage: 98,
  },
  {
    name: "Utsläpp från inköpta djur",
    utslappskategoriId: "Inköpta djur",
    value: 2.5462380900904322,
    percentage: 100,
  },
  {
    name: "Utsläpp från inköpta djur",
    utslappskategoriId: "Koldioxid från mark",
    value: 232.232,
    percentage: 100,
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
  tooltipData,
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
