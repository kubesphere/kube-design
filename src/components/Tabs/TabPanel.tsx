import React, { Component } from "react";
import classNames from "classnames";

export interface TabPanelProps {
  name?: string,
  label: string,
  disabled?: boolean,
  isActive: boolean,
}

export interface TabPanelState {
  isActive: boolean,
}

class TabPanel extends Component<TabPanelProps, TabPanelState> {
  static defaultProps = {
    isActive: false,
  };

  state = { isActive: this.props.isActive }

  static getDerivedStateFromProps(nextProps: TabPanelProps, prevState: TabPanelState) {
    if ("isActive" in nextProps && nextProps.isActive !== prevState.isActive) {
      return {
        isActive: nextProps.isActive,
      };
    }
    return null;
  }

  render() {
    const { name, children } = this.props;
    const { isActive } = this.state;

    if (isActive) {
      return (
        <div
          className={classNames("tab-panel", { "is-active": isActive })}
          key={name}
        >
          {children}
        </div>
      );
    }

    return null;
  }
}

export default TabPanel;
