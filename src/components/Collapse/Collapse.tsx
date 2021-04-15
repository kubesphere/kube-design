import React, { Component, cloneElement, Children } from "react";
import classNames from "classnames";
import { remove, isEqual } from "lodash";
import CollapseItem from "./CollapseItem";

export interface CollapseProps {
  activeKey: string[],
  defaultActiveKey: string[],
  accordion: boolean,
  children: Array<React.ReactElement>,
  onChange: (key: string[]) => void,
  className?: string,
  style?: object,
}

export interface CollapseState {
  activeKey: string[],
}

class Collapse extends Component<CollapseProps, CollapseState> {
  static defaultProps = {
    accordion: false,
    onChange() { },
  };

  state = {
    activeKey: this.props.activeKey || this.props.defaultActiveKey || [],
  }

  static CollapseItem: typeof CollapseItem

  static getDerivedStateFromProps(nextProps: CollapseProps, prevState: CollapseState) {
    if (
      "activeKey" in nextProps &&
      !isEqual(nextProps.activeKey, prevState.activeKey)
    ) {
      return { activeKey: nextProps.activeKey };
    }
    return null;
  }

  handleVisible = (key: string, visible: boolean) => {
    const { accordion, onChange } = this.props;
    const { activeKey } = this.state;

    let nextKey = [...activeKey];

    if (accordion) {
      nextKey = visible ? [key] : [];
    }
    if (!accordion && visible && !activeKey.includes(key)) {
      nextKey = activeKey.concat(key);
    }
    if (!accordion && !visible && activeKey.includes(key)) {
      remove(nextKey, (k) => k === key);
    }

    if (!("activeKey" in this.props)) {
      this.setState({ activeKey: nextKey });
    }

    onChange(nextKey);
  };

  renderChildren = () => {
    const { children } = this.props;
    const { activeKey } = this.state;

    if (!children) return null;

    return Children.map(children, (child, i) => {
      if (!child) {
        return null;
      }
      return cloneElement(child, {
        visible: activeKey.includes(String(child.key)),
        specKey: child.key,
        isLast: children.length - 1 === i,
        onVisible: this.handleVisible,
      });
    });
  };

  render() {
    const { children, className, style } = this.props;
    return (
      <div
        className={classNames({ collapse: !!children.length }, className)}
        style={style}
      >
        <ul>{this.renderChildren()}</ul>
      </div>
    );
  }
}

Collapse.CollapseItem = CollapseItem

export default Collapse