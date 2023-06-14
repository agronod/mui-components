import { ComponentMeta } from "@storybook/react";
import Nyckeltal from "./Nyckeltal";
import NyckeltalGrid from "./NyckeltalGrid";

export default {
  title: "Components/Nyckeltal",
  argTypes: {},
  parameters: {
    componentSubtitle:
      "Nyckeltal is a combination of several components including: Card, Typography, NyckeltalGrid & Nyckeltal.",
  },
} as ComponentMeta<typeof Nyckeltal>;

export const NyckeltalDefault = () => (
  <NyckeltalGrid>
    {[
      { nyckeltal: "Nyckeltal", enhet: "kg/co2", varde: 200 },
      { nyckeltal: "Nyckeltal", enhet: "kg/co2", varde: 200 },
      { nyckeltal: "Nyckeltal", enhet: "kg/co2", varde: 200 },
      { nyckeltal: "Nyckeltal", enhet: "kg/co2", varde: 200 },
    ].map((values, index) => (
      <Nyckeltal item={values} key={index} />
    ))}
  </NyckeltalGrid>
);
