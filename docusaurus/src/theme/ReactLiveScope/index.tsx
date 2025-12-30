import React from 'react';
import * as KubedComponents from '@kubed/components';
import * as KubedIcons from '@kubed/icons';
import * as KubedHooks from '@kubed/hooks';
import dayjs from 'dayjs';

// Add react-live imports you need here
const ReactLiveScope: unknown = {
  React,
  ...React,
  ...KubedComponents,
  KubedIcons,
  ...KubedHooks,
  dayjs,
};

export default ReactLiveScope;
