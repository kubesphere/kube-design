import React from "react";
import PropTypes from "prop-types";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional
import "./styles.scss";

class Popper extends React.Component {
  static propTypes = {
    appendTo: PropTypes.oneOfType([
      PropTypes.oneOf(["parent"]),
      PropTypes.instanceOf(Element),
      PropTypes.func,
    ]),
    children: PropTypes.element.isRequired,
    content: PropTypes.node,
    visible: PropTypes.bool,
    disabled: PropTypes.bool,
    delay: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf([null])])
      ),
    ]),
    duration: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf([null])])
      ),
    ]),
    hideOnClick: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.oneOf(["toggle"]),
    ]),
    interactive: PropTypes.bool,
    className: PropTypes.string,
    showOnCreate: PropTypes.bool,
    maxWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    placement: PropTypes.oneOf([
      "auto",
      "auto-start",
      "auto-end",
      "top",
      "left",
      "right",
      "bottom",
      "top-start",
      "top-end",
      "bottom-start",
      "bottom-end",
      "right-start",
      "right-end",
      "left-start",
      "left-end",
    ]),
    trigger: PropTypes.string,
  };

  render() {
    const { children, className, ...rest } = this.props;
    return (
      <Tippy visible className={className} {...rest}>
        <span tabIndex="0" style={{ display: "inline-block" }}>
          {children}
        </span>
      </Tippy>
    );
  }
}

export default Popper;
