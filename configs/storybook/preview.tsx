import React from 'react';
import { CssBaseline, KubedConfigProvider } from '../../packages/components/src/index';

export const parameters = {};

export const decorators = [
  (Story) => (
    <KubedConfigProvider themeType="light">
      <CssBaseline />
      <Story />
    </KubedConfigProvider>
  ),
];
