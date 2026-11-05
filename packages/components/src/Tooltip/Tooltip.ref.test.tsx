import React, { act, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { KubedConfigProvider } from '../ConfigProvider';
import { Popover } from '../Popover/Popover';
import { Tooltip, TooltipInstance } from './Tooltip';

it.each([Tooltip, Popover])(
  'preserves trigger refs, cleanup and Tippy lifecycle',
  async (Component) => {
    const container = document.createElement('div');
    document.body.appendChild(container);
    const root = createRoot(container);
    const forwardedRef = React.createRef<Element>();
    const cleanup = jest.fn();
    const childRef = jest.fn(() => cleanup);
    const instances: TooltipInstance[] = [];
    const onCreate = (instance: TooltipInstance) => instances.push(instance);
    const errors = jest.spyOn(console, 'error').mockImplementation(() => {});
    const render = (content: string, trigger: React.ReactElement) => (
      <StrictMode>
        <KubedConfigProvider>
          <Component ref={forwardedRef} content={content} visible duration={0} onCreate={onCreate}>
            {trigger}
          </Component>
        </KubedConfigProvider>
      </StrictMode>
    );

    try {
      await act(async () =>
        root.render(render('First content', <button ref={childRef}>Trigger</button>))
      );
      const trigger = container.querySelector('button');
      expect(forwardedRef.current).toBe(trigger);
      expect(childRef).toHaveBeenLastCalledWith(trigger);
      expect(instances[instances.length - 1].reference).toBe(trigger);
      expect(instances[instances.length - 1].popper.textContent).toContain('First content');
      expect(trigger.parentElement).toBe(container);

      await act(async () =>
        root.render(render('Updated content', <button ref={childRef}>Trigger</button>))
      );
      expect(instances[instances.length - 1].popper.textContent).toContain('Updated content');

      await act(async () =>
        root.render(render('Replacement content', <span ref={childRef}>Replacement</span>))
      );
      expect(forwardedRef.current).toBe(container.querySelector('span'));
      expect(instances[instances.length - 1].reference).toBe(forwardedRef.current);
      expect(cleanup).toHaveBeenCalled();

      await act(async () => root.unmount());
      expect(forwardedRef.current).toBeNull();
      expect(cleanup).toHaveBeenCalledTimes(childRef.mock.calls.length);
      expect(instances.every((instance) => instance.state.isDestroyed)).toBe(true);
      expect(document.querySelector('[data-tippy-root]')).toBeNull();
      expect(errors.mock.calls.filter((args) => String(args[0]).includes('element.ref'))).toEqual(
        []
      );
    } finally {
      act(() => root.unmount());
      container.remove();
      errors.mockRestore();
    }
  }
);

it('preserves callback refs and an explicit external reference', async () => {
  const container = document.createElement('div');
  const reference = document.createElement('button');
  document.body.append(container, reference);
  const root = createRoot(container);
  const childRef = React.createRef<HTMLButtonElement>();
  const forwardedRef = jest.fn();
  let instance: TooltipInstance;
  try {
    await act(async () =>
      root.render(
        <KubedConfigProvider>
          <Tooltip
            ref={forwardedRef}
            reference={reference}
            content="External"
            onCreate={(value) => {
              instance = value;
            }}
          >
            <button ref={childRef}>Trigger</button>
          </Tooltip>
        </KubedConfigProvider>
      )
    );
    expect(instance.reference).toBe(reference);
    expect(childRef.current).toBe(container.querySelector('button'));
    expect(forwardedRef).toHaveBeenLastCalledWith(childRef.current);
    act(() => root.unmount());
    expect(childRef.current).toBeNull();
    expect(forwardedRef).toHaveBeenLastCalledWith(null);
  } finally {
    act(() => root.unmount());
    container.remove();
    reference.remove();
  }
});
