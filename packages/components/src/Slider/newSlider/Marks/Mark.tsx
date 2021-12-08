import React from 'react';
import { KubedNumberSize, KubedTheme, DefaultProps } from '../../../theme';
import { getPosition } from '../utils/get-position';
import { isMarkFilled } from '../utils/is-mark-filled';
import cx from 'classnames';

import {
  MarkWrapper,
  MarkLabel,
  Mark
} from "./Marks.style";

export interface MarksProps extends DefaultProps {
  marks: { value: number; label?: React.ReactNode }[];
  size: KubedNumberSize;
  color: KubedTheme;
  min: number;
  max: number;
  value: number;
  onChange(value: number): void;
  offset?: number;
}

export function Marks({
                        marks,
                        color,
                        size,
                        min,
                        max,
                        value,
                        classNames,
                        styles,
                        offset,
                        onChange,
                      }: MarksProps) {
  const items = marks.map((mark,index)=> {
    return (
      <MarkWrapper

        style={{ left: `${getPosition({ value: mark.value, min, max })}%`, position:'absolute', top:0 }}
        key={index}
      >
        <Mark
          // style={{ ...styles.mark, ...(mark.value <= value ? styles.markFilled : null) }}
          className={cx(classNames, {
            'mark-filled': isMarkFilled({ mark, value, offset }),
          })}
        />
        {mark.label && (
          <MarkLabel
            // style={styles.markLabel}
            onMouseDown={(event) => {
              event.stopPropagation();
              onChange(mark.value);
            }}
            onTouchStart={(event) => {
              event.stopPropagation();
              onChange(mark.value);
            }}
          >
            {mark.label}
          </MarkLabel>
        )}
      </MarkWrapper>
    )
  });

  return <div>{items}</div>;
}

Marks.displayName = '@kubed/components/SliderMarks';
