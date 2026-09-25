import React from "react";
import { Stack, useTheme } from "@mui/material";
import ColorItem from "./ColorItem";
import { AgronodTypography } from "../../components";
import {
  dataVizRampNames,
  dataVizSteps,
} from "../../components/Theme/dataVizPalette";

const description = `
<p><b>Primary</b> colors change depending on theme (Agronod, Admin, Agrosfär) while other colors, including the data-visualization palette, are common for all themes and are defined in <code>baseTheme.ts</code>.</p>
<p>Colors are used as variables in <code>sx</code> property of component.</p>
<p>They can be also accessed outside <b>sx</b> via <code>const theme = useTheme();</code></p>`;

export default {
  title: "Design Tokens/Color Palette",
  parameters: {
    componentSubtitle: "Agronod-specific colors used in all projects",
    docs: {
      description: {
        component: description,
      },
    },
  },
};

export const ColorPalette = () => {
  const theme = useTheme();
  return (
    <>
      <AgronodTypography variant="h3" sx={{ marginBottom: 3 }}>
        Theme Colors
      </AgronodTypography>

      <AgronodTypography
        variant="subtitle1"
        sx={{ marginTop: 3, marginBottom: 0.5 }}
      >
        Primary
      </AgronodTypography>
      <AgronodTypography variant="subtitle3" sx={{ marginBottom: 3 }}>
        Code: <code>theme.palette.primary</code>
      </AgronodTypography>

      <Stack
        sx={{
          flexDirection: "row",
          gap: 1.5,
          flexWrap: "wrap"
        }}>
        {theme.palette.primary.darkHover && (
          <ColorItem name=".darkHover" code={theme.palette.primary.darkHover} />
        )}
        <ColorItem name=".dark" code={theme.palette.primary.dark} />
        {theme.palette.primary.mediumHover && (
          <ColorItem
            name=".mediumHover"
            code={theme.palette.primary.mediumHover}
          />
        )}
        <ColorItem name=".medium" code={theme.palette.primary.medium} />
        {theme.palette.primary.mainHover && (
          <ColorItem name=".mainHover" code={theme.palette.primary.mainHover} />
        )}
        <ColorItem name=".main" code={theme.palette.primary.main} />
        <ColorItem name=".light" code={theme.palette.primary.light} />
        <ColorItem name=".pastel" code={theme.palette.primary.pastel} />
        <ColorItem name=".hint" code={theme.palette.primary.hint} />

      </Stack>

      <AgronodTypography
        variant="subtitle1"
        sx={{ marginTop: 3, marginBottom: 0.5 }}
      >
        Secondary
      </AgronodTypography>
      <AgronodTypography variant="subtitle3" sx={{ marginBottom: 3 }}>
        Code: <code>theme.palette.secondary</code>
      </AgronodTypography>
      <Stack
        sx={{
          flexDirection: "row",
          gap: 1.5,
          flexWrap: "wrap"
        }}>
        <ColorItem name=".dark" code={theme.palette.secondary.dark} />
        <ColorItem name=".medium" code={theme.palette.secondary.medium} />
        <ColorItem name=".main" code={theme.palette.secondary.main} />
        <ColorItem name=".light" code={theme.palette.secondary.light} />
        <ColorItem name=".pastel" code={theme.palette.secondary.pastel} />
        <ColorItem name=".hint" code={theme.palette.secondary.hint} />

      </Stack>

      <AgronodTypography variant="h3" sx={{ marginBottom: 3, marginTop: 6 }}>
        Semantic Colors
      </AgronodTypography>

      <AgronodTypography
        variant="subtitle1"
        sx={{ marginTop: 3, marginBottom: 0.5 }}
      >
        Success
      </AgronodTypography>
      <AgronodTypography variant="subtitle3" sx={{ marginBottom: 3 }}>
        Code: <code>theme.palette.success</code>
      </AgronodTypography>
      <Stack
        sx={{
          flexDirection: "row",
          gap: 1.5,
          flexWrap: "wrap"
        }}>
        <ColorItem name=".darkHover" code={theme.palette.success.darkHover} />
        <ColorItem name=".dark" code={theme.palette.success.dark} />
        <ColorItem name=".medium" code={theme.palette.success.medium} />
        <ColorItem name=".main" code={theme.palette.success.main} />
        <ColorItem name=".light" code={theme.palette.success.light} />
        <ColorItem name=".pastel" code={theme.palette.success.pastel} />
        <ColorItem name=".hint" code={theme.palette.success.hint} />
      </Stack>

      <AgronodTypography
        variant="subtitle1"
        sx={{ marginTop: 3, marginBottom: 0.5 }}
      >
        Warning
      </AgronodTypography>
      <AgronodTypography variant="subtitle3" sx={{ marginBottom: 3 }}>
        Code: <code>theme.palette.warning</code>
      </AgronodTypography>
      <Stack
        sx={{
          flexDirection: "row",
          gap: 1.5,
          flexWrap: "wrap"
        }}>
        <ColorItem name=".dark" code={theme.palette.warning.dark} />
        <ColorItem name=".medium" code={theme.palette.warning.medium} />
        <ColorItem name=".main" code={theme.palette.warning.main} />
        <ColorItem name=".light" code={theme.palette.warning.light} />
        <ColorItem name=".pastel" code={theme.palette.warning.pastel} />
        <ColorItem name=".hint" code={theme.palette.warning.hint} />
      </Stack>

      <AgronodTypography
        variant="subtitle1"
        sx={{ marginTop: 3, marginBottom: 0.5 }}
      >
        Error
      </AgronodTypography>
      <AgronodTypography variant="subtitle3" sx={{ marginBottom: 3 }}>
        Code: <code>theme.palette.error</code>
      </AgronodTypography>
      <Stack
        sx={{
          flexDirection: "row",
          gap: 1.5,
          flexWrap: "wrap"
        }}>
        <ColorItem name=".darkHover" code={theme.palette.error.darkHover} />
        <ColorItem name=".dark" code={theme.palette.error.dark} />
        <ColorItem name=".medium" code={theme.palette.error.medium} />
        <ColorItem name=".main" code={theme.palette.error.main} />
        <ColorItem name=".light" code={theme.palette.error.light} />
        <ColorItem name=".pastel" code={theme.palette.error.pastel} />
        <ColorItem name=".hint" code={theme.palette.error.hint} />
      </Stack>

      <AgronodTypography
        variant="subtitle1"
        sx={{ marginTop: 3, marginBottom: 0.5 }}
      >
        Info
      </AgronodTypography>
      <AgronodTypography variant="subtitle3" sx={{ marginBottom: 3 }}>
        Code: <code>theme.palette.info</code>
      </AgronodTypography>
      <Stack
        sx={{
          flexDirection: "row",
          gap: 1.5,
          flexWrap: "wrap"
        }}>
        <ColorItem name=".dark" code={theme.palette.info.dark} />
        <ColorItem name=".medium" code={theme.palette.info.medium} />
        <ColorItem name=".main" code={theme.palette.info.main} />
        <ColorItem name=".light" code={theme.palette.info.light} />
        <ColorItem name=".pastel" code={theme.palette.info.pastel} />
        <ColorItem name=".hint" code={theme.palette.info.hint} />
      </Stack>

      <AgronodTypography variant="h3" sx={{ marginBottom: 1, marginTop: 6 }}>
        Data Visualization
      </AgronodTypography>
      <AgronodTypography variant="body2" sx={{ marginBottom: 3 }}>
        Chart-only colours, shared by all themes. Steps follow Figma: 700 is
        darkest, 100 lightest, 600 is the series colour. For nominal series
        assign in the order gold, blue, brown, coral, green, purple and never
        cycle; past four series fold the tail into <code>other</code>.
      </AgronodTypography>
      {dataVizRampNames.map((name) => (
        <React.Fragment key={name}>
          <AgronodTypography
            variant="subtitle1"
            sx={{ marginTop: 3, marginBottom: 0.5, textTransform: "capitalize" }}
          >
            {name}
          </AgronodTypography>
          <AgronodTypography variant="subtitle3" sx={{ marginBottom: 3 }}>
            Code: <code>theme.palette.dataViz.{name}</code>
          </AgronodTypography>
          <Stack
            sx={{
              flexDirection: "row",
              gap: 1.5,
              flexWrap: "wrap"
            }}>
            {dataVizSteps.map((step) => (
              <ColorItem
                key={step}
                name={`[${step}]`}
                code={theme.palette.dataViz[name][step]}
              />
            ))}
          </Stack>
        </React.Fragment>
      ))}
      <AgronodTypography
        variant="subtitle1"
        sx={{ marginTop: 3, marginBottom: 0.5 }}
      >
        Other
      </AgronodTypography>
      <AgronodTypography variant="subtitle3" sx={{ marginBottom: 3 }}>
        Code: <code>theme.palette.dataViz.other</code>
      </AgronodTypography>
      <Stack
        sx={{
          flexDirection: "row",
          gap: 1.5,
          flexWrap: "wrap"
        }}>
        <ColorItem name=".other" code={theme.palette.dataViz.other} />
      </Stack>

      <AgronodTypography variant="h3" sx={{ marginBottom: 3, marginTop: 6 }}>
        Grays
      </AgronodTypography>
      <AgronodTypography
        variant="subtitle1"
        sx={{ marginTop: 3, marginBottom: 0.5 }}
      >
        Semantic
      </AgronodTypography>
      <AgronodTypography variant="subtitle3" sx={{ marginBottom: 3 }}>
        Code: <code>theme.palette</code>
      </AgronodTypography>
      <Stack
        sx={{
          flexDirection: "row",
          gap: 1.5,
          flexWrap: "wrap"
        }}>
        <ColorItem name=".border" code={theme.palette.border} />
        <ColorItem name=".divider" code={theme.palette.divider} />
        <ColorItem name=".buttonDisabled" code={theme.palette.buttonDisabled} />
      </Stack>

      <AgronodTypography
        variant="subtitle1"
        sx={{ marginTop: 3, marginBottom: 0.5 }}
      >
        Text
      </AgronodTypography>
      <AgronodTypography variant="subtitle3" sx={{ marginBottom: 3 }}>
        Code: <code>theme.palette.text</code>
      </AgronodTypography>
      <Stack
        sx={{
          flexDirection: "row",
          gap: 1.5,
          flexWrap: "wrap"
        }}>
        <ColorItem name=".primary" code={theme.palette.text.primary} />
        <ColorItem name=".secondary" code={theme.palette.text.secondary} />
        <ColorItem
          name=".secondaryTransparent"
          code={theme.palette.text.secondaryTransparent}
        />
        <ColorItem name=".disabled" code={theme.palette.text.disabled} />
        <ColorItem name=".white" code={theme.palette.text.white} />
      </Stack>

      <AgronodTypography
        variant="subtitle1"
        sx={{ marginTop: 3, marginBottom: 0.5 }}
      >
        Icon
      </AgronodTypography>
      <AgronodTypography variant="subtitle3" sx={{ marginBottom: 3 }}>
        Code: <code>theme.palette.icon</code>
      </AgronodTypography>
      <Stack
        sx={{
          flexDirection: "row",
          gap: 1.5,
          flexWrap: "wrap"
        }}>
        <ColorItem name=".primary" code={theme.palette.icon.primary} />
        <ColorItem name=".secondary" code={theme.palette.icon.secondary} />
        <ColorItem
          name=".secondaryTransparent"
          code={theme.palette.icon.secondaryTransparent}
        />
      </Stack>

      <AgronodTypography
        variant="subtitle1"
        sx={{ marginTop: 3, marginBottom: 0.5 }}
      >
        Background
      </AgronodTypography>
      <AgronodTypography variant="subtitle3" sx={{ marginBottom: 3 }}>
        Code: <code>theme.palette.background</code>
      </AgronodTypography>
      <Stack
        sx={{
          flexDirection: "row",
          gap: 1.5,
          flexWrap: "wrap"
        }}>
        <ColorItem name=".tooltip" code={theme.palette.background.tooltip} />
        <ColorItem name=".overlay" code={theme.palette.background.overlay} />
        <ColorItem name=".card" code={theme.palette.background.card} />
        <ColorItem name=".page" code={theme.palette.background.page} />
      </Stack>

      <AgronodTypography
        variant="subtitle1"
        sx={{ marginTop: 3, marginBottom: 0.5 }}
      >
        Input
      </AgronodTypography>
      <AgronodTypography variant="subtitle3" sx={{ marginBottom: 3 }}>
        Code: <code>theme.palette.input</code>
      </AgronodTypography>
      <Stack
        sx={{
          flexDirection: "row",
          gap: 1.5,
          flexWrap: "wrap"
        }}>
        <ColorItem name=".border" code={theme.palette.input.border} />
        <ColorItem
          name=".borderDisabled"
          code={theme.palette.input.borderDisabled}
        />
        <ColorItem
          name=".backgroundDisabled"
          code={theme.palette.input.backgroundDisabled}
        />
        <ColorItem name=".background" code={theme.palette.input.background} />
      </Stack>

      <AgronodTypography
        variant="subtitle1"
        sx={{ marginTop: 3, marginBottom: 0.5 }}
      >
        General
      </AgronodTypography>
      <AgronodTypography variant="subtitle3" sx={{ marginBottom: 3 }}>
        Code: <code>theme.palette</code>
      </AgronodTypography>
      <Stack
        sx={{
          flexDirection: "row",
          gap: 1.5,
          flexWrap: "wrap"
        }}>
        <ColorItem name=".black" code={theme.palette.black} />
        <ColorItem name=".gray800" code={theme.palette.gray800} />
        <ColorItem name=".gray700" code={theme.palette.gray700} />
        <ColorItem name=".gray600" code={theme.palette.gray600} />
        <ColorItem name=".gray500" code={theme.palette.gray500} />
        <ColorItem name=".gray400" code={theme.palette.gray400} />
        <ColorItem name=".gray300" code={theme.palette.gray300} />
        <ColorItem name=".gray200" code={theme.palette.gray200} />
        <ColorItem name=".gray100" code={theme.palette.gray100} />
        <ColorItem name=".gray50" code={theme.palette.gray50} />
        <ColorItem name=".white" code={theme.palette.white} />
        <ColorItem name=".white36" code={theme.palette.white36} />
        <ColorItem name=".white50" code={theme.palette.white50} />
      </Stack>
    </>
  );
};
