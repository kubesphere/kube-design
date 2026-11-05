---
'@kubed/hooks': patch
'@kubed/icons': patch
'@kubed/components': patch
'@kubed/charts': patch
'@kubed/code-editor': patch
'@kubed/diff-viewer': patch
'@kubed/log-viewer': patch
---

Build React 19 packages with the automatic JSX runtime. Preserve Tooltip and
Popover trigger refs and cleanup callbacks, and update motion, chart, and
virtual-list dependencies for React 19.

Preserve chart axis width defaults with automatic JSX. Measure virtual log rows
through DOM refs, remeasure folded and updated content, isolate measurement
caches, and follow appended rows while respecting manual scrolling.

Log sections matched by the default `travis_fold` matcher start collapsed in
both virtual and non-virtual viewers. Expand a section to display its content.
