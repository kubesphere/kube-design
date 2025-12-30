import React from 'react';
import { renderWithTheme } from './itSupportsTheme';

export function itSupportsRef(
  Component: React.ElementType,
  requiredProps: Record<string, any>,
  refType: any,
  refProp: string = 'ref'
) {
  it('supports ref', async () => {
    const ref = React.createRef<typeof refType>();

    renderWithTheme(<Component {...requiredProps} {...{ [refProp]: ref }} />);

    // 等待React渲染完成
    await new Promise((resolve) => setTimeout(resolve, 0));

    expect(ref.current instanceof refType).toBe(true);
  });
}
