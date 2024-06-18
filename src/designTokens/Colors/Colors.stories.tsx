import { Stack, Typography, useTheme } from "@mui/material";
import ColorItem from "./ColorItem";

const description = `
<p><b>Primary</b> and <b>secondary</b> colors change depending on theme while other colors are common for all themes and are defined in <code>baseTheme.tsx</code>.</p>
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
      <Typography variant="h3" sx={{ marginBottom: 3 }}>
        Theme Colors
      </Typography>

      <Typography variant="subtitle1" sx={{ marginTop: 3, marginBottom: 0.5 }}>
        Primary
      </Typography>
      <Typography variant="subtitle3" sx={{ marginBottom: 3 }}>
        Code: <code>theme.palette.primary</code>
      </Typography>

      <Stack flexDirection="row" gap={1.5} flexWrap="wrap">
        <ColorItem name=".darkHover" code={theme.palette.primary.darkHover} />
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
      </Stack>

      <Typography variant="subtitle1" sx={{ marginTop: 3, marginBottom: 0.5 }}>
        Secondary
      </Typography>
      <Typography variant="subtitle3" sx={{ marginBottom: 3 }}>
        Code: <code>theme.palette.secondary</code>
      </Typography>
      <Stack flexDirection="row" gap={1.5} flexWrap="wrap">
        <ColorItem name=".dark" code={theme.palette.secondary.dark} />
        <ColorItem name=".medium" code={theme.palette.secondary.medium} />
        <ColorItem name=".main" code={theme.palette.secondary.main} />
        <ColorItem name=".light" code={theme.palette.secondary.light} />
        <ColorItem name=".pastel" code={theme.palette.secondary.pastel} />
      </Stack>

      <Typography variant="subtitle1" sx={{ marginTop: 3, marginBottom: 0.5 }}>
        Tertiary
      </Typography>
      <Typography variant="subtitle3" sx={{ marginBottom: 3 }}>
        Code: <code>theme.palette.tertiary</code>
      </Typography>
      <Stack flexDirection="row" gap={1.5} flexWrap="wrap">
        <ColorItem name=".dark" code={theme.palette.tertiary.dark} />
        <ColorItem name=".medium" code={theme.palette.tertiary.medium} />
        <ColorItem name=".main" code={theme.palette.tertiary.main} />
        <ColorItem name=".light" code={theme.palette.tertiary.light} />
        <ColorItem name=".pastel" code={theme.palette.tertiary.pastel} />
      </Stack>

      <Typography variant="h3" sx={{ marginBottom: 3, marginTop: 6 }}>
        Semantic Colors
      </Typography>

      <Typography variant="subtitle1" sx={{ marginTop: 3, marginBottom: 0.5 }}>
        Success
      </Typography>
      <Typography variant="subtitle3" sx={{ marginBottom: 3 }}>
        Code: <code>theme.palette.success</code>
      </Typography>
      <Stack flexDirection="row" gap={1.5} flexWrap="wrap">
        <ColorItem name=".darkHover" code={theme.palette.success.darkHover} />
        <ColorItem name=".dark" code={theme.palette.success.dark} />
        <ColorItem name=".medium" code={theme.palette.success.medium} />
        <ColorItem name=".main" code={theme.palette.success.main} />
        <ColorItem name=".light" code={theme.palette.success.light} />
        <ColorItem name=".pastel" code={theme.palette.success.pastel} />
      </Stack>

      <Typography variant="subtitle1" sx={{ marginTop: 3, marginBottom: 0.5 }}>
        Warning
      </Typography>
      <Typography variant="subtitle3" sx={{ marginBottom: 3 }}>
        Code: <code>theme.palette.warning</code>
      </Typography>
      <Stack flexDirection="row" gap={1.5} flexWrap="wrap">
        <ColorItem name=".dark" code={theme.palette.warning.dark} />
        <ColorItem name=".medium" code={theme.palette.warning.medium} />
        <ColorItem name=".main" code={theme.palette.warning.main} />
        <ColorItem name=".light" code={theme.palette.warning.light} />
        <ColorItem name=".pastel" code={theme.palette.warning.pastel} />
      </Stack>

      <Typography variant="subtitle1" sx={{ marginTop: 3, marginBottom: 0.5 }}>
        Error
      </Typography>
      <Typography variant="subtitle3" sx={{ marginBottom: 3 }}>
        Code: <code>theme.palette.error</code>
      </Typography>
      <Stack flexDirection="row" gap={1.5} flexWrap="wrap">
        <ColorItem name=".darkHover" code={theme.palette.error.darkHover} />
        <ColorItem name=".dark" code={theme.palette.error.dark} />
        <ColorItem name=".medium" code={theme.palette.error.medium} />
        <ColorItem name=".main" code={theme.palette.error.main} />
        <ColorItem name=".light" code={theme.palette.error.light} />
        <ColorItem name=".pastel" code={theme.palette.error.pastel} />
      </Stack>

      <Typography variant="subtitle1" sx={{ marginTop: 3, marginBottom: 0.5 }}>
        Info
      </Typography>
      <Typography variant="subtitle3" sx={{ marginBottom: 3 }}>
        Code: <code>theme.palette.info</code>
      </Typography>
      <Stack flexDirection="row" gap={1.5} flexWrap="wrap">
        <ColorItem name=".dark" code={theme.palette.info.dark} />
        <ColorItem name=".medium" code={theme.palette.info.medium} />
        <ColorItem name=".main" code={theme.palette.info.main} />
        <ColorItem name=".light" code={theme.palette.info.light} />
        <ColorItem name=".pastel" code={theme.palette.info.pastel} />
      </Stack>

      <Typography variant="h3" sx={{ marginBottom: 3, marginTop: 6 }}>
        Grays
      </Typography>
      <Typography variant="subtitle1" sx={{ marginTop: 3, marginBottom: 0.5 }}>
        Semantic
      </Typography>
      <Typography variant="subtitle3" sx={{ marginBottom: 3 }}>
        Code: <code>theme.palette</code>
      </Typography>
      <Stack flexDirection="row" gap={1.5} flexWrap="wrap">
        <ColorItem name=".border" code={theme.palette.border} />
        <ColorItem name=".divider" code={theme.palette.divider} />
        <ColorItem name=".buttonDisabled" code={theme.palette.buttonDisabled} />
      </Stack>

      <Typography variant="subtitle1" sx={{ marginTop: 3, marginBottom: 0.5 }}>
        Text
      </Typography>
      <Typography variant="subtitle3" sx={{ marginBottom: 3 }}>
        Code: <code>theme.palette.text</code>
      </Typography>
      <Stack flexDirection="row" gap={1.5} flexWrap="wrap">
        <ColorItem name=".primary" code={theme.palette.text.primary} />
        <ColorItem name=".secondary" code={theme.palette.text.secondary} />
        <ColorItem
          name=".secondaryTransparent"
          code={theme.palette.text.secondaryTransparent}
        />
        <ColorItem name=".disabled" code={theme.palette.text.disabled} />
        <ColorItem name=".white" code={theme.palette.text.white} />
      </Stack>

      <Typography variant="subtitle1" sx={{ marginTop: 3, marginBottom: 0.5 }}>
        Icon
      </Typography>
      <Typography variant="subtitle3" sx={{ marginBottom: 3 }}>
        Code: <code>theme.palette.icon</code>
      </Typography>
      <Stack flexDirection="row" gap={1.5} flexWrap="wrap">
        <ColorItem name=".primary" code={theme.palette.icon.primary} />
        <ColorItem name=".secondary" code={theme.palette.icon.secondary} />
        <ColorItem
          name=".secondaryTransparent"
          code={theme.palette.icon.secondaryTransparent}
        />
      </Stack>

      <Typography variant="subtitle1" sx={{ marginTop: 3, marginBottom: 0.5 }}>
        Background
      </Typography>
      <Typography variant="subtitle3" sx={{ marginBottom: 3 }}>
        Code: <code>theme.palette.background</code>
      </Typography>
      <Stack flexDirection="row" gap={1.5} flexWrap="wrap">
        <ColorItem name=".tooltip" code={theme.palette.background.tooltip} />
        <ColorItem name=".overlay" code={theme.palette.background.overlay} />
        <ColorItem name=".card" code={theme.palette.background.card} />
        <ColorItem name=".page" code={theme.palette.background.page} />
      </Stack>

      <Typography variant="subtitle1" sx={{ marginTop: 3, marginBottom: 0.5 }}>
        Input
      </Typography>
      <Typography variant="subtitle3" sx={{ marginBottom: 3 }}>
        Code: <code>theme.palette.input</code>
      </Typography>
      <Stack flexDirection="row" gap={1.5} flexWrap="wrap">
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

      <Typography variant="subtitle1" sx={{ marginTop: 3, marginBottom: 0.5 }}>
        General
      </Typography>
      <Typography variant="subtitle3" sx={{ marginBottom: 3 }}>
        Code: <code>theme.palette</code>
      </Typography>
      <Stack flexDirection="row" gap={1.5} flexWrap="wrap">
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
