// https://github.com/mantinedev/mantine/blob/884e16c6f2c7b72840087a6734d5d4c40ddda85d/src/mantine-core/src/components/Progress/Progress.tsx
import React from 'react';
import { DefaultProps, KubedNumberSize } from '../theme';
import forwardRef from '../utils/forwardRef';

import { ProgressWrapper, ProgressBar } from './Progress.styles';

function getCumulativeSections(
  sections: { value: number; color: string }[]
): { value: number; color: string; accumulated: number }[] {
  return sections.reduce(
    (acc, section) => {
      acc.sections.push({ ...section, accumulated: acc.accumulated });
      acc.accumulated += section.value;
      return acc;
    },
    { accumulated: 0, sections: [] }
  ).sections;
}

export interface ProgressProps extends DefaultProps {
  /** Percent of filled bar (0-100) */
  value?: number;

  /** Progress color from theme */
  color?: string;

  /** Predefined progress height or number for height in px */
  size?: KubedNumberSize;

  /** Predefined progress radius from theme.radius or number for height in px */
  radius?: KubedNumberSize;

  /** Adds stripes */
  striped?: boolean;

  /** Replaces value if present, renders multiple sections instead of single one */
  sections?: { value: number; color: string }[];
}

export const Progress = forwardRef<ProgressProps, 'div'>(
  ({ value, color, size = 'md', radius = 'sm', striped = false, sections, ...rest }, ref) => {
    const segments = Array.isArray(sections)
      ? getCumulativeSections(sections).map((section, index) => (
          <ProgressBar
            key={index}
            $color={section.color}
            $radius={radius}
            style={{
              width: `${section.value}%`,
              left: `${section.accumulated}%`,
            }}
          />
        ))
      : null;

    return (
      <ProgressWrapper ref={ref} $radius={radius} $size={size} {...rest}>
        {segments || (
          <ProgressBar
            $striped={striped}
            $color={color}
            $radius={radius}
            style={{ width: `${value}%` }}
          />
        )}
      </ProgressWrapper>
    );
  }
);

Progress.displayName = '@kubed/components/Progress';
