# React 19 runtime compatibility

The `next` packages support React and React DOM `>=19.0.0 <20`. Applications
should use the same version of React, React DOM, and `react-is`.

## Package behavior

- ESM, CommonJS, and generated icons use the automatic JSX runtime. React's
  runtime stays external to the packages. Jest uses the same JSX semantics.
- Tooltip and Popover attach to the trigger's DOM node through Tippy's
  `reference` API. Object refs, callback refs, React 19 cleanup callbacks,
  explicit references, and trigger replacement retain their lifecycle behavior.
- Virtual logs use DOM refs for row measurement. Each viewer owns its measurement
  cache; folds and content updates trigger measurement. Automatic following
  pauses when the user scrolls upward and resumes near the bottom.
- Line, area, and bar charts retain the 60-pixel default Y-axis width and accept
  explicit widths with the automatic JSX runtime.

## Dependency resolution

| Dependency           | React 19 baseline                                                            |
| -------------------- | ---------------------------------------------------------------------------- |
| `rc-motion`          | `^2.9.5`, including transitive consumers such as Modal, Collapse, and Select |
| `recharts`           | `^2.15.4`                                                                    |
| Recharts' `react-is` | Resolve to the application's React 19 version                                |
| `react-virtualized`  | `^9.22.6`                                                                    |

The root Yarn resolutions establish this repository's validation environment.
Applications with an existing lockfile should also check the resolved motion
versions and override Recharts' `react-is` dependency at the application root.
Dependency overrides from a library's workspace are not inherited by consumers.

## Verification

Verified on 2026-11-05 using Node.js 26 and Yarn 1.22.22:

- Package builds, documentation build, type checking, lint, dependency
  consistency, and the Jest regression suite.
- ESM/CJS and icon files extracted from `npm pack` archives import
  `react/jsx-runtime`.
- Browser checks use the packaged libraries and the library dependency tree with
  React 19.0.0, the workspace's React 19.2.7, and Nexus's React 19.3.1 runtime.
  The harness includes Nexus's actual OverflowTooltip and LogViewer wrappers.
- Nexus type checking and its Fragment/OverflowTooltip tests use candidate
  package paths. The candidate's `virtua` dependency is supplied to this overlay.

Browser checks cover Tooltip/Popover interactions and ref cleanup, single-date,
range, and time selection, focus/blur refs, disabled dates and `popupStyle`, editor
refs, controlled values, input, read-only mode, uploads, save/cancel/close, chart legends, custom
tooltips, animation and resizing, and virtual log folding, append, follow,
pause/resume, and unmount/remount.

## Integration observations

- DatePicker's standard date, range, and time interactions pass. Its existing
  `rc-trigger` still emits an `element.ref` warning. The tested paths do not
  invoke the removed `findDOMNode` fallback.
- React Ace 10.1.0 retains its original peer range through React 18. The tested
  editor interactions pass with React 19.
- Chromium reports intermittent ResizeObserver loop diagnostics during the
  combined interaction sequence. No component exception was caught in these
  checks; this result does not establish the cause of those diagnostics.

Service integration acceptance includes real backend log streams, search updates,
subscription cleanup, and the complete D3 topology lifecycle. Component-level
verification provides the package baseline for that acceptance.

Reference: [React 19 upgrade guide](https://react.dev/blog/2024/04/25/react-19-upgrade-guide).
