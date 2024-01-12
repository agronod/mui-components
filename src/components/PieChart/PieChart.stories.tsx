import { StoryFn, Meta } from "@storybook/react";
import PieChart, { PieChartData } from "./PieChart";

export default {
  title: "Components/PieChart",
  argTypes: {},
} as Meta<typeof PieChart>;

const data: PieChartData[] = [
  {
    id: "1",
    name: "Potatis",
    value: 2000,
  },
  {
    id: "2",
    name: "Majs",
    value: 3000,
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

export const PieChartDefault: StoryFn<typeof PieChart> = ({ ...args }) => (
  <PieChart {...args} />
);

PieChartDefault.args = {
  data: data,
  headline: "Fördelning av utsläpp av växthusgaser",
  unit: "kg CO2e",
};
