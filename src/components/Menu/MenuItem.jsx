import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class MenuItem extends Component {
  static menuType = 'MenuItem';

  static propTypes = {
    disabled: PropTypes.bool,
    selected: PropTypes.bool,
    className: PropTypes.string,
    value: PropTypes.any,
    specKey: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.any.isRequired,
  };

  handleClick = e => {
    const { specKey, value, onClick, disabled } = this.props;
    if (disabled) return;

    onClick(e, specKey, value);
  };

  render() {
    const {
      className,
      children,
      disabled,
      selected,
    } = this.props;

    return (
      <li
        className={classnames('menu-item', className, {
          'menu-item-disabled': disabled,
          'menu-item-selected': selected,
        })}
        onClick={this.handleClick}
      >
        {children}
      </li>
    );
  }
}

export default MenuItem;
