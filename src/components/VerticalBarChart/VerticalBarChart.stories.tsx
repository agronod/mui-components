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
    value: 4000,
  },
];

const data2: VerticalBarChartData[] = [
  {
    id: "1",
    name: "Potatis",
    value: 2,
  },
  {
    id: "2",
    name: "Helsäd (Korn/Havre50%50%)",
    value: 4,
  },
  {
    id: "3",
    name: "Vete",
    value: 3.5,
  },
  {
    id: "4",
    name: "Raps",
    value: 2.1,
  },
  {
    id: "5",
    name: "Åkerböna",
    value: 2,
  },
  {
    id: "6",
    name: "Okänt",
    value: 4,
  },
];

export const VerticalBarChartDefault: StoryFn<typeof VerticalBarChart> = ({
  ...args
}) => (
  <Box sx={{ backgroundColor: "#FFF", padding: 2 }}>
    <Box width={"100%"}>
      <VerticalBarChart aspectRatio={1.5} {...args} />
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
    <Box width={300}>
      <VerticalBarChart aspectRatio={2} {...args} />
    </Box>
  </Box>
);

VerticalBarChartSelected.args = {
  data: data2,
  selectedId: "3",
};
