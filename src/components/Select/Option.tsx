import React from "react";
import classNames from "classnames";
import Checkbox from "../Checkbox/Checkbox";
import Icon from "../Icon";
import { SelectOption } from './Select'

export interface OptionProps {
  option: SelectOption,
  isActive?: boolean,
  disabled?: boolean,
  onClick: (option: SelectOption) => void,
  multi: boolean,
}

export default class Option extends React.Component<OptionProps> {
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
        checked={isActive}
        disabled={disabled}
        onChange={this.handleCancelBubble}
      />
    );
  };

  renderContent = () => {
    const { multi, children } = this.props;
    return multi ? (
      <>
        {this.renderCheckbox()}
        <span className="select-option-label">{children}</span>
      </>
    ) : (
      <>
        <span className="select-option-label">{children}</span>
        {this.renderIcon()}
      </>
    );
  };

  handleCancelBubble = () => {
    this.props.onClick(this.props.option);
  };

  handleSelectedValue = (e: React.SyntheticEvent<HTMLDivElement>) => {
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
