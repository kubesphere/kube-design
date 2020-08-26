import React, { Component } from "react";
import Icon from "../Icon";
import "./styles.scss";

export default class Pagination extends Component {
  handlePrev = () => {
    const { page, onChange } = this.props;
    onChange && onChange(Math.max(page - 1, 1));
  };

  handleNext = () => {
    const { total, page, limit, onChange } = this.props;
    const totalPage = Math.round(total / limit);
    onChange && onChange(Math.min(page + 1, totalPage));
  };

  render() {
    const { total, page, limit } = this.props;
    const totalPage = Math.round(total / limit);
    return (
      <div className="pagination">
        <div>
          Total {total} item{total > 1 ? "s" : ""}
        </div>
        <div>
          <Icon
            name="previous"
            disabled={page <= 1}
            changeable
            onClick={this.handlePrev}
          />
          <span>
            {page}/{totalPage}
          </span>
          <Icon
            name="next"
            disabled={page >= totalPage}
            changeable
            onClick={this.handleNext}
          />
        </div>
      </div>
    );
  }
}
