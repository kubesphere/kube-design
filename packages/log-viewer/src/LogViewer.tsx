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
  /** Follow appended output, pausing while the user scrolls away from the bottom. */
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
  }) => React.ReactElement;
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
    setAutoScrollFlag(autoScroll);
  }, [autoScroll]);

  useEffect(() => {
    if (autoScroll && autoScrollFlag && bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [log, matchers, autoScroll, autoScrollFlag]);

  // Event listener: if user scrolling log content, then pause auto scroll
  // resume: scroll to bottom
  const pauseOrResumeScrolling = React.useCallback(
    (event: Event) => {
      const target = event.target as HTMLElement;
      // AutoSizer's resize sensors also dispatch scroll events.
      if (target !== bodyRef.current && !target.classList.contains('kubed-virtual-log')) return;
      const { scrollHeight, scrollTop, clientHeight } = target;
      setAutoScrollFlag(autoScroll && scrollHeight - (scrollTop + clientHeight) < 50);
    },
    [autoScroll]
  );

  useEffect(() => {
    const body = bodyRef.current;
    body?.addEventListener('scroll', pauseOrResumeScrolling, true);
    return () => {
      body?.removeEventListener('scroll', pauseOrResumeScrolling, true);
    };
  }, [pauseOrResumeScrolling]);

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
            autoScroll={autoScroll && autoScrollFlag}
          />
        </LogBody>
      </LogMain>
      {errors.size && children ? children({ hasError: !!errors.size, errors }) : null}
    </ErrorContext.Provider>
  );
};
