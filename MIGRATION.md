# Migration guide for consuming applications

Written for the engineer or AI agent upgrading an application that depends on `@agronod/mui-components`. Each section is a complete, ordered procedure for one library release. Run the steps top to bottom; every step says how to find the affected code and how to verify the result.

This file ships inside the npm package, so after installing the new version it is available at `node_modules/@agronod/mui-components/MIGRATION.md` in the consuming app. The copy in the GitHub repository root is the same file.

Conventions used below:

- `<app>` is the root of the consuming application, the directory containing its `package.json`.
- Commands assume npm. Substitute `pnpm`/`yarn` equivalents where the app uses them.
- "Verify" means the command exits 0 and, where stated, a grep returns no lines.

---

## 2.0.0 — Material UI 9

Release date and exact version are set by the release workflow when the `feat/mui-9` branch merges. Until then this section describes the pre-release published from that branch.

### What changes for the application

| Change | Action required |
|---|---|
| Peer `@mui/material`, `@mui/icons-material`, `@mui/utils` move from `^7` to `^9` | Upgrade the app's own MUI packages to 9. All MUI 9 breaking changes then apply to the app's own MUI code. This is the bulk of the work. |
| `AgronodTextField` / `AgronodNumberField` keep accepting `InputProps` and `inputProps` | **No change.** The library maps them to MUI 9 `slotProps` internally. Do not rewrite these call sites. |
| React stays at 18 | **No change.** MUI 9 supports React 17, 18 and 19. Do not upgrade React as part of this migration. |
| Browser floor rises to Chrome 117, Firefox 121, Safari 17, Edge 121 | Check the app's `browserslist` / analytics. Informational unless the app promises older browsers. |

No component exported by this library changes its props or behaviour in 2.0.0 beyond what MUI 9 itself changes. If `tsc` reports an error on an `Agronod*` component prop, report it as a library bug rather than rewriting the app.

### Step 1 — Preconditions

```bash
cd <app>
node --version          # must be >= 22.12 (library engines field); 24 recommended
git status --short      # must be clean; commit or stash first
grep -E '"(react|react-dom)":' package.json   # must be ^18.x; do not change
```

Stop if the app is not already on `@mui/material` 7.x. Apps on MUI 5 must first take the MUI 7 upgrade (library 1.24.0, PR #147 in this repo), which is a separate procedure not covered here.

### Step 2 — Bump packages

```bash
npm install @agronod/mui-components@2 \
  @mui/material@^9 @mui/icons-material@^9 @mui/utils@^9
```

To test the pre-release before it is merged, install it by exact version or by dist-tag instead of `@2`: `npm install @agronod/mui-components@next` (pre-releases are published under `next`, never `latest`).

If the app declares `@mui/lab`, `@mui/x-*` or `@mui/system`, upgrade them to their MUI 9 compatible majors in the same command (`@mui/system@^9`; check the MUI X release notes for the matching `@mui/x-*` major). Then:

```bash
npm ls @mui/material @mui/utils react react-is 2>&1 | grep -E "invalid|missing|ERR" && echo "FIX PEER TREE" || echo "peer tree ok"
```

Verify: the grep prints `peer tree ok`. If it prints `FIX PEER TREE`, run `npm ls <package>` for the named package and resolve the duplicate before continuing.

### Step 3 — Run the MUI codemods

These rewrite the mechanical part. Run all three, then review the diff before anything else.

```bash
npx @mui/codemod@latest deprecations/all src
npx @mui/codemod@latest v9.0.0/system-props src
npx @mui/codemod@latest v9.0.0/system-props src -- --jsx=AgronodTypography,AgronodLink
git diff --stat
```

What they change:

- `deprecations/all`: `PaperProps`, `InputProps`, `InputLabelProps`, `componentsProps`, `MenuListProps`, `TransitionComponent`, `BackdropProps`, and similar props on **MUI** components become `slots` / `slotProps`. It also rewrites deprecated combined CSS classes such as `.MuiButton-containedPrimary` and `.MuiTab-iconWrapper`. It does **not** rewrite `PaperProps` on `Menu` or `MenuProps.PaperProps` on `Select`; those are in Step 4f.
- `v9.0.0/system-props` (default run): `mt=`, `mb=`, `p=`, `gap=`, `color=`, `display=` and other system props on `Box`, `Stack`, `Typography`, `Link`, `Grid` move into `sx`.
- `v9.0.0/system-props` with `--jsx=…`: the same rewrite for this library's `AgronodTypography` and `AgronodLink`, which pass their props straight to MUI `Typography` / `Link`. Without this run, `<AgronodTypography mb={2} fontWeight={600}>` compiles in JavaScript but the props reach the DOM as unknown attributes and the styling is lost; in TypeScript it is a type error. Measured in agrosphere-web on 2026-09-17: 21 such sites in 15 files.

Expect a large diff in form-heavy apps. In the Agronod repos measured on 2026-09-17 this was roughly 250 lines in agrosphere-web and 380 in agrokoll for system props alone.

Review rule: the codemod may also rewrite `InputProps` / `inputProps` on `AgronodTextField` and `AgronodNumberField` into `slotProps`. Both forms work with library 2.0.0, so either keep or revert those hunks, but be consistent within a file.

### Step 4 — Hand fixes the codemods do not cover

Run each grep. For every hit, apply the stated fix. A grep returning no lines means that item is done.

**4a. `disableEscapeKeyDown` on Dialog / Modal — prop removed**

```bash
grep -rn "disableEscapeKeyDown" src
```
Fix: remove the prop. If the dialog must not close on Escape, filter in the handler:
```tsx
onClose={(event, reason) => { if (reason === "escapeKeyDown") return; handleClose(); }}
```

**4b. Autocomplete `renderTags` — renamed**

```bash
grep -rn "renderTags" src
```
Fix: rename to `renderValue`. The callback signature is unchanged: `(value, getItemProps) => …`. If the callback's second parameter is named `getTagProps`, rename it for clarity; the runtime name is irrelevant. If the app uses the `useAutocomplete` hook directly, also rename `getTagProps` → `getItemProps` and `focusedTag` → `focusedItem`.

**4c. Removed icon exports — 23 legacy `*Outline` names**

```bash
grep -rnE "icons-material/(AddCircleOutline|ChatBubbleOutline|CheckCircleOutline|DeleteOutline|DriveFileMoveOutline|ErrorOutline|HelpOutline|InfoOutline|LabelImportantOutline|LightbulbOutline|LockOutline|MailOutline|ModeEditOutline|PauseCircleOutline|PeopleOutline|PersonOutline|PieChartOutline|PlayCircleOutline|RemoveCircleOutline|StarOutline|WorkOutline|WorkspacesOutline|DoneOutline)[\"']" src
grep -rnE "\b(AddCircleOutline|ChatBubbleOutline|CheckCircleOutline|DeleteOutline|DriveFileMoveOutline|ErrorOutline|HelpOutline|InfoOutline|LabelImportantOutline|LightbulbOutline|LockOutline|MailOutline|ModeEditOutline|PauseCircleOutline|PeopleOutline|PersonOutline|PieChartOutline|PlayCircleOutline|RemoveCircleOutline|StarOutline|WorkOutline|WorkspacesOutline|DoneOutline)\b.*from [\"']@mui/icons-material[\"']" src
```
Fix: append `d` — `ErrorOutline` → `ErrorOutlined`, `DeleteOutline` → `DeleteOutlined`, `CheckCircleOutline` → `CheckCircleOutlined`. The glyphs are identical.

**4d. Deprecated CSS class selectors in `sx` and theme overrides**

```bash
grep -rnE "MuiTab-iconWrapper|MuiTouchRipple|Mui(Button|Chip|Alert|Select|InputBase|Slider|Divider|Drawer|Dialog|CircularProgress|LinearProgress|PaginationItem|ButtonGroup|ToggleButtonGroup|StepConnector|TableSortLabel|Tabs)-(contained|outlined|text|filled|standard|clickable|deletable|label|icon|avatar|size|color|textColor|indicator|scroll)[A-Z][A-Za-z]*" src
```
Fix per hit:
- `.MuiTab-iconWrapper` → `.MuiTab-icon`.
- Combined variant classes such as `.MuiButton-containedPrimary` → combine the base classes: `.MuiButton-contained.MuiButton-colorPrimary`. The codemod handles most of these; anything left is inside a string it could not parse.
- `MuiTouchRipple` as a key in `theme.components` → remove the key and style `.MuiTouchRipple-root` from the parent component's `styleOverrides` or global CSS instead. Selectors on `.MuiTouchRipple-*` classes still work.

**4e. Grid legacy props**

```bash
grep -rnE "<Grid[^>]*\b(item\b|xs=|sm=|md=|lg=|xl=)|GridLegacy|Unstable_Grid2|from [\"']@mui/material/Grid2" src
```
Fix: remove `item`; replace breakpoint props with `size={{ xs: 12, md: 6 }}`; import `Grid` from `@mui/material`. `direction="column"` on Grid is no longer supported; use `Stack`.

**4f. Remaining deprecated props the codemod left**

```bash
grep -rnE "\b(PaperProps|InputLabelProps|FormHelperTextProps|SelectProps|MenuListProps|componentsProps|TransitionComponent|TransitionProps|BackdropComponent|BackdropProps|ListboxProps|PopperComponent|IconComponent)\s*[=:]" src
```
Fix: move into `slotProps` / `slots` of the same component per the MUI 9 API reference for that component. The two shapes seen in Agronod apps:
```tsx
// Menu
<Menu PaperProps={{ style }} MenuListProps={{ …}} />        →  <Menu slotProps={{ paper: { style }, list: { … } }} />
// Select
<Select MenuProps={{ anchorEl, PaperProps: { style } }} />  →  <Select MenuProps={{ anchorEl, slotProps: { paper: { style } } }} />
```
Note `InputProps` / `inputProps` are deliberately excluded from this grep: on `Agronod*` fields they are supported, and on MUI's own `TextField` the codemod in Step 3 already rewrote them.

**4g. System props on `slotProps.typography` and similar nested props**

The codemods do not descend into `slotProps`. `FormControlLabel slotProps={{ typography: { marginBottom: 1, alignSelf: "flex-start" } }}` is a type error in v9; move layout keys into `slotProps.typography.sx`. Run `npx tsc --noEmit` (Step 5) to find these; there is no reliable grep.

### Step 5 — Type check and build

```bash
npx tsc --noEmit
npm run build
npm run lint
```

Verify: all exit 0. Typical remaining `tsc` errors and their fixes:

| Error mentions | Fix |
|---|---|
| `Property 'InputProps' does not exist` on a MUI `TextField` | Step 3 missed it; move to `slotProps.input`. |
| `Property 'InputProps' does not exist` on `AgronodTextField` / `AgronodNumberField` | Library is not on 2.0.0. Check `npm ls @agronod/mui-components`. |
| `renderTags` | Step 4b. |
| `Module '"@mui/icons-material/…Outline"' not found` | Step 4c. |
| `disableEscapeKeyDown` | Step 4a. |
| `freeSolo` value typed as `string \| T` | MUI 9 typing change on Autocomplete; widen the `onChange` handler's value type. |

### Step 6 — Behavioural review

These compile but render or behave differently. Open each affected screen once.

- **`ListItemIcon`** default `min-width` shrank from 56 px to 36 px. Menus and lists with icons get tighter. Set `sx={{ minWidth: 56 }}` where the old spacing was intentional.
- **Disabled non-native buttons** (`component="div"` / `component="a"` on Button or IconButton) no longer fire `onClick`. Add `nativeButton={false}` only if the element is genuinely non-interactive.
- **`TextField select`** renders its label as a `<div>` instead of `<label>`. Tests that query `getByLabelText` on a select need `getByRole("combobox", { name })` instead.
- **`TablePagination`** formats numbers with `Intl.NumberFormat` for the active locale.
- **Stepper** renders `<ol>/<li>` instead of `<div>`. CSS keyed on the old structure breaks.
- **Slider** uses pointer events; custom `onMouseDown` handlers on Slider should become `onPointerDown`.
- Run the app's existing e2e or component tests if any, then click through every form that uses number inputs with unit suffixes; these are the `InputProps` sites and the highest-traffic surface.

### Step 7 — Commit

One commit for the package bump plus codemod output, one for hand fixes, so the review can skip the mechanical diff:

```bash
git add package.json package-lock.json && git commit -m "chore(deps): upgrade @agronod/mui-components to 2.x and MUI to 9"
git add -A && git commit -m "refactor: apply MUI 9 codemods and manual fixes"
```

### Rollback

```bash
git revert <both commits>   # or git checkout -- . && git checkout package.json package-lock.json
npm ci
```
Library 1.x and MUI 7.x remain installable and MUI 7 still receives patches (7.3.11 released 2026-05-07).

---

## 1.29.0 — peer dependency clean-up (no code changes)

Changes shipped with the security update of 2026-09-17. No component API changed.

| Change | Action required |
|---|---|
| Peer `react-router-dom` floor raised from exact `6.23.1` to `^6.30.6` | `npm install react-router-dom@^6.30.6`. Same major, fixes three open-redirect advisories. If the app pinned `6.23.1` exactly, npm prints a peer warning until this is done. |
| Peer `@mui/lab` removed | None. The library never imported it. Keep or remove it in the app independently. |
| Peer `@mui/utils` added (`^7.3.3`) | None in practice. It is already a dependency of `@mui/material` at the same version; npm 7+ satisfies the peer automatically. |
| `react-is` no longer declared by the library | None. It was unused. |
| `@fontsource/roboto` and `@fontsource/material-icons` moved to devDependencies | None if the app already loads Roboto and Material Icons itself, which every Agronod app does. If a screen suddenly renders in a fallback font, add `@fontsource/roboto` to the app and import the 300/400/500/700 weights at the entry point, as `.storybook/preview.tsx` in this repo does. |

Verify after installing:

```bash
npm ls react-router-dom @mui/utils 2>&1 | grep -E "invalid|missing" || echo ok
```
