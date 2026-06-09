import React from 'react';
import { Language } from 'prism-react-renderer';
import { LiveProvider } from 'react-live';
import { useTheme } from '@kubed/components';
import { dark, light } from './prismTheme';
import ReactLivePreview from './ReactLivePreview';
import LivePreview from './LivePreview';

interface LiveCodeBlockProps {
  code: string;
  language: Language;
  scope: { [key: string]: any };
  mode: 'live' | 'render';
}

export default function LiveCodeBlock({ code, language, scope, mode }: LiveCodeBlockProps) {
  const theme = useTheme();
  const prismTheme = theme.type === 'dark' ? dark : light;

  if (mode === 'live') {
    return <ReactLivePreview language={language} code={code} scope={scope} />;
  }

  return (
    <LiveProvider language={language} code={code.trim()} scope={scope} theme={prismTheme}>
      <LivePreview />
    </LiveProvider>
  );
}
