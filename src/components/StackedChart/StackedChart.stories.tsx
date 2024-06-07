import { StoryFn, Meta } from "@storybook/react";
import StackedChart, { StackedChartDataProps } from "./StackedChart";

export default {
  title: "Agrosfär exclusive/Stacked Chart",
  argTypes: {},
} as Meta<typeof StackedChart>;

const data: StackedChartDataProps[] = [
  {
    name: "Lustgas",
    percentage: "30",
    unit: "kg CO2e",
    value: 1234,
  },
  {
    name: "Metan",
    percentage: "30",
    unit: "kg CO2e",
    value: 1234,
  },
  {
    name: "Koldioxid",
    percentage: "20",
    unit: "kg CO2e",
    value: 1234,
  },
  {
    name: "Okänt",
    percentage: "20",
    unit: "kg CO2e",
    value: 1234,
  },
];

export const StackedChartDefault: StoryFn<typeof StackedChart> = ({
  ...args
}) => <StackedChart {...args} />;

StackedChartDefault.args = {
  data: data,
  headline: "Fördelning av utsläpp av växthusgaser",
};
