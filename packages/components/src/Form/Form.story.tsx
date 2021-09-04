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
    <Row gutter={40}>
      <Col span={6}>
        <FormItem
          name="usename"
          label="Username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </FormItem>
      </Col>
      <Col span={6}>
        <FormItem
          name="uid"
          label="UID"
          help="help content"
          rules={[{ required: true, message: 'Please input your uid!' }]}
        >
          <Input />
        </FormItem>
      </Col>
      <Col span={6}>
        <FormItem
          name="group"
          label="Group"
          help="help content"
          rules={[{ required: true, message: 'Please input your uid!' }]}
        >
          <Input />
        </FormItem>
      </Col>
    </Row>
    <button type="submit">Submit</button>
  </Form>
);
