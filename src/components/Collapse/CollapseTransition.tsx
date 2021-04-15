import React, { Component } from "react";

export interface CollapseTransitionProps {
  visible: boolean,
  children: React.ReactNode,
}

export default class CollapseTransition extends Component<CollapseTransitionProps> {
  enterTimer: Timer | undefined = undefined

  leaveTimer: Timer | undefined = undefined

  ref = React.createRef<HTMLDivElement>()

  componentDidMount() {
    const { visible } = this.props;
    this.beforeEnter();
    if (visible) {
      this.enter();
    }
  }

  shouldComponentUpdate(nextProps: CollapseTransitionProps) {
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
    this.enterTimer && clearTimeout(this.enterTimer);
    this.leaveTimer && clearTimeout(this.leaveTimer);
  }

  triggerChange(visible: boolean) {
    this.enterTimer && clearTimeout(this.enterTimer);
    this.leaveTimer && clearTimeout(this.leaveTimer);
    if (visible) {
      this.beforeEnter();
      this.enter();
    } else {
      this.beforeLeave();
      this.leave();
    }
  }

  beforeEnter() {
    const el = this.ref.current;
    if (!el) return;
    el.dataset.oldOverflow = el.style.overflow;
    el.style.height = '0px';
  }

  enter() {
    const el = this.ref.current;
    if (!el) return;
    el.style.display = "block";
    if (el.scrollHeight !== 0) {
      el.style.height = `${el.scrollHeight}px`;
    } else {
      el.style.height = "";
    }
    el.style.overflow = "hidden";
    this.enterTimer = setTimeout(() => this.afterEnter(), 300);
  }

  afterEnter() {
    const el = this.ref.current;
    if (!el) return;
    el.style.display = "block";
    el.style.height = "";
    el.style.overflow = el.dataset.oldOverflow || '';
  }

  beforeLeave() {
    const el = this.ref.current;
    if (!el) return;
    el.dataset.oldOverflow = el.style.overflow;
    el.style.display = "block";
    if (el.scrollHeight !== 0) {
      el.style.height = `${el.scrollHeight}px`;
    }
    el.style.overflow = "hidden";
  }

  leave() {
    const el = this.ref.current;
    if (!el) return;
    if (el.scrollHeight !== 0) {
      el.style.height = '0px';
    }
    this.leaveTimer = setTimeout(() => this.afterLeave(), 300);
  }

  afterLeave() {
    const el = this.ref.current;
    if (!el) return;
    if (!el) return;
    el.style.display = "none";
    el.style.height = "";
    el.style.overflow = el.dataset.oldOverflow || '';
  }

  render() {
    const { children } = this.props;
    return (
      <div
        className="collapse-transition"
        ref={this.ref}
      >
        {children}
      </div>
    );
  }
}
