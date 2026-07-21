import React from 'react';
import { mountWithTheme } from '@kubed/tests';
import { PageNumberMenu } from './PageNumberMenu';

describe('@kubed/components/Table/PageNumberMenu', () => {
  it('renders every page when there are exactly 32 pages', () => {
    const wrapper = mountWithTheme(
      <PageNumberMenu pageCount={32} pageIndex={15} onPageChange={jest.fn()} />
    );

    expect(wrapper.getDOMNode().querySelectorAll('button')).toHaveLength(32);
  });

  it('renders only the visible page buttons when there are more than 32 pages', () => {
    const wrapper = mountWithTheme(
      <PageNumberMenu pageCount={33} pageIndex={16} onPageChange={jest.fn()} />
    );

    expect(wrapper.getDOMNode().querySelectorAll('button').length).toBeLessThan(33);
  });

  it('keeps the current page mounted in a virtual page list', () => {
    const wrapper = mountWithTheme(
      <PageNumberMenu pageCount={100} pageIndex={49} onPageChange={jest.fn()} />
    );

    expect(wrapper.getDOMNode().querySelector('[aria-current="page"]')?.textContent).toBe('50');
  });
});
