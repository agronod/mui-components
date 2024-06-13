import { StoryFn, Meta } from "@storybook/react";
import BarChart from "./BarChart";
import { Box } from "@mui/material";

export default {
  title: "Agrosfär Exclusive/BarChart",
  argTypes: {
    colorScheme: {
      control: "radio",
      options: ["primary", "secondary", "tertiary"],
    },
  },
} as Meta<typeof BarChart>;

const chartData =
  [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      value: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      value: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      value: 2290,
    },
  ] || [];
const chartDataStacked =
  [
    {
      name: "Page A",
      value: [2400, 2000],
    },
    {
      name: "Page B",
      value: [2500, 2000],
    },
    {
      name: "Page C",
      value: [2400, 1000],
    },
  ] || [];

export const BarChartDefault: StoryFn<typeof BarChart> = ({ ...args }) => (
  <Box sx={{ height: "400px", width: "600px" }}>
    <BarChart {...args} />
  </Box>
);

BarChartDefault.args = {
  data: chartData,
  barOptions: {
    radius: [20, 20, 0, 0],
  },
  barCellsOptions: [...chartData].map(() => ({
    fill: "#59b87f",
  })),
  yAxisOptions: {
    hide: true,
  },
  xAxisOptions: {
    height: 54,
    tickMargin: 20,
    interval: 0,
  },
  TooltipContent: ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <Box
          sx={{
            backgroundColor: "white",
            padding: "16px",
            borderRadius: "8px",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.05)",
          }}
        >
          <Box>{label}</Box>
          <Box>{payload[0].value}</Box>
        </Box>
      );
    }

    return null;
  },
};

export const BarChartStacked: StoryFn<typeof BarChart> = ({ ...args }) => (
  <Box sx={{ height: "400px", width: "600px" }}>
    <BarChart {...args} />
  </Box>
);

BarChartStacked.args = {
  data: chartDataStacked,
  barOptions: {
    radius: [20, 20, 0, 0],
  },
  barCellsOptions: [...chartData].map(() => [
    {
      fill: "#123F25",
    },
    {
      fill: "#59b87f",
    },
  ]),
  yAxisOptions: {
    hide: true,
  },
  xAxisOptions: {
    height: 54,
    tickMargin: 20,
    interval: 0,
  },
  TooltipContent: ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <Box
          sx={{
            backgroundColor: "white",
            padding: "16px",
            borderRadius: "8px",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.05)",
          }}
        >
          <Box>{label}</Box>
          <Box>{payload.reduce((acc: number, p: any) => acc + p.value, 0)}</Box>
        </Box>
      );
    }

    return null;
  },
};
export const BarCharWithColorScheme: StoryFn<typeof BarChart> = ({
  ...args
}) => (
  <Box sx={{ height: "400px", width: "600px" }}>
    <BarChart {...args} />
  </Box>
);
BarCharWithColorScheme.args = {
  data: chartData,
  barOptions: {
    radius: [20, 20, 0, 0],
  },
  barCellsOptions: [...chartData].map(() => ({
    fill: "#59b87f",
  })),
  yAxisOptions: {
    hide: true,
  },
  xAxisOptions: {
    height: 54,
    tickMargin: 20,
    interval: 0,
  },
  colorScheme: "primary",
  TooltipContent: ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <Box
          sx={{
            backgroundColor: "white",
            padding: "16px",
            borderRadius: "8px",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.05)",
          }}
        >
          <Box>{label}</Box>
          <Box>{payload[0].value}</Box>
        </Box>
      );
    }

    return null;
  },
};
