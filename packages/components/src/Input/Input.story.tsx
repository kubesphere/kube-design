import * as React from 'react';
import { useState, useEffect } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Magnifier, Appcenter } from '@kubed/icons';
import { Group, Loading, Tooltip, InputPassword } from '../index';
import { Input } from './Input';

export default {
  title: 'Components/Input',
  component: Input,
  args: {
    placeholder: 'Please input content',
    width: 360,
    disabled: false,
    size: 'sm',
    prefix: 'none',
    suffix: 'none',
  },
  argTypes: {
    placeholder: {
      name: 'placeholder',
      description: 'Placeholder text of input',
      table: {
        defaultValue: { summary: 'Please input content' },
      },
      control: 'text',
    },
    width: {
      name: 'width',
      description: 'Width of input',
      table: {
        defaultValue: { summary: '360' },
      },
      control: { type: 'number', min: 100, max: 600 },
    },
    disabled: {
      name: 'disabled',
      description: 'Whether the input is disabled',
      table: {
        defaultValue: { summary: 'false' },
      },
      control: 'boolean',
    },
    size: {
      name: 'size',
      description: 'Size of input',
      table: {
        defaultValue: { summary: 'sm' },
      },
      options: ['xs', 'sm', 'md', 'lg'],
      control: { type: 'select' },
    },
    prefix: {
      name: 'prefix',
      description: 'Prefix element',
      table: {
        defaultValue: { summary: 'none' },
      },
      options: ['none', 'icon', 'text'],
      control: { type: 'select' },
    },
    suffix: {
      name: 'suffix',
      description: 'Suffix element',
      table: {
        defaultValue: { summary: 'none' },
      },
      options: ['none', 'icon', 'tooltip'],
      control: { type: 'select' },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '20px' }}>
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Input>;

type Story = StoryObj<typeof Input>;

export const Explame: Story = {
  render: (args) => {
    const [value, setValue] = useState('');
    const [inputProps, setInputProps] = useState<any>({
      ...args,
      prefix: undefined,
      suffix: undefined,
    });

    // Generate prefix element based on selected type
    const getPrefixElement = (prefixType: string | undefined) => {
      if (!prefixType || prefixType === 'none') return undefined;

      switch (prefixType) {
        case 'icon':
          return <Magnifier size={16} />;
        case 'text':
          return 'https://';
        default:
          return undefined;
      }
    };

    // Generate suffix element based on selected type
    const getSuffixElement = (suffixType: string | undefined) => {
      if (!suffixType || suffixType === 'none') return undefined;

      switch (suffixType) {
        case 'icon':
          return <Loading size={16} />;
        case 'tooltip':
          return (
            <Tooltip content="Click to select content">
              <Appcenter size={16} />
            </Tooltip>
          );
        default:
          return undefined;
      }
    };

    // Update input properties when args change
    useEffect(() => {
      const newProps = { ...args };

      // Handle prefix
      newProps.prefix = getPrefixElement(args.prefix as string);

      // Handle suffix
      newProps.suffix = getSuffixElement(args.suffix as string);

      // Remove addon properties to avoid hooks errors
      delete newProps.addonBefore;
      delete newProps.addonAfter;

      setInputProps(newProps);
    }, [args]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    };

    return (
      <div>
        <Input {...inputProps} value={value} onChange={handleChange} />
        <div style={{ marginTop: '20px' }}>
          <div>Current value: {value}</div>
        </div>
      </div>
    );
  },
};

export const Basic = () => {
  return <Input placeholder="please input some text" width={360} onChange={() => {}} />;
};

export const Controlled = () => {
  const [value, setValue] = React.useState<undefined | string>('');

  return (
    <div>
      <Input
        placeholder="please input some text"
        width={360}
        value={value}
        onChange={(e) => {
          setValue(e.target.value.slice(0, 6));
        }}
      />
      <p>
        <button
          type="button"
          onClick={() => {
            setValue(undefined);
          }}
        >
          clean
        </button>
      </p>
    </div>
  );
};

const suffix = (
  <Tooltip content="Click to select container image">
    <Appcenter size={16} />
  </Tooltip>
);

export const PrefixAndSuffix = () => (
  <Group direction="column">
    <Input prefix={<Magnifier size={16} />} suffix={<Loading size={16} />} />
    <Input prefix="https://" suffix={suffix} />
  </Group>
);

export const Disabled = () => <Input placeholder="please input some text" disabled />;

export const Addon = () => (
  <Group>
    <Input addonBefore="https://" width={350} />
    <Input addonAfter=".com" width={350} prefix={<Appcenter size={16} />} />
  </Group>
);

export const PasswordInput = () => (
  <InputPassword
    width={360}
    onChange={(v) => {
      console.log('focus', v.target.value);
    }}
    onBlur={() => {
      console.log('onBlur');
    }}
  />
);
