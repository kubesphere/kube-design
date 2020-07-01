import React, { Component } from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

import "./styles.scss";

export default class Popper extends Component {
  render() {
    const { children, ...rest } = this.props;
    return (
      <Tippy {...rest}>
        <span className="popper-trigger">{children}</span>
      </Tippy>
    );
  }
}
