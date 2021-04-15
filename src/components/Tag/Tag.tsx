import React from "react";
import classNames from "classnames";

export interface TagProps {
  color?: string,
  className?: string,
  type: "default" | "secondary" | "info" | "warning" | "primary",
}

export default class Tag extends React.Component<TagProps> {
  static defaultProps = {
    type: "default",
  };

  render() {
    const { type, children, className, color } = this.props;

    const style = { backgroundColor: color };

    return (
      <span
        className={classNames("tag", `tag-${type}`, className)}
        style={style}
      >
        {children}
      </span>
    );
  }
}
