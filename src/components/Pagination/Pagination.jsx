import React, { Component } from "react";

import Icon from "../Icon";

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
        <Icon
          name="previous"
          disabled={page <= 1}
          size={20}
          changeable
          onClick={this.handlePrev}
        />
        <span>
          {page} / {totalPage}
        </span>
        <Icon
          name="next"
          disabled={page >= totalPage}
          size={20}
          changeable
          onClick={this.handleNext}
        />
      </div>
    );
  }
}
