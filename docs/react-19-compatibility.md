# React 19 compatibility and validation

The `react-19` branch uses the automatic JSX transform for package builds, generated
icons, and Jest tests. ESM and CommonJS packages import `react/jsx-runtime` from the
consumer's React installation. UI package peer dependencies therefore start at
React 16.14, which includes this runtime.

## Runtime behavior

- Tooltip manages the trigger element's ref and passes the element through Tippy's
  `reference` API. Child refs, forwarded refs, controlled visibility, explicit
  references, and replacement trigger elements are supported. Callback cleanup
  functions run on detach, including React 19 StrictMode remounts. Dropdown and
  Popover use the same Tooltip implementation.
- `mergeRefs` and `useMergedRef` compose callback cleanup functions and clear the
  remaining callback and object refs when React detaches the element.
- AreaChart, BarChart, and LineChart default `yAxisWidth` to 60 pixels. This keeps
  the axis width defined when Recharts reads JSX child props before rendering,
  preserving finite chart coordinates. An explicit zero-width axis is supported.
- Modal uses the React 19 ref handling in rc-motion 2.9.5. The lockfile resolves
  the motion dependencies to this version and rc-util 5.44.4.

## Dependency baseline

| Package              | Dependency range            | Verified installed version |
| -------------------- | --------------------------- | -------------------------- |
| `@kubed/code-editor` | `react-ace@^14.1.0`         | 14.1.0                     |
| `@kubed/code-editor` | `ace-builds@^1.36.3`        | 1.45.2                     |
| `@kubed/charts`      | `recharts@^2.15.4`          | 2.15.4                     |
| `@kubed/log-viewer`  | `react-virtualized@^9.22.6` | 9.22.6                     |
| `@kubed/components`  | `rc-motion@^2.9.5`         | 2.9.5                      |

React Ace 14 declares React 19 support. Recharts 2.15.4 and react-virtualized 9.22.6
also include React 19 in their peer ranges; the latter uses element refs for cell
measurement. The package manifests and lockfile are the source of truth for the
dependency graph.

CodeEditor and React Ace share the same Ace version so the editor core, language
modes, and themes resolve together.

## Verification

The 2026-11-04 validation uses Node.js 24.22.2, Yarn 1.22.22, and
React/React DOM/react-is 19.2.7.

Run checks sequentially, since installation and builds regenerate the icon files
used by Jest:

```sh
yarn install --frozen-lockfile
yarn syncpack
yarn typecheck
yarn lint
yarn jest --runInBand
yarn build:all
```

The Build workflow runs these checks for pull requests targeting `master` and
`react-19`.

- 37 Jest suites and 158 tests pass, including ref cleanup, Modal and Tooltip lifecycle,
  popup interactions, Cartesian chart geometry, and virtual pagination.
- All seven public packages build successfully. ESM/CommonJS entry points are
  retained, and their JSX runtime imports remain external. Generated icons also
  use `react/jsx-runtime`.
- Type checking and dependency consistency checks pass. ESLint reports eight
  existing warnings and no errors; Rollup reports existing circular imports.

Development and production browser checks use the generated package entry points with StrictMode and
`KubedConfigProvider`/`CssBaseline`. It covers Tooltip placement, Dropdown and
Popover interactions, YAML editing, stacked chart tooltips and resizing, virtual
log scrolling and append, pagination selection and reopening, and fixture unmount
and remount. Modal checks cover close-button and Escape dismissal, reopening,
focus restoration, and scroll-lock cleanup when unmounted while open. Callback
attachments and cleanup calls balance on unmount.

Tippy emits its keyboard-order accessibility warning for the interactive pagination
popup. This check does not establish full application or service compatibility;
Nexus and its services require validation against the selected package candidate.

DatePicker still uses rc-picker 2, whose trigger reads the legacy `element.ref`
API. Its migration requires separate date, time, range, and public type validation.
Consumers with an existing lockfile should also verify that rc-dialog resolves
rc-motion 2.9.5 or newer when adopting this candidate.

## References

- [React 19 upgrade guide](https://react.dev/blog/2024/04/25/react-19-upgrade-guide)
- [React Ace 14 release](https://github.com/securingsincity/react-ace/releases/tag/v14.0.0)
