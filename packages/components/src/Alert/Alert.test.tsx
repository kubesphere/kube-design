import React from 'react';
import {
  multipleCheckRTLAccessibility,
  itSupportsStyle,
  itSupportsOthers,
  itSupportsClassName,
  itRendersChildren,
  itSupportsRef,
  renderWithTheme,
} from '@kubed/tests';
import { Text } from '../Text/Text';
import { Alert } from './Alert';

const defaultProps = {
  title: 'test-title',
  children: 'test-alert',
  icon: '$',
  type: 'default',
  showIcon: true,
  closable: true,
};

describe('@kubed/components/Alert', () => {
  itSupportsClassName(Alert, defaultProps);
  itSupportsOthers(Alert, defaultProps);
  itSupportsStyle(Alert, defaultProps);
  itRendersChildren(Alert, {});
  itSupportsRef(Alert, {}, HTMLDivElement);

  multipleCheckRTLAccessibility([
    renderWithTheme(
      <Alert title="Error happened" type="error">
        <Text>Something bad happened</Text>
      </Alert>
    ),
    renderWithTheme(
      <Alert type="error">
        <Text>Something bad happened</Text>
      </Alert>
    ),
  ]);

  it('render correct style (snapshot)', () => {
    const { asFragment } = renderWithTheme(
      <Alert title="KubeSphere" type="info" closable>
        Kubesphere.io is an upstream project of the KubeSphere container management platform.
      </Alert>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('has correct displayName', () => {
    expect(Alert.displayName).toEqual('@kubed/components/Alert');
  });
});
