import React, { act } from 'react';
import { createRoot } from 'react-dom/client';
import { VirtualLogContent } from './LogContent';
import { ErrorMatcher } from '../errorMatcher';
import { Partical } from '../matcher';
import { LogViewer } from '../LogViewer';

jest.mock('react-virtualized', () => ({
  ...jest.requireActual('react-virtualized'),
  AutoSizer: ({ children }) => children({ width: 600, height: 100 }),
}));

it('measures virtual rows, updates fold heights and follows appended lines', () => {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  const height = jest
    .spyOn(HTMLElement.prototype, 'offsetHeight', 'get')
    .mockImplementation(function () {
      return this.classList.contains('foldOpen') ? 80 : 25;
    });
  const width = jest.spyOn(HTMLElement.prototype, 'offsetWidth', 'get').mockReturnValue(600);
  const errors = jest.spyOn(console, 'error').mockImplementation(() => {});
  const errorMatcher = new ErrorMatcher([]);
  const particals: Partical[] = [
    { type: 'partical', label: 'Build output', content: 'first\nsecond\nthird', fold: true },
    { type: 'text', content: 'next line', fold: false },
  ];
  const render = (lines: Partical[], autoScroll = false) =>
    root.render(
      <VirtualLogContent particals={lines} errorMatcher={errorMatcher} autoScroll={autoScroll} />
    );
  const rows = () =>
    container.querySelector('.ReactVirtualized__Grid__innerScrollContainer').children;

  try {
    act(() => render(particals));
    expect(rows()).toHaveLength(2);
    expect(container.querySelector('.fold .log-line').hasAttribute('hidden')).toBe(true);
    expect((rows()[1] as HTMLElement).style.top).toBe('25px');
    act(() => (container.querySelector('[role="button"]') as HTMLElement).click());
    expect((rows()[1] as HTMLElement).style.top).toBe('80px');
    expect(container.querySelector('.foldOpen .log-line').hasAttribute('hidden')).toBe(false);
    act(() => (container.querySelector('[role="button"]') as HTMLElement).click());
    expect((rows()[1] as HTMLElement).style.top).toBe('25px');

    act(() =>
      render(
        [
          ...particals,
          ...Array.from(
            { length: 10 },
            (_, index): Partical => ({ type: 'text', content: `appended ${index}`, fold: false })
          ),
        ],
        true
      )
    );
    expect(container.textContent).toContain('appended 9');
    expect(container.querySelector('.ReactVirtualized__Grid').scrollTop).toBeGreaterThan(0);
    expect(
      errors.mock.calls.filter((args) => /findDOMNode|element.ref/.test(String(args[0])))
    ).toEqual([]);
  } finally {
    act(() => root.unmount());
    container.remove();
    height.mockRestore();
    width.mockRestore();
    errors.mockRestore();
  }
});

it('pauses virtual log following on upward scroll and resumes at the bottom', () => {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  const height = jest.spyOn(HTMLElement.prototype, 'offsetHeight', 'get').mockReturnValue(25);
  const width = jest.spyOn(HTMLElement.prototype, 'offsetWidth', 'get').mockReturnValue(600);
  const lines = Array.from({ length: 20 }, (_, index) => `output ${index}`);
  const render = (log: string[]) => root.render(<LogViewer log={log} virtual autoScroll />);
  try {
    act(() => render(lines));
    const grid = container.querySelector('.ReactVirtualized__Grid') as HTMLElement;
    Object.defineProperties(grid, {
      clientHeight: { get: () => 100 },
      scrollHeight: {
        get: () => parseFloat((grid.firstElementChild as HTMLElement).style.height),
      },
    });
    act(() => {
      grid.scrollTop = 0;
      grid.dispatchEvent(new Event('scroll'));
    });
    act(() => render([...lines, 'appended while paused']));
    expect(grid.scrollTop).toBe(0);
    act(() => {
      grid.scrollTop = grid.scrollHeight - grid.clientHeight;
      grid.dispatchEvent(new Event('scroll'));
    });
    act(() => render([...lines, 'appended while paused', 'appended while following']));
    expect(grid.scrollTop).toBe(grid.scrollHeight - grid.clientHeight);
  } finally {
    act(() => root.unmount());
    container.remove();
    height.mockRestore();
    width.mockRestore();
  }
});
