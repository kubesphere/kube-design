import React, { Component } from "react";
import PropTypes from "prop-types";
import { noop } from "lodash";
import PopperNew from "./Popper.new";
import mapper from "./mapper";

class Popper extends Component {
  static propTypes = {
    type: PropTypes.string,
    always: PropTypes.bool,
    trigger: PropTypes.string,
    placement: PropTypes.string,
    visible: PropTypes.bool,
    content: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.element,
      PropTypes.func,
    ]),
    hideInterval: PropTypes.number,
    showArrow: PropTypes.bool,
    className: PropTypes.string,
    closeAfterClick: PropTypes.bool,
    closeAfterMouseLeave: PropTypes.bool,
    closeAfterMouseUp: PropTypes.bool,
    style: PropTypes.object,
    modifiers: PropTypes.object,
    children: PropTypes.node,
    onOpen: PropTypes.func,
    onClose: PropTypes.func,
    onClick: PropTypes.func,
    positionFixed: PropTypes.bool,
  };

  static defaultProps = {
    type: "popper",
    always: false,
    hideInterval: 200,
    trigger: "hover",
    placement: "top",
    showArrow: true,
    closeAfterClick: true,
    closeAfterMouseLeave: false,
    closeAfterMouseUp: false,
    modifiers: {},
    onOpen: noop,
    onClose: noop,
    onClick: noop,
    positionFixed: false,
  };

  render() {
    const props = mapper(this.props);
    return <PopperNew {...props}>{this.props.children}</PopperNew>;
  }
}

export default Popper;
