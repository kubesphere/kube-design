// https://github.dev/ant-design/ant-design/blob/756dc8f130547277a28548c5b46658ff46f131f9/components/select/index.tsx
import React from 'react';
import { Option as SelectOption, OptGroup as SelectOptGroup } from 'rc-select';
import { OptionProps } from 'rc-select/lib/Option';
import forwardRef from '../utils/forwardRef';
import getIcons from './iconUtil';
import {
  StyledSelect,
  SelectStyles,
  Empty,
  InternalSelectProps,
  SelectProps,
} from './Select.styles';

type RawValue = string | number;

export { OptionProps };

export type OptionType = typeof SelectOption;

export interface LabeledValue {
  key?: string;
  value: RawValue;
  label: React.ReactNode;
}

export type SelectValue = RawValue | RawValue[] | LabeledValue | LabeledValue[] | undefined;

export interface RefSelectProps {
  focus: () => void;
  blur: () => void;
}

const SECRET_COMBOBOX_MODE_DO_NOT_USE = 'SECRET_COMBOBOX_MODE_DO_NOT_USE';

const InternalSelect = forwardRef<SelectProps<any>, 'div'>(
  (
    {
      bordered = true,
      getPopupContainer,
      listHeight = 256,
      listItemHeight = 24,
      notFoundContent,
      virtual,
      dropdownMatchSelectWidth,
      ...rest
    },
    ref
  ) => {
    const mode = React.useMemo(() => {
      const { mode: m } = rest as InternalSelectProps<any>;

      if ((m as any) === 'combobox') {
        return undefined;
      }

      if (m === SECRET_COMBOBOX_MODE_DO_NOT_USE) {
        return 'combobox';
      }

      return m;
    }, [rest.mode]);

    const isMultiple = mode === 'multiple' || mode === 'tags';

    // ===================== Empty =====================
    let mergedNotFound: React.ReactNode;
    if (notFoundContent !== undefined) {
      mergedNotFound = <Empty>{notFoundContent}</Empty>;
    } else if (mode === 'combobox') {
      mergedNotFound = null;
    } else {
      mergedNotFound = <Empty>No Data</Empty>;
    }

    const { suffixIcon, itemIcon, removeIcon, clearIcon } = getIcons({
      ...rest,
      multiple: isMultiple,
    });

    return (
      <>
        <SelectStyles />
        <StyledSelect
          ref={ref}
          virtual={virtual}
          dropdownMatchSelectWidth={dropdownMatchSelectWidth}
          {...rest}
          listHeight={listHeight}
          listItemHeight={listItemHeight}
          mode={mode}
          inputIcon={suffixIcon}
          menuItemSelectedIcon={itemIcon}
          removeIcon={removeIcon}
          clearIcon={clearIcon}
          notFoundContent={mergedNotFound}
          getPopupContainer={getPopupContainer}
          prefixCls="kubed-select"
          bordered={bordered}
        />
      </>
    );
  }
);

type InternalSelectType = typeof InternalSelect;

interface SelectInterface extends InternalSelectType {
  Option: typeof SelectOption;
  OptGroup: typeof SelectOptGroup;
}

const Select = InternalSelect as SelectInterface;

Select.Option = SelectOption;

Select.OptGroup = SelectOptGroup;

Select.displayName = '@kubed/components/Select';

export default Select;
