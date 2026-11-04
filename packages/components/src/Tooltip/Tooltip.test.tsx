import React, { act, StrictMode } from 'react';
import { shallowWithTheme, mountWithTheme } from '@kubed/tests';
import { Tooltip, Button, Dropdown, Popover } from '../index';
import type { Instance } from 'tippy.js';

describe('@kubed/components/Tooltip', () => {
  it('passes content and placement props to Tooltip component', () => {
    const wrapper = shallowWithTheme(
      <Tooltip content="tooltip content" placement="top" maxWidth={120}>
        <Button style={{ minWidth: '100px' }}>top</Button>
      </Tooltip>
    );
    expect(wrapper.find(Tooltip).prop('content')).toBe('tooltip content');
    expect(wrapper.find(Tooltip).prop('placement')).toBe('top');
    expect(wrapper.find(Tooltip).prop('maxWidth')).toBe(120);
  });

  it('has correct displayName', () => {
    expect(Tooltip.displayName).toEqual('@kubed/components/Tooltip');
  });

  it('preserves trigger refs and cleanup callbacks under StrictMode', () => {
    const consoleError = jest.spyOn(console, 'error');
    const cleanup = jest.fn();
    const childRef = jest.fn(() => cleanup);
    const forwardedRef = React.createRef<Element>();
    const wrapper = mountWithTheme(
      <StrictMode>
        <Tooltip ref={forwardedRef} content="Details">
          <button ref={childRef}>Trigger</button>
        </Tooltip>
      </StrictMode>
    );
    const trigger = wrapper.getDOMNode() as HTMLElement & { _tippy: Instance };

    try {
      expect(forwardedRef.current).toBe(trigger);
      expect(childRef).toHaveBeenLastCalledWith(trigger);
      expect(trigger._tippy.reference).toBe(trigger);
      const instance = trigger._tippy;
      wrapper.unmount();
      expect(forwardedRef.current).toBeNull();
      expect(cleanup).toHaveBeenCalledTimes(childRef.mock.calls.length);
      expect(childRef.mock.calls.every(([node]) => node !== null)).toBe(true);
      expect(instance.state.isDestroyed).toBe(true);
      expect(consoleError.mock.calls.flat().join(' ')).not.toMatch(/Accessing element\.ref/);
    } finally {
      wrapper.unmount();
      consoleError.mockRestore();
    }
  });

  it('preserves an object ref on the trigger', () => {
    const childRef = React.createRef<HTMLButtonElement>();
    const wrapper = mountWithTheme(
      <Tooltip content="Details">
        <button ref={childRef}>Trigger</button>
      </Tooltip>
    );
    expect(childRef.current).toBe(wrapper.getDOMNode());
    wrapper.unmount();
    expect(childRef.current).toBeNull();
  });

  it('uses an explicit reference element while retaining the child ref', () => {
    const external = document.createElement('button');
    const childRef = React.createRef<HTMLButtonElement>();
    const onCreate = jest.fn();
    const wrapper = mountWithTheme(
      <Tooltip reference={external} content="Details" onCreate={onCreate}>
        <button ref={childRef}>Trigger</button>
      </Tooltip>
    );
    expect(onCreate.mock.calls[0][0].reference).toBe(external);
    expect(childRef.current).toBe(wrapper.getDOMNode());
  });

  it('supports an explicit reference without a child', () => {
    const external = document.createElement('button');
    const onCreate = jest.fn();
    mountWithTheme(
      <Tooltip reference={external} content="Details" onCreate={onCreate}>
        {null}
      </Tooltip>
    );
    expect(onCreate.mock.calls[0][0].reference).toBe(external);
  });

  it.each([Dropdown, Popover])(
    'opens and closes popup content through its trigger',
    async (Popup) => {
      const wrapper = mountWithTheme(
        <Popup trigger="click" content="Popup details" duration={0}>
          <button>Trigger</button>
        </Popup>
      );
      const trigger = wrapper.getDOMNode() as HTMLElement & { _tippy: Instance };

      await act(async () => trigger.click());
      expect(trigger._tippy.state.isVisible).toBe(true);
      expect(trigger._tippy.popper.textContent).toContain('Popup details');

      await act(async () => {
        trigger.click();
        await new Promise(requestAnimationFrame);
      });
      expect(trigger._tippy.state.isVisible).toBe(false);
    }
  );

  it('updates controlled visibility and rebinds a replacement trigger', async () => {
    let setVisible: React.Dispatch<React.SetStateAction<boolean>>;
    let setAlternate: React.Dispatch<React.SetStateAction<boolean>>;
    const Harness = () => {
      const [visible, updateVisible] = React.useState(false);
      const [alternate, updateAlternate] = React.useState(false);
      setVisible = updateVisible;
      setAlternate = updateAlternate;
      return (
        <Tooltip visible={visible} content="Details" duration={0}>
          {alternate ? <a href="#alternate">Alternate</a> : <button>Trigger</button>}
        </Tooltip>
      );
    };
    const wrapper = mountWithTheme(<Harness />);
    const first = wrapper.getDOMNode() as HTMLElement & { _tippy: Instance };
    const firstInstance = first._tippy;
    await act(async () => setVisible(true));
    expect(firstInstance.state.isVisible).toBe(true);
    await act(async () => setAlternate(true));
    const next = wrapper.getDOMNode() as HTMLElement & { _tippy: Instance };
    expect(next.tagName).toBe('A');
    expect(next._tippy.reference).toBe(next);
    expect(next._tippy.state.isVisible).toBe(true);
    expect(firstInstance.state.isDestroyed).toBe(true);
    await act(async () => setVisible(false));
    expect(next._tippy.state.isVisible).toBe(false);
  });
});
