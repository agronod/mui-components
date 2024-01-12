import { StoryFn, Meta } from "@storybook/react";
import PieChart, { PieChartData } from "./PieChart";

export default {
  title: "Components/PieChart",
  argTypes: {},
} as Meta<typeof PieChart>;

const data: PieChartData[] = [
  {
    id: "1",
    name: "Lustgas",
    value: 2000,
  },
  {
    id: "2",
    name: "Metan",
    value: 3000,
  },
  {
    id: "3",
    name: "Koldioxid",
    value: 200,
  },
  {
    id: "4",
    name: "Okänt",
    value: 100,
  },
];

export const PieChartDefault: StoryFn<typeof PieChart> = ({ ...args }) => (
  <PieChart {...args} />
);

PieChartDefault.args = {
  data: data,
  headline: "Fördelning av utsläpp av växthusgaser",
  unit: "kg CO2e",
};
