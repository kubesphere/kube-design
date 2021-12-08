import * as React from 'react';
import { Slider } from './newSlider/Slider/Slider';
import {useState} from "react";
import {RangeSlider} from "./newSlider/RangeSlider/RangeSlider";
import {UnevenRangeSlider} from "./newSlider/UnevenRangeSlider/UnevenRangeSlider";

export default {
  title: 'Components/Slider',
  component: Slider,
};

export const Basic = () => {
  return (
    <div style={{ padding: 100 }}>
      <Slider defaultValue={60} size="xs" styles={{ marginTop: 25 }} />
      <Slider defaultValue={60} size="sm" styles={{ marginTop: 25  }} />
      <Slider defaultValue={60} size="md" styles={{ marginTop: 25  }} />
      <Slider defaultValue={60} size="lg" styles={{ marginTop: 25  }} />
      <Slider defaultValue={60} size="xl" styles={{ marginTop: 25  }} />
      {/*<RangeWrapper defaultValue={[40, 80]} size="xl" styles={{ root: { marginTop: 25 } }} />*/}
    </div>
  )
};

export const Usage = () => {
  return (
    <Slider
      marks={[
        { value: 20, label: '20%'},
        { value: 50, label: '50%'},
        { value: 80, label: '80%'}
      ]}
      />
  );
};

export const Uneven = () => {
  return (
    <UnevenRangeSlider
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
      />
  )
}

export const Controlled = () => {
  // @ts-ignore
  const marks = [
    { value: 20, label: '20%' },
    { value: 50, label: '50%' },
    { value: 80, label: '80%' }
  ];
  return (
      <RangeSlider defaultValue={[20,80]} marks={marks}/>
  )
};

export const ControlLabel = () => {
  return (
    <div style={{ padding: 100 }}>
      <Slider label={null}  styles={{ marginTop: 25 }}/>

      <Slider label={(value) => `${value} °C`}  styles={{ marginTop: 25 }}/>

      <Slider labelAlwaysOn  styles={{ marginTop: 25 }}/>

      <Slider
        styles={{ marginTop: 25 }}
        labelTransition="skew-down"
        labelTransitionDuration={150}
        labelTransitionTimingFunction="ease"
      />
    </div>
    )
};
