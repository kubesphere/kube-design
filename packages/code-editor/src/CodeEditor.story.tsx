import * as React from 'react';
import { CodeEditor } from './CodeEditor';

export default {
  title: 'Components/CodeEditor',
  component: CodeEditor,
};

export const basic = () => <CodeEditor fileName="deployment" acceptFileTypes={['.yml']} />;
