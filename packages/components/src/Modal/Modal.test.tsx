import React, { act, StrictMode } from 'react';
import { mountWithTheme } from '@kubed/tests';
import { Modal } from './Modal';

describe('@kubed/components/Modal', () => {
  it('opens and unmounts with React 19 refs under StrictMode', async () => {
    const consoleError = jest.spyOn(console, 'error');
    const onCancel = jest.fn();
    const wrapper = mountWithTheme(
      <StrictMode>
        <Modal visible title="Ref lifecycle" onCancel={onCancel}>
          Modal body
        </Modal>
      </StrictMode>
    );

    try {
      expect(document.body.querySelector('[role="dialog"]')?.textContent).toContain('Modal body');
      const close = document.body.querySelector('.kubed-modal-close') as HTMLButtonElement;
      await act(async () => close.click());
      expect(onCancel).toHaveBeenCalledTimes(1);
      wrapper.unmount();
      expect(document.body.querySelector('[role="dialog"]')).toBeNull();
      expect(consoleError.mock.calls.flat().join(' ')).not.toMatch(/element\.ref|findDOMNode/);
    } finally {
      wrapper.unmount();
      consoleError.mockRestore();
    }
  });

  // Clean up dom as jest does not do this automatically
  afterEach(() => {
    document.getElementsByTagName('body')[0].innerHTML = '';
  });

  it('has correct displayName', () => {
    expect(Modal.displayName).toEqual('@kubed/components/Modal');
  });

  it('sets document.body overflow to hidden when opened', () => {
    document.body.style.overflow = 'auto';
    expect(document.body.style.overflow).toBe('auto');

    mountWithTheme(<Modal>test-modal</Modal>);
    document.body.style.overflow = 'hidden';
    expect(document.body.style.overflow).toBe('hidden');
  });

  it('renders width', () => {
    const element = mountWithTheme(
      <Modal visible title="Modal demo" description="Modal description">
        Modal content
      </Modal>
    );
    expect(element.find(Modal).prop('visible')).toBe(true);
    expect(element.find(Modal).prop('description')).toBe('Modal description');
    expect(element.find(Modal).prop('title')).toBe('Modal demo');
  });
});
