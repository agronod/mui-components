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
  },
  {
    id: "2",
    name: "Lustgas from mark",
    value: 4000,
  },
  {
    id: "3",
    name: "Koldioxid from mark",
    value: 200,
  },
  {
    id: "4",
    name: "Energi",
    value: 100,
  },
];

export const HorizontalBarChartDefault: StoryFn<typeof HorizontalBarChart> = ({
  ...args
}) => (
  <Box sx={{ backgroundColor: "#FFF", padding: 2 }}>
    <Box height={"100%"} width={"100%"}>
      <HorizontalBarChart aspectRatio={1.5} {...args} />
    </Box>
  </Box>
);

HorizontalBarChartDefault.args = {
  data: data,
};
