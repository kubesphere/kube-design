import React from 'react';
import styled from 'styled-components';
import { Npm, Github, Pen } from '@kubed/icons';
import { Button } from '@kubed/components';
import { useClipboard } from '@kubed/hooks';
import { toPascalCase, toCamelCase } from '../../utils';
import Prism from '../CodeBox/Prism';

const Wrapper = styled.div`
  padding: 40px 0;
  font-size: 14px;
  -webkit-font-smoothing: antialiased;
  //background-color: ${({ theme }) => theme.palette.accents_1};

  h1 {
    font-size: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.palette.accents_7};
  }
`;

const Desc = styled.div`
  color: ${({ theme }) => theme.palette.accents_6};
`;

const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 20px;
  padding-right: 100px;

  dl {
    display: flex;
    align-items: center;
    margin: 5px 0;
  }
  dt {
    width: 60px;
    height: 30px;
    line-height: 30px;
    color: ${({ theme }) => theme.palette.accents_6};
  }
  dd {
    height: 30px;
    line-height: 30px;
    color: ${({ theme }) => theme.palette.accents_8};

    .token-line {
      padding-left: 0;
      line-height: 30px;
    }
  }

  .import-code {
    cursor: pointer;
  }
`;

const REPO_BASE = 'https://github.com/kubesphere/kube-design/blob/master';
const DOCS_BASE = `${REPO_BASE}/docs/docs`;
const SOURCE_BASE = `${REPO_BASE}/packages`;

const getLinks = (title, group, locale) => {
  const isHooks = title.startsWith('use');
  const sourceName = isHooks ? toCamelCase(title) : toPascalCase(title);

  const sourceLink = `${SOURCE_BASE}/${group}/src/${sourceName}/${sourceName}.${
    isHooks ? 'ts' : 'tsx'
  }`;
  const docLink = `${DOCS_BASE}/${locale}/${sourceName}.mdx`;
  const npmLink = `https://www.npmjs.com/package/@kubed/${group}`;

  return [sourceLink, docLink, npmLink, sourceName];
};

interface MetadataCardProps extends React.ComponentPropsWithoutRef<'div'> {
  title?: string;
  description?: string;
  group?: string;
  locale?: string;
  imports?: string;
}

export default function MetadataCard({
  title,
  description,
  group,
  locale,
  imports,
}: MetadataCardProps) {
  const clipboard = useClipboard();
  const [sourceLink, docLink, npmLink, sourceName] = getLinks(title, group, locale);
  const importStr = `import { ${imports || sourceName} } from '@kubed/${group}'`;

  return (
    <Wrapper>
      <h1>{title}</h1>
      <Desc>{description}</Desc>
      <List>
        <dl>
          <dt>Import</dt>
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
          <dd className="import-code" onClick={() => clipboard.copy(importStr)}>
            <Prism withLineNumbers={false} withPre={false} language="tsx" className="prism">
              {importStr}
            </Prism>
          </dd>
        </dl>
        <dl>
          <dt>Source</dt>
          <dd>
            <Button
              variant="link"
              size="md"
              component="a"
              href={sourceLink}
              leftIcon={<Github size={18} />}
              style={{ height: '30px' }}
            >
              View source code
            </Button>
          </dd>
        </dl>
        <dl>
          <dt>Doc</dt>
          <dd>
            <Button
              variant="link"
              size="md"
              component="a"
              href={docLink}
              leftIcon={<Pen size={16} />}
              style={{ height: '30px' }}
            >
              Edit this page
            </Button>
          </dd>
        </dl>
        <dl>
          <dt>Npm</dt>
          <dd>
            <Button
              variant="link"
              size="md"
              component="a"
              href={npmLink}
              leftIcon={<Npm color="rgb(193, 33, 39)" size={18} />}
              style={{ height: '30px' }}
            >
              @kubed/{group}
            </Button>
          </dd>
        </dl>
      </List>
    </Wrapper>
  );
}
