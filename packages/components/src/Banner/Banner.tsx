import React, { useState } from 'react';
import styled from 'styled-components';
import { Card } from '../Card/Card';
import { Text } from '../Text/Text';
import { DefaultProps } from '../theme';
import forwardRef from '../utils/forwardRef';
import { addColorAlpha } from '../utils/color';
import { BannerTip } from './BannerTip';

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
  ({ icon, title, description, children }, ref) => {
    const [activeKey, setActiveKey] = useState<string>();
    const onTipClick = (key) => {
      if (key === activeKey) {
        setActiveKey('');
      } else {
        setActiveKey(key);
      }
    };
    const tips = [];
    const others = [];

    React.Children.forEach(children, (child: React.ReactElement) => {
      if (child.type === BannerTip) {
        tips.push({ key: child.key, ...child.props });
      } else {
        others.push(child);
      }
    });

    return (
      <Card ref={ref} padding={0}>
        <BannerTitle>
          <BannerIcon>{icon}</BannerIcon>
          <BannerText>
            <Text variant="h3" size={24} color="accents_8">
              {title}
            </Text>
            <Text color="accents_5">{description}</Text>
          </BannerText>
        </BannerTitle>
        <BannerExtra>
          {others.length > 0 && <BannerNavs>{others}</BannerNavs>}
          {tips.map((tip) => {
            const { key, title: tipTitle } = tip;
            const isOpen = key === activeKey;
            return (
              <BannerTip key={key} open={isOpen} title={tipTitle} onClick={() => onTipClick(key)}>
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
