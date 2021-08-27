import * as React from 'react';
import { Meta } from '@storybook/react';

import { Row, Col } from '@kubed/components';

export default {
  title: 'Components/Grid',
  component: Row,
} as Meta;

const PlaceHolder = ({ children }) => (
  <div style={{ height: '50px', textAlign: 'center', background: 'papayawhip' }}>{children}</div>
);

export const Basic = () => (
  <Row>
    <Col span={4}>
      <PlaceHolder>1</PlaceHolder>
    </Col>
    <Col span={4}>
      <PlaceHolder>2</PlaceHolder>
    </Col>
    <Col span={4}>
      <PlaceHolder>3</PlaceHolder>
    </Col>
  </Row>
);

export const Gutter = () => (
  <Row gutter={50}>
    <Col span={4}>
      <PlaceHolder>1</PlaceHolder>
    </Col>
    <Col span={4}>
      <PlaceHolder>2</PlaceHolder>
    </Col>
    <Col span={4}>
      <PlaceHolder>3</PlaceHolder>
    </Col>
  </Row>
);

export const MultiRows = () => (
  <Row gutter={50}>
    <Col span={4}>
      <PlaceHolder>1</PlaceHolder>
    </Col>
    <Col span={4}>
      <PlaceHolder>2</PlaceHolder>
    </Col>
    <Col span={4}>
      <PlaceHolder>3</PlaceHolder>
    </Col>
    <Col span={4}>
      <PlaceHolder>4</PlaceHolder>
    </Col>
  </Row>
);

export const Grow = () => (
  <Row grow>
    <Col span={4}>
      <PlaceHolder>1</PlaceHolder>
    </Col>
    <Col span={4}>
      <PlaceHolder>2</PlaceHolder>
    </Col>
    <Col span={4}>
      <PlaceHolder>3</PlaceHolder>
    </Col>
    <Col span={4}>
      <PlaceHolder>3</PlaceHolder>
    </Col>
  </Row>
);

export const Offset = () => (
  <Row>
    <Col span={3}>
      <PlaceHolder>1</PlaceHolder>
    </Col>
    <Col span={3}>
      <PlaceHolder>2</PlaceHolder>
    </Col>
    <Col span={3} offset={3}>
      <PlaceHolder>3</PlaceHolder>
    </Col>
  </Row>
);

export const ColumnCount = () => (
  <Row columns={24}>
    <Col span={12}>
      <PlaceHolder>1</PlaceHolder>
    </Col>
    <Col span={6}>
      <PlaceHolder>2</PlaceHolder>
    </Col>
    <Col span={6}>
      <PlaceHolder>3</PlaceHolder>
    </Col>
  </Row>
);
