import React, { Component } from "react";
import classNames from "classnames";
import Icon from "../Icon";

export interface NoticeProps {
  duration: number,
  onClose?: Callback,
  style?: object,
  className?: string,
  type: string,
  closable: boolean,
  prefixCls: string,
}

export default class Notice extends Component<NoticeProps> {
  static defaultProps = {
    duration: 3000,
    closable: false,
    prefixCls: "notice",
    type: "info",
  };

  closeTimer?: Timer

  componentDidMount() {
    this.startCloseTimer();
  }

  componentWillUnmount() {
    this.clearCloseTimer();
  }

  close = () => {
    this.clearCloseTimer();
    const { onClose } = this.props
    onClose && onClose();
  };

  startCloseTimer = () => {
    const { duration } = this.props;
    if (duration === 0) return;
    this.closeTimer = setTimeout(() => {
      this.close();
    }, duration);
  };

  clearCloseTimer = () => {
    if (this.closeTimer) {
      clearTimeout(this.closeTimer);
      this.closeTimer = undefined;
    }
  };

  render() {
    const {
      className,
      style,
      type,
      closable,
      children,
      prefixCls,
    } = this.props;

    return (
      <div
        className={classNames(
          prefixCls,
          {
            [`${prefixCls}-closable`]: closable,
          },
          className,
          `notice-${type}`
        )}
        style={style}
        onMouseEnter={this.clearCloseTimer}
        onMouseLeave={this.startCloseTimer}
      >
        <div className={`${prefixCls}-content`}>{children}</div>
        {closable ? (
          <Icon
            className={`${prefixCls}-close`}
            name="close"
            onClick={this.close}
          />
        ) : null}
      </div>
    );
  }
}
