import React, { useState, CSSProperties, ReactElement } from 'react';
import styled from 'styled-components';
import { Previous, Next } from '@kubed/icons';
import { ceil, noop } from 'lodash';
import { Button } from '../Button/Button';
import { useLocales } from '../ConfigProvider/LocaleProvider/LocaleContext';

const PaginationWrapper = styled.div`
  position: relative;
`;

const PaginationInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .pagination {
    display: inline-flex;
    align-items: center;

    button {
      padding: 5px 12px;
      &:disabled {
        opacity: 0.6;
        border-color: transparent;
        background-color: transparent;
      }
    }
  }
`;

export interface PaginationProps {
  className?: string;
  style?: CSSProperties;
  totalCount: number;
  onNextPage?: (page: number) => void;
  onPreviousPage?: (page: number) => void;
  page?: number;
  pageSize?: number;
  showTotal?: boolean;
}

export function Pagination({
  totalCount,
  style,
  className,
  onNextPage = noop,
  onPreviousPage = noop,
  page = 0,
  pageSize = 10,
  showTotal = true,
}: PaginationProps): ReactElement {
  const { locales } = useLocales();
  const { Pagination: pageLocales } = locales;
  const [crtPage, setCrtPage] = useState(page);

  const pageCount = ceil(totalCount / pageSize);

  const handlePrevious = () => {
    const newPage = crtPage === 0 ? 0 : crtPage - 1;
    setCrtPage(newPage);
    onPreviousPage(newPage);
  };

  const handleNext = () => {
    const newPage = crtPage === pageCount ? pageCount : crtPage + 1;
    setCrtPage(newPage);
    onNextPage(newPage);
  };

  return (
    <PaginationWrapper className={className} style={style}>
      <PaginationInner>
        {showTotal ? (
          <div className="total-count">
            {pageLocales.totalItems} {totalCount}
          </div>
        ) : (
          <div />
        )}
        <div className="pagination">
          <Button variant="text" radius="sm" onClick={handlePrevious} disabled={crtPage === 0}>
            <Previous size={20} />
          </Button>
          <span style={{ margin: '0 12px' }}>
            {crtPage + 1} / {pageCount}
          </span>
          <Button
            variant="text"
            radius="sm"
            onClick={handleNext}
            disabled={crtPage + 1 === pageCount}
          >
            <Next size={20} />
          </Button>
        </div>
      </PaginationInner>
    </PaginationWrapper>
  );
}

export default Pagination;
