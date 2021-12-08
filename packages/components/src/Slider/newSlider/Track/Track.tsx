import React from 'react';
import { DefaultProps, KubedNumberSize, KubedTheme } from '../../../theme';
import { Marks} from '../Marks/Mark';

import {
  TrackWrapper,
  BarWrapper
} from "./Track.styles";

interface TrackProps extends DefaultProps {
  filled: number;
  offset: number;
  marks: { value: number; label?: React.ReactNode }[];
  size: KubedNumberSize;
  radius: KubedNumberSize;
  color: KubedTheme;
  min: number;
  max: number;
  value: number;
  children: React.ReactNode;
  onChange(value: number): void;
  onMouseEnter?(event?: React.MouseEvent<HTMLDivElement>): void;
  onMouseLeave?(event?: React.MouseEvent<HTMLDivElement>): void;
}

export function Track({
                        filled,
                        size,
                        color,
                        classNames,
                        styles,
                        radius,
                        children,
                        offset,
                        onMouseLeave,
                        onMouseEnter,
                        ...others
                      }: TrackProps) {

  return (
    <TrackWrapper
      className="track-demo"
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter}
    >
      <BarWrapper
        className="track-bar"
        style={{ left: `${offset}%`, width: `${filled}%`, position: 'absolute' }}
      />

      {children}

      <Marks
        {...others}
        size={size}
        color={color}
        offset={offset}
        classNames={classNames}
        styles={styles}
      />
    </TrackWrapper>
  );
}

Track.displayName = '@kubed/components/SliderTrack';
