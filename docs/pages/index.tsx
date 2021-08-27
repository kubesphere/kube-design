import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import styled from 'styled-components';
import { Group, Button, useTheme, Snippet } from '@kubed/components';
import { ExternalLink, ArrowRight } from 'react-feather';
import TextTransition, { presets } from 'react-text-transition';
import TopBar from '../lib/layouts/TopBar';

const HomeWrapper = styled.div`
  background: ${({ theme }) =>
    theme.type === 'light' ? 'linear-gradient(to left, #44bd93, #26a678)' : '#000'};
`;

const HeroWrapper = styled.div`
  padding-top: 80px;
  min-height: calc(100vh - 100px);
  display: flex;
  align-items: center;
  z-index: 980;
`;

const HeroInner = styled('div')<React.ComponentPropsWithoutRef<any>>`
  width: ${(props) => props.theme.layout.pageWidthWithMargin};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: ProximaNova, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue',
    Arial, sans-serif;

  .hero-button {
    font-weight: 400;
  }

  .github-link {
    color: #e3e9ef;
    ${(props) =>
      props.themeType === 'light'
        ? `
    &:hover {
      color: #36435c;
    }
    `
        : null}
  }
`;

const HeroTitle = styled.h1`
  font-size: 50px;
  font-weight: 700;
  text-align: center;
  color: #fff;
  font-family: Roboto, pingfang sc, lantinghei sc, helvetica neue, Helvetica, Arial, microsoft yahei,
    微软雅黑, STHeitiSC-Light, simsun, 宋体, wenquanyi zen hei, wenquanyi micro hei, sans-serif;
`;

const HeroDesc = styled.div`
  font-size: 16px;
  text-align: center;
  width: 700px;
  color: #e3e9ef;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
`;

const Footer = styled.div`
  padding: 40px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #e3e9ef;
`;

const packageNames = ['components', 'hooks', 'icons'];

export default function Home() {
  const [index, setIndex] = useState(0);
  const theme = useTheme();
  const { t } = useTranslation('common');

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((i) => i + 1),
      5000 // every 5 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <HomeWrapper>
      <Head>
        <title>Kube-Design</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopBar />
      <HeroWrapper>
        <HeroInner themeType={theme.type}>
          <HeroTitle>Kube Design</HeroTitle>
          <HeroDesc>{t('LandingDesc')}</HeroDesc>
          <Group style={{ marginTop: '45px' }}>
            <Button
              shadow
              radius="xl"
              size="lg"
              className="hero-button"
              color="secondary"
              rightIcon={<ArrowRight size={15} />}
            >
              {t('get-started')}
            </Button>
            <Button
              variant="text"
              radius="xl"
              size="lg"
              className="hero-button github-link"
              rightIcon={<ExternalLink size={15} />}
            >
              GitHub
            </Button>
          </Group>
          <Snippet style={{ marginTop: '70px', border: 'none' }}>
            npm install @kubed/
            <TextTransition
              text={packageNames[index % packageNames.length]}
              springConfig={presets.wobbly}
              inline
            />
          </Snippet>
        </HeroInner>
      </HeroWrapper>
      <Footer>© 2021 KubeSphere.io</Footer>
    </HomeWrapper>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});
