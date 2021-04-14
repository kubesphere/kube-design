import React, { Component } from "react";
import classNames from "classnames";

export interface TextAreaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "onChange"> {
  autoResize: boolean,
  maxHeight: string | number,
  resize: boolean,
  onChange: (value: string) => void
}

export default class TextArea extends Component<TextAreaProps> {
  static defaultProps = {
    rows: "2",
    autoResize: false,
    maxHeight: 800,
  };

  ref = React.createRef<HTMLTextAreaElement>();

  componentDidMount() {
    this.autoResize();
  }

  handleChange = (e: React.SyntheticEvent<HTMLTextAreaElement>) => {
    this.autoResize();
    const { onChange } = this.props;
    onChange && onChange(e.currentTarget.value);
  };

  autoResize() {
    const { maxHeight, autoResize } = this.props;
    if (!autoResize) {
      return;
    }
    const node = this.ref.current;
    if (!node) {
      return;
    }

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
    const { className, autoResize, maxHeight, resize, ...rest } = this.props;

    const props = {
      ...rest,
      resize: resize ? "true" : undefined,
      onChange: this.handleChange,
    };

    const style = autoResize
      ? classNames("textarea", "textareaAuto", className)
      : classNames("textarea", className);

    return <textarea ref={this.ref} {...props} className={style} />;
  }
}
