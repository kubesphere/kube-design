import React from "react";
import PropTypes from 'prop-types';
import classNames from "classnames";
import { Checkbox } from "../Checkbox";
import Icon from "../Icon";
import { get, unset, isUndefined } from "lodash";

import { FormContext, IFormContext } from './Form'

export interface GroupProps {
  label?: string,
  desc?: string,
  noWrapper?: boolean,
  checkable?: boolean,
  keepDataWhenUnCheck: boolean,
}

export interface GroupState {
  isCheck: boolean,
}

export interface IGroupContext {
  registerGroup: (name: string) => void,
  unRegisterGroup: (name: string) => void,
}

export const GroupContext = React.createContext<IGroupContext | null>(null)

export default class Group extends React.Component<GroupProps, GroupState> {
  static defaultProps = {
    keepDataWhenUnCheck: false,
  };

  static contextType = FormContext

  static childContextTypes = {
    registerGroup: PropTypes.func,
    unRegisterGroup: PropTypes.func,
  };

  getChildContext(): IGroupContext {
    return {
      registerGroup: this.registerGroup,
      unRegisterGroup: this.unRegisterGroup,
    };
  }

  state = {
    isCheck: false,
  };

  context!: IFormContext

  items = new Set<string>();

  componentDidMount() {
    const { checkable, keepDataWhenUnCheck } = this.props;
    const { formData } = this.context || {};
    if (
      checkable &&
      !keepDataWhenUnCheck &&
      formData &&
      this.items.size > 0 &&
      Array.from(this.items).some((item) => !isUndefined(get(formData, item)))
    ) {
      this.setState({ isCheck: true });
    }
  }

  registerGroup = (name: string) => {
    this.items.add(name);
  };

  unRegisterGroup = (name: string) => {
    this.items.delete(name);
  };

  handleCheck = (check: boolean) => {
    const { keepDataWhenUnCheck } = this.props;
    this.setState({ isCheck: check }, () => {
      if (!keepDataWhenUnCheck && !check) {
        const { formData } = this.context || {};
        if (formData && this.items.size > 0) {
          this.items.forEach((item) => unset(formData, item));
        }
      }
    });
  };

  handleTitleClick = () => {
    this.setState(({ isCheck }) => ({
      isCheck: !isCheck,
    }));
  };

  renderTitle() {
    const { checkable, label, desc, keepDataWhenUnCheck } = this.props;
    const { isCheck } = this.state;

    let title: JSX.Element | string | undefined = label;

    if (checkable && !keepDataWhenUnCheck) {
      title = (
        <Checkbox checked={isCheck} onChange={this.handleCheck}>
          {label}
        </Checkbox>
      );
    }

    if (checkable && keepDataWhenUnCheck) {
      title = (
        <div
          className="form-group-title-toggle"
          onClick={this.handleTitleClick}
        >
          <Icon name={isCheck ? "chevron-up" : "chevron-down"} size={20} />
          {label}
        </div>
      );
    }

    return (
      <div>
        <div className="form-group-title">{title}</div>
        {desc && <div className="form-group-desc">{desc}</div>}
      </div>
    );
  }

  render() {
    const { children, checkable, noWrapper } = this.props;
    const { isCheck } = this.state;

    if (!children) {
      return null;
    }

    const hideChildren = checkable && !isCheck;

    return (
      <GroupContext.Provider value={this.getChildContext()}>
        <div
          className={classNames("form-group", {
            "form-group-checkable": checkable,
          })}
        >
          {this.renderTitle()}
          {noWrapper ? (
            <div
              className={classNames({
                "form-group-hide": hideChildren,
              })}
            >
              {children}
            </div>
          ) : (
            <div
              className={classNames("form-group-content", {
                "form-group-hide": hideChildren,
              })}
            >
              {children}
            </div>
          )}
        </div>
      </GroupContext.Provider>
    );
  }
}
