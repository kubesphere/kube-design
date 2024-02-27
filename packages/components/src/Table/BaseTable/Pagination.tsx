import styled, { css } from 'styled-components';
import * as React from 'react';
import { Previous, Next, CaretDown } from '@kubed/icons';
import { ceil, noop } from 'lodash';
import cx from 'classnames';

import { Button, Dropdown, Menu, MenuItem } from '../../index';
import { ButtonContainer } from '../../Button/Button.styles';
import { useLocales } from '../../ConfigProvider/LocaleProvider/LocaleContext';

interface TablePaginationProps {
  className?: string;
  style?: React.CSSProperties;
  total: number;
  pagination?: {
    page: number;
    pageSize?: number;
  };
  isShowSetPageSize?: boolean;
  isShowDivider?: boolean;
  isShowTotalCount?: boolean;
  isShowPagination?: boolean;
  autoResetPage?: boolean;
  onChange?: (pagination: { page: number; pageSize: number }) => void;
}

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

export const Pagination = ({
  className,
  style,
  total,
  autoResetPage = true,
  pagination: { page = 1, pageSize: limit = DEFAULT_PAGE_SIZE } = {
    page: 1,
    pageSize: DEFAULT_PAGE_SIZE,
  },
  onChange,
  isShowSetPageSize = true,
  isShowDivider = true,
  isShowTotalCount = true,
  isShowPagination = true,
}: TablePaginationProps) => {
  const [pageIndex, setPageIndex] = React.useState(page - 1);
  const [pageSize, setPageSize] = React.useState(limit);

  const currentPageCount = React.useMemo(() => {
    return Math.ceil(total / pageSize);
  }, [pageSize, total]);
  Math.ceil(total / pageSize);

  const { locales } = useLocales();
  const { Pagination: pageLocales } = locales;

  React.useEffect(() => {
    if (page !== pageIndex + 1) {
      setPageIndex(page - 1);
    }
  }, [page]);

  React.useEffect(() => {
    if (limit !== pageSize) {
      setPageSize(limit);
      if (autoResetPage) {
        setPageIndex(0);
      }
    }
  }, [limit]);

  const handlePageChange = (_pageIndex: number) => {
    setPageIndex(_pageIndex);
    onChange?.({ page: _pageIndex + 1, pageSize });
  };

  const handlePageSizeChange = (_pageSize: number) => {
    setPageSize(_pageSize);
    if (autoResetPage) {
      setPageIndex(0);
    }
    onChange?.({ page: autoResetPage ? 1 : pageIndex + 1, pageSize: _pageSize });
  };

  const handlePreviousPage = () => {
    if (pageIndex > 0) {
      handlePageChange(pageIndex - 1);
    }
  };

  const handleNextPage = () => {
    if (pageIndex < currentPageCount - 1) {
      handlePageChange(pageIndex + 1);
    }
  };

  const getCanPreviousPage = () => pageIndex > 0;

  const getCanNextPage = () => pageIndex < currentPageCount - 1;

  const renderPageDropDown = () => {
    if (currentPageCount && currentPageCount > 0) {
      const items = Array.from({ length: currentPageCount }, (_, i) => i + 1).map((item) => (
        <MenuItem key={item} onClick={() => handlePageChange(item - 1)}>
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
          handlePageSizeChange(size);
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
            onClick={() => handlePreviousPage()}
            disabled={!getCanPreviousPage()}
          >
            <Previous size={20} />
          </Button>
          <Dropdown trigger="mouseenter click" content={renderPageDropDown()} interactive>
            <PageIndex>
              {pageIndex + 1} / {currentPageCount}
            </PageIndex>
          </Dropdown>
          <Button
            variant="text"
            radius="sm"
            onClick={() => handleNextPage()}
            disabled={!getCanNextPage()}
          >
            <Next size={20} />
          </Button>
        </PaginationRight>
      )}
    </PaginationWrapper>
  );
};
