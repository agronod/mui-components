import { Stack } from "@mui/material";
import { AgronodTypography } from "../components";
import {
  AgrosfarLogo,
  AgronodLogo,
  AgronodLogoDeprecated,
  AgrosfarBetaLogo,
  AgrosfarPilotLogo,
} from "./index";

const description = `
<p><code>AgrosfarLogo</code> and <code>AgronodLogo</code> are the current, correct logos — <code>AgrosfarLogo</code> is the one used by default in <code>Header</code>.</p>
<p>The other logos below are deprecated and kept only for reference; avoid using them in new work.</p>`;

export default {
  title: "Design Tokens/Logos",
  parameters: {
    componentSubtitle: "Agronod and Agrosfär logo assets",
    docs: {
      description: {
        component: description,
      },
    },
  },
};

const logos = [
  { name: "AgrosfarLogo", Logo: AgrosfarLogo, deprecated: false },
  { name: "AgronodLogo", Logo: AgronodLogo, deprecated: false },
  {
    name: "AgronodLogoDeprecated",
    Logo: AgronodLogoDeprecated,
    deprecated: true,
  },
  { name: "AgrosfarBetaLogo", Logo: AgrosfarBetaLogo, deprecated: true },
  { name: "AgrosfarPilotLogo", Logo: AgrosfarPilotLogo, deprecated: true },
];

export const Logos = () => (
  <Stack
    sx={{
      flexDirection: "row",
      gap: 4,
      flexWrap: "wrap",
    }}
  >
    {logos.map(({ name, Logo, deprecated }) => (
      <Stack
        key={name}
        sx={{
          alignItems: "center",
          gap: 1,
          p: 3,
          border: "1px solid",
          borderColor: "divider",
          borderRadius: 1,
          minWidth: 200,
        }}
      >
        <Logo />
        <AgronodTypography variant="subtitle2">{name}</AgronodTypography>
        {deprecated && (
          <AgronodTypography variant="caption" color="error">
            Deprecated
          </AgronodTypography>
        )}
      </Stack>
    ))}
  </Stack>
);
