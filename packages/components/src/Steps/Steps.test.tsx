import React from 'react';
import { mountWithTheme } from '@kubed/tests';
import { Step, Steps } from './Steps';

describe('@kubed/components/Steps', () => {
  it('ignores non-element children and unwraps fragments', () => {
    const wrapper = mountWithTheme(
      <Steps active={0}>
        text child
        {false}
        {null}
        <>
          <Step label="First step">First content</Step>
          <Step label="Second step">Second content</Step>
        </>
      </Steps>
    );

    expect(wrapper.render().find('.step-item')).toHaveLength(2);
    expect(wrapper.render().find('.steps-content').text()).toBe('First content');
  });
});
