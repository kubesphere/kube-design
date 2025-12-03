import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { renderWithTheme } from '@kubed/tests';
import { Form, FormItem, useForm } from './Form';
import { Input } from '../Input/Input';

describe('@kubed/components/Form', () => {
  it('has correct displayName', () => {
    expect(Form.displayName).toBe('@kubed/components/Form');
  });

  it('renders form with basic fields', () => {
    renderWithTheme(
      <Form>
        <FormItem name="username" label="Username">
          <Input placeholder="Enter username" />
        </FormItem>
        <button type="submit">Submit</button>
      </Form>
    );

    expect(screen.getByText('Username')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter username')).toBeInTheDocument();
    expect(screen.getByText('Submit')).toBeInTheDocument();
  });

  it('handles form submission', async () => {
    const user = userEvent.setup();
    const onFinish = vi.fn();

    renderWithTheme(
      <Form onFinish={onFinish}>
        <FormItem name="username" label="Username">
          <Input />
        </FormItem>
        <button type="submit">Submit</button>
      </Form>
    );

    const input = screen.getByRole('textbox');
    const submitButton = screen.getByText('Submit');

    await user.type(input, 'testuser');
    await user.click(submitButton);

    await waitFor(() => {
      expect(onFinish).toHaveBeenCalledWith(
        expect.objectContaining({
          username: 'testuser',
        })
      );
    });
  });

  it('handles form validation failure', async () => {
    const user = userEvent.setup();
    const onFinishFailed = vi.fn();

    renderWithTheme(
      <Form onFinishFailed={onFinishFailed}>
        <FormItem
          name="username"
          label="Username"
          rules={[{ required: true, message: 'Username is required!' }]}
        >
          <Input />
        </FormItem>
        <button type="submit">Submit</button>
      </Form>
    );

    const submitButton = screen.getByText('Submit');
    await user.click(submitButton);

    await waitFor(() => {
      expect(onFinishFailed).toHaveBeenCalled();
    });
  });

  it('renders with initial values', () => {
    renderWithTheme(
      <Form initialValues={{ username: 'initial-user' }}>
        <FormItem name="username" label="Username">
          <Input />
        </FormItem>
      </Form>
    );

    const input = screen.getByRole('textbox') as HTMLInputElement;
    expect(input.value).toBe('initial-user');
  });

  it('handles form layout prop', () => {
    const { container } = renderWithTheme(
      <Form layout="horizontal">
        <FormItem name="username" label="Username">
          <Input />
        </FormItem>
      </Form>
    );

    expect(container.querySelector('.form-horizontal')).toBeInTheDocument();
  });

  it('renders inline layout', () => {
    const { container } = renderWithTheme(
      <Form layout="inline">
        <FormItem name="username" label="Username">
          <Input />
        </FormItem>
      </Form>
    );

    expect(container.querySelector('.form-inline')).toBeInTheDocument();
  });

  it('renders vertical layout', () => {
    const { container } = renderWithTheme(
      <Form layout="vertical">
        <FormItem name="username" label="Username">
          <Input />
        </FormItem>
      </Form>
    );

    expect(container.querySelector('.form-vertical')).toBeInTheDocument();
  });

  it('accepts className prop', () => {
    const { container } = renderWithTheme(
      <Form className="custom-form">
        <FormItem name="username" label="Username">
          <Input />
        </FormItem>
      </Form>
    );

    expect(container.querySelector('.custom-form')).toBeInTheDocument();
  });

  it('works with useForm hook', async () => {
    const user = userEvent.setup();
    const TestComponent = () => {
      const [form] = useForm();

      return (
        <Form form={form}>
          <FormItem name="username" label="Username">
            <Input />
          </FormItem>
          <button
            type="button"
            onClick={() => {
              form.setFieldsValue({ username: 'set-by-form' });
            }}
          >
            Set Value
          </button>
        </Form>
      );
    };

    renderWithTheme(<TestComponent />);

    const setValueButton = screen.getByText('Set Value');
    await user.click(setValueButton);

    const input = screen.getByRole('textbox') as HTMLInputElement;
    expect(input.value).toBe('set-by-form');
  });

  it('handles onValuesChange callback', async () => {
    const user = userEvent.setup();
    const onValuesChange = vi.fn();

    renderWithTheme(
      <Form onValuesChange={onValuesChange}>
        <FormItem name="username" label="Username">
          <Input />
        </FormItem>
      </Form>
    );

    const input = screen.getByRole('textbox');
    await user.type(input, 'test');

    await waitFor(() => {
      expect(onValuesChange).toHaveBeenCalled();
    });
  });

  it('supports name prop', () => {
    const { container } = renderWithTheme(
      <Form name="test-form">
        <FormItem name="username" label="Username">
          <Input />
        </FormItem>
      </Form>
    );

    const form = container.querySelector('form');
    expect(form).toHaveAttribute('id', 'test-form');
  });
});
