import * as React from 'react';
import { StoryObj } from '@storybook/react';
import { Tabs, Tab } from '../../index';

type Story = StoryObj<typeof Tabs>;

export const Explame: Story = {
  render: (args) => {
    const [activeKey, setActiveKey] = React.useState(
      args.activeKey || args.defaultActiveKey || 'one'
    );

    React.useEffect(() => {
      if (args.activeKey !== undefined) {
        setActiveKey(args.activeKey);
      }
    }, [args.activeKey]);

    React.useEffect(() => {
      if (args.activeKey === undefined && args.defaultActiveKey !== undefined) {
        setActiveKey(args.defaultActiveKey);
      }
    }, [args.defaultActiveKey, args.activeKey]);

    const handleTabChange = (tabKey: string) => {
      if (args.activeKey === undefined) {
        setActiveKey(tabKey);
      }

      if (args.onTabChange) {
        args.onTabChange(tabKey);
      }
    };

    const currentActiveKey = args.activeKey !== undefined ? args.activeKey : activeKey;

    return (
      <Tabs {...args} activeKey={currentActiveKey} onTabChange={handleTabChange}>
        <Tab label="One" key="one">
          Tab content one
        </Tab>
        <Tab label="Two" key="two">
          Tab content two
        </Tab>
        <Tab label="Three" key="three">
          Tab content three
        </Tab>
      </Tabs>
    );
  },
};
