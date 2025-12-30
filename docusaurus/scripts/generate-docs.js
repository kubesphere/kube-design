const fs = require('fs');
const path = require('path');

// Component categories
const components = {
  general: ['icon'],
  layout: ['grid', 'group', 'center', 'container', 'divider'],
  dataEntry: ['autocomplete', 'checkbox', 'datepicker', 'dropzone', 'form', 'input-number', 'input-password', 'radio', 'slider', 'switch', 'textarea', 'timepicker'],
  dataDisplay: ['badge', 'card', 'collapse', 'descriptions', 'empty', 'progress', 'skeleton', 'snippet', 'table', 'tabs', 'tag', 'text'],
  feedback: ['alert', 'drawer', 'loading', 'loading-overlay', 'modal', 'notify', 'popover', 'tooltip'],
  navigation: ['dropdown', 'menu', 'navs', 'pagination', 'steps'],
  other: ['action-confirm', 'banner', 'entity', 'filter-input', 'sheet', 'show-more', 'slider-confirm', 'status-dot', 'type-select']
};

const hooks = {
  stateManagement: ['use-disclosure', 'use-force-update', 'use-local-storage', 'use-previous', 'use-queue', 'use-uncontrolled'],
  uiInteractions: ['use-click-outside', 'use-hover', 'use-hotkeys', 'use-move', 'use-scroll-lock'],
  lifecycle: ['use-did-mount', 'use-did-update', 'use-unmount'],
  utilities: ['use-debounced-value', 'use-id', 'use-media-query', 'use-merged-ref', 'use-reduced-motion', 'use-window-event', 'use-window-resize']
};

// Create component doc template
function createComponentDoc(name) {
  const title = name.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  return `---
sidebar_position: 1
---

# ${title}

> Component documentation is being migrated. Check back soon!

## Overview

${title} component from Kube Design library.

## Examples

### Basic Usage

\`\`\`jsx live
function Demo() {
  return <div>Documentation coming soon...</div>;
}
\`\`\`

## API

Documentation in progress.
`;
}

// Create hook doc template
function createHookDoc(name) {
  const title = name.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('');
  return `---
sidebar_position: 1
---

# ${title}

> Hook documentation is being migrated. Check back soon!

## Overview

\`${title}\` hook from Kube Design.

## Usage

\`\`\`tsx
import { ${title} } from '@kubed/hooks';

function Component() {
  // Documentation coming soon
}
\`\`\`

## API

Documentation in progress.
`;
}

// Generate component docs
const docsDir = path.join(__dirname, '../docs/components');
Object.values(components).flat().forEach(comp => {
  const filePath = path.join(docsDir, `${comp}.mdx`);
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, createComponentDoc(comp));
    console.log(`Created: ${comp}.mdx`);
  }
});

// Generate hook docs
const hooksDir = path.join(__dirname, '../docs/hooks');
Object.values(hooks).flat().forEach(hook => {
  const filePath = path.join(hooksDir, `${hook}.mdx`);
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, createHookDoc(hook));
    console.log(`Created: ${hook}.mdx`);
  }
});

console.log('Documentation generation complete!');
