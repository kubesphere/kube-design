import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Popper from '../Popper';
import './styles.scss'

class Tooltip extends Component {
  static propTypes = {
    always: PropTypes.bool,
    trigger: PropTypes.string,
    className: PropTypes.string,
    content: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
    placement: PropTypes.string,
    children: PropTypes.node,
  };

  static defaultProps = {
    always: false,
    trigger: 'hover',
    placement: 'top',
  };

  render() {
    const { children, className, content, ...restProps } = this.props;

    if ([undefined, null, ''].includes(content)) return children;

    return (
      <Popper
        {...restProps}
        content={content}
        className={classNames('tooltip', className)}
        type="tooltip"
      >
        {children}
      </Popper>
    );
  }
}

export default Tooltip;
