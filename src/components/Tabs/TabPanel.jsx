import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

class TabPanel extends Component {
  static propTypes = {
    name: PropTypes.string,
    isActive: PropTypes.bool,
    children: PropTypes.node,
  };

  static defaultProps = {
    isActive: false,
  };

  constructor(props) {
    super(props);
    this.state = { isActive: props.isActive };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
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
