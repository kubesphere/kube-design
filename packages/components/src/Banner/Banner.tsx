import React, { useState } from 'react';
import styled from 'styled-components';
import { Card } from '../Card/Card';
import { Text } from '../Text/Text';
import { DefaultProps } from '../theme';
import forwardRef from '../utils/forwardRef';
import { addColorAlpha } from '../utils/color';
import { BannerTip, BannerTipProps } from './BannerTip';

export { BannerTip };

const BannerTitle = styled.div`
  padding: 24px 20px 21px;
  display: flex;
`;

const BannerIcon = styled.div`
  border-radius: 100px 0 100px 100px;
  background-color: ${({ theme }) => theme.palette.accents_1};
  padding: 6px;
  margin-right: 12px;
  width: 60px;
  height: 60px;
  margin-top: -1px;

  .kubed-icon {
    width: 48px;
    height: 48px;
  }
`;

const BannerText = styled.div`
  line-height: 20px;
  h3 {
    margin-bottom: 0;
    line-height: 32px;
    text-shadow: 0 4px 8px ${({ theme }) => addColorAlpha(theme.palette.accents_8, 0.1)};
  }
`;

const BannerExtra = styled.div`
  & > div {
    &:last-of-type {
      border-radius: 0 0 4px 4px;
    }
  }
`;

const BannerNavs = styled.div`
  padding: 8px 14px;
  background-color: ${({ theme }) => theme.palette.accents_1};
`;

export interface BannerProps extends DefaultProps {
  /** Icon of banner */
  icon?: React.ReactNode;

  /** Title of banner */
  title?: React.ReactNode;

  /** Description of banner */
  description?: React.ReactNode;
}

export const Banner = forwardRef<BannerProps, 'div'>(
  ({ icon, title, description, children, className }, ref) => {
    const [activeKey, setActiveKey] = useState<string>();
    const [removedTipKeys, setRemovedTipKeys] = useState<Array<string | number>>([]);
    const onTipClick = (key) => {
      if (key === activeKey) {
        setActiveKey('');
      } else {
        setActiveKey(key);
      }
    };

    const onTipRemove = (key) => {
      removedTipKeys.push(key);
      setRemovedTipKeys([...removedTipKeys, key]);
    };

    const tips: BannerTipProps[] = [];
    const others = [];

    React.Children.forEach(children, (child: React.ReactElement) => {
      if (child.type === BannerTip) {
        if (child.key && removedTipKeys.indexOf(child.key) < 0) {
          tips.push({ key: child.key, ...child.props });
        }
      } else {
        others.push(child);
      }
    });

    return (
      <Card ref={ref} padding={0} className={className}>
        <BannerTitle className="banner-title">
          <BannerIcon>{icon}</BannerIcon>
          <BannerText>
            <Text variant="h3" size={24} color="accents_8">
              {title}
            </Text>
            <Text color="accents_5">{description}</Text>
          </BannerText>
        </BannerTitle>
        <BannerExtra className="banner-extra">
          {others.length > 0 && <BannerNavs>{others}</BannerNavs>}
          {tips.map((tip) => {
            const { key, title: tipTitle, removable, operations } = tip;
            const isOpen = key === activeKey;
            return (
              <BannerTip
                key={key}
                tipKey={key}
                open={isOpen}
                title={tipTitle}
                removable={removable}
                onClick={() => onTipClick(key)}
                operations={operations}
                onRemove={onTipRemove}
              >
                {tip.children}
              </BannerTip>
            );
          })}
        </BannerExtra>
      </Card>
    );
  }
);

Banner.displayName = '@kubed/components/Banner';
