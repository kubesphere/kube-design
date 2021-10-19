import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import TopBar from '../TopBar';
import SideMenu from '../../components/SideMenu';
import menuData from '../../menuData';

const BodyWrapper = styled.main``;

const MainSection = styled.div`
  min-height: calc(100vh - 90px);
  width: ${(props) => props.theme.layout.pageWidthWithMargin};
  padding: 85px ${(props) => props.theme.layout.pageMargin} 0;
  margin: 0 auto;
  height: 100%;
  display: flex;
`;

const SideBar = styled.div`
  position: fixed;
  top: 50px;
  bottom: 0;
  width: 200px;
  padding-right: 40px;
  padding-left: 20px;
  margin-left: -20px;
  border-right: 1px solid ${({ theme }) => theme.palette.accents_2};
  z-index: 998;
  font-family: ProximaNova, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue',
    Arial, sans-serif;
  &::-webkit-scrollbar {
    width: 0;
  }
  overflow-y: scroll;
`;

const SideBarInner = styled('div')<React.ComponentPropsWithoutRef<any>>`
  margin-top: ${({ isScroll }) => (isScroll ? '35px' : '70px')};
  transition: margin-top 0.3s 0.1s;
`;

const SideShadow = styled.div`
  width: 200px;
  flex-shrink: 0;
`;

const MainContent = styled.div`
  width: 100%;
  padding-left: 30px;
  padding-bottom: 50px;
`;

interface DocLayoutProps extends React.ComponentPropsWithoutRef<'main'> {
  category?: string;
  slug?: string;
}

export function DocLayout({ children, category, slug }: DocLayoutProps) {
  const [isScroll, setIsScroll] = useState(false);
  const categoryMenu = menuData[category];

  useEffect(() => {
    const scrollHandler = () => setIsScroll(document.documentElement.scrollTop > 80);
    document.addEventListener('scroll', scrollHandler);
    return () => document.removeEventListener('scroll', scrollHandler);
  }, []);

  return (
    <BodyWrapper>
      <TopBar isHome={false} isScroll={isScroll} />
      <MainSection>
        <SideBar>
          <SideBarInner isScroll={isScroll}>
            {categoryMenu.map((item) => {
              return (
                <SideMenu
                  title={item.title}
                  category={category}
                  menu={item.menu}
                  key={item.title}
                  slug={slug}
                />
              );
            })}
          </SideBarInner>
        </SideBar>
        <SideShadow />
        <MainContent>{children}</MainContent>
      </MainSection>
    </BodyWrapper>
  );
}
