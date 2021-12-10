import React from 'react';

interface GetUnevenChangeValue {
  value: number;
  containerWidth?: number;
  decimals?: number;
  marks?: { value: number; label?: React.ReactNode; weight?: number }[];
  max?: number;
  min?: number;
  step?: number;
}

export function getUnevenChangeValue({
  value,
  containerWidth,
  decimals,
  marks,
  min,
  max,
  step,
}: GetUnevenChangeValue) {
  const left = !containerWidth
    ? value
    : Math.min(Math.max(value, 0), containerWidth) / containerWidth;
  if (marks && marks.length !== 0) {
    const totalWeight = marks.reduce((prev, cur) => prev + (cur.weight || 1), 0) - 1;
    const weight = totalWeight * left;
    let usedWeight = 0;
    let currentValue = 0;
    for (let i = 0; i < marks.length - 1; i++) {
      const markWeight = marks[i].weight || 1;
      usedWeight += markWeight;
      if (usedWeight >= weight && usedWeight < markWeight + weight) {
        const _percent = (weight + markWeight - usedWeight) / markWeight; //计算权重
        currentValue = (marks[i + 1].value - marks[i].value) * _percent + marks[i].value;
      }
    }
    return Number(currentValue.toFixed(decimals));
  }
  const dx = left * (max - min);
  return (dx !== 0 ? Math.round(dx / step) * step : 0) + min;
}
