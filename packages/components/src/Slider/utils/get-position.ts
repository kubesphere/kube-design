import React from 'react';

interface GetUnevenPosition {
  value: number;
  min?: number;
  max?: number;
  marks: { value: number; label?: React.ReactNode; weight?: number }[];
}

export function getUnevenPosition({ value, marks, min, max }: GetUnevenPosition): number {
  let position = 0;
  if (marks && marks.length !== 0) {
    const totalWeight = marks.reduce((prev, cur) => prev + (cur.weight || 1), 0) - 1;
    for (let i = 0; i < marks.length - 1; i++) {
      const markWeight = marks[i].weight || 1;
      if (value >= marks[i + 1].value) {
        position += markWeight / totalWeight;
      } else if (value >= marks[i].value && value < marks[i + 1].value) {
        const percent = (value - marks[i].value) / (marks[i + 1].value - marks[i].value);
        position += (markWeight * percent) / totalWeight;
      }
    }
    console.log('position', position);
    return Math.min(Math.max(position * 100, 0), 100);
  }
  position = ((value - min) / (max - min)) * 100;
  return Math.min(Math.max(position, 0), 100);
}
