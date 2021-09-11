import * as React from 'react';
import { useState } from 'react';
import { Group, Button } from '../index';
import { Checkbox } from './Checkbox';
import { CheckboxGroup } from './CheckboxGroup';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
};

export const Basic = () => {
  const onChange = (e) => {
    console.log(e);
  };
  return (
    <Group>
      <Checkbox label="Test1" defaultChecked onChange={onChange} />
      <Checkbox label="Indeterminate" indeterminate />
    </Group>
  );
};

export const Disabled = () => {
  const [disabled, setDisabled] = useState(false);
  const toggle = () => {
    setDisabled(!disabled);
  };
  return (
    <>
      <div>
        <Checkbox label="Test1" disabled={disabled} />
      </div>
      <div>
        <Button onClick={toggle}>Switch</Button>
      </div>
    </>
  );
};

export const Indeterminate = () => {
  const [indeterminate, setIndeterminate] = useState(false);
  const toggle = () => {
    setIndeterminate(!indeterminate);
  };
  return (
    <>
      <div>
        <Checkbox label="Test1" indeterminate={indeterminate} />
      </div>
      <div>
        <Button onClick={toggle}>Switch</Button>
      </div>
    </>
  );
};

export const CheckedControlled = () => {
  const [checked, setChecked] = useState(false);
  const toggle = () => {
    setChecked(!checked);
  };
  return (
    <>
      <div>
        <Checkbox label="Test1" checked={checked} />
      </div>
      <div>
        <Button onClick={toggle}>Switch</Button>
      </div>
    </>
  );
};

export const GroupDemo = () => {
  const [value, setValue] = useState(['China']);
  const toggle = () => {
    if (value.length > 1) {
      setValue(['China']);
    } else {
      setValue(['USA', 'China']);
    }
  };
  const onChange = (val) => {
    console.log(val);
  };
  return (
    <>
      <CheckboxGroup value={value} onChange={onChange}>
        <Checkbox label="China" value="China" />
        <Checkbox label="USA" value="USA" />
      </CheckboxGroup>
      <div>
        <Button onClick={toggle}>Switch</Button>
      </div>
    </>
  );
};
