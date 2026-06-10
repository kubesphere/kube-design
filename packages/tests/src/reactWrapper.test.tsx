import React from 'react';
import { createWrapper } from './reactWrapper';

describe('@kubed/tests/reactWrapper', () => {
  it('unmounts and removes the container from the DOM', () => {
    const initialChildren = document.body.children.length;
    const wrapper = createWrapper(<div className="manual-cleanup">content</div>);

    expect(document.body.children.length).toBe(initialChildren + 1);
    expect(document.body.querySelector('.manual-cleanup')).not.toBeNull();

    wrapper.unmount();
    wrapper.unmount();

    expect(document.body.children.length).toBe(initialChildren);
    expect(document.body.querySelector('.manual-cleanup')).toBeNull();
  });

  it('registers wrappers for automatic cleanup', () => {
    createWrapper(<div className="auto-cleanup">content</div>);

    expect(document.body.querySelector('.auto-cleanup')).not.toBeNull();
  });

  it('cleans up wrappers after each test', () => {
    expect(document.body.querySelector('.auto-cleanup')).toBeNull();
  });
});
