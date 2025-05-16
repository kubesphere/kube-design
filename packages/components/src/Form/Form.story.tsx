import * as React from 'react';
import { Meta } from '@storybook/react';
import { Add, Trash } from '@kubed/icons';
import {
  Form,
  FormItem,
  FormList,
  Input,
  InputPassword,
  Textarea,
  Row,
  Col,
  Button,
  useForm,
  CheckboxGroup,
  Checkbox,
} from '../index';

export default {
  title: 'Components/Form',
  component: Form,
  argTypes: {
    initialValues: {
      description: 'Default values of form',
      table: {
        type: { summary: 'Store' },
      },
      control: 'select',
    },
    form: {
      description: 'Form instance created by useForm()',
      table: {
        type: { summary: 'FormInstance<Values>' },
      },
      control: 'select',
    },
    children: {
      description: 'Form content',
      table: {
        type: { summary: 'RenderProps | React.ReactNode' },
      },
      control: 'select',
    },
    component: {
      description: 'Set the Form rendering element',
      table: {
        type: { summary: 'false | string | React.FC<any> | React.ComponentClass<any>' },
      },
      control: 'select',
    },
    fields: {
      description: 'Control form fields through state management',
      table: {
        type: { summary: 'FieldData[]' },
      },
      control: 'select',
    },
    name: {
      description: 'Form name',
      table: {
        type: { summary: 'string' },
      },
      control: 'select',
    },
    validateMessages: {
      description: 'Validation prompt message template',
      table: {
        type: { summary: 'ValidateMessages' },
      },
      control: 'select',
    },
    onValuesChange: {
      description: 'Callback when field values change',
      table: {
        type: { summary: "Callbacks<Values>['onValuesChange']" },
      },
      control: 'select',
    },
    onFieldsChange: {
      description: 'Callback when fields change',
      table: {
        type: { summary: "Callbacks<Values>['onFieldsChange']" },
      },
      control: 'select',
    },
    onFinish: {
      description: 'Callback when form is submitted and validation is successful',
      table: {
        type: { summary: "Callbacks<Values>['onFinish']" },
      },
      control: 'select',
    },
    onFinishFailed: {
      description: 'Callback when form validation fails',
      table: {
        type: { summary: "Callbacks<Values>['onFinishFailed']" },
      },
      control: 'select',
    },
    validateTrigger: {
      description: 'Set validation trigger timing for all fields',
      table: {
        type: { summary: 'string | string[] | false' },
      },
      control: 'select',
    },
    preserve: {
      description: 'Keep field value when field is removed',
      table: {
        type: { summary: 'boolean' },
      },
      control: 'select',
    },
  },
} as Meta<typeof Form>;

const onFinish = (values) => {
  console.log(values);
};

export const Basic = () => (
  <Form onFinish={onFinish}>
    <Row gutter={[10, 40]}>
      <Col span={6}>
        <FormItem
          className="test"
          name="username"
          label="Username"
          help="user name must input"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </FormItem>
      </Col>
      <Col span={6}>
        <FormItem
          className="layout-horizontal"
          name="password"
          label="Password"
          help="help content"
          rules={[{ required: true, message: 'Please input your uid!' }]}
        >
          <InputPassword />
        </FormItem>
      </Col>
      <Col span={6}>
        <FormItem name="group" label="Group" help="help content" tooltip="tooltip content">
          <Input />
        </FormItem>
      </Col>
      <Col span={6}>
        <FormItem
          name="description"
          label="Descripton"
          help="desc content"
          tooltip="tooltip content"
          rules={[{ required: true, message: 'Please input desc!' }]}
        >
          <Textarea autosize />
        </FormItem>
      </Col>
      <Col span={6}>
        <FormItem label="Country" name="country">
          <CheckboxGroup>
            <Checkbox label="China" value="China" />
            <Checkbox label="USA" value="USA" />
          </CheckboxGroup>
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
