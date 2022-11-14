import * as React from 'react';
import { useState, createRef } from 'react';
import { Button } from '@kubed/components';
import { CodeEditor, CodeEditorRef } from './CodeEditor';

export default {
  title: 'Extension-Components/CodeEditor',
  component: CodeEditor,
};

export const basic = () => {
  const [value, setValue] = useState('{ a: 123 }');
  const ref = createRef<CodeEditorRef>();

  const resetValue = () => {
    setValue(`{ a:  ${Math.random()} }`);
  };

  const getValue = () => {
    console.log(ref.current.getValue());
  };

  const setEditorValue = () => {
    ref.current.setValue('{ a: 123123 }');
  };

  return (
    <>
      <Button onClick={resetValue}>Reset</Button>
      <Button onClick={getValue}>get value</Button>
      <Button onClick={setEditorValue}>set value</Button>
      <CodeEditor
        ref={ref}
        fileName="deployment.yaml"
        acceptFileTypes={['.yml']}
        value={value}
        onUpload={(v) => {
          console.log(v);
          return v;
        }}
        onChange={(v) => {
          console.log(v);
        }}
      />
    </>
  );
};
