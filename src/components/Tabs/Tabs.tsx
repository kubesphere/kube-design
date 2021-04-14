import React, { Component, Children } from "react";
import classNames from "classnames";
import { noop, isUndefined } from "lodash";

import TabPanel, { TabPanelProps } from "./TabPanel";

export interface TabProps {
  type: "default" | "button",
  direction: "horizon" | "vertical",
  className?: string,
  style?: object,
  activeName?: string,
  defaultActiveName?: string,
  children: React.ReactElement,
  onChange: (name: string) => void,
}

export interface TabState {
  activeName?: string,
}

class Tabs extends Component<TabProps, TabState> {
  static TabPanel = TabPanel;

  static defaultProps = {
    type: "default",
    direction: "horizon",
    style: {},
    onChange: noop,
  };

  state = {
    activeName: this.props.activeName || this.props.defaultActiveName,
  }

  static getDerivedStateFromProps(nextProps: TabProps, prevState: TabState) {
    const { activeName } = prevState;
    if ("activeName" in nextProps && nextProps.activeName !== activeName) {
      return { activeName: nextProps.activeName };
    }
    return null;
  }

  handleSelect = (activeName: string) => {
    const { activeName: propsActiveName, onChange } = this.props;

    if (!propsActiveName) {
      this.setState({ activeName });
    }
    onChange(activeName);
  };

  renderTabLabel(tabProps: TabPanelProps, isActive: boolean, index: number) {
    const specKey = tabProps.name || `tab-${index}`;
    const { activeName } = this.state;

    return (
      <li
        key={specKey}
        className={classNames({
          "is-active": isActive,
          "is-disabled": tabProps.disabled,
        })}
        onClick={(e) => {
          if (!tabProps.disabled && activeName !== specKey) {
            this.handleSelect(specKey);
          }
        }}
      >
        {tabProps.label}
      </li>
    );
  }

  renderTabPanels() {
    const tabLabels: JSX.Element[] = [];
    const tabPanels: JSX.Element[] = [];
    const { children } = this.props;
    const { activeName } = this.state;
    const hasActiveName = !isUndefined(activeName);

    let leastIndex = 0;
    let leastActive = false;

    Children.forEach(children, (tab, index) => {
      if (React.isValidElement(tab)) {
        const tabProps = tab.props;
        let isActive = false;

        if (tabProps.disabled && !leastActive) leastIndex += 1;

        if (
          (hasActiveName && tabProps.name === activeName) ||
          (!hasActiveName && index === leastIndex)
        ) {
          isActive = true;
          leastActive = true;
        }

        const tabLabel = this.renderTabLabel(tabProps, isActive, index);
        tabLabels.push(tabLabel);

        const tabPanel = React.cloneElement(tab, {
          isActive,
          key: tabProps.name,
        });
        tabPanels.push(tabPanel);
      } else {
        leastIndex += 1;
      }
    });

    return { tabLabels, tabPanels };
  }

  render() {
    const { type, className, direction } = this.props;
    const { tabLabels, tabPanels } = this.renderTabPanels();

    return (
      <div
        className={classNames("tabs-container", className, {
          "tabs-container-vertical": direction === "vertical",
        })}
      >
        <div className={classNames("tabs", `tabs-${type}`)}>
          <ul>{tabLabels}</ul>
        </div>
        <div className="tab-content">{tabPanels}</div>
      </div>
    );
  }
}

export default Tabs;
