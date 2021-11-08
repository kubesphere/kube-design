import * as React from 'react';
import { Slider } from './Slider';

export default {
  title: 'Components/Slider',
  component: Slider,
};

export const Basic = () => {
  const [request, setRequest] = React.useState(2);
  const [limit, setLimit] = React.useState(3);
  const cpuFormatter = (value) => {
    if (value > 0 && value < 1) {
      return value.toFixed(2);
    }
    if (value > 1 && value !== Infinity) {
      return value.toFixed(1);
    }
    return value;
  };

  const handleChange = (value) => {
    setRequest(value[0]);
    setLimit(value[1]);
  };

  return (
    <Slider
      onChange={handleChange}
      valueFormatter={cpuFormatter}
      marks={[
        { value: 0, label: '无限制', weight: 2 },
        { value: 0.2, label: 0.2, weight: 2 },
        { value: 0.5, label: 0.5, weight: 2 },
        { value: 1, label: 1, weight: 1 },
        { value: 2, label: 2, weight: 2 },
        { value: 3, label: 3, weight: 1 },
        { value: 4, label: 4 },
        { value: Infinity, label: '无限制' },
      ]}
      value={[request || 0, limit || Infinity]}
      defaultValue={10}
      unit="MiB"
      hasTooltip
    />
  );
};
