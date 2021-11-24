import React from 'react';
import {
  checkAccessibility,
  itSupportsStyle,
  itSupportsOthers,
  itSupportsClassName,
  itRendersChildren,
  itSupportsRef,
  shallowWithTheme,
  mountWithTheme,
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

  checkAccessibility([
    mountWithTheme(
      <Alert title="Error happened" type="error">
        <Text>Something bad happened</Text>
      </Alert>
    ),
    mountWithTheme(
      <Alert type="error">
        <Text>Something bad happened</Text>
      </Alert>
    ),
  ]);

  it('renders given hasTitle, closable and showIcon',() => {
    const wrapper = shallowWithTheme(
      <Alert title="KubeSphere" type="info" closable>
        Kubesphere.io is an upstream project of the KubeSphere container management platform.
      </Alert>
    );
    expect(wrapper.find(Alert).prop('title')).toBe('KubeSphere');
    expect(wrapper.find(Alert).prop('type')).toBe('info');
    expect(wrapper.find(Alert).prop('closable')).toBe(true);
  });

  it('has correct displayName', () => {
    expect(Alert.displayName).toEqual('@kubed/components/Alert');
  });
});
