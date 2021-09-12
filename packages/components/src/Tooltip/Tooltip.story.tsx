import * as React from 'react';
import { Tooltip, Button, Col, Row, Group } from '../index';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
};

export const Basic = () => (
  <Tooltip content="Tooltip content">
    <Button>Tooltip</Button>
  </Tooltip>
);

export const Position = () => (
  <>
    <Row style={{ width: '500px' }}>
      <Col span={4}>
        <Tooltip content="Tooltip content Tooltip content" placement="top">
          <Button style={{ minWidth: '100px' }}>top</Button>
        </Tooltip>
      </Col>
      <Col span={4}>
        <Tooltip content="Tooltip content Tooltip content" placement="top-start">
          <Button style={{ minWidth: '100px' }}>top-start</Button>
        </Tooltip>
      </Col>
      <Col span={4}>
        <Tooltip content="Tooltip content Tooltip content" placement="top-end">
          <Button style={{ minWidth: '100px' }}>top-end</Button>
        </Tooltip>
      </Col>
      <Col span={4}>
        <Tooltip
          content="Tooltip content Tooltip content Tooltip content Tooltip content"
          placement="right"
        >
          <Button style={{ minWidth: '100px' }}>right</Button>
        </Tooltip>
      </Col>
      <Col span={4}>
        <Tooltip
          content="Tooltip content Tooltip content Tooltip content Tooltip content"
          placement="right-start"
        >
          <Button style={{ minWidth: '100px' }}>right-start</Button>
        </Tooltip>
      </Col>
      <Col span={4}>
        <Tooltip
          content="Tooltip content Tooltip content Tooltip content Tooltip content"
          placement="right-end"
        >
          <Button style={{ minWidth: '100px' }}>right-end</Button>
        </Tooltip>
      </Col>
      <Col span={4}>
        <Tooltip
          content="Tooltip content Tooltip content Tooltip content Tooltip content"
          placement="left"
        >
          <Button style={{ minWidth: '100px' }}>left</Button>
        </Tooltip>
      </Col>
      <Col span={4}>
        <Tooltip
          content="Tooltip content Tooltip content Tooltip content Tooltip content"
          placement="left-start"
        >
          <Button style={{ minWidth: '100px' }}>left-start</Button>
        </Tooltip>
      </Col>
      <Col span={4}>
        <Tooltip
          content="Tooltip content Tooltip content Tooltip content Tooltip content"
          placement="left-end"
        >
          <Button style={{ minWidth: '100px' }}>left-end</Button>
        </Tooltip>
      </Col>
      <Col span={4}>
        <Tooltip
          content="Tooltip content Tooltip content Tooltip content Tooltip content"
          placement="bottom"
        >
          <Button style={{ minWidth: '100px' }}>bottom</Button>
        </Tooltip>
      </Col>
      <Col span={4}>
        <Tooltip
          content="Tooltip content Tooltip content Tooltip content Tooltip content"
          placement="bottom-start"
        >
          <Button style={{ minWidth: '100px' }}>bottom-start</Button>
        </Tooltip>
      </Col>
      <Col span={4}>
        <Tooltip
          content="Tooltip content Tooltip content Tooltip content Tooltip content"
          placement="bottom-end"
        >
          <Button style={{ minWidth: '100px' }}>bottom-end</Button>
        </Tooltip>
      </Col>
    </Row>
  </>
);

export const Trigger = () => (
  <Group>
    <Tooltip content="Tooltip content" trigger="click">
      <Button>Click</Button>
    </Tooltip>
    <Tooltip content="Tooltip content" trigger="focus">
      <Button>focusin</Button>
    </Tooltip>
  </Group>
);

export const Arrow = () => (
  <Tooltip content="Tooltip content" arrow={false}>
    <Button>Arrow</Button>
  </Tooltip>
);

export const Interactive = () => (
  <Tooltip content="Tooltip content" interactive>
    <Button style={{ marginTop: '40px' }}>Interactive</Button>
  </Tooltip>
);
