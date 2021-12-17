import React from 'react';
import { Dropdown } from '@kubed/components';
import { shallowWithTheme } from '@kubed/tests';

const defaultProps = {
  title: 'test',
  placement: 'bottom',
  children: null,
  interactive: true,
  trigger: 'click',
  hideOnClick: true,
  arrow: false,
  maxWidth: 210,
  animation: 'shift-away',
  content: 'test-dropdown',
};

describe('@kubed/components/Dropdown', () => {
  it('passes animation, arrow, trigger and placement props to Dropdown component', () => {
    const props = shallowWithTheme(<Dropdown {...defaultProps} />).find(Dropdown);
    expect(props.prop('animation')).toBe('shift-away');
    expect(props.prop('trigger')).toBe('click');
    expect(props.prop('placement')).toBe('bottom');
    expect(props.prop('arrow')).toBe(false);
  });

  it('has correct displayName', () => {
    expect(Dropdown.displayName).toEqual('@kubed/components/Dropdown');
  });
});
