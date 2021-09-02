import React from 'react';
import styled from 'styled-components';
import { ChevronRight, ChevronDown, Close } from '@kubed/icons';
import { Text } from '../Text/Text';
import { addColorAlpha } from '../utils/color';

const TipWrapper = styled.div`
  position: relative;
  padding: 12px 60px 12px 52px;
  background-color: ${({ theme }) => theme.palette.background};
  border-top: 1px solid ${({ theme }) => theme.palette.accents_2};
  cursor: pointer;
  line-height: 1.67;

  &:hover {
    background-color: ${({ theme }) => theme.palette.accents_0};
  }
`;

const TipIcon = styled.div`
  position: absolute;
  top: 11px;
  left: 24px;

  .kubed-icon {
    width: 20px;
    height: 20px;
  }
`;

const TipContent = styled.div`
  font-family: Roboto, PingFang SC, Lantinghei SC, Helvetica Neue, Helvetica, Arial, Microsoft YaHei,
    微软雅黑, STHeitiSC-Light, simsun, 宋体, WenQuanYi Zen Hei, WenQuanYi Micro Hei, sans-serif;
`;

const TipOperations = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 20px;
  display: inline-flex;

  .kubed-icon {
    border-radius: 3px;
    &:hover {
      background-color: ${({ theme }) => addColorAlpha(theme.palette.accents_1, 0.6)};
    }
  }
`;

export interface BannerTipProps {
  /** Title of banner tip */
  title?: React.ReactNode;

  /** children of banner tip */
  children?: React.ReactNode;

  /** Tip's key */
  key?: string;

  /** Tip open or not */
  open?: boolean;

  /** Callback of click event */
  onClick?: () => void;
}

export function BannerTip({ title, children, onClick, open }: BannerTipProps) {
  return (
    <TipWrapper onClick={onClick}>
      <TipIcon>{open ? <ChevronDown /> : <ChevronRight />}</TipIcon>
      <TipContent>
        <Text weight={700}>{title}</Text>
        {open && <Text color="accents_5">{children}</Text>}
      </TipContent>
      <TipOperations>
        <Close size={20} />
      </TipOperations>
    </TipWrapper>
  );
}

BannerTip.displayName = '@kubed/components/BannerTip';
