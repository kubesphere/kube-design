import {
  itRendersChildren,
  itSupportsClassName,
  itSupportsStyle,
  itSupportsOthers,
} from '@kubed/tests';
import { Center } from './Center';

describe('@kubed/components/Center', () => {
  itRendersChildren(Center, {});
  itSupportsClassName(Center, {});
  itSupportsStyle(Center, {});
  itSupportsOthers(Center, {});

  it('has correct displayName', () => {
    expect(Center.displayName).toEqual('@kubed/components/Center');
  });
});
