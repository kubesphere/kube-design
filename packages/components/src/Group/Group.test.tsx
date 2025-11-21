import {
  itRendersChildren,
  itSupportsClassName,
  itSupportsOthers,
  itSupportsStyle,
} from '@kubed/tests';
import { Group } from './Group';

describe('@kubed/components/Group', () => {
  itSupportsClassName(Group, {});
  itSupportsOthers(Group, {});
  itSupportsStyle(Group, {});
  itRendersChildren(Group, {});

  it('has correct displayName', () => {
    expect(Group.displayName).toEqual('@kubed/components/Group');
  });
});
