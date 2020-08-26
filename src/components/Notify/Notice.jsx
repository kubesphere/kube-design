import React, { Component } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import Button from '../Button'

class Notice extends Component {
  static propTypes = {
    duration: PropTypes.number,
    onClose: PropTypes.func,
    style: PropTypes.object,
    className: PropTypes.string,
    type: PropTypes.string,
    closable: PropTypes.bool,
    children: PropTypes.node,
    prefixCls: PropTypes.string,
  }

  static defaultProps = {
    duration: 3000,
    closable: false,
    prefixCls: 'notice',
  }

  componentDidMount() {
    this.startCloseTimer()
  }

  componentWillUnmount() {
    this.clearCloseTimer()
  }

  close = () => {
    this.clearCloseTimer()
    this.props.onClose()
  }

  startCloseTimer = () => {
    const { duration } = this.props
    if (duration === 0) return
    this.closeTimer = setTimeout(() => {
      this.close()
    }, duration)
  }

  clearCloseTimer = () => {
    if (this.closeTimer) {
      clearTimeout(this.closeTimer)
      this.closeTimer = null
    }
  }

  render() {
    const { className, style, type, closable, children, prefixCls } = this.props

    return (
      <div
        className={classNames(
          prefixCls,
          {
            [`${prefixCls}-closable`]: closable,
            [className]: !!className,
          },
          `notice-${type}`
        )}
        style={style}
        onMouseEnter={this.clearCloseTimer}
        onMouseLeave={this.startCloseTimer}
      >
        <div className={`${prefixCls}-content`}>{children}</div>
        {closable ? (
          <Button
            type="text"
            onClick={this.close}
            className={`${prefixCls}-close`}
          >
            Close
          </Button>
        ) : null}
      </div>
    )
  }
}

export default Notice
