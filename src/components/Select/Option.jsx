import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Checkbox from "../Checkbox/Checkbox";
import Icon from "../Icon";

export default class Option extends React.Component {
  static propTypes = {
    isActive: PropTypes.bool,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    multi: PropTypes.bool,
  };

  static defaultProps = {
    onChange() {},
    multi: false,
  };

  renderIcon = () => {
    const { isActive } = this.props;
    return isActive ? (
      <div className="select-option-icon">
        <Icon name="check" type="coloured" />
      </div>
    ) : null;
  };

  renderCheckbox = () => {
    const { disabled, isActive } = this.props;
    return (
      <Checkbox
        size="small"
        checked={isActive}
        disabled={disabled}
        onChange={this.handleCancelBubble}
      />
    );
  };

  renderContent = () => {
    const { multi, children, showTip, option } = this.props;
    return multi ? (
      <>
        {this.renderCheckbox()}
        <span
          className="select-option-label"
          title={showTip ? option?.label || "" : ""}
        >
          {children}
        </span>
      </>
    ) : (
      <>
        <span
          className="select-option-label"
          title={showTip ? option?.label || "" : ""}
        >
          {children}
        </span>
        {this.renderIcon()}
      </>
    );
  };

  handleCancelBubble = (checked, value, e) => {
    this.props.onClick(this.props.option);
  };

  handleSelectedValue = (e) => {
    e.stopPropagation();
    e.preventDefault();
    this.props.onClick(this.props.option);
  };

  render() {
    const { disabled, isActive } = this.props;

    return (
      <div
        className={classNames("select-option", {
          "select-option-disabled": disabled,
          "select-option-active": isActive,
        })}
        onClick={this.handleSelectedValue}
      >
        {this.renderContent()}
      </div>
    );
  }
}
