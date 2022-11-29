import React, { useState, useEffect } from 'react';
import { createPatch } from 'diff';
import { parse, html } from 'diff2html';
import { Terminal, ChevronDown, ChevronRight } from '@kubed/icons';
import { DiffWrapper, Header, Title, Description } from './styles';

const getDiffHtml = (oldValue, newValue, options = {}) => {
  const diffStr = createPatch('yaml', oldValue, newValue, '', '', {
    context: -1,
  });
  const diffJson = parse(diffStr);
  return html(diffJson, {
    drawFileList: false,
    ...options,
  });
};

export interface DiffViewerProps {
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  mode?: 'line-by-line' | 'side-by-side';
  oldValue: string;
  newValue: string;
}

export const DiffViewer = ({
  title,
  description,
  mode = 'line-by-line',
  oldValue,
  newValue,
}: DiffViewerProps) => {
  const [_mode, setMode] = useState(mode);
  const [diffHtml, setDiffHtml] = useState(getDiffHtml(oldValue, newValue, { outputFormat: mode }));

  const handleModeChange = (m) => {
    setMode(m);
    setDiffHtml(getDiffHtml(oldValue, newValue, { outputFormat: m }));
  };

  useEffect(() => {
    setDiffHtml(getDiffHtml(oldValue, newValue, { outputFormat: _mode }));
  }, [oldValue, newValue]);

  return (
    <DiffWrapper>
      <Header>
        <Terminal size={20} />
        <Title>{title}</Title>
        <ChevronDown
          size={20}
          className="switch-mode"
          onClick={() => {
            handleModeChange('line-by-line');
          }}
        />
        <ChevronRight
          size={20}
          className="switch-mode"
          onClick={() => {
            handleModeChange('side-by-side');
          }}
        />
        <Description>{description}</Description>
      </Header>
      <div
        dangerouslySetInnerHTML={{
          __html: diffHtml,
        }}
      />
    </DiffWrapper>
  );
};
