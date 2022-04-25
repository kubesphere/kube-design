// https://github.com/ant-design/ant-design/blob/master/components/collapse/Collapse.tsx

import React, { PropsWithChildren } from 'react';
import { CSSMotionProps } from 'rc-motion';
import { omit } from 'lodash';

// import { CaretRight } from '@kubed/icons';
import CollapsePanel, { CollapsibleType } from './CollapsePanel';
import collapseMotion from '../utils/motion';
import toArray from '../utils/toArray';
import { cloneElement } from '../utils/reactNode';
import { StyledCollapse } from './Collapse.styles';

export type ExpandIconPosition = 'left' | 'right' | undefined;

export interface CollapseProps {
  activeKey?: Array<string | number> | string | number;
  defaultActiveKey?: Array<string | number> | string | number;
  accordion?: boolean;
  destroyInactivePanel?: boolean;
  onChange?: (key: string | string[]) => void;
  style?: React.CSSProperties;
  className?: string;
  bordered?: boolean;
  prefixCls?: string;
  expandIcon?: (panelProps: PanelProps) => React.ReactNode;
  expandIconPosition?: ExpandIconPosition;
  ghost?: boolean;
  collapsible?: CollapsibleType;
  children?: React.ReactNode;
}

interface PanelProps {
  isActive?: boolean;
  header?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  showArrow?: boolean;
  forceRender?: boolean;
  /** @deprecated Use `collapsible="disabled"` instead */
  disabled?: boolean;
  extra?: React.ReactNode;
  collapsible?: CollapsibleType;
}

interface CollapseInterface extends React.FC<CollapseProps> {
  Panel: typeof CollapsePanel;
}

const Collapse: CollapseInterface = (props: PropsWithChildren<CollapseInterface>) => {
  const openMotion: CSSMotionProps = {
    ...collapseMotion,
    motionAppear: false,
    leavedClassName: 'kubed-collapse-content-hidden',
  };

  const getItems = () => {
    const { children } = props;
    return toArray(children).map((child: React.ReactElement, index: number) => {
      if (child.props?.disabled) {
        const key = child.key || String(index);
        const { disabled, collapsible } = child.props;
        const childProps: CollapseProps & { key: React.Key } = {
          ...omit(child.props, ['disabled']),
          key,
          collapsible: collapsible ?? (disabled ? 'disabled' : undefined),
        };
        return cloneElement(child, childProps);
      }
      return child;
    });
  };

  return (
    <StyledCollapse openMotion={openMotion} prefixCls="kubed-collapse" {...props}>
      {getItems()}
    </StyledCollapse>
  );
};

Collapse.Panel = CollapsePanel;

export default Collapse;
