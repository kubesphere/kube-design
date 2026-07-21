import React, { act } from 'react';
import { mountWithTheme } from '@kubed/tests';
import { PageNumberMenu, PageNumberMenuHandle } from './PageNumberMenu';

const mockScrollToIndex = jest.fn();

jest.mock('virtua', () => {
  const React = require('react');

  return {
    VList: React.forwardRef((props, ref) => {
      React.useImperativeHandle(ref, () => ({
        scrollToIndex: mockScrollToIndex,
      }));
      return React.createElement(
        'div',
        null,
        props.data.map((item, index) => props.children(item, index))
      );
    }),
  };
});

describe('@kubed/components/Table/PageNumberMenu positioning', () => {
  it('centers the current page when the virtual page list opens', () => {
    const pageNumberMenuRef = React.createRef<PageNumberMenuHandle>();
    mountWithTheme(
      <PageNumberMenu
        ref={pageNumberMenuRef}
        pageCount={100}
        pageIndex={49}
        onPageChange={jest.fn()}
      />
    );

    mockScrollToIndex.mockClear();
    act(() => pageNumberMenuRef.current?.scrollToCurrentPage());

    expect(mockScrollToIndex).toHaveBeenCalledWith(49, { align: 'center' });
  });

  it('changes to a different clicked page in a virtual page list', () => {
    const onPageChange = jest.fn();
    const wrapper = mountWithTheme(
      <PageNumberMenu pageCount={33} pageIndex={16} onPageChange={onPageChange} />
    );
    const eighteenthPage = wrapper.getDOMNode().querySelectorAll('button')[17] as HTMLButtonElement;

    act(() => eighteenthPage.click());

    expect(onPageChange).toHaveBeenCalledWith(17);
  });
});
