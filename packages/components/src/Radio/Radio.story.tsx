import * as React from 'react';
import { useState } from 'react';
import { Radio, RadioGroup } from './Radio';
import { Button } from '../index';

export default {
  title: 'Components/Radio',
  component: Radio,
};

export const Basic = () => <Radio value="China" label="China" />;

export const defaultValue = () => <Radio value="China" defaultChecked label="China" />;

export const GroupDemo = () => {
  const onChange = (val) => {
    console.log(val);
  };
  return (
    <>
      <RadioGroup onChange={onChange}>
        <Radio label="China" value="China" />
        <Radio label="USA" value="USA" />
      </RadioGroup>
    </>
  );
};

export const GroupControlDemo = () => {
  const [value, setValue] = useState('China');
  const toggle = () => {
    if (value === 'USA') {
      setValue('China');
    } else {
      setValue('USA');
    }
  };
  const onChange = (val) => {
    console.log(val);
  };
  return (
    <>
      <RadioGroup value={value} onChange={onChange}>
        <Radio label="China" value="China" />
        <Radio label="USA" value="USA" />
      </RadioGroup>
      <div>
        <Button onClick={toggle}>Switch</Button>
      </div>
    </>
  );
};
