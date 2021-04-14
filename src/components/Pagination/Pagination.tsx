import React, { Component } from "react";

import Button from "../Button";

export interface PaginationProps {
  total: number,
  limit: number,
  page: number,
  onChange?: (page: number) => void,
}

export default class Pagination extends Component<PaginationProps> {
  get totalPage() {
    const { total, limit } = this.props;
    const left = total % limit;
    return left === 0 ? Math.max(total / limit, 1) : (total - left) / limit + 1;
  }

  handlePrev = () => {
    const { page, onChange } = this.props;
    onChange && onChange(Math.max(page - 1, 1));
  };

  handleNext = () => {
    const { page, onChange } = this.props;
    onChange && onChange(Math.min(page + 1, this.totalPage));
  };

  render() {
    const { page } = this.props;
    const totalPage = this.totalPage;
    return (
      <div className="pagination">
        <Button
          type="flat"
          icon="previous"
          iconSize={20}
          disabled={page <= 1}
          onClick={this.handlePrev}
        />
        <span>
          {page} / {totalPage}
        </span>
        <Button
          type="flat"
          icon="next"
          iconSize={20}
          disabled={page >= totalPage}
          onClick={this.handleNext}
        />
      </div>
    );
  }
}
