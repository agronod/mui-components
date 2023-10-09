import { Box, Grid, Stack, Typography, useTheme } from "@mui/material";
import { Meta, ColorPalette, ColorItem } from "@storybook/blocks";

export default {
  title: "Base/ColorPalette",
  component: ColorPalette,
};

export const colors = () => {
  const theme = useTheme();
  return (
    <>
      <Typography variant="h3" sx={{ marginBottom: 2 }}>
        Theme Colors
      </Typography>
      <Typography variant="subtitle1">Primary</Typography>
      <Grid container spacing={1} sx={{ p: 1 }}>
        <Grid
          item
          xs={2}
          sx={(theme) => ({
            height: "80px",
            backgroundColor: theme.palette.primary.pastel,
          })}
        >
          <Typography variant="subtitle2">pastel</Typography>
          <Typography variant="body1">
            {theme.palette.primary.pastel}
          </Typography>
        </Grid>
        <Grid
          item
          xs={2}
          sx={(theme) => ({
            height: "80px",
            backgroundColor: theme.palette.primary.light,
          })}
        >
          <Typography variant="subtitle2">light</Typography>
          <Typography variant="body1">{theme.palette.primary.light}</Typography>
        </Grid>
        <Grid
          item
          xs={2}
          sx={(theme) => ({
            height: "80px",
            backgroundColor: theme.palette.primary.main,
          })}
        >
          <Typography variant="subtitle2">main</Typography>
          <Typography variant="body1">{theme.palette.primary.main}</Typography>
        </Grid>
        <Grid
          item
          xs={2}
          sx={(theme) => ({
            height: "80px",
            backgroundColor: theme.palette.primary.medium,
          })}
        >
          <Typography variant="subtitle2">medium</Typography>
          <Typography variant="body1">
            {theme.palette.primary.medium}
          </Typography>
        </Grid>
        <Grid
          item
          xs={2}
          sx={(theme) => ({
            height: "80px",
            backgroundColor: theme.palette.primary.dark,
          })}
        >
          <Typography variant="subtitle2">dark</Typography>
          <Typography variant="body1">{theme.palette.primary.dark}</Typography>
        </Grid>
      </Grid>
      <Typography variant="subtitle1">Secondary</Typography>
      <Grid container spacing={1} sx={{ p: 1 }}>
        <Grid
          item
          xs={2}
          sx={(theme) => ({
            height: "80px",
            backgroundColor: theme.palette.secondary.pastel,
          })}
        >
          <Typography variant="subtitle2">pastel</Typography>
          <Typography variant="body1">
            {theme.palette.secondary.pastel}
          </Typography>
        </Grid>
        <Grid
          item
          xs={2}
          sx={(theme) => ({
            height: "80px",
            backgroundColor: theme.palette.secondary.light,
          })}
        >
          <Typography variant="subtitle2">light</Typography>
          <Typography variant="body1">
            {theme.palette.secondary.light}
          </Typography>
        </Grid>
        <Grid
          item
          xs={2}
          sx={(theme) => ({
            height: "80px",
            backgroundColor: theme.palette.secondary.main,
          })}
        >
          <Typography variant="subtitle2">main</Typography>
          <Typography variant="body1">
            {theme.palette.secondary.main}
          </Typography>
        </Grid>
        <Grid
          item
          xs={2}
          sx={(theme) => ({
            height: "80px",
            backgroundColor: theme.palette.secondary.medium,
          })}
        >
          <Typography variant="subtitle2">medium</Typography>
          <Typography variant="body1">
            {theme.palette.secondary.medium}
          </Typography>
        </Grid>
        <Grid
          item
          xs={2}
          sx={(theme) => ({
            height: "80px",
            backgroundColor: theme.palette.secondary.dark,
          })}
        >
          <Typography variant="subtitle2">dark</Typography>
          <Typography variant="body1">
            {theme.palette.secondary.dark}
          </Typography>
        </Grid>
      </Grid>
      <Typography variant="subtitle1">Tertiary</Typography>
      <Grid container spacing={1} sx={{ p: 1 }}>
        <Grid
          item
          xs={2}
          sx={(theme) => ({
            height: "80px",
            backgroundColor: theme.palette.tertiary.pastel,
          })}
        >
          <Typography variant="subtitle2">pastel</Typography>
          <Typography variant="body1">
            {theme.palette.tertiary.pastel}
          </Typography>
        </Grid>
        <Grid
          item
          xs={2}
          sx={(theme) => ({
            height: "80px",
            backgroundColor: theme.palette.tertiary.light,
          })}
        >
          <Typography variant="subtitle2">light</Typography>
          <Typography variant="body1">
            {theme.palette.tertiary.light}
          </Typography>
        </Grid>
        <Grid
          item
          xs={2}
          sx={(theme) => ({
            height: "80px",
            backgroundColor: theme.palette.tertiary.main,
          })}
        >
          <Typography variant="subtitle2">main</Typography>
          <Typography variant="body1">{theme.palette.tertiary.main}</Typography>
        </Grid>
        <Grid
          item
          xs={2}
          sx={(theme) => ({
            height: "80px",
            backgroundColor: theme.palette.tertiary.medium,
          })}
        >
          <Typography variant="subtitle2">medium</Typography>
          <Typography variant="body1">
            {theme.palette.tertiary.medium}
          </Typography>
        </Grid>
        <Grid
          item
          xs={2}
          sx={(theme) => ({
            height: "80px",
            backgroundColor: theme.palette.tertiary.dark,
          })}
        >
          <Typography variant="subtitle2">dark</Typography>
          <Typography variant="body1">{theme.palette.tertiary.dark}</Typography>
        </Grid>
      </Grid>
      <Typography variant="h3" sx={{ marginBottom: 2, marginTop: 3 }}>
        Semantic Colors
      </Typography>
      <Typography variant="subtitle1">Error</Typography>
      <Grid container spacing={1} sx={{ p: 1 }}>
        <Grid
          item
          xs={2}
          sx={(theme) => ({
            height: "80px",
            backgroundColor: theme.palette.error.pastel,
          })}
        >
          <Typography variant="subtitle2">pastel</Typography>
          <Typography variant="body1">{theme.palette.error.pastel}</Typography>
        </Grid>
        <Grid
          item
          xs={2}
          sx={(theme) => ({
            height: "80px",
            backgroundColor: theme.palette.error.light,
          })}
        >
          <Typography variant="subtitle2">light</Typography>
          <Typography variant="body1">{theme.palette.error.light}</Typography>
        </Grid>
        <Grid
          item
          xs={2}
          sx={(theme) => ({
            height: "80px",
            backgroundColor: theme.palette.error.main,
          })}
        >
          <Typography variant="subtitle2">main</Typography>
          <Typography variant="body1">{theme.palette.error.main}</Typography>
        </Grid>
        <Grid
          item
          xs={2}
          sx={(theme) => ({
            height: "80px",
            backgroundColor: theme.palette.error.medium,
          })}
        >
          <Typography variant="subtitle2">medium</Typography>
          <Typography variant="body1">{theme.palette.error.medium}</Typography>
        </Grid>
        <Grid
          item
          xs={2}
          sx={(theme) => ({
            height: "80px",
            backgroundColor: theme.palette.error.dark,
          })}
        >
          <Typography variant="subtitle2">dark</Typography>
          <Typography variant="body1">{theme.palette.error.dark}</Typography>
        </Grid>
      </Grid>
      <Typography variant="subtitle1">Warning</Typography>
      <Grid container spacing={1} sx={{ p: 1 }}>
        <Grid
          item
          xs={2}
          sx={(theme) => ({
            height: "80px",
            backgroundColor: theme.palette.warning.pastel,
          })}
        >
          <Typography variant="subtitle2">pastel</Typography>
          <Typography variant="body1">
            {theme.palette.warning.pastel}
          </Typography>
        </Grid>
        <Grid
          item
          xs={2}
          sx={(theme) => ({
            height: "80px",
            backgroundColor: theme.palette.warning.light,
          })}
        >
          <Typography variant="subtitle2">light</Typography>
          <Typography variant="body1">{theme.palette.warning.light}</Typography>
        </Grid>
        <Grid
          item
          xs={2}
          sx={(theme) => ({
            height: "80px",
            backgroundColor: theme.palette.warning.main,
          })}
        >
          <Typography variant="subtitle2">main</Typography>
          <Typography variant="body1">{theme.palette.warning.main}</Typography>
        </Grid>
        <Grid
          item
          xs={2}
          sx={(theme) => ({
            height: "80px",
            backgroundColor: theme.palette.warning.medium,
          })}
        >
          <Typography variant="subtitle2">medium</Typography>
          <Typography variant="body1">
            {theme.palette.warning.medium}
          </Typography>
        </Grid>
        <Grid
          item
          xs={2}
          sx={(theme) => ({
            height: "80px",
            backgroundColor: theme.palette.warning.dark,
          })}
        >
          <Typography variant="subtitle2">dark</Typography>
          <Typography variant="body1">{theme.palette.warning.dark}</Typography>
        </Grid>
      </Grid>
      <Typography variant="subtitle1">Info</Typography>
      <Grid container spacing={1} sx={{ p: 1 }}>
        <Grid
          item
          xs={2}
          sx={(theme) => ({
            height: "80px",
            backgroundColor: theme.palette.info.pastel,
          })}
        >
          <Typography variant="subtitle2">pastel</Typography>
          <Typography variant="body1">{theme.palette.info.pastel}</Typography>
        </Grid>
        <Grid
          item
          xs={2}
          sx={(theme) => ({
            height: "80px",
            backgroundColor: theme.palette.info.light,
          })}
        >
          <Typography variant="subtitle2">light</Typography>
          <Typography variant="body1">{theme.palette.info.light}</Typography>
        </Grid>
        <Grid
          item
          xs={2}
          sx={(theme) => ({
            height: "80px",
            backgroundColor: theme.palette.info.main,
          })}
        >
          <Typography variant="subtitle2">main</Typography>
          <Typography variant="body1">{theme.palette.info.main}</Typography>
        </Grid>
        <Grid
          item
          xs={2}
          sx={(theme) => ({
            height: "80px",
            backgroundColor: theme.palette.info.medium,
          })}
        >
          <Typography variant="subtitle2">medium</Typography>
          <Typography variant="body1">{theme.palette.info.medium}</Typography>
        </Grid>
        <Grid
          item
          xs={2}
          sx={(theme) => ({
            height: "80px",
            backgroundColor: theme.palette.info.dark,
          })}
        >
          <Typography variant="subtitle2">dark</Typography>
          <Typography variant="body1">{theme.palette.info.dark}</Typography>
        </Grid>
      </Grid>
      <Typography variant="subtitle1">Success</Typography>
      <Grid container spacing={1} sx={{ p: 1 }}>
        <Grid
          item
          xs={2}
          sx={(theme) => ({
            height: "80px",
            backgroundColor: theme.palette.success.pastel,
          })}
        >
          <Typography variant="subtitle2">pastel</Typography>
          <Typography variant="body1">
            {theme.palette.success.pastel}
          </Typography>
        </Grid>
        <Grid
          item
          xs={2}
          sx={(theme) => ({
            height: "80px",
            backgroundColor: theme.palette.success.light,
          })}
        >
          <Typography variant="subtitle2">light</Typography>
          <Typography variant="body1">{theme.palette.success.light}</Typography>
        </Grid>
        <Grid
          item
          xs={2}
          sx={(theme) => ({
            height: "80px",
            backgroundColor: theme.palette.success.main,
          })}
        >
          <Typography variant="subtitle2">main</Typography>
          <Typography variant="body1">{theme.palette.success.main}</Typography>
        </Grid>
        <Grid
          item
          xs={2}
          sx={(theme) => ({
            height: "80px",
            backgroundColor: theme.palette.success.medium,
          })}
        >
          <Typography variant="subtitle2">medium</Typography>
          <Typography variant="body1">
            {theme.palette.success.medium}
          </Typography>
        </Grid>
        <Grid
          item
          xs={2}
          sx={(theme) => ({
            height: "80px",
            backgroundColor: theme.palette.success.dark,
          })}
        >
          <Typography variant="subtitle2">dark</Typography>
          <Typography variant="body1">{theme.palette.success.dark}</Typography>
        </Grid>
      </Grid>
      <Typography variant="h3" sx={{ marginBottom: 2, marginTop: 3 }}>
        Global Colors
      </Typography>
      <Typography variant="subtitle1">Text</Typography>
      <Grid container spacing={1} sx={{ p: 1 }}>
        <Grid
          item
          xs={2}
          sx={(theme) => ({
            height: "80px",
            backgroundColor: theme.palette.text.primary,
            color: theme.palette.common.white,
          })}
        >
          <Typography variant="subtitle2">text primary</Typography>
          <Typography variant="body1">{theme.palette.text.primary}</Typography>
        </Grid>
        <Grid
          item
          xs={2}
          sx={(theme) => ({
            height: "80px",
            backgroundColor: theme.palette.text.secondary,
            color: theme.palette.common.white,
          })}
        >
          <Typography variant="subtitle2">text secondary</Typography>
          <Typography variant="body1">
            {theme.palette.text.secondary}
          </Typography>
        </Grid>
        <Grid
          item
          xs={2}
          sx={(theme) => ({
            height: "80px",
            backgroundColor: theme.palette.text.disabled,
            color: theme.palette.common.white,
          })}
        >
          <Typography variant="subtitle2">text disabled</Typography>
          <Typography variant="body1">{theme.palette.text.disabled}</Typography>
        </Grid>
      </Grid>
      <Typography variant="subtitle1">Icon</Typography>
      <Grid container spacing={1} sx={{ p: 1 }}>
        <Grid
          item
          xs={2}
          sx={(theme) => ({
            height: "80px",
            backgroundColor: theme.palette.icon.primary,
            color: theme.palette.common.white,
          })}
        >
          <Typography variant="subtitle2">icon primary</Typography>
          <Typography variant="body1">{theme.palette.icon.primary}</Typography>
        </Grid>
        <Grid
          item
          xs={2}
          sx={(theme) => ({
            height: "80px",
            backgroundColor: theme.palette.text.secondary,
            color: theme.palette.common.white,
          })}
        >
          <Typography variant="subtitle2">icon secondary</Typography>
          <Typography variant="body1">
            {theme.palette.icon.secondary}
          </Typography>
        </Grid>
      </Grid>
      <Typography variant="subtitle1">Background</Typography>
      <Grid container spacing={1} sx={{ p: 1 }}>
        <Grid
          item
          xs={2}
          sx={(theme) => ({
            height: "80px",
            backgroundColor: theme.palette.background.page,
            border: "1px solid #000",
          })}
        >
          <Typography variant="subtitle2">background page</Typography>
          <Typography variant="body1">
            {theme.palette.background.page}
          </Typography>
        </Grid>

        <Grid
          item
          xs={2}
          sx={(theme) => ({
            height: "80px",
            backgroundColor: theme.palette.background.paper,
            border: "1px solid #000",
            borderLeft: "none",
          })}
        >
          <Typography variant="subtitle2">background paper</Typography>
          <Typography variant="body1">
            {theme.palette.background.paper}
          </Typography>
        </Grid>
        <Grid
          item
          xs={2}
          sx={(theme) => ({
            height: "80px",
            backgroundColor: theme.palette.background.card,
            border: "1px solid #000",
            borderLeft: "none",
          })}
        >
          <Typography variant="subtitle2">background card</Typography>
          <Typography variant="body1">
            {theme.palette.background.card}
          </Typography>
        </Grid>
        <Grid
          item
          xs={2}
          sx={(theme) => ({
            height: "80px",
            backgroundColor: theme.palette.background.overlay,
            border: "1px solid #000",
            borderLeft: "none",
          })}
        >
          <Typography variant="subtitle2">background overlay</Typography>
          <Typography variant="body1">
            {theme.palette.background.overlay}
          </Typography>
        </Grid>
      </Grid>
      <Typography variant="h3" sx={{ marginBottom: 2, marginTop: 3 }}>
        Divider
      </Typography>
      <Grid container spacing={1} sx={{ p: 1 }}>
        <Grid
          item
          xs={2}
          sx={(theme) => ({
            height: "80px",
            backgroundColor: theme.palette.divider,
          })}
        >
          <Typography variant="subtitle2">divider</Typography>
          <Typography variant="body1">{theme.palette.divider}</Typography>
        </Grid>
      </Grid>
      <Typography variant="h3" sx={{ marginBottom: 2, marginTop: 3 }}>
        Border
      </Typography>
      <Grid container spacing={1} sx={{ p: 1 }}>
        <Grid
          item
          xs={2}
          sx={(theme) => ({
            height: "80px",
            backgroundColor: theme.palette.border,
          })}
        >
          <Typography variant="subtitle2">border</Typography>
          <Typography variant="body1">{theme.palette.border}</Typography>
        </Grid>
      </Grid>
      <Typography variant="h3" sx={{ marginBottom: 2, marginTop: 3 }}>
        Disabled
      </Typography>
      <Grid container spacing={1} sx={{ p: 1 }}>
        <Grid
          item
          xs={2}
          sx={(theme) => ({
            height: "80px",
            backgroundColor: theme.palette.disabled,
          })}
        >
          <Typography variant="subtitle2">disabled</Typography>
          <Typography variant="body1">{theme.palette.disabled}</Typography>
        </Grid>
      </Grid>
    </>
  );
};
