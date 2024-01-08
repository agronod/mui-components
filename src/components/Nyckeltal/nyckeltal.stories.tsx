import { Meta } from "@storybook/react";
import Nyckeltal from "./Nyckeltal";
import NyckeltalGrid from "./NyckeltalGrid";

export default {
  title: "Components/Nyckeltal",
  argTypes: {},
  parameters: {
    componentSubtitle:
      "Nyckeltal is a combination of several components including: Card, Typography, NyckeltalGrid & Nyckeltal.",
  },
} as Meta<typeof Nyckeltal>;

export const NyckeltalDefault = () => (
  <NyckeltalGrid>
    {[
      {
        nyckeltal: "Nyckeltal",
        enhet: "kg/co2",
        varde: 200,
        kommentar: "Tooltip text",
      },
      {
        nyckeltal: "Nyckeltal",
        enhet: "kg/co2",
        varde: 200.2,
        antalDecimaler: 1,
        kommentar: "Tooltip text 2",
      },
      {
        nyckeltal: "Nyckeltal",
        enhet: "kg/co2",
        varde: 200.22,
        antalDecimaler: 2,
        kommentar: "Tooltip text 2",
      },
      { nyckeltal: "Nyckeltal", enhet: "kg/co2", varde: 0.243 },
      { nyckeltal: "Nyckeltal", enhet: "kg/co2", varde: 2.2 },
    ].map((values, index) => (
      <Nyckeltal item={values} key={index} />
    ))}
  </NyckeltalGrid>
);
