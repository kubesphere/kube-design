import React from 'react';
import { mountWithTheme } from '@kubed/tests';
import { Modal } from './Modal';

describe('@kubed/components/Modal', () => {
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
