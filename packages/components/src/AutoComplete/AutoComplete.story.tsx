import * as React from 'react';
import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { AutoComplete } from './AutoComplete';

const mockVal = (str: string, repeat: number = 1) => ({
  value: str.repeat(repeat),
});

export default {
  title: 'Components/AutoComplete',
  component: AutoComplete,
  args: {
    style: { width: 200 },
    placeholder: 'input here',
    options: [{ value: 'Option 1' }, { value: 'Option 2' }, { value: 'Option 3' }],
    disabled: false,
  },
  argTypes: {
    style: {
      name: 'style',
      description: 'Style of the component',
      control: 'object',
      table: {
        defaultValue: { summary: '{ width: 200 }' },
      },
    },
    placeholder: {
      name: 'placeholder',
      description: 'Placeholder text of input',
      table: {
        defaultValue: { summary: 'input here' },
      },
      control: 'text',
    },
    options: {
      name: 'options',
      description: 'Data source for autocomplete',
      control: 'object',
    },
    disabled: {
      name: 'disabled',
      description: 'Whether the component is disabled',
      defaultValue: false,
      control: 'boolean',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    onSelect: {
      name: 'onSelect',
      description: 'Called when an option is selected',
      control: 'select',
    },
    onSearch: {
      name: 'onSearch',
      description: 'Called when searching items',
      control: 'select',
    },
    onChange: {
      name: 'onChange',
      description: 'Called when select an option or input value change',
      control: 'select',
    },
  } as any,
  decorators: [
    (Story) => (
      <div style={{ width: '600px' }}>
        <Story />
      </div>
    ),
  ],
} as Meta<typeof AutoComplete>;

type Story = StoryObj<typeof AutoComplete>;

export const Explame: Story = {
  render: (args) => {
    const [value, setValue] = React.useState('');
    const [options, setOptions] = React.useState<any[]>(args.options || []);

    const onSearch = (searchText: string) => {
      setOptions(
        !searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)]
      );
    };

    const onSelect = (data: any, option: any) => {
      console.log('onSelect', data, option);
      if (args.onSelect) {
        args.onSelect(data, option);
      }
    };

    const onChange = (data: any, option: any) => {
      setValue(data);
      if (args.onChange) {
        args.onChange(data, option);
      }
    };

    // 当控件面板中的 options 变化时，更新状态
    React.useEffect(() => {
      if (args.options) {
        setOptions(args.options);
      }
    }, [args.options]);

    return (
      <AutoComplete
        {...args}
        value={value}
        options={options}
        onSelect={onSelect}
        onSearch={onSearch}
        onChange={onChange}
      />
    );
  },
};

export const Basic = () => {
  const [value, setValue] = useState('');
  const [options, setOptions] = useState<{ value: string }[]>([]);

  const onSearch = (searchText: string) => {
    setOptions(
      !searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)]
    );
  };

  const onSelect = (data: string) => {
    console.log('onSelect', data);
  };

  const onChange = (data: string) => {
    setValue(data);
  };

  return (
    <AutoComplete
      value={value}
      options={options}
      style={{ width: 200 }}
      onSelect={onSelect}
      onSearch={onSearch}
      onChange={onChange}
      placeholder="input here"
    />
  );
};
