import * as React from 'react';

export const TableContext = React.createContext<{
  padding?: 'normal' | 'none';
  size?: 'small' | 'medium';
  stickyHeader?: boolean;
}>({});

export const useTableContext = () => React.useContext(TableContext);

export const TableLvContext = React.createContext<{
  variant?: 'body' | 'head';
  hasBorder?: boolean;
}>({});

export const useTableLvContext = () => React.useContext(TableLvContext);
