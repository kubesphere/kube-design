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
  scrollToCurrentPage: () => void;
}

export const PageNumberMenu = React.forwardRef<PageNumberMenuHandle, PageNumberMenuProps>(
  ({ pageCount, pageIndex, onPageChange }, ref) => {
    const pageIndexes = React.useMemo(
      () => Array.from({ length: pageCount }, (_, index) => index),
      [pageCount]
    );
    const virtualListRef = React.useRef<VListHandle>(null);

    const scrollToCurrentPage = React.useCallback(() => {
      if (pageCount > VIRTUALIZATION_THRESHOLD) {
        virtualListRef.current?.scrollToIndex(pageIndex, { align: 'center' });
      }
    }, [pageCount, pageIndex]);

    React.useImperativeHandle(ref, () => ({ scrollToCurrentPage }), [scrollToCurrentPage]);
    React.useEffect(scrollToCurrentPage, [scrollToCurrentPage]);

    if (pageCount > VIRTUALIZATION_THRESHOLD) {
      return (
        <VirtualPageMenu>
          <VList
            ref={virtualListRef}
            data={pageIndexes}
            itemSize={PAGE_ITEM_HEIGHT}
            keepMounted={[pageIndex]}
            style={{ height: PAGE_MENU_VIEWPORT_HEIGHT }}
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
