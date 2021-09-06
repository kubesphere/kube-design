import React from 'react';
import { Form, FormItem, Input, Row, Col } from '@kubed/components';

export default {
  title: 'Components/Form',
  component: Form,
};

const onFinish = (values) => {
  console.log(values);
};

export const Basic = () => (
  <Form onFinish={onFinish} initialValues={{ usename: 'wayne' }}>
    <Row gutter={[10, 40]}>
      <Col span={6}>
        <FormItem
          name="usename"
          label="Username"
          help="user name must input"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </FormItem>
      </Col>
      <Col span={6}>
        <FormItem
          name="uid"
          label="用户名"
          help="help content"
          rules={[{ required: true, message: 'Please input your uid!' }]}
        >
          <Input />
        </FormItem>
      </Col>
      <Col span={6}>
        <FormItem name="group" label="Group" help="help content" tooltip="tooltip 内容 content">
          <Input />
        </FormItem>
      </Col>
    </Row>
    <button type="submit">Submit</button>
  </Form>
);
