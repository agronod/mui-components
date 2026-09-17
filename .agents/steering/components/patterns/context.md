# Component Implementation Patterns
Keywords: styled, shouldForwardProp, slotProps, mergeSlotProps, useMediaQuery, isMobile, sx, MUI wrapper, charts, SVG, recharts, svgr, icons, AgronodIcon

## Wrapping a MUI component

Extend the MUI props type, destructure the additions, spread the rest onto the MUI component, and merge into `slotProps` rather than replacing it so consumer customisations survive:

```tsx
export interface AgronodDialogProps extends DialogProps {
  caption?: string | ReactNode;
  closable?: boolean;
  dialogContentSx?: SxProps;
}

const AgronodDialog = ({ caption, closable = true, dialogContentSx, ...rest }: AgronodDialogProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Dialog
      {...rest}
      slotProps={{
        ...rest.slotProps,
        paper: mergeSlotProps(rest.slotProps?.paper, { sx: { borderRadius: isMobile ? "16px 16px 0 0" : 4 } }),
      }}
    >
```
Used in: `AgronodDialog.tsx`, `AgronodModalCard.tsx`, `AgronodInputs/*`.

- `mergeSlotProps` comes from `@mui/material/utils` (MUI v7 API; `PaperProps` and friends are the deprecated v5 shape).
- Responsive behaviour is `useMediaQuery(theme.breakpoints.down("sm"))`, never window width checks. `isSafari` from `react-device-detect` is the one browser sniff, in `AgronodCheckbox`.
- Text inside components goes through `AgronodTypography`, not raw `Typography`, so theme variants apply.

## Styled components with custom props

Filter custom props out of the DOM and use the v7 `variants` array instead of prop callbacks in the style object:

```tsx
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "visible",
})<AppBarProps>(({ theme }) => ({
  transition: theme.transitions.create(["margin", "width"]),
  variants: [{ props: ({ visible }) => !visible, style: { display: "none" } }],
}));
```
Used in: `Header.tsx`. Static one-off styling goes into `sx`; reusable styled pieces are module-level `Styled*` constants.

## Charts

Two approaches coexist and the choice is deliberate:

- `VerticalBarChart`, `HorizontalBarChart`, `GroupedBarChart`, `StackedChart` are hand-written SVG (`<g>`, `<rect>`, `useId` for unique ids, constants like `TICK_WIDTH`). They exist because recharts could not produce the exact Agrosfär layouts and hover/selection behaviour.
- `BarChart` and `PieChart` use recharts.

Chart data shape is `{ id, name, value, color }[]`. Selection and hover are controlled from outside via `selectedIds`, `onItemHover(id)`, `onItemClick(id)`. Numbers go through `round` from `components/utils`; values below 1 render as `<1` (PR #161). A `showSkeleton` prop renders MUI `Skeleton` while data loads.

## Icons and assets

- Brand SVG icons live in `src/assets/icons/*.svg` and are imported with the `?react` suffix (svgr), then registered by name in the `iconMap` of `AgronodIcon.tsx`, which wraps them in MUI `SvgIcon`. Adding an icon = drop the SVG, add one import and one map entry, add it to the `AgronodIcon` story.
- MUI icons are deep-imported (`@mui/icons-material/Close`) to keep tree-shaking predictable. These are externalized by the `/^@mui\//` rule in `vite.config.ts`.
- Logos are React components in `src/assets/*.tsx`; PNG backgrounds are exported as URLs from `assets/index.ts`.

## Rules

- MUST keep the `...rest` spread before the props the wrapper controls, so the wrapper wins where it must and the consumer wins elsewhere.
- MUST use `mergeSlotProps` when the wrapper sets `slotProps`; overwriting drops consumer `sx`.
- PREFER `theme.palette.*` tokens over hex literals in components; hex belongs in the theme files.
- AVOID adding a new charting library; extend the SVG charts or recharts.
- AVOID `any`; the lint config warns on it and the published `.d.ts` files inherit it.

## References
- Key files: `src/components/AgronodDialog/AgronodDialog.tsx`, `src/components/Header/Header.tsx`, `src/components/VerticalBarChart/VerticalBarChart.tsx`, `src/components/AgronodIcon/AgronodIcon.tsx`, `src/components/utils.ts`
- Related contexts: [[components/overview]], [[theme/overview]]
