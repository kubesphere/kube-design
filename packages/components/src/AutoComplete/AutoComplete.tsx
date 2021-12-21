import * as React from 'react';
import omit from 'rc-util/lib/omit';
import toArray from '../utils/toArray';

import { Select, OptionType, RefSelectProps } from '../Select/Select';
import { InternalSelectProps } from '../Select/Select.styles';

const { Option } = Select;

export interface DataSourceObject {
  value: string;
  text: string;
}

export type DataSourceType<T = {}> = T & DataSourceObject;

export interface AutoCompleteProps
  extends Omit<
    InternalSelectProps<string>,
    'inputIcon' | 'loading' | 'mode' | 'optionLabelProp' | 'labelInValue'
  > {
  dataSource?: DataSourceType[];
}

function isSelectOptionOrSelectOptGroup(child: any): Boolean {
  return child && child.type && (child.type.isSelectOption || child.type.isSelectOption);
}

export const AutoComplete: React.ForwardRefRenderFunction<RefSelectProps, AutoCompleteProps> = (
  props
) => {
  // eslint-disable-next-line react/prop-types
  const { prefixCls, children, options } = props;
  const childNodes: React.ReactElement[] = toArray(children);

  let customizeInput: React.ReactElement | undefined;

  if (
    childNodes.length === 1 &&
    React.isValidElement(childNodes[0]) &&
    !isSelectOptionOrSelectOptGroup(childNodes[0])
  ) {
    [customizeInput] = childNodes;
  }

  const getInputElement = customizeInput ? (): React.ReactElement => customizeInput! : undefined;

  let optionChildren: React.ReactNode;

  if (childNodes.length && isSelectOptionOrSelectOptGroup(childNodes[0])) {
    optionChildren = children;
  } else {
    optionChildren = options
      ? options.map((item) => {
          if (React.isValidElement(item)) {
            return item;
          }
          switch (typeof item) {
            case 'string':
              return (
                <Option key={item} value={item}>
                  {item}
                </Option>
              );
            case 'object': {
              const { value: optionValue } = item as DataSourceObject;
              // @ts-ignore
              return (
                <Option key={optionValue} value={optionValue}>
                  {(item as DataSourceObject).text}
                </Option>
              );
            }
            default:
              throw new Error('AutoComplete[dataSource] only supports type `string[] | Object[]`');
          }
        })
      : [];
  }

  return (
    <Select
      {...omit(props, ['dataSource'])}
      prefixCls={prefixCls}
      mode={Select.SECRET_COMBOBOX_MODE_DO_NOT_USE as any}
      {...{
        getInputElement,
      }}
    >
      {optionChildren}
    </Select>
  );
};

const RefAutoComplete = React.forwardRef<RefSelectProps, AutoCompleteProps>(AutoComplete);

type RefAutoCompleteWithOption = typeof RefAutoComplete & {
  Option: OptionType;
};

(RefAutoComplete as RefAutoCompleteWithOption).Option = Option;

AutoComplete.displayName = '@kubed/components/AutoComplete';
