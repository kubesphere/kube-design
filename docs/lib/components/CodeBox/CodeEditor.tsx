import React, { useEffect, useState, useContext } from 'react';
import Editor from 'react-simple-code-editor';
import { LiveContext } from 'react-live';
import styled from 'styled-components';
import Prism from './Prism';

interface CodeEditorProps {
  code: string;
  fontFamily?: string;
  className?: string;
  onChange: (code: string) => void;
}

interface StateProps {
  code?: string;
  prevCodeProp?: string;
}

const EditorContainer = styled.div`
  padding: 20px 20px 20px 10px;
  background-color: rgba(248, 249, 250, 0.65);
  border: 1px solid ${({ theme }) => theme.palette.accents_2};
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;

  textarea {
    padding-left: 40px !important;
  }
`;

export default function CodeEditor({ fontFamily, className, code, onChange }: CodeEditorProps) {
  // @ts-ignore
  const { language } = useContext(LiveContext);
  const [state, setState] = useState<StateProps>({ code: code || '' });

  useEffect(() => {
    if (state.prevCodeProp && code !== state.prevCodeProp) {
      setState({ code, prevCodeProp: code });
    }
  }, [code]);

  const updateContent = (newCode: string) => {
    setState({ code: newCode });
  };

  useEffect(() => {
    if (onChange) {
      onChange(state.code);
    }
  }, [state.code]);

  const highlightCode = (value) => <Prism language={language}>{value}</Prism>;

  return (
    <EditorContainer className={className}>
      <Editor
        value={state.code}
        highlight={highlightCode}
        onValueChange={updateContent}
        style={{
          whiteSpace: 'pre',
          outline: 0,
          fontSize: '12px',
          fontFamily,
          lineHeight: '22px',
        }}
      />
    </EditorContainer>
  );
}
