import { StoryFn, Meta } from "@storybook/react";
import PieChart, { PieChartData } from "./PieChart";
import { Box } from "@mui/material";

export default {
  title: "Components/PieChart",
  argTypes: {},
} as Meta<typeof PieChart>;

const data: PieChartData[] = [
  {
    id: "1",
    name: "Potatis",
    value: 2000,
    color: "#73140C",
  },
  {
    id: "2",
    name: "Majs",
    value: 3000,
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
    value: 100,
    color: "#AB8838",
  },
];

export const PieChartDefault: StoryFn<typeof PieChart> = ({ ...args }) => (
  <Box sx={{ backgroundColor: "#FFF" }}>
    <PieChart {...args} />
  </Box>
);

PieChartDefault.args = {
  data: data,
};
