import * as React from 'react';
import { Tabs, Tab } from '../../index';

export const Position = () => (
  <>
    <Tabs variant="line" position="center">
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

    <Tabs variant="outline" position="right" style={{ marginTop: '50px' }}>
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
  </>
);
