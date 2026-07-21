import React from 'react';
import { mountWithTheme } from '@kubed/tests';
import { PageNumberMenu } from './PageNumberMenu';

const mockScrollToIndex = jest.fn();

jest.mock('virtua', () => {
  const React = require('react');

  return {
    VList: React.forwardRef((_props, ref) => {
      React.useImperativeHandle(ref, () => ({
        scrollToIndex: mockScrollToIndex,
      }));
      return React.createElement('div');
    }),
  };
});

describe('@kubed/components/Table/PageNumberMenu positioning', () => {
  it('centers the current page when the virtual page list opens', () => {
    mountWithTheme(<PageNumberMenu pageCount={100} pageIndex={49} onPageChange={jest.fn()} />);

    expect(mockScrollToIndex).toHaveBeenCalledWith(49, { align: 'center' });
  });
});
