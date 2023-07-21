import path from 'path';
import storybook from '@storybook/react/standalone';

storybook({
  port: 7001,
  mode: 'dev',
  configDir: path.join(__dirname, '../configs/storybook'),
});
