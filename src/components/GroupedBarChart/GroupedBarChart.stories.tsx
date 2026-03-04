import { StoryFn, Meta } from "@storybook/react-vite";
import GroupedBarChart, {
  GroupedBarChartCategory,
  GroupedBarChartGroup,
} from "./GroupedBarChart";
import { Box } from "@mui/material";

export default {
  title: "Agrosfär Exclusive/Grouped Bar Chart",
  component: GroupedBarChart,
  parameters: {
    componentSubtitle: "Grouped bar chart with 2-5 bars per group",
  },
} as Meta<typeof GroupedBarChart>;

const emissionCategories: GroupedBarChartCategory[] = [
  { name: "Energi", color: "#923F00" },
  { name: "Insatsvaror", color: "#A26100" },
  { name: "Koldioxid från mark", color: "#AA7605" },
  { name: "Lustgas från mark", color: "#E0D2B5" },
  { name: "Metan från mark", color: "#F2EDE1" },
];

const energiTooltip = [
  { label: "Drivmedel", value: "40%" },
  { label: "Smörjmedel", value: "5%" },
  { label: "El", value: "25%" },
  { label: "Bevattning", value: "10%" },
  { label: "Övrig uppvärmning", value: "15%" },
  { label: "Bränsle till tork", value: "5%" },
];

const insatsvarorTooltip = [
  { label: "Utsäde, lustgas", value: "10%" },
  { label: "Utsäde, koldioxid", value: "10%" },
  { label: "Inköpt mineralgödsel, lustgas", value: "25%" },
  { label: "Inköpt mineralgödsel, koldioxid", value: "20%" },
  { label: "Inköpt övrig organisk gödsel, lustgas", value: "5%" },
  { label: "Inköpt övrig organisk gödsel, koldioxid", value: "5%" },
  { label: "Kalk", value: "15%" },
  { label: "Växtskydd", value: "5%" },
  { label: "Ensilageplast", value: "5%" },
];

const koldioxidTooltip = [
  { label: "Koldioxid från kolhaltiga jordar", value: "60%" },
  { label: "Koldioxid från kalkning", value: "40%" },
];

const lustgasTooltip = [
  { label: "Direkt lustgasavgång", value: "65%" },
  { label: "Indirekt lustgasavgång", value: "35%" },
];

const metanTooltip = [
  { label: "Metan från risodling", value: "50%" },
  { label: "Metan från dränering", value: "50%" },
];

const sampleTooltips = [
  energiTooltip,
  insatsvarorTooltip,
  koldioxidTooltip,
  lustgasTooltip,
  metanTooltip,
];

const allGroups: GroupedBarChartGroup[] = [
  {
    id: "1",
    name: "Höstvete",
    unit: "kg CO2e/kg produkt",
    values: [0.1, 0.17, 0.1, 0.05, 0.19],
    tooltipData: sampleTooltips,
  },
  {
    id: "2",
    name: "Vårvete",
    unit: "kg CO2e/kg produkt",
    values: [0.08, 0.18, 0.09, 0.04, 0.17],
    tooltipData: sampleTooltips,
  },
  {
    id: "3",
    name: "Höstkorn",
    unit: "kg CO2e/kg produkt",
    values: [0.09, 0.16, 0.11, 0.05, 0.18],
    tooltipData: sampleTooltips,
  },
  {
    id: "4",
    name: "Vårkorn",
    unit: "kg CO2e/kg produkt",
    values: [0.07, 0.15, 0.08, 0.03, 0.12],
    tooltipData: sampleTooltips,
  },
  {
    id: "5",
    name: "Höstraps",
    unit: "kg CO2e/kg produkt",
    values: [0.12, 0.18, 0.13, 0.06, 0.2],
    tooltipData: sampleTooltips,
  },
  {
    id: "6",
    name: "Vårraps",
    unit: "kg CO2e/kg produkt",
    values: [0.11, 0.18, 0.12, 0.05, 0.19],
    tooltipData: sampleTooltips,
  },
  {
    id: "7",
    name: "Havre",
    unit: "kg CO2e/kg produkt",
    values: [0.06, 0.12, 0.07, 0.03, 0.14],
    tooltipData: sampleTooltips,
  },
  {
    id: "8",
    name: "Råg",
    unit: "kg CO2e/kg produkt",
    values: [0.08, 0.15, 0.09, 0.04, 0.16],
    tooltipData: sampleTooltips,
  },
];

const flagCategories: GroupedBarChartCategory[] = [
  { name: "Land management net CO2 emissions", color: "#A26100" },
  { name: "Land management non-CO2 emissions", color: "#F2EDE1" },
];

const flagGroups: GroupedBarChartGroup[] = [
  {
    id: "1",
    name: "Höstvete",
    unit: "kg CO2e/kg produkt",
    values: [0.22, 0.18],
  },
  {
    id: "2",
    name: "Vårvete",
    unit: "kg CO2e/kg produkt",
    values: [0.2, 0.16],
  },
  {
    id: "3",
    name: "Höstkorn",
    unit: "kg CO2e/kg produkt",
    values: [0.21, 0.17],
  },
  {
    id: "4",
    name: "Vårkorn",
    unit: "kg CO2e/kg produkt",
    values: [0.18, 0.14],
  },
  {
    id: "5",
    name: "Höstraps",
    unit: "kg CO2e/kg produkt",
    values: [0.25, 0.2],
  },
  {
    id: "6",
    name: "Vårraps",
    unit: "kg CO2e/kg produkt",
    values: [0.23, 0.19],
  },
  {
    id: "7",
    name: "Havre",
    unit: (
      <span>
        kg CO<sub>2</sub>e/kg produkt
      </span>
    ),
    values: [0.16, 0.12],
  },
  {
    id: "8",
    name: "Råg",
    unit: "kg CO2e/kg produkt",
    values: [0.19, 0.15],
  },
];

export const Default: StoryFn<typeof GroupedBarChart> = (args) => (
  <Box sx={{ backgroundColor: "#FFF", padding: 2, height: 400 }}>
    <GroupedBarChart {...args} />
  </Box>
);

Default.args = {
  categories: emissionCategories,
  groups: allGroups,
};

export const TwoGroups: StoryFn<typeof GroupedBarChart> = (args) => (
  <Box sx={{ backgroundColor: "#FFF", padding: 2, height: 400 }}>
    <GroupedBarChart {...args} />
  </Box>
);

TwoGroups.args = {
  categories: emissionCategories,
  groups: [allGroups[0], allGroups[7]],
};

export const FlagVariant: StoryFn<typeof GroupedBarChart> = (args) => (
  <Box sx={{ backgroundColor: "#FFF", padding: 2, height: 400 }}>
    <GroupedBarChart {...args} />
  </Box>
);

FlagVariant.args = {
  categories: flagCategories,
  groups: flagGroups,
};

export const NarrowWrapped: StoryFn<typeof GroupedBarChart> = (args) => (
  <Box sx={{ backgroundColor: "#FFF", padding: 2, height: 600, maxWidth: 400 }}>
    <GroupedBarChart {...args} />
  </Box>
);

NarrowWrapped.args = {
  categories: emissionCategories,
  groups: allGroups,
  responsive: true,
};
