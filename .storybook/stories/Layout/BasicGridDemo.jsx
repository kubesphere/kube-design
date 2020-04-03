import React from "react";
import { Columns, Column } from "components/Layout";

const describe = children => (
  <p className="notification is-dark has-text-centered">{children}</p>
);

const GridDemo = () => (
  <Columns>
    <Column>{describe(1)}</Column>
    <Column>{describe(2)}</Column>
    <Column>{describe(3)}</Column>
    <Column>{describe(4)}</Column>
  </Columns>
);

export default GridDemo;
