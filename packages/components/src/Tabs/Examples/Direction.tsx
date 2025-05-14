import * as React from 'react';
import { Tabs, Tab } from '../../index';

export const Direction = () => (
  <>
    <Tabs variant="line" direction="vertical">
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

    <Tabs variant="outline" direction="vertical" style={{ marginTop: '50px' }}>
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
