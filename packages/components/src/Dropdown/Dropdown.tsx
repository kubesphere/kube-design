import React, { useState } from 'react';
import styled from 'styled-components';
import { isUndefined } from 'lodash';
import { Tooltip, TooltipProps } from '../Tooltip/Tooltip';

const StyledTooltip = styled(Tooltip)<TooltipProps>`
  &.tippy-box {
    background-color: ${({ theme }) => theme.palette.background};

    .tippy-content {
      padding: 0;
    }

    .tippy-arrow {
      color: ${({ theme }) => theme.palette.background};
      border-color: ${({ theme }) => theme.palette.border};
    }
  }
`;

const DropdownWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export interface DropdownProps extends TooltipProps {
  title?: string;
}

export function Dropdown({
  title,
  children,
  placement = 'bottom',
  interactive = true,
  trigger = 'click',
  hideOnClick = true,
  arrow = false,
  maxWidth = 210,
  animation = 'shift-away',
  content,
  visible,
  ...rest
}: DropdownProps) {
  const [instance, setInstance] = useState(false);
  const onDropdownClick = () => {
    if (hideOnClick && instance && !visible) {
      // @ts-ignore
      instance.hide();
    }
  };

  const onMount = (i) => {
    setInstance(i);
  };

  const onDestroy = () => {
    instance && setInstance(false);
  };

  const popContent = <DropdownWrapper onClick={onDropdownClick}>{content}</DropdownWrapper>;
  const triggerProps = isUndefined(visible) ? { trigger } : { visible };

  return (
    // @ts-ignore
    <StyledTooltip
      placement={placement}
      arrow={arrow}
      interactive={interactive}
      hideOnClick={hideOnClick}
      maxWidth={maxWidth}
      animation={animation}
      onMount={onMount}
      onDestroy={onDestroy}
      {...triggerProps}
      {...rest}
      content={popContent}
    >
      {children}
    </StyledTooltip>
  );
}

Dropdown.displayName = '@kubed/components/Dropdown';
