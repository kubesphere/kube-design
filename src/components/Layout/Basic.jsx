import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  componentCls: PropTypes.string,
  as: PropTypes.string,
};

const Basic = ({ children, as: ElementType = 'div', componentCls, className, ...restProps }) => (
  <ElementType className={classNames(componentCls, className)} {...restProps}>
    {children}
  </ElementType>
);

Basic.propTypes = propTypes;

export default Basic;
