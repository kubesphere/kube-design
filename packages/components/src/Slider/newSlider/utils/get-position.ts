import React from "react";

interface GetPosition {
  value: number;
  min: number;
  max: number;
}

interface GetUnevenPosition {
  value:number;
  marks:{ value: number; label?: React.ReactNode; weight?: number }[]
}

export function getPosition({ value, min, max }: GetPosition) {
  const position = ((value - min) / (max - min)) * 100;
  return Math.min(Math.max(position, 0), 100);
}

export function getUnevenPosition({value,marks}:GetUnevenPosition) {
  const totalWeight = marks.reduce((prev, cur) => prev + (cur.weight || 1), 0) - 1;

  let position = 0;
  for(let i=0;i<marks.length -1;i++){
    const markWeight = marks[i].weight || 1;
    if(value >= marks[i+1].value){
      position += markWeight / totalWeight;
    } else if(value >= marks[i].value && value < marks[i+1].value){
      const percent = ( value - marks[i].value )/(marks[i+1].value - marks[i].value);
      position += (markWeight * percent) / totalWeight;
    }
  }
  return position;
}
