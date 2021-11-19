import React from 'react';
import {
  shallowWithTheme,
} from '@kubed/tests';
import { Badge } from './Badge';

describe('@kubed/components/Badge', () => {

  it('has correct displayName', () => {
    expect(Badge.displayName).toEqual('@kubed/components/Badge');
  });

  it('renders given color and shadow', () => {
    const element = shallowWithTheme(
        <Badge color="warning" shadow className="badge-color-shadow" >
          test
        </Badge>
    );
    expect(element.find(Badge).prop('color')).toBe('warning');
    expect(element.find(Badge).prop('shadow')).toBe(true);
  });
});
