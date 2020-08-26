import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './styles.scss'

export default class Tag extends React.Component {
  static propTypes = {
    type: PropTypes.oneOf(['default', 'warning', 'primary']),
    className: PropTypes.string,
  }

  static defaultProps = {
    type: 'default',
  }

  render() {
    const { type, children, className } = this.props
    return (
      <span className={classNames('tag', `tag-${type}`, className)}>
        {children}
      </span>
    )
  }
}
