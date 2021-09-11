import * as React from 'react';
import { Tabs, Tab } from '../index';

export default {
  title: 'Components/Tabs',
  component: Tabs,
};

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

export const Variant = () => (
  <>
    <Tabs variant="line">
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

export const Grow = () => (
  <Tabs grow variant="line">
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
