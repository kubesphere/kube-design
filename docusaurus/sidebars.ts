import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // Guide sidebar
  guideSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Guide',
      items: [
        'guide/introduction',
        'guide/installation',
        'guide/theme',
      ],
    },
  ],

  // Components sidebar
  componentsSidebar: [
    {
      type: 'category',
      label: 'General',
      items: [
        'components/button',
      ],
    },
    {
      type: 'category',
      label: 'Layout',
      items: [
        'components/grid',
        'components/group',
        'components/center',
        'components/container',
        'components/divider',
      ],
    },
    {
      type: 'category',
      label: 'Data Entry',
      items: [
        'components/autocomplete',
        'components/checkbox',
        'components/datepicker',
        'components/dropzone',
        'components/form',
        'components/input',
        'components/input-number',
        'components/input-password',
        'components/radio',
        'components/select',
        'components/slider',
        'components/switch',
        'components/textarea',
        'components/timepicker',
      ],
    },
    {
      type: 'category',
      label: 'Data Display',
      items: [
        'components/badge',
        'components/card',
        'components/collapse',
        'components/descriptions',
        'components/empty',
        'components/progress',
        'components/skeleton',
        'components/snippet',
        'components/table',
        'components/tabs',
        'components/tag',
        'components/text',
      ],
    },
    {
      type: 'category',
      label: 'Feedback',
      items: [
        'components/alert',
        'components/drawer',
        'components/loading',
        'components/loading-overlay',
        'components/modal',
        'components/notify',
        'components/popover',
        'components/tooltip',
      ],
    },
    {
      type: 'category',
      label: 'Navigation',
      items: [
        'components/dropdown',
        'components/menu',
        'components/navs',
        'components/pagination',
        'components/steps',
      ],
    },
    {
      type: 'category',
      label: 'Other',
      items: [
        'components/action-confirm',
        'components/banner',
        'components/entity',
        'components/filter-input',
        'components/sheet',
        'components/show-more',
        'components/slider-confirm',
        'components/status-dot',
        'components/type-select',
      ],
    },
  ],

  // Hooks sidebar
  hooksSidebar: [
    {
      type: 'category',
      label: 'State Management',
      items: [
        'hooks/use-clipboard',
        'hooks/use-toggle',
        'hooks/use-disclosure',
        'hooks/use-force-update',
        'hooks/use-local-storage',
        'hooks/use-previous',
        'hooks/use-queue',
        'hooks/use-uncontrolled',
      ],
    },
    {
      type: 'category',
      label: 'UI & Interactions',
      items: [
        'hooks/use-click-outside',
        'hooks/use-hover',
        'hooks/use-hotkeys',
        'hooks/use-move',
        'hooks/use-scroll-lock',
      ],
    },
    {
      type: 'category',
      label: 'Lifecycle',
      items: [
        'hooks/use-did-mount',
        'hooks/use-did-update',
        'hooks/use-unmount',
      ],
    },
    {
      type: 'category',
      label: 'Utilities',
      items: [
        'hooks/use-debounced-value',
        'hooks/use-id',
        'hooks/use-media-query',
        'hooks/use-merged-ref',
        'hooks/use-reduced-motion',
        'hooks/use-window-event',
        'hooks/use-window-resize',
      ],
    },
  ],

  // Icons sidebar
  iconsSidebar: [
    {
      type: 'category',
      label: 'Icons',
      items: [
        'icons/overview',
      ],
    },
  ],
};

export default sidebars;
