import React from 'react';
import styled from 'styled-components';
import { isNull } from 'lodash';
import { Exclamation } from '@kubed/icons';
import forwardRef from '../utils/forwardRef';
import { DefaultProps } from '../theme';
import { useLocales } from '../ConfigProvider/LocaleProvider/LocaleContext';

const EmptyWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Image = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50% 0 50% 50%;
  background: ${({ theme }) => theme.palette.accents_1};
  margin-bottom: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  .kubed-icon {
    margin-bottom: 8px;
  }
`;

const Title = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.palette.accents_7};
`;

const Description = styled.div`
  margin-top: 4px;
  line-height: 1.67;
  color: ${({ theme }) => theme.palette.accents_5};
`;

const Footer = styled.div``;

export interface EmptyProps extends DefaultProps {
  /** title of Empty */
  title?: React.ReactNode | string;

  /** description of Empty */
  description?: React.ReactNode | string;

  /** icon element of Empty */
  image?: React.ReactNode;

  /** className of image */
  imageClassName?: string;

  /** style of image */
  imageStyle?: React.CSSProperties;
}

export const Empty = forwardRef<EmptyProps, 'div'>(
  (
    {
      title,
      description,
      image = <Exclamation size={48} />,
      imageClassName,
      imageStyle,
      children,
      ...rest
    },
    ref
  ) => {
    const { locales } = useLocales();
    const defaultTitle = title || locales.Empty.noData;
    return (
      <EmptyWrapper ref={ref} {...rest}>
        {image && (
          <Image className={imageClassName} style={imageStyle}>
            {image}
          </Image>
        )}
        {!isNull(title) && <Title className="empty-title">{defaultTitle}</Title>}
        {description && <Description className="empty-desc">{description}</Description>}
        {children && <Footer>{children}</Footer>}
      </EmptyWrapper>
    );
  }
);

Empty.displayName = '@kubed/components/Empty';
