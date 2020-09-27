import React, { Component, Children } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { noop, isUndefined } from "lodash";

import TabPanel from "./TabPanel";

class Tabs extends Component {
  static TabPanel = TabPanel;

  static propTypes = {
    onChange: PropTypes.func,
    direction: PropTypes.string,
    alignment: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    activeName: PropTypes.string,
    defaultActiveName: PropTypes.string,
    children: PropTypes.node,
  };

  static defaultProps = {
    direction: "horizon",
    alignment: "start",
    style: {},
    onChange: noop,
  };

  constructor(props) {
    super(props);

    this.state = {
      activeName: props.activeName || props.defaultActiveName,
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { activeName } = prevState;
    if ("activeName" in nextProps && nextProps.activeName !== activeName) {
      return { activeName: nextProps.activeName };
    }
    return null;
  }

  handleClose = (e, name) => {
    e.stopPropagation();
    const { onClose } = this.props;
    onClose(name);
  };

  handleSelect = (activeName) => {
    const { activeName: propsActiveName, onChange } = this.props;

    if (!propsActiveName) {
      this.setState({ activeName });
    }
    onChange(activeName);
  };

  renderTabLabel(tabProps, isActive, index) {
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
    const tabLabels = [];
    const tabPanels = [];
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
    const { type, className, style, direction, alignment } = this.props;
    const { tabLabels, tabPanels } = this.renderTabPanels();

    return (
      <div
        className={classNames("tabs-container", className, {
          "tabs-container-vertical": direction === "vertical",
        })}
        ref={(n) => {
          this.container = n;
        }}
      >
        <div
          className={classNames("tabs", {
            "is-horizon": direction === "horizon",
            "is-vertical": direction === "vertical",
            [`is-${alignment}`]: alignment,
          })}
          style={style}
        >
          <ul
            ref={(n) => {
              this.tabs = n;
            }}
          >
            {tabLabels}
          </ul>
        </div>
        <div className="tab-content">{tabPanels}</div>
      </div>
    );
  }
}

export default Tabs;
