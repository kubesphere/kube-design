import * as React from 'react';
import { useState, useEffect } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ShowMore } from './ShowMore';

export default {
  title: 'Components/ShowMore',
  component: ShowMore,
  args: {
    maxHeight: 50,
    expanded: false,
    transitionDuration: 300,
  },
  argTypes: {
    maxHeight: {
      name: 'maxHeight',
      description: 'Max height of visible content, when this point is reached ShowMore appears',
      table: {
        defaultValue: { summary: '50' },
      },
      control: { type: 'range', min: 20, max: 200, step: 10 },
    },
    expanded: {
      name: 'expanded',
      description: 'Initial ShowMore state, true to show all content, false to collapse content',
      table: {
        defaultValue: { summary: 'false' },
      },
      control: 'boolean',
    },
    transitionDuration: {
      name: 'transitionDuration',
      description: 'ShowMore reveal transition duration in ms',
      table: {
        defaultValue: { summary: '300' },
      },
      control: { type: 'range', min: 0, max: 1000, step: 50 },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '20px', maxWidth: '600px' }}>
        <Story />
      </div>
    ),
  ],
} as Meta<typeof ShowMore>;

type Story = StoryObj<typeof ShowMore>;

const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nulla purus, porta ac eros
dignissim, pharetra tincidunt ante. Donec lacus magna, ultricies id lacinia tempor, efficitur
a quam. Cras ac eros ac ante tempor lacinia. Pellentesque interdum, lorem a euismod efficitur,
enim nunc viverra mauris, vel tincidunt nisi neque quis dolor. Donec mollis ornare ipsum, a
auctor urna faucibus egestas. Nullam quam massa, accumsan id rhoncus eu, volutpat eu turpis.
Pellentesque orci tortor, suscipit eu accumsan eu, aliquet at justo. Nulla in est at ligula
eleifend sagittis vitae at velit.`;

export const Explame: Story = {
  render: (args) => {
    const [showMoreProps, setShowMoreProps] = useState(args);
    const [isExpanded, setIsExpanded] = useState(args.expanded);

    useEffect(() => {
      setShowMoreProps(args);
      setIsExpanded(args.expanded);
    }, [args]);

    const showLabel = <a style={{ color: '#006eff', cursor: 'pointer' }}>Show more</a>;
    const hideLabel = <a style={{ color: '#006eff', cursor: 'pointer' }}>Hide</a>;

    return (
      <div>
        <ShowMore
          {...showMoreProps}
          expanded={isExpanded}
          showLabel={showLabel}
          hideLabel={hideLabel}
        >
          {loremIpsum}
        </ShowMore>

        <div style={{ marginTop: '30px' }}>
          <h4>Current Settings:</h4>
          <ul>
            <li>Max Height: {showMoreProps.maxHeight}px</li>
            <li>Transition Duration: {showMoreProps.transitionDuration}ms</li>
            <li>Initial Expanded: {showMoreProps.expanded ? 'Yes' : 'No'}</li>
          </ul>
          <p>Try adjusting the parameters in the control panel to see different behaviors.</p>
        </div>
      </div>
    );
  },
};

export const Basic = () => {
  const showLabel = <a>Show more</a>;
  const hideLabel = <a>Hide</a>;

  return (
    <ShowMore maxHeight={20} hideLabel={hideLabel} showLabel={showLabel} transitionDuration={200}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nulla purus, porta ac eros
      dignissim, pharetra tincidunt ante. Donec lacus magna, ultricies id lacinia tempor, efficitur
      a quam. Cras ac eros ac ante tempor lacinia. Pellentesque interdum, lorem a euismod efficitur,
      enim nunc viverra mauris, vel tincidunt nisi neque quis dolor. Donec mollis ornare ipsum, a
      auctor urna faucibus egestas. Nullam quam massa, accumsan id rhoncus eu, volutpat eu turpis.
      Pellentesque orci tortor, suscipit eu accumsan eu, aliquet at justo. Nulla in est at ligula
      eleifend sagittis vitae at velit.
    </ShowMore>
  );
};
