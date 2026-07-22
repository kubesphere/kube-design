import React, { act } from 'react';
import { mountWithTheme } from '@kubed/tests';
import { Dropdown } from '../../Dropdown/Dropdown';
import { BasePagination } from './BasePagination';
import { PageNumberMenu, PageNumberMenuHandle } from './PageNumberMenu';

const mockScrollToIndex = jest.fn();
let mockViewportSize = 160;
let mockVListMountCount = 0;
let mockVListStyle: React.CSSProperties | undefined;

jest.mock('virtua', () => {
  const React = require('react');

  return {
    VList: React.forwardRef((props, ref) => {
      mockVListStyle = props.style;
      React.useEffect(() => {
        mockVListMountCount += 1;
      }, []);
      React.useImperativeHandle(ref, () => ({
        get viewportSize() {
          return mockViewportSize;
        },
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
  beforeEach(() => {
    mockViewportSize = 160;
  });

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

  it('positions an early current page after the dropdown is fully shown', () => {
    const animationFrames: FrameRequestCallback[] = [];
    const requestAnimationFrame = jest
      .spyOn(window, 'requestAnimationFrame')
      .mockImplementation((callback) => {
        animationFrames.push(callback);
        return animationFrames.length;
      });
    mockViewportSize = 0;
    const wrapper = mountWithTheme(
      <BasePagination
        instance={{
          getCanNextPage: () => true,
          getCanPreviousPage: () => false,
          getState: () => ({ pageIndex: 0, pageSize: 10 }),
          getRowCount: () => 1000,
          getPageCount: () => 100,
          nextPage: jest.fn(),
          previousPage: jest.fn(),
          setPageIndex: jest.fn(),
          setPageSize: jest.fn(),
        }}
      />
    );
    const dropdowns = wrapper.find(Dropdown);

    mockScrollToIndex.mockClear();
    const previousMountCount = mockVListMountCount;
    act(() => dropdowns.at(1).prop('onShow')?.());

    expect(mockVListMountCount).toBe(previousMountCount + 1);
    expect(mockVListStyle?.visibility).toBe('hidden');
    expect(mockScrollToIndex).not.toHaveBeenCalled();

    act(() => animationFrames.shift()?.(0));
    expect(mockScrollToIndex).not.toHaveBeenCalled();

    mockViewportSize = 160;
    act(() => animationFrames.shift()?.(0));

    expect(mockScrollToIndex).toHaveBeenCalledWith(0, { align: 'center' });
    expect(mockVListStyle?.visibility).toBe('hidden');

    act(() => animationFrames.shift()?.(0));
    expect(mockVListStyle?.visibility).toBe('visible');
    requestAnimationFrame.mockRestore();
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
