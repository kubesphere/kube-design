import React, { act } from 'react';
import { themeUtils } from '@kubed/components';
import { ThemeProvider } from 'styled-components';
import { createWrapper } from './reactWrapper';

const waitForComponentToPaint = async (wrapper: any) => {
  await act(async () => {
    await new Promise((resolve) => setTimeout(resolve));
    wrapper.update();
  });
};

export function itSupportsRef(
  Component: React.ElementType,
  requiredProps: Record<string, any>,
  refType: any,
  refProp: string = 'ref'
) {
  it('supports ref', async () => {
    const ref = React.createRef<typeof refType>();
    const element = createWrapper(
      <ThemeProvider theme={themeUtils.getPresets()[0]}>
        <Component {...requiredProps} {...{ [refProp]: ref }} />
      </ThemeProvider>
    );
    await waitForComponentToPaint(element);
    expect(ref.current instanceof refType).toBe(true);
  });
}
