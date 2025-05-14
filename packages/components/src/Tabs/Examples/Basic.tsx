import * as React from 'react';
import { Tabs, Tab } from '../../index';

export const Basic = () => (
  <Tabs>
    <Tab label="One" key="one">
      one
    </Tab>
    <Tab label="Two" key="two">
      Two
    </Tab>
    <Tab label="Three" key="three">
      Three
    </Tab>
  </Tabs>
);
