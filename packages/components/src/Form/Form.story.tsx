import * as React from 'react';
import { Add, Trash } from '@kubed/icons';
import {
  Form,
  FormItem,
  FormList,
  Input,
  InputPassword,
  Row,
  Col,
  Button,
  useForm,
} from '../index';

export default {
  title: 'Components/Form',
  component: Form,
};

const onFinish = (values) => {
  console.log(values);
};

export const Basic = () => (
  <Form onFinish={onFinish}>
    <Row gutter={[10, 40]}>
      <Col span={6}>
        <FormItem
          className="test"
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
          name="password"
          label="密码"
          help="help content"
          rules={[{ required: true, message: 'Please input your uid!' }]}
        >
          <InputPassword />
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

export const DynamicForm = () => {
  const [form] = useForm();
  const getFieldErrors = () => {
    console.log(form.validateFields());
  };
  return (
    <Form onFinish={onFinish} form={form}>
      <FormList name="users">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <Row gutter={[10, 40]} key={key}>
                <Col span={5}>
                  <FormItem
                    {...restField}
                    name={[name, 'first']}
                    label="Fist Name"
                    help="user name must input"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                  >
                    <Input />
                  </FormItem>
                </Col>
                <Col span={5}>
                  <FormItem
                    {...restField}
                    name={[name, 'last']}
                    label="Last Name"
                    help="help content"
                    rules={[{ required: true, message: 'Please input your uid!' }]}
                  >
                    <Input />
                  </FormItem>
                </Col>
                <Col span={1}>
                  <Button variant="text" onClick={() => remove(name)}>
                    <Trash size={16} />
                  </Button>
                </Col>
              </Row>
            ))}
            <Row>
              <Col span={12}>
                <Button onClick={() => add()}>
                  <Add size={16} />
                </Button>
              </Col>
            </Row>
          </>
        )}
      </FormList>
      <button type="button" onClick={getFieldErrors}>
        Submit
      </button>
    </Form>
  );
};
