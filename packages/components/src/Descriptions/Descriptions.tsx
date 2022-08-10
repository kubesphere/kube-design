import React from 'react';
import { DefaultProps } from '../theme';
import { Description } from './Description';

export { Description };

type DescriptionItem = {
  label: React.ReactNode;
  value: React.ReactNode;
};

export interface DescriptionsProps extends DefaultProps {
  /** Controls Description appearance */
  variant?: 'default' | 'unstyled';

  /** Description data */
  data?: DescriptionItem[];
}

export function Descriptions({ variant = 'default', data = [] }: DescriptionsProps) {
  return (
    <>
      {data.map((item, index) => {
        return (
          <Description variant={variant} label={item.label} key={`description-${index}`}>
            {item.value}
          </Description>
        );
      })}
    </>
  );
}

Descriptions.displayName = '@kubed/components/Descriptions';
