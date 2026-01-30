import { StoryFn, Meta } from "@storybook/react-vite";
import HorizontalBarChart, {
  HorizontalBarChartData,
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
    tooltipData: [
      {
        name: "Metanavgång från fodersmältning",
        value: 100,
        suffix: "%",
      },
      {
        name: "Mindre värde",
        value: 0,
        suffix: "%",
      },
    ],
  },
  {
    id: "2",
    name: "Lustgas from mark",
    value: 4000,
    color: "#AA7605",
    tooltipData: [
      {
        name: "Direkt lustgasavgång",
        value: 51,
        suffix: "%",
      },
      {
        name: "Indirekt lustgasavgång",
        value: 49,
        suffix: "%",
      },
    ],
  },
  {
    id: "3",
    name: "Koldioxid från mark",
    value: 200,
    color: "#AA7605",
    tooltipData: [
      {
        name: "Utsläpp från inköpta djur",
        value: 100,
        suffix: "%",
      },
    ],
  },
  {
    id: "4",
    name: "Energi",
    value: 100,
    color: "#AA7605",
    tooltipData: [
      {
        name: "Metanutsläpp",
        value: 93,
        suffix: "%",
      },
      {
        name: "Direkt lustgasavgång",
        value: 6.1,
        suffix: "%",
      },
      {
        name: "Indirekt lustgasavgång",
        value: 1,
        suffix: "%",
      },
    ],
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
