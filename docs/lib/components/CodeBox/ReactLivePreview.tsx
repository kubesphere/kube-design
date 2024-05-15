import { LiveProvider } from 'react-live';
import React, { useState } from 'react';
import { useTheme } from '@kubed/components';
import { Language } from 'prism-react-renderer';
import LivePreview from './LivePreview';
import CodeEditor from './CodeEditor';
import { useCodeDemo } from './use-code-demo';
import { dark, light } from './prismTheme';

interface ReactLivePreviewProps {
  code: string;
  language: Language;
  scope: { [key: string]: any };
}
const ReactLivePreview = ({ code: originCode, language, scope }: ReactLivePreviewProps) => {
  const theme = useTheme();
  const prismTheme = theme.type === 'dark' ? dark : light;
  const [preViewCode, setPreViewCode] = useState<string>(originCode);
  const { code, noInline } = useCodeDemo({ scope, code: preViewCode });

  return (
    <LiveProvider
      language={language}
      noInline={noInline}
      code={code}
      scope={scope}
      theme={prismTheme}
    >
      <div>
        <LivePreview />
        <CodeEditor
          code={originCode}
          onChange={(val) => {
            setPreViewCode(val);
          }}
          fontFamily={theme.font.mono}
          className="code-editor"
        />
      </div>
    </LiveProvider>
  );
};

export default ReactLivePreview;
