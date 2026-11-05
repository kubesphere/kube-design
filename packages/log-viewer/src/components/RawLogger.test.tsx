import React, { act } from 'react';
import { createRoot } from 'react-dom/client';
import { RawLoggerBase } from './RawLogger';
import { ErrorMatcher } from '../errorMatcher';

it('toggles log folds with mouse and keyboard without scrolling on Space', () => {
  const previous = (globalThis as any).IS_REACT_ACT_ENVIRONMENT;
  (globalThis as any).IS_REACT_ACT_ENVIRONMENT = true;
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  try {
    act(() =>
      root.render(
        <RawLoggerBase
          index={0}
          foldable
          errorMatcher={new ErrorMatcher([])}
          partical={{ type: 'partical', label: 'Build output', content: 'ready', fold: true }}
        />
      )
    );
    const toggle = container.querySelector('[role="button"]') as HTMLElement;
    expect(toggle.tabIndex).toBe(0);
    expect(toggle.getAttribute('aria-expanded')).toBe('false');
    act(() => toggle.click());
    expect(toggle.getAttribute('aria-expanded')).toBe('true');
    const space = new KeyboardEvent('keydown', { key: ' ', bubbles: true, cancelable: true });
    act(() => toggle.dispatchEvent(space));
    expect(space.defaultPrevented).toBe(true);
    expect(toggle.getAttribute('aria-expanded')).toBe('false');
    act(() => toggle.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true })));
    expect(toggle.getAttribute('aria-expanded')).toBe('true');
    expect(container.textContent).toContain('ready');
  } finally {
    act(() => root.unmount());
    container.remove();
    (globalThis as any).IS_REACT_ACT_ENVIRONMENT = previous;
  }
});
