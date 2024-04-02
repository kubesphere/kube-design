import { CaretDown, Next, Previous } from '@kubed/icons';
import cx from 'classnames';
import * as React from 'react';
import styled, { css } from 'styled-components';

import { Updater } from '@tanstack/react-table';
import { ButtonContainer } from '../../Button/Button.styles';
import { useLocales } from '../../ConfigProvider/LocaleProvider/LocaleContext';
import { Button, Dropdown, Menu, MenuItem } from '../../index';

const flex = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PaginationWrapper = styled.div`
  ${flex};
  position: relative;
`;

const PaginationRight = styled.div`
  display: inline-flex;
  align-items: center;
  ${ButtonContainer} {
    padding: 5px 12px;
    &:disabled {
      opacity: 0.6;
      border-color: transparent;
      background-color: transparent;
    }
  }
`;

const MenuWrapper = styled(Menu)`
  width: 96px;
  max-height: 176px;
  overflow: auto;
`;

const PaginationLeft = styled.div`
  display: inline-flex;
  align-items: center;
`;

const PageSize = styled.span`
  display: inline-flex;
  cursor: pointer;
  align-items: center;
  line-height: 20px;

  gap: 4px;
  & > span {
    font-weight: 600;
    color: ${({ theme }) => theme.palette.accents_7};
  }
`;

const Total = styled.span`
  display: inline-flex;
  gap: 4px;
`;

const PageIndex = styled.span`
  margin: 0px 12px;
  font-weight: 600;
  line-height: 20px;
  color: ${({ theme }) => theme.palette.accents_7};
  font-family: ${({ theme }) => theme.font.sans};
  font-size: 12px;
  cursor: pointer;
`;

const Divider = styled.span`
  margin: 0 12px;
  width: 1px;
  height: 12px;
  background-color: ${({ theme }) => theme.palette.accents_2};
`;

export const DEFAULT_PAGE_SIZE = 10;

interface PaginationState {
  pageIndex: number;
  pageSize: number;
}

interface PaginationInstance {
  getCanNextPage: () => boolean;
  getCanPreviousPage: () => boolean;
  getState: () => PaginationState;
  getTotal: () => number;
  nextPage: () => void;
  previousPage: () => void;
  setPageIndex: (updater: Updater<number>) => void;
  setPageSize: (updater: Updater<number>) => void;
}

type TablePaginationProps = {
  className?: string;
  style?: React.CSSProperties;
  config?: {
    isShowSetPageSize?: boolean;
    isShowDivider?: boolean;
    isShowTotalCount?: boolean;
    isShowPagination?: boolean;
    autoResetPageIndex?: boolean;
  };
  instance: PaginationInstance;
};

export type {
  TablePaginationProps as BaseTablePaginationProps,
  PaginationInstance,
  PaginationState,
};

export const BasePagination = ({
  className,
  style,
  config: {
    isShowSetPageSize = true,
    isShowDivider = true,
    isShowTotalCount = true,
    isShowPagination = true,
  } = {},
  instance,
}: TablePaginationProps) => {
  const {
    getCanNextPage,
    getCanPreviousPage,
    getState,
    getTotal,
    nextPage,
    previousPage,
    setPageSize,
    setPageIndex,
  } = instance;
  const { pageIndex, pageSize } = getState();
  const total = getTotal();
  const pageCount = Math.ceil(total / pageSize);
  const { locales } = useLocales();
  const { Pagination: pageLocales } = locales;

  const renderPageDropDown = () => {
    if (pageCount && pageCount > 0) {
      const items = Array.from({ length: pageCount }, (_, i) => i + 1).map((item) => (
        <MenuItem key={item} onClick={() => setPageIndex(item)}>
          {item}
        </MenuItem>
      ));
      return <MenuWrapper>{items}</MenuWrapper>;
    }
    return null;
  };

  const renderPageSizeDropDown = () => {
    const items = [10, 20, 50, 100].map((size) => (
      <MenuItem
        style={{ alignItems: 'center' }}
        key={size.toString()}
        onClick={() => {
          setPageSize(size);
        }}
      >
        {size}
      </MenuItem>
    ));

    return <MenuWrapper>{items}</MenuWrapper>;
  };

  return (
    <PaginationWrapper className={cx(className, 'table-pagination-wrapper')} style={style}>
      <PaginationLeft>
        {isShowSetPageSize && (
          <Dropdown trigger="mouseenter click" interactive content={renderPageSizeDropDown()}>
            <PageSize>
              <span>{pageLocales.limit}</span>
              <span>{pageSize}</span>
              <CaretDown />
            </PageSize>
          </Dropdown>
        )}
        {isShowDivider && <Divider />}
        {isShowTotalCount && (
          <Total className="total-count">
            <span>{pageLocales.totalItems}</span>
            <span>{total ?? 0}</span>
          </Total>
        )}
      </PaginationLeft>
      {isShowPagination && (
        <PaginationRight>
          <Button
            variant="text"
            radius="sm"
            onClick={() => previousPage()}
            disabled={!getCanPreviousPage()}
          >
            <Previous size={20} />
          </Button>
          <Dropdown trigger="mouseenter click" content={renderPageDropDown()} interactive>
            <PageIndex>
              {pageIndex + 1} / {pageCount}
            </PageIndex>
          </Dropdown>
          <Button
            variant="text"
            radius="sm"
            onClick={() => nextPage()}
            disabled={!getCanNextPage()}
          >
            <Next size={20} />
          </Button>
        </PaginationRight>
      )}
    </PaginationWrapper>
  );
};

export type { TablePaginationProps as PaginationProps };
