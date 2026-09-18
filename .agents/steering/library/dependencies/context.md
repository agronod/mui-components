# Dependency Policy
Keywords: peerDependencies, devDependencies, dependencies, caret, semver, npm audit, security update, lockstep, storybook, MUI, react-router-dom, overrides, engines, Node

## Which section a package belongs in

| Section | Rule | Current members |
|---|---|---|
| `peerDependencies` | Anything the consuming app must own a single copy of: React, MUI, Emotion, router, recharts. Mirrored in `devDependencies` so Storybook and the build can run here. | @emotion/react, @emotion/styled, @mui/material, @mui/icons-material, @mui/utils, react, react-dom, react-router-dom, recharts |
| `dependencies` | Small runtime libraries the library imports that consumers would not otherwise install. Externalized, so the consumer's copy is used. | react-device-detect, react-number-format |
| `devDependencies` | Build, lint, Storybook, release tooling, fonts for Storybook only. | everything else |

Decided 2026-09-17 after finding release tooling (`conventional-changelog-cli`) and Storybook fonts (`@fontsource/*`) in `dependencies`, which pushed handlebars and lodash into every consumer's production tree.

## Version ranges

- Peers: always caret (`^`). A peer range describes API compatibility, not the version we test with; the lockfile pins what we test with.
- Dev and runtime deps: caret. Exact pins are not used; the lockfile already freezes the resolved version, and exact pins only force manual bumps.
- `react-router-dom` peer floor is `^6.30.6` on purpose: it is the first 6.x that fixes the open-redirect advisories. Consumers below it get a peer warning, which is the intent.
- No `overrides`. A `react-is` override existed from the MUI 7 upgrade (PR #147) and was removed 2026-09-17: nothing imports react-is, and the override was only half-applied (npm flagged MUI's nested react-is 19 as invalid). If an override is ever needed again, write down why in this file.
- `engines.node` is `>=22.12`, the floor Vite 7 requires. Dev machines and CI run Node 24.

## Lockstep families

Move these together in one change; mixing majors breaks at runtime:

- **Storybook**: `storybook`, `@storybook/react-vite`, `@storybook/addon-docs`, `@storybook/addon-links`, `@storybook/addon-themes`, `eslint-plugin-storybook`. `@chromatic-com/storybook` tracks Storybook's major separately (5.x for Storybook 10). Use `npx storybook@latest upgrade` for majors; it runs automigrations, but review what it adds. In 2026-09 it injected `@storybook/addon-mcp` unasked and reformatted unrelated story files; both were reverted.
- **MUI**: `@mui/material`, `@mui/icons-material`, `@mui/utils` share a major (9 since 2026-09-17; there is no MUI 8). Peer floors move together. Upgrade recipe: bump all three, run `npx @mui/codemod@latest deprecations/all src` and `v9.0.0/system-props src`, then run system-props again with `-- --jsx=AgronodTypography,AgronodLink` because the default only rewrites MUI's own component names. Theme `styleOverrides` keyed on combined classes (`standardSuccess`, `containedPrimary`) must become `variants`. `MIGRATION.md` at the repo root is the consumer-facing procedure and ships in the npm tarball via `files`.
- **React**: `react`, `react-dom`, `@types/react`, `@types/react-dom`. Still on 18 and MUI 9 does not require 19; React 19 is a consumer-wide decision.

## Security updates

Run the `dev:dependency-security-update` skill. Classify by what the bump does to the version, not by CVE severity. Known state as of 2026-09-17:

- Two moderate react-router advisories (GHSA-wrjc-x8rr-h8h6, GHSA-337j-9hxr-rhxg) are patched only in react-router-dom 7.18. That is a major bump and a peer change for every consumer; deferred. Only `Link` and `BrowserRouter` are used, in `Header`.
- `npm audit fix` may rewrite lockfile entries unrelated to the finding (npm normalizes). Expect lockfile churn; review `git diff --stat`.

## Verification after any dependency change

```bash
npm ci && npm run build && npm run lint && npm run build-storybook && npm audit
```
There are no unit tests. Chromatic on the PR is the visual regression gate.

## References
- Key files: `package.json`, `package-lock.json`, `vite.config.ts`, `.github/workflows/release.yml`
- Related contexts: [[library/overview]], [[library/release]], [[storybook/overview]]
