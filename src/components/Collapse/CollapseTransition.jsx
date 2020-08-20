import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CollapseTransition extends Component {
  static propTypes = {
    visible: PropTypes.bool,
    children: PropTypes.node,
  };

  componentDidMount() {
    const { visible } = this.props;
    this.beforeEnter();
    if (visible) {
      this.enter();
    }
  }

  shouldComponentUpdate(nextProps) {
    const { visible, children } = this.props;
    if (visible !== nextProps.visible) {
      this.triggerChange(nextProps.visible);
    }
    if (children !== nextProps.children) {
      return true;
    }
    return false;
  }

  componentWillUnmount() {
    this.beforeLeave();
    this.leave();
    clearTimeout(this.enterTimer);
    clearTimeout(this.leaveTimer);
  }

  triggerChange(visible) {
    clearTimeout(this.enterTimer);
    clearTimeout(this.leaveTimer);
    if (visible) {
      this.beforeEnter();
      this.enter();
    } else {
      this.beforeLeave();
      this.leave();
    }
  }

  beforeEnter() {
    const el = this.selfRef;
    el.dataset.oldOverflow = el.style.overflow;
    el.style.height = 0;
  }

  enter() {
    const el = this.selfRef;
    el.style.display = 'block';
    if (el.scrollHeight !== 0) {
      el.style.height = `${el.scrollHeight}px`;
    } else {
      el.style.height = '';
    }
    el.style.overflow = 'hidden';
    this.enterTimer = setTimeout(() => this.afterEnter(), 300);
  }

  afterEnter() {
    const el = this.selfRef;
    el.style.display = 'block';
    el.style.height = '';
    el.style.overflow = el.dataset.oldOverflow;
  }

  beforeLeave() {
    const el = this.selfRef;
    el.dataset.oldOverflow = el.style.overflow;
    el.style.display = 'block';
    if (el.scrollHeight !== 0) {
      el.style.height = `${el.scrollHeight}px`;
    }
    el.style.overflow = 'hidden';
  }

  leave() {
    const el = this.selfRef;
    if (el.scrollHeight !== 0) {
      el.style.height = 0;
    }
    this.leaveTimer = setTimeout(() => this.afterLeave(), 300);
  }

  afterLeave() {
    const el = this.selfRef;
    if (!el) return;
    el.style.display = 'none';
    el.style.height = '';
    el.style.overflow = el.dataset.oldOverflow;
  }

  render() {
    const { children } = this.props;
    return (
      <div
        className="collapse-transition"
        ref={e => {
          this.selfRef = e;
        }}
      >
        {children}
      </div>
    );
  }
}
