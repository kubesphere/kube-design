import React from "react";
import Head from "next/head";
import { MDXRemote } from "next-mdx-remote";
import styled from "styled-components";
import { Tabs, Tab } from "@kubed/components";
import * as Kubed from "@kubed/components";
import * as KubeIcon from "@kubed/icons";
import * as KubeHooks from "@kubed/hooks";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { getMdxData } from "../../lib/getMdx";
import { DocLayout } from "../../lib/layouts/DocLayout";
import MetadataCard from "../../lib/components/MetadataCard";
import TOC from "../../lib/components/TOC";
import CodeBox from "../../lib/components/CodeBox";
import PropsTable from "../../lib/components/PropsTable";
import IconList from "../../lib/components/IconList/IconList";

const Pre = ({ children }: React.PropsWithChildren<any>) => <>{children}</>;

const components = {
  ...Kubed,
  ...KubeHooks,
  KubeIcon,
  pre: Pre,
  code: CodeBox,
  IconList
};

const MainContent = styled.div`
  display: flex;
  position: relative;
`;

const Content = styled.div`
  width: calc(100% - 200px);
  padding-right: 10px;

  p,
  ul {
    font-size: 14px;
    line-height: 26px;
    color: ${({ theme }) => theme.palette.accents_7};
    -webkit-font-smoothing: antialiased;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    a {
      color: ${({ theme }) => theme.palette.accents_8};
    }
  }

  h2 {
    margin-top: 40px;

    &:first-of-type {
      margin-top: 10px;
    }
  }

  h3 {
    margin-top: 20px;
  }
`;

type Params = {
  params: {
    slug: string;
    category: string;
  };
  locale: any;
};

export default function Slug(props: any) {
  const { category, slug } = props.params;
  if (props.error) {
    return (
      <DocLayout category={category} slug={slug}>
        <Head>
          <title>404 - Kube Design</title>
        </Head>
        <MainContent>
          <Content>404 not found</Content>
        </MainContent>
      </DocLayout>
    );
  }

  const { title, description, group, imports } = props.frontMatter;
  return (
    <DocLayout category={category} slug={slug}>
      <Head>
        <title>{title} - Kube Design</title>
      </Head>
      {group === "components" && (
        <>
          <MetadataCard
            title={title}
            description={description}
            group={group}
            locale={props.locale}
            imports={imports}
          />
          <Tabs variant="line" size="md" name="doc-content">
            <Tab label="Documentation" key="content">
              <MainContent>
                <Content>
                  <MDXRemote {...props.source} components={components} />
                </Content>
                <TOC headings={props.toc} withTabs />
              </MainContent>
            </Tab>
            <Tab label="Component Props" key="props">
              <PropsTable component={title} data={props.metaData} />
            </Tab>
          </Tabs>
        </>
      )}
      {group === "hooks" && (
        <>
          <MetadataCard
            title={title}
            description={description}
            group={group}
            imports={imports}
            locale={props.locale}
          />
          <MainContent>
            <Content>
              <MDXRemote {...props.source} components={components} />
            </Content>
            <TOC headings={props.toc} withTabs />
          </MainContent>
        </>
      )}
      {group === "guide" && (
        <>
          <MainContent>
            <Content>
              <MDXRemote {...props.source} components={components} />
            </Content>
            <TOC headings={props.toc} withTabs />
          </MainContent>
        </>
      )}
      {group === "Icons" && (
        <>
          <MainContent>
            <Content>
              <MDXRemote {...props.source} components={components} />
            </Content>
            <TOC headings={props.toc} withTabs />
          </MainContent>
        </>
      )}
    </DocLayout>
  );
}

export async function getServerSideProps({ params, locale }: Params) {
  const { category, slug } = params;
  const { source, frontMatter, toc, error, metaData } = await getMdxData(category, locale, slug);
  return {
    props: {
      error,
      params,
      source,
      frontMatter,
      toc,
      locale,
      metaData,
      ...(await serverSideTranslations(locale, ["common", "menu"]))
    }
  };
}
