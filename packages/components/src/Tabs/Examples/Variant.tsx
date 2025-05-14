import * as React from 'react';
import { Tabs, Tab } from '../../index';

export const Variant = () => (
  <>
    <Tabs variant="line" size="md" color="primary">
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

    <Tabs variant="outline" style={{ marginTop: '50px' }}>
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
