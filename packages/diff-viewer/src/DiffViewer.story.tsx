import * as React from 'react';
import { useState } from 'react';
import { Button } from '@kubed/components';
import { DiffViewer } from './DiffViewer';

export default {
  title: 'Extension-Components/DiffViewer',
  component: DiffViewer,
};

export const basic = () => {
  const oldValue = `
apiVersion: types.kubefed.io/v1beta1
kind: FederatedWorkspaceRole
metadata:
  finalizers:
    - kubefed.io/sync-controller
  name: role-template-create-devops
spec:
  placement:
    clusterSelector: {}
  template:
    metadata:
      creationTimestamp: null
      labels:
        iam.kubesphere.io/role-template: 'true'
        kubefed.io/managed: 'false'
    rules:
      - apiGroups:
          - '*'
        resources:
          - devops
          - devopsprojects
        verbs:
          - create
          - watch
  `;

  const newValue = `
apiVersion: types.kubefed.io/v1beta1
kind: FederatedWorkspaceRole
metadata:
  finalizers:
    - kubefed.io/sync-controller
  name: role-template-create-dmp
spec:
  placement:
    clusterSelector: {}
  template:
    metadata:
      creationTimestamp: null
      labels:
        iam.kubesphere.io/role-template: 'false'
        kubefed.io/managed: 'true'
    rules:
      - apiGroups:
          - '*'
        resources:
          - devops
          - devopsprojects
        verbs:
          - create
          - watch2
          - delete
          - edit
  `;

  const newValue2 = `
apiVersion: types.kubefed.io/v1beta1
kind: FederatedWorkspaceRole
metadata:
  finalizers:
    - kubefed.io/sync-controller
  name: role-template-create-cluster
spec:
  placement:
    clusterSelector: {}
  template:
    metadata:
      creationTimestamp: null
      labels:
        iam.kubesphere.io/role-template: 'false'
        kubefed.io/managed: 'true'
    rules:
      - apiGroups:
          - '*'
        resources:
          - devops
          - devopsprojects
        verbs:
          - create
          - delete
          - edit
  `;

  const [_newValue, setNewValue] = useState(newValue);

  const handleChange = () => {
    setNewValue(newValue2);
  };

  return (
    <>
      <Button onClick={handleChange}>Change Value</Button>
      <DiffViewer
        title="配置文件"
        description="与上一个记录 #7 (85f76fb8d7) 对比"
        oldValue={oldValue}
        newValue={_newValue}
        mode="side-by-side"
      />
    </>
  );
};
