import * as React from 'react';
import styled from 'styled-components';
import { VList } from 'virtua';
import type { VListHandle } from 'virtua';

import { Menu, MenuItem } from '../../Menu/Menu';
import { MenuButton } from '../../Menu/MenuButton/MenuButton';

const VIRTUALIZATION_THRESHOLD = 32;
const PAGE_ITEM_HEIGHT = 36;
const PAGE_MENU_HEIGHT = 176;
const PAGE_MENU_PADDING = 8;
const PAGE_MENU_VIEWPORT_HEIGHT = PAGE_MENU_HEIGHT - PAGE_MENU_PADDING * 2;
const MAX_SCROLL_ATTEMPTS = 30;

const PageMenu = styled(Menu)`
  box-sizing: border-box;
  width: 96px;
  max-height: ${PAGE_MENU_HEIGHT}px;
  overflow: auto;
`;

const VirtualPageMenu = styled.div`
  box-sizing: border-box;
  height: ${PAGE_MENU_HEIGHT}px;
  width: 96px;
  padding: ${PAGE_MENU_PADDING}px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.palette.background};
`;

interface PageNumberMenuProps {
  pageCount: number;
  pageIndex: number;
  onPageChange: (pageIndex: number) => void;
}

export interface PageNumberMenuHandle {
  resetVirtualList: () => void;
  scrollToCurrentPage: () => void;
}

export const PageNumberMenu = React.forwardRef<PageNumberMenuHandle, PageNumberMenuProps>(
  ({ pageCount, pageIndex, onPageChange }, ref) => {
    const pageIndexes = React.useMemo(
      () => Array.from({ length: pageCount }, (_, index) => index),
      [pageCount]
    );
    const [virtualListKey, setVirtualListKey] = React.useState(0);
    const [isVirtualListPositioned, setIsVirtualListPositioned] = React.useState(true);
    const virtualListRef = React.useRef<VListHandle>(null);
    const scrollFrameRef = React.useRef<number>();

    const resetVirtualList = React.useCallback(() => {
      if (pageCount > VIRTUALIZATION_THRESHOLD) {
        window.cancelAnimationFrame(scrollFrameRef.current);
        setIsVirtualListPositioned(false);
        setVirtualListKey((key) => key + 1);
      }
    }, [pageCount]);

    const scrollToCurrentPage = React.useCallback(() => {
      if (pageCount <= VIRTUALIZATION_THRESHOLD) {
        return;
      }

      window.cancelAnimationFrame(scrollFrameRef.current);

      let attempts = 0;
      const scrollWhenMeasured = () => {
        const virtualList = virtualListRef.current;

        if (virtualList?.viewportSize) {
          virtualList.scrollToIndex(pageIndex, { align: 'center' });
          scrollFrameRef.current = window.requestAnimationFrame(() => {
            setIsVirtualListPositioned(true);
          });
          return;
        }

        attempts += 1;
        if (attempts < MAX_SCROLL_ATTEMPTS) {
          scrollFrameRef.current = window.requestAnimationFrame(scrollWhenMeasured);
        }
      };

      scrollWhenMeasured();
    }, [pageCount, pageIndex]);

    React.useImperativeHandle(ref, () => ({ resetVirtualList, scrollToCurrentPage }), [
      resetVirtualList,
      scrollToCurrentPage,
    ]);
    React.useEffect(() => {
      if (virtualListKey > 0) {
        scrollToCurrentPage();
      }
    }, [scrollToCurrentPage, virtualListKey]);
    React.useEffect(() => () => window.cancelAnimationFrame(scrollFrameRef.current), []);

    if (pageCount > VIRTUALIZATION_THRESHOLD) {
      return (
        <VirtualPageMenu>
          <VList
            key={virtualListKey}
            ref={virtualListRef}
            data={pageIndexes}
            itemSize={PAGE_ITEM_HEIGHT}
            keepMounted={[pageIndex]}
            style={{
              height: PAGE_MENU_VIEWPORT_HEIGHT,
              visibility: isVirtualListPositioned ? 'visible' : 'hidden',
            }}
          >
            {(index) => (
              <MenuButton
                key={index}
                aria-current={index === pageIndex ? 'page' : undefined}
                onClick={() => onPageChange(index)}
              >
                {index + 1}
              </MenuButton>
            )}
          </VList>
        </VirtualPageMenu>
      );
    }

    const items = pageIndexes.map((index) => (
      <MenuItem
        key={index}
        aria-current={index === pageIndex ? 'page' : undefined}
        onClick={() => onPageChange(index)}
      >
        {index + 1}
      </MenuItem>
    ));

    return <PageMenu>{items}</PageMenu>;
  }
);

PageNumberMenu.displayName = '@kubed/components/Table/PageNumberMenu';
