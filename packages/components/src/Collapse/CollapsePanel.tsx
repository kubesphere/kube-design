// https://github.com/ant-design/ant-design/blob/master/components/collapse/CollapsePanel.tsx
import React from 'react';
import classNames from 'classnames';

import { StyledCollapsePanel } from './CollapsePanel.styles';

export type CollapsibleType = 'header' | 'icon' | 'disabled';

export interface CollapsePanelProps {
  key: string | number;
  header: React.ReactNode;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  showArrow?: boolean;
  prefixCls?: string;
  forceRender?: boolean;
  id?: string;
  extra?: React.ReactNode;
  collapsible?: CollapsibleType;
  children?: React.ReactNode;
}

const CollapsePanel: React.FC<CollapsePanelProps> = (props: CollapsePanelProps) => {
  const { className = '', showArrow = true } = props;
  const collapsePanelClassName = classNames(
    {
      'collapse-panel-no-arrow': !showArrow,
    },
    className
  );

  return <StyledCollapsePanel {...props} className={collapsePanelClassName} />;
};

export default CollapsePanel;
