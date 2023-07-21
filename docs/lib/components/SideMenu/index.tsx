import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import cx from 'classnames';
import { kebabCase } from '../../utils';

const SideMenuWrapper = styled.div`
  margin-bottom: 20px;
  -webkit-font-smoothing: antialiased;
`;

const CateTitle = styled.h3`
  font-size: 12px;
  padding: 8px 0;
  text-transform: uppercase;
  font-weight: 400;
  border-bottom: 1px solid ${({ theme }) => theme.palette.accents_2};
  color: ${({ theme }) => theme.palette.accents_8};
`;

const MenuList = styled.ul`
  font-size: 14px;
  margin: 0;

  li {
    margin: 0;
    line-height: initial;
    position: relative;

    &:before {
      content: '';
    }

    &.active {
      a {
        color: ${({ theme }) => theme.palette.primary};
      }

      &:before {
        position: absolute;
        border-top: 1px solid ${({ theme }) => theme.palette.primary};
        top: 16px;
        left: -20px;
        width: 12px;
      }
    }
  }

  a {
    padding: 5px 0;
    display: flex;
    align-items: center;
    line-height: 21px;
    color: ${({ theme }) => theme.palette.accents_6};

    &:hover {
      color: ${({ theme }) => theme.palette.accents_7};
    }
  }
`;

interface SideMenuProps {
  title: string;
  category: string;
  menu: string[];
  slug?: string;
}

export default function SideMenu({ title, category, menu, slug }: SideMenuProps) {
  const { t } = useTranslation('menu');

  return (
    <SideMenuWrapper>
      <CateTitle>{t(title)}</CateTitle>
      <MenuList>
        {menu.map((item) => {
          const kebabMenu = kebabCase(item);
          return (
            <li key={item} className={cx({ active: slug === kebabMenu })}>
              <Link href={`/${category}/${kebabMenu}`}>
                <a>{t(item)}</a>
              </Link>
            </li>
          );
        })}
      </MenuList>
    </SideMenuWrapper>
  );
}
