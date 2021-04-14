import React from "react";
import { DEFAULT_PROPS, TableProps, TableState } from "./Table";

const defaultContext = {...DEFAULT_PROPS, heads: [], columns: []}

type omitProps = "title" | "className" | "footer" | "loading" | "emptyText"

const TableContext = React.createContext<Omit<TableProps, omitProps> & TableState>(defaultContext);

export default TableContext;
