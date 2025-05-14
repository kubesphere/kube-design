import * as React from 'react';
import { Meta } from '@storybook/react';
import { Tabs } from '../index';
import { Explame } from './Examples/Explame';
import { Basic } from './Examples/Basic';
import { Variant } from './Examples/Variant';
import { Direction } from './Examples/Direction';
import { Position } from './Examples/Position';
import { Grow } from './Examples/Grow';

export default {
  title: 'Components/Tabs',
  component: Tabs,
  args: {
    variant: 'line',
    direction: 'horizontal',
    position: 'left',
    grow: false,
    size: 'md',
    color: 'primary',
    defaultActiveKey: 'one',
    activeKey: 'one',
  },
  argTypes: {
    variant: {
      name: 'variant',
      description: 'Tab style variant',
      control: { type: 'select' },
      options: ['line', 'outline'],
      table: {
        defaultValue: { summary: 'line' },
      },
    },
    direction: {
      name: 'direction',
      description: 'Tab layout direction',
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
      table: {
        defaultValue: { summary: 'horizontal' },
      },
    },
    position: {
      name: 'position',
      description: 'Tab header position',
      control: { type: 'select' },
      options: ['left', 'center', 'right'],
      table: {
        defaultValue: { summary: 'left' },
      },
    },
    grow: {
      name: 'grow',
      description: 'Whether tabs should grow to fill available space',
      control: 'boolean',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    size: {
      name: 'size',
      description: 'Size of the tabs',
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    color: {
      name: 'color',
      description: 'Color of the active tab',
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'warning', 'danger'],
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    defaultActiveKey: {
      name: 'defaultActiveKey',
      description: 'Default active tab key',
      control: 'text',
      table: {
        defaultValue: { summary: 'one' },
      },
    },
    activeKey: {
      name: 'activeKey',
      description: 'Controlled active tab key',
      control: 'text',
      type: 'string',
      table: {
        defaultValue: { summary: 'one' },
      },
    },
    onTabChange: {
      name: 'onTabChange',
      description: 'Called when tab control is clicked with tab key',
      table: {
        type: { summary: '(tabKey: string) => void' },
      },
      control: 'select',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '20px' }}>
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Tabs>;

export { Explame, Basic, Variant, Direction, Position, Grow };
