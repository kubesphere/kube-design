import React from "react";
import classNames from "classnames";

export interface BasicProps {
  as: React.ElementType,
  componentCls: string,
  className: string,
}

const Basic: React.FC<BasicProps> = ({
  children,
  as: ElementType = "div",
  componentCls,
  className,
  ...restProps
}) => (
  <ElementType className={classNames(componentCls, className)} {...restProps}>
    {children}
  </ElementType>
);

export default Basic;
