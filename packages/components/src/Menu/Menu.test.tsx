import React from 'react';
import { checkAccessibility, mountWithTheme } from '@kubed/tests';
import { Menu, MenuItem } from './Menu';

describe('@kubed/components/Menu', () => {
  checkAccessibility([
    mountWithTheme(
      <Menu>
        <MenuItem>test-1</MenuItem>
        <MenuItem>test-2</MenuItem>
        <MenuItem>test-3</MenuItem>
      </Menu>
    ),
  ]);

  it('has correct displayName', () => {
    expect(Menu.displayName).toEqual('@kubed/components/Menu');
  });
});
