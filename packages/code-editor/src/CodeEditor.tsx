import React, { useEffect, useState } from 'react';
import AceEditor, { IAceEditorProps } from 'react-ace';
import ReactFileReader from 'react-file-reader';
import { Download, Upload } from '@kubed/icons';
import { useForceUpdate } from '@kubed/hooks';
import { saveAs } from 'file-saver';
import { get, isEmpty, isUndefined } from 'lodash';
import { EditorWrapper, ActionWrapper, Divider } from './styles';

import 'ace-builds/src-noconflict/mode-yaml';
import 'ace-builds/src-noconflict/mode-groovy';
import 'ace-builds/src-noconflict/theme-chaos';
import 'ace-builds/src-noconflict/keybinding-vscode';
import 'ace-builds/src-noconflict/ext-searchbox';

const saveAsFile = (text = '', fileName = 'default.txt') => {
  const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
  saveAs(blob, fileName);
};

export interface CodeEditorProps extends IAceEditorProps {
  onUpload?: (value?: string) => string;
  onDownload?: (value?: string) => string;
  hasUpload?: boolean;
  hasDownload?: boolean;
  fileName?: string;
  acceptFileTypes?: string[];
}

export const CodeEditor = ({
  value = '{}',
  mode = 'yaml',
  acceptFileTypes = ['.yaml'],
  onChange = () => {},
  hasDownload = true,
  hasUpload = true,
  fileName = 'default.txt',
  readOnly,
  defaultValue,
  onDownload = (v) => v,
  ...rest
}: CodeEditorProps) => {
  const forceUpdate = useForceUpdate();
  const [_value, setValue] = useState(value);

  const handleUpload = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      if (!isEmpty(e.target.result)) {
        setValue(e.target.result as string);
        forceUpdate();
      }
    };
    reader.readAsText(file[0]);
  };

  const handleDownload = () => {
    const downloadValue = onDownload(_value);
    saveAsFile(downloadValue, `${fileName}.${mode}`);
  };

  const handleChange = (v) => {
    setValue(v);
    onChange && onChange(v);
  };

  const renderActions = () => {
    if (!hasDownload && (!hasUpload || readOnly)) return null;

    return (
      <ActionWrapper>
        {hasUpload && !readOnly && (
          <ReactFileReader fileTypes={acceptFileTypes} handleFiles={handleUpload}>
            <Upload fill="#fff" color="#fff" size={20} />
          </ReactFileReader>
        )}
        {hasUpload && !readOnly && hasDownload && <Divider>|</Divider>}
        {hasDownload && <Download fill="#fff" color="#fff" size={20} onClick={handleDownload} />}
      </ActionWrapper>
    );
  };

  return (
    <EditorWrapper>
      <AceEditor
        theme="chaos"
        width="auto"
        height="100%"
        tabSize={2}
        editorProps={{ $blockScrolling: true }}
        showPrintMargin={false}
        keyboardHandler="vscode"
        mode={mode}
        onChange={handleChange}
        value={_value}
        wrapEnabled
        readOnly={readOnly}
        {...rest}
      />
      {renderActions()}
    </EditorWrapper>
  );
};
