import React, { Component } from "react";

import Button from "../Button";

export default class Pagination extends Component {
  handlePrev = () => {
    const { page, onChange } = this.props;
    onChange && onChange(Math.max(page - 1, 1));
  };

  handleNext = () => {
    const { total, page, limit, onChange } = this.props;
    const totalPage = Math.floor(total / limit) + 1;
    onChange && onChange(Math.min(page + 1, totalPage));
  };

  render() {
    const { total, page, limit } = this.props;
    const totalPage = Math.floor(total / limit) + 1;
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
