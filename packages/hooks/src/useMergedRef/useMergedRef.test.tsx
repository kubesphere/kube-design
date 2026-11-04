import React, { act, StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { mergeRefs, useMergedRef } from './index';

describe('@kubed/hooks/useMergedRef', () => {
  it('assigns and clears object refs and callback refs', () => {
    const objectRef = React.createRef<HTMLDivElement>();
    const callbackRef = jest.fn();
    const mergedRef = mergeRefs(objectRef, callbackRef);
    const node = document.createElement('div');

    expect(mergedRef(node)).toBeUndefined();
    expect(objectRef.current).toBe(node);
    expect(callbackRef).toHaveBeenLastCalledWith(node);

    mergedRef(null);
    expect(objectRef.current).toBeNull();
    expect(callbackRef).toHaveBeenLastCalledWith(null);
  });

  it('runs callback cleanup and clears the other refs on detach', () => {
    const cleanup = jest.fn();
    const callbackWithCleanup = jest.fn(() => cleanup);
    const callbackWithoutCleanup = jest.fn();
    const objectRef = React.createRef<HTMLDivElement>();
    const mergedRef = mergeRefs(callbackWithCleanup, callbackWithoutCleanup, objectRef);
    const detach = mergedRef(document.createElement('div'));

    expect(typeof detach).toBe('function');
    detach?.();

    expect(cleanup).toHaveBeenCalledTimes(1);
    expect(callbackWithCleanup).toHaveBeenCalledTimes(1);
    expect(callbackWithoutCleanup).toHaveBeenLastCalledWith(null);
    expect(objectRef.current).toBeNull();
  });

  it('keeps refs attached across state updates and cleans up under StrictMode', () => {
    const cleanup = jest.fn();
    const callbackRef = jest.fn(() => cleanup);
    const container = document.createElement('div');
    const root = createRoot(container);
    const Component = () => {
      const [count, setCount] = useState(0);
      const ref = useMergedRef(callbackRef);
      return (
        <button ref={ref} onClick={() => setCount(count + 1)}>
          {count}
        </button>
      );
    };

    try {
      act(() =>
        root.render(
          <StrictMode>
            <Component />
          </StrictMode>
        )
      );
      const attachments = callbackRef.mock.calls.length;
      const cleanups = cleanup.mock.calls.length;
      act(() => container.querySelector('button')?.click());
      expect(container.textContent).toBe('1');
      expect(callbackRef).toHaveBeenCalledTimes(attachments);
      expect(cleanup).toHaveBeenCalledTimes(cleanups);
    } finally {
      act(() => root.unmount());
    }

    expect(cleanup).toHaveBeenCalledTimes(callbackRef.mock.calls.length);
  });
});
