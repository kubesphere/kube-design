# Date and time pickers

DatePicker and TimePicker use `rc-picker` 4.11.3 with Dayjs on the `react-19`
branch. Their popup trigger uses `@rc-component/trigger` 2.3.1, and the verified
motion dependency graph uses `rc-motion` 2.9.5 and `rc-util` 5.44.4.

## Values and refs

- DatePicker and TimePicker accept one Dayjs value. `onChange` receives a Dayjs
  value and a formatted string; clearing sends `null` and an empty string.
- DatePicker.RangePicker and TimePicker.RangePicker accept a pair of values.
  `onChange` receives a pair of Dayjs values (with nullable endpoints when
  `allowEmpty` permits them) and a pair of formatted strings. Clearing sends
  `null` and `['', '']`.
- All four components forward a ref with `focus()` and `blur()` methods. These
  methods are represented in the component declarations.
- `format="HH:mm"` displays hour and minute columns. `showTime`, disabled dates
  and times, explicit confirmation, and custom formatting use rc-picker's shared
  configuration.

## Popup and rendering options

`popupStyle`, `dropdownClassName`, `popupClassName`, and `dropdownAlign` remain
supported. They map to rc-picker's `styles.popup`, `classNames.popup`, and
`popupAlign`; the corresponding modern style and alignment values take precedence
when both forms are supplied. Popup class names are combined.

`getPopupContainer` selects the popup's mount point, and the `locale` prop supplies
picker-specific text. Otherwise the components use KubedConfigProvider's locale.
RangePicker installs its own picker styles, so it can render independently.

Use `presets` to provide named ranges. Presets appear in a styled list beside the
calendar. The legacy `ranges` property is still accepted by rc-picker, which emits
a deprecation notice for it. Use `cellRender` for custom cells; the existing range
`dateRender(currentDate, today, { range })` callback remains supported, with
`range` identifying the active start or end field.

## Changes when adopting rc-picker 4

- Valid typed input is committed on blur. `changeOnBlur` no longer changes this
  behavior. `preserveInvalidOnBlur` controls whether invalid input remains visible,
  and `needConfirm` controls explicit confirmation.
- `defaultPickerValue` resets the displayed calendar when a field is activated.
  A controlled `pickerValue` requires `onPickerValueChange` to update it.
- Range selection advances focus to the other field. Supplied controlled ranges
  retain their supplied order; callers should provide a valid ordered pair.
- Use `onCalendarChange` for intermediate date selection; rc-picker 4 does not
  provide the old single-picker `onSelect` callback. Typed valid values can also
  trigger `onCalendarChange`.
- Picker types follow rc-picker 4's date-object and time-step constraints. Single
  picker values remain scalar, and multiple selection is not exposed.

## Validation

The 2026-11-04 verification uses Node.js 24.22.2, Yarn 1.22.22, and React/React DOM
19.2.7. Run the repository checks and package builds with:

```sh
yarn install --frozen-lockfile
yarn syncpack
yarn typecheck
yarn lint
yarn jest --runInBand
yarn build:all
```

The DatePicker tests cover selection and clearing, disabled dates, range callbacks,
popup presentation and mounting, custom locale text, and StrictMode focus/ref and
popup cleanup. `packages/components/typechecks/date-picker.tsx` verifies scalar
and range callback types, refs, and rejection of invalid value shapes through the
root type check. The emitted declarations also pass these checks with strict
TypeScript settings, including a nullable single-picker value.

The verification passes 37 Jest suites and 165 tests, type checking, dependency
consistency checks, and all seven public package builds. ESLint reports eight
existing warnings and no errors. The Build workflow checks pull requests targeting
`react-19` as well as `master`.

Browser verification uses built package entry points, StrictMode,
KubedConfigProvider, and CssBaseline. It covers typed values and invalid-input
recovery, date and date-time selection, time columns, date and time ranges,
week/month/quarter/year modes, presets, locale switching, and unmount/remount.
These picker scenarios pass in development and production with no browser errors
or warnings.
Application acceptance, including Nexus's form and popup stacking contexts,
remains part of the consuming project's candidate validation.

## References

- [rc-picker 4.11.3 source](https://github.com/react-component/picker/tree/v4.11.3)
- [React 19 upgrade guide](https://react.dev/blog/2024/04/25/react-19-upgrade-guide)
