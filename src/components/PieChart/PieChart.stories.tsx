import { StoryFn, Meta } from "@storybook/react";
import PieChart, { PieChartData } from "./PieChart";
import { Card, Grid } from "@mui/material";
import { AgronodTypography } from "../AgronodTypography";

export default {
  title: "Agrosfär Exclusive/Pie Chart",
  argTypes: {},
} as Meta<typeof PieChart>;

const data: PieChartData[] = [
  {
    id: "1",
    name: "Potatis",
    value: 2.1,
    color: "#73140C",
  },
  {
    id: "2",
    name: "Majs",
    value: 3.111,
    color: "#852411",
  },
  {
    id: "3",
    name: "Vete",
    value: 2.11,
    color: "#923F00",
  },
  {
    id: "4",
    name: "Raps",
    value: 1.0,
    color: "#A26100",
  },
  {
    id: "5",
    name: "Åkerböna",
    value: 0.9,
    color: "#AA7605",
  },
  {
    id: "6",
    name: "Okänt",
    value: 0.8,
    color: "#AB8838",
  },
];

export const PieChartDefault: StoryFn<typeof PieChart> = ({ ...args }) => (
  <Grid container spacing={2}>
    <Grid item xs={12} md={6}>
      <Card sx={{ padding: 2 }}>
        <AgronodTypography variant="subtitle2">
          Klimatavtryck växtodling
        </AgronodTypography>
        <AgronodTypography variant="caption">ton CO2e</AgronodTypography>
        <PieChart {...args} />
      </Card>
    </Grid>
  </Grid>
);

PieChartDefault.args = {
  data: data,
};

export const PieChartDefaultPercentage: StoryFn<typeof PieChart> = ({
  ...args
}) => (
  <Grid container spacing={2}>
    <Grid item xs={12} md={6}>
      <Card sx={{ padding: 2 }}>
        <AgronodTypography variant="subtitle2">
          Klimatavtryck växtodling
        </AgronodTypography>
        <AgronodTypography variant="caption">ton CO2e</AgronodTypography>
        <PieChart {...args} />
      </Card>
    </Grid>
  </Grid>
);

PieChartDefaultPercentage.args = {
  data: data,
  showAsPercentage: true,
};

export const PieChartDefaultSortedAsc: StoryFn<typeof PieChart> = ({
  ...args
}) => (
  <Grid container spacing={2}>
    <Grid item xs={12} md={6}>
      <Card sx={{ padding: 2 }}>
        <AgronodTypography variant="subtitle2">
          Klimatavtryck växtodling
        </AgronodTypography>
        <AgronodTypography variant="caption">ton CO2e</AgronodTypography>
        <PieChart {...args} />
      </Card>
    </Grid>
  </Grid>
);

PieChartDefaultSortedAsc.args = {
  data: data,
  sort: "asc",
};

export const PieChartDefaultUnsorted: StoryFn<typeof PieChart> = ({
  ...args
}) => (
  <Grid container spacing={2}>
    <Grid item xs={12} md={6}>
      <Card sx={{ padding: 2 }}>
        <AgronodTypography variant="subtitle2">
          Klimatavtryck växtodling
        </AgronodTypography>
        <AgronodTypography variant="caption">ton CO2e</AgronodTypography>
        <PieChart {...args} />
      </Card>
    </Grid>
  </Grid>
);

PieChartDefaultUnsorted.args = {
  data: data,
  sort: "none",
};
