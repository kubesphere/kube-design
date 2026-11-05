---
'@kubed/log-viewer': patch
---

Keep automatic following disabled when `autoScroll={false}`, including after
scrolling near the bottom, and apply prop changes in both virtual and non-virtual
viewers. Preserve cached measurements for unchanged virtual rows when appending
log output while remeasuring changed content and labels.
