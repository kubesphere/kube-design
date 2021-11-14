import {
  itSupportsClassName,
  itSupportsOthers,
  itSupportsStyle,
} from '@kubed/tests';
import { Row } from './Row';

describe('@kubed/components/Row', () => {
  itSupportsClassName(Row, {});
  itSupportsOthers(Row, {});
  itSupportsStyle(Row, {});

  it('has correct displayName', () => {
    expect(Row.displayName).toEqual('@kubed/components/Row');
  });
});
