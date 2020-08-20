import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isFunction, isBoolean } from 'lodash';
import classNames from 'classnames';

import './styles.scss'

class Toggle extends Component {
  static propTypes = {
    onText: PropTypes.string,
    offText: PropTypes.string,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    checked: PropTypes.bool,
    defaultChecked: PropTypes.bool,
  };

  static defaultProps = {
    disabled: false,
    defaultChecked: false,
  };

  constructor(props) {
    super(props);
    const { checked, defaultChecked } = props;
    this.state = {
      checked: checked || defaultChecked,
      switching: false,
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { checked } = prevState;
    if ('checked' in nextProps && nextProps.checked !== checked) {
      return { checked: nextProps.checked };
    }
    return null;
  }

  toggleSwitch = () => {
    const { disabled, checked: propsChecked } = this.props;
    const { checked } = this.state;
    if (disabled) return;

    if (!isBoolean(propsChecked)) {
      if (this.timer) clearTimeout(this.timer);
      this.setState({ switching: true, checked: !checked }, () => {
        this.handleChange(checked);
        this.timer = setTimeout(() => {
          this.setState({ switching: false });
        }, 360);
      });
    } else {
      this.handleChange(propsChecked);
    }
  };

  handleChange(currentChecked) {
    const { onChange } = this.props;
    if (isFunction(onChange)) {
      onChange(!currentChecked);
    }
  }

  render() {
    const { disabled, onText, offText } = this.props;
    const { checked, switching } = this.state;
    const showText = checked ? onText : offText;

    return (
      <label
        className={classNames('toggle', { disabled }, { checked })}
        onClick={this.toggleSwitch}
      >
        {showText ? (
          <span className={classNames('text', { checked })} style={{ opacity: switching ? 0 : 1 }}>
            {showText}
          </span>
        ) : null}
      </label>
    );
  }
}

export default Toggle;
