import * as React from 'react';
import { Meta } from '@storybook/react';

import { Row, Col } from '../index';

export default {
  title: 'Components/Grid',
  component: Row,
} as Meta;

// eslint-disable-next-line react/prop-types
const PlaceHolder = ({ children }) => (
  <div style={{ height: '50px', textAlign: 'center', background: 'papayawhip' }}>{children}</div>
);

export const basic = () => (
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

export const gutter = () => (
  <Row gutter={[50, 20]}>
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

export const multiRows = () => (
  <Row gutter={[20, 50]}>
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

export const grow = () => (
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

export const offset = () => (
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

export const columnCount = () => (
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
