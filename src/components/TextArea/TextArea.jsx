import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

export default class TextArea extends Component {
  static propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    rows: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    autoResize: PropTypes.bool,
    maxHeight: PropTypes.number,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    rows: "2",
    autoResize: false,
    maxHeight: 800,
    onChange() {},
  };

  ref = React.createRef();

  componentDidMount() {
    this.autoResize();
  }

  handleChange = (e) => {
    this.autoResize();
    const { onChange } = this.props;
    onChange && onChange(e.target.value);
  };

  autoResize() {
    const { maxHeight, autoResize } = this.props;
    if (!autoResize) {
      return false;
    }
    const node = this.ref.current;
    node.style.height = "";
    if (node.scrollHeight > maxHeight) {
      node.style.height = `${maxHeight}px`;
      node.style.overflow = "auto";
    } else {
      node.style.height = `${node.scrollHeight}px`;
      node.style.overflow = "hidden";
    }
  }

  render() {
    const { className, autoResize, maxHeight, ...rest } = this.props;

    const props = {
      ...rest,
      onChange: this.handleChange,
    };

    const style = autoResize
      ? classNames("textarea", "textareaAuto", className)
      : classNames("textarea", className);

    return <textarea ref={this.ref} {...props} className={style} />;
  }
}
