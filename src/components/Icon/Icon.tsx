import React, { PureComponent } from "react";
import classNames from "classnames";
import svgSprite from "./spirits";
import domReady from "../../utils/domReady";

const idPrefix = "icon-";

declare global {
  interface Window {
    iconfont__svg__inject: boolean
  }
}

const prepend = (el: Element, target: HTMLElement) => {
  if (target.firstChild) {
    target.insertBefore(el, target.firstChild);
  } else {
    target.appendChild(el);
  }
};

const appendSvg = () => {
  const svgContainer = document.createElement("div");
  svgContainer.innerHTML = svgSprite;
  const svg = svgContainer.getElementsByTagName("svg")[0];
  if (svg) {
    svg.setAttribute("aria-hidden", "true");
    svg.style.position = "absolute";
    svg.style.width = "0";
    svg.style.height = "0";
    svg.style.overflow = "hidden";
    prepend(svg, document.body);
  }
};

if (typeof window !== "undefined" && !window.iconfont__svg__inject) {
  window.iconfont__svg__inject = true;
  domReady(appendSvg);
}

export interface IconColor {
  primary?: string,
  secondary?: string,
}

export interface IconProps {
  prefix?: string,
  name: string,
  type: string,
  size: string | number,
  className?: string,
  style: object,
  color?: IconColor,
  changeable: boolean,
  clickable: boolean,
  disabled: boolean,
  onClick: (e: React.SyntheticEvent<HTMLElement>) => void,
}

export default class Icon extends PureComponent<IconProps, {}> {
  static defaultProps = {
    type: "dark",
    size: "small",
    prefix: "kubed-icon",
    style: {},
    changeable: false,
    clickable: false,
    disabled: false,
    onClick() { },
  };

  render() {
    const {
      prefix,
      name,
      type,
      size,
      className,
      onClick,
      style,
      clickable,
      changeable,
      disabled,
      color,
    } = this.props;

    let styles = style;
    let colorStyles = {};

    const isNumberSize = !isNaN(Number(size));

    if (isNumberSize) {
      styles = Object.assign({}, style, {
        width: `${size}px`,
        height: `${size}px`,
      });
    }

    if (color) {
      colorStyles = {
        color: color.primary,
        fill: color.secondary,
      };
    }
    return (
      <span
        style={styles}
        className={classNames(
          "icon",
          {
            [`is-${size}`]: !isNumberSize,
            "icon-clickable": clickable,
            "icon-changeable": changeable && !disabled,
            "icon-disabled": disabled,
          },
          className
        )}
        onClick={disabled ? undefined : onClick}
      >
        <svg
          className={`${prefix} ${prefix}-${name} ${prefix}-${type}`}
          style={colorStyles}
        >
          <use xlinkHref={`#${idPrefix + name}`} />
        </svg>
      </span>
    );
  }
}
