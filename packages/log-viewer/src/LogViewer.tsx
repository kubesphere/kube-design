import React, { useRef, useEffect, useState, useCallback, useMemo } from 'react';
import produce, { enableMapSet } from 'immer';
import { Spliter, defaultMatchers } from './Spliter';

import { Matcher } from './matcher';
import {
  ErrorMatcher,
  defaultErrorMatchers,
  ErrorMatcherPatterns,
  ErrorMatcherPattern,
} from './errorMatcher';
import LogContent from './components/LogContent';
import { ErrorContext, errorRefs } from './ErrorContext';

import { LogMain, LogBody } from './styles';

enableMapSet();

const MemorizedLogContent = React.memo(LogContent);

export { Matcher, ErrorContext, errorRefs };

export interface LogViewerProps {
  log: string | string[];
  style?: React.CSSProperties;
  bodyStyle?: React.CSSProperties;
  logStyle?: React.CSSProperties;
  matchers?: Matcher[];
  errorMatchers?: ErrorMatcherPatterns;
  autoScroll?: boolean;
  showHeader?: boolean;
  linkify?: boolean;
  virtual?: boolean;
  children?: ({
    hasError,
    errors,
  }: {
    hasError: boolean;
    errors: Map<HTMLDivElement, ErrorMatcherPattern[]>;
  }) => JSX.Element;
}

export const LogViewer = ({
  style,
  bodyStyle,
  logStyle = {},
  log,
  children,
  matchers = defaultMatchers,
  errorMatchers = defaultErrorMatchers,
  autoScroll = false,
  linkify = true,
  virtual = false,
}: LogViewerProps) => {
  const [autoScrollFlag, setAutoScrollFlag] = useState(autoScroll);
  const bodyRef = useRef<HTMLDivElement>(null);
  const spliter = React.useMemo(() => new Spliter(matchers), [matchers]);
  const errorMatcher = React.useMemo(() => new ErrorMatcher(errorMatchers), [errorMatchers]);
  const [errors, setErrors] = useState(new Map<HTMLDivElement, ErrorMatcherPattern[]>());
  const logArray = useMemo(() => (Array.isArray(log) ? log : log.split(/\r?\n/)), [log]);

  const setErrorRefs = useCallback(
    (error: ErrorMatcherPattern[], ref: HTMLDivElement) => {
      setErrors((err) =>
        produce(err, (draft) => {
          draft.set(ref as any, error);
        })
      );
    },
    [setErrors]
  );

  const foldedLogger = React.useMemo(() => spliter.execute(logArray), [spliter, log]);

  useEffect(() => {
    if (autoScrollFlag && bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [log, matchers, bodyRef.current]);

  // Event listener: if user scrolling log content, then pause auto scroll
  // resume: scroll to bottom
  const pauseOrResumeScrolling = React.useCallback(() => {
    if (!bodyRef.current) {
      return;
    }

    const { scrollHeight, scrollTop, offsetHeight } = bodyRef.current;
    setAutoScrollFlag(scrollHeight - (scrollTop + offsetHeight) < 50);
  }, [bodyRef.current]);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.addEventListener('scroll', pauseOrResumeScrolling);
    }
    return () => {
      bodyRef.current && bodyRef.current.removeEventListener('scroll', pauseOrResumeScrolling);
    };
  }, [bodyRef.current, pauseOrResumeScrolling]);

  return (
    <ErrorContext.Provider value={{ setErrorRefs }}>
      <LogMain className={`${errors.size ? 'has-error' : ''}`} style={style}>
        <LogBody style={bodyStyle} ref={bodyRef}>
          <MemorizedLogContent
            particals={foldedLogger}
            style={logStyle}
            linkify={linkify}
            errorMatcher={errorMatcher}
            virtual={virtual}
            autoScroll={autoScrollFlag}
          />
        </LogBody>
      </LogMain>
      {errors.size && children ? children({ hasError: !!errors.size, errors }) : null}
    </ErrorContext.Provider>
  );
};
