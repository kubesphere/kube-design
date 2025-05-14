import * as React from 'react';
import { useState, useEffect } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Progress } from './Progress';

export default {
  title: 'Components/Progress',
  component: Progress,
  args: {
    value: 50,
    color: 'primary',
    size: 'md',
    radius: 'sm',
    striped: false,
  },
  argTypes: {
    value: {
      name: 'value',
      description: 'Percent of filled bar (0-100)',
      table: {
        defaultValue: { summary: '50' },
      },
      control: { type: 'range', min: 0, max: 100, step: 1 },
    },
    color: {
      name: 'color',
      description: 'Progress color from theme',
      table: {
        defaultValue: { summary: 'primary' },
      },
      options: ['primary', 'secondary', 'success', 'warning', 'error', '#ca2621'],
      control: { type: 'select' },
    },
    size: {
      name: 'size',
      description: 'Predefined progress height or number for height in px',
      table: {
        defaultValue: { summary: 'md' },
      },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      control: { type: 'select' },
    },
    radius: {
      name: 'radius',
      description: 'Predefined progress radius from theme.radius or number for height in px',
      table: {
        defaultValue: { summary: 'sm' },
      },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      control: { type: 'select' },
    },
    striped: {
      name: 'striped',
      description: 'Adds stripes',
      table: {
        defaultValue: { summary: 'false' },
      },
      control: 'boolean',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '20px', maxWidth: '500px' }}>
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Progress>;

type Story = StoryObj<typeof Progress>;

export const Explame: Story = {
  render: (args) => {
    const [progressProps, setProgressProps] = useState(args);
    const [sections, setSections] = useState<{ value: number; color: string }[] | undefined>(
      undefined
    );
    const [useSections, setUseSections] = useState(false);

    // 当控件面板中的参数变化时，更新状态
    useEffect(() => {
      setProgressProps(args);
    }, [args]);

    const toggleSections = () => {
      if (useSections) {
        setSections(undefined);
        setUseSections(false);
      } else {
        setSections([
          { value: 30, color: 'success' },
          { value: 40, color: 'warning' },
          { value: 10, color: 'error' },
        ]);
        setUseSections(true);
      }
    };

    return (
      <div>
        <Progress {...progressProps} sections={sections} />

        <div style={{ marginTop: '20px' }}>
          <button
            type="button"
            onClick={toggleSections}
            style={{
              padding: '8px 16px',
              borderRadius: '4px',
              border: '1px solid #ccc',
              background: '#f5f5f5',
              cursor: 'pointer',
            }}
          >
            {useSections ? 'Use Single Progress' : 'Use Sectioned Progress'}
          </button>

          <div style={{ marginTop: '10px' }}>
            <p>
              {useSections
                ? 'Currently showing sectioned progress bar with multiple colors.'
                : `Currently showing single progress bar at ${progressProps.value}%.`}
            </p>
          </div>
        </div>
      </div>
    );
  },
};

export const Basic = () => <Progress value={50} color="#ca2621" striped />;

export const Segments = () => (
  <Progress
    size="xl"
    total={80}
    sections={[
      { value: 30, color: 'success' },
      { value: 40, color: 'warning' },
      { value: 10, color: 'error' },
    ]}
  />
);
