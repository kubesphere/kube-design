import React from 'react';
import { shallow, mount } from 'enzyme';
import {
  checkAccessibility,
  itSupportsStyle,
  itSupportsOthers,
  itSupportsClassName,
  itRendersChildren,
  itSupportsRef,
} from '@kubed/tests';
import { Text } from '../Text/Text';
import { Alert } from './Alert';
import { ThemeProvider } from 'styled-components';
import { themeUtils } from '@kubed/components';

const defaultProps = {
  title: 'test-title',
  children: 'test-alert',
  icon: '$',
  type: 'default',
  showIcon: true,
  closable: true
};

describe('@kubed/components/Alert', () => {
  itSupportsClassName(Alert, defaultProps);
  itSupportsOthers(Alert, defaultProps);
  itSupportsStyle(Alert, defaultProps);
  itRendersChildren(Alert, {});
  itSupportsRef(Alert, {}, HTMLDivElement);

  checkAccessibility([
    mount(
      <ThemeProvider theme={themeUtils.getPresets()[0]}>
        <Alert title="Error happened" type="error">
          <Text>Something bad happened</Text>
        </Alert>
      </ThemeProvider>
    ),
    mount(
      <ThemeProvider theme={themeUtils.getPresets()[0]}>
        <Alert type="error">
          <Text>Something bad happened</Text>
        </Alert>
      </ThemeProvider>
    ),
  ]);

  // it('renders given title', () => {
  //   const element = shallow(
  //     <ThemeProvider theme={themeUtils.getPresets()[0]}>
  //       <Alert titleClassName="alert-title">test-alert</Alert>
  //     </ThemeProvider>
  //   );
  //   expect(element.render().find('.alert-title').text()).toEqual('test-title');
  // });

  // it('does not render title if title prop was not passed', () => {
  //   const element = shallow(
  //     <ThemeProvider theme={themeUtils.getPresets()[0]}>
  //       <Alert className="alert-title">test-alert</Alert>
  //     </ThemeProvider>
  //   );
  //   expect(element.render().find('.alert-title')).toHaveLength(0);
  // });

  it('has correct displayName', () => {
    expect(Alert.displayName).toEqual('@kubed/components/Alert');
  });

});
