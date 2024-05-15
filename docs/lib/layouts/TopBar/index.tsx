import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import styled, { css } from 'styled-components';
import { useTheme, Button, Group } from '@kubed/components';
import { Github, Moon, Sun } from '@kubed/icons';
import { usePrefers } from '../../usePrefers';

const getBackground = (isHome, theme) => {
  if (isHome) {
    return css`
      background-color: transparent;
    `;
  }

  return css`
    background: ${() =>
      theme.type === 'light' ? 'linear-gradient(to left, #44bd93, #26a678)' : '#000'};
  `;
};

const NavWrapper = styled('nav')<TopBarProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  height: ${({ isScroll }) => (isScroll ? '50px' : '85px')};
  transition: height 0.3s;
  ${({ isHome, theme }) => getBackground(isHome, theme)};

  .nav-link {
    margin-right: 10px;
  }

  .nav-icon {
    padding: 0 8px;
    &:hover {
      color: #fff;
      background-color: transparent;
    }
  }
`;

const NavContainer = styled.div`
  width: ${(props) => props.theme.layout.pageWidthWithMargin};
  height: 100%;
  margin: 0 auto;
  padding: 0 ${(props) => props.theme.layout.pageMargin};
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 100%;
  font-size: 14px;
`;

const Brand = styled.div`
  font-size: 1rem;
  font-weight: 500;
  margin: 0;
  letter-spacing: 0;
  cursor: pointer;
`;

const TopMenu = styled.div`
  display: flex;
  align-items: center;

  .topmenu-item {
    color: #eff4f9;
    &:hover {
      color: #fff;
    }
  }
`;

const TopMenuItem = styled.a`
  color: #eff4f9;
  &:hover {
    color: #fff;
  }
`;

const menus = [
  { label: 'Guide', value: 'guide' },
  { label: 'Components', value: 'components' },
  // { label: 'Hooks', value: 'hooks' },
  { label: 'Icons', value: 'Icons' },
];

interface TopBarProps {
  isHome?: boolean;
  isScroll?: boolean;
}

const TopBar = ({ isHome = true, isScroll = false }: TopBarProps) => {
  const theme = useTheme();
  const prefers = usePrefers();
  const router = useRouter();
  const { t } = useTranslation('common');

  return (
    <NavWrapper isHome={isHome} isScroll={isScroll}>
      <NavContainer>
        <Brand>
          <Link href={`/${router.locale}`}>
            <img src="/ks-logo-light.svg" alt="kube-design" />
          </Link>
        </Brand>
        <TopMenu>
          <Group style={{ marginRight: '70px' }} spacing={20}>
            {menus.map((menu) => (
              <Link href={`/${menu.value}`} key={menu.value}>
                <a className="topmenu-item">{t(menu.label)}</a>
              </Link>
            ))}
          </Group>
          <Group spacing={8}>
            <Link href={router.asPath} locale={router.locale === 'en' ? 'zh' : 'en'}>
              <TopMenuItem className="nav-link">
                {router.locale === 'en' ? '中文' : 'English'}
              </TopMenuItem>
            </Link>
            <Button
              variant="text"
              color="white"
              className="nav-icon"
              as="a"
              href="https://github.com/chenz24/kube-design"
              target="_blank"
            >
              <Github variant="light" size={22} />
            </Button>
            <Button
              variant="text"
              color="white"
              className="nav-icon"
              onClick={() => prefers.switchTheme(theme.type === 'dark' ? 'light' : 'dark')}
            >
              {theme.type === 'dark' ? (
                <Sun size={16} stroke="#fff" fill="none" />
              ) : (
                <Moon size={16} stroke="#fff" fill="none" />
              )}
            </Button>
          </Group>
        </TopMenu>
      </NavContainer>
    </NavWrapper>
  );
};

export default TopBar;
