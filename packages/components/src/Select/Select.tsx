// https://github.dev/ant-design/ant-design/blob/756dc8f130547277a28548c5b46658ff46f131f9/components/select/index.tsx
import React from 'react';
import { Option, OptGroup } from 'rc-select';
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

export type OptionType = typeof Option;

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
    } /** // FIXME: remove any */ as any);

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
          suffixIcon={suffixIcon}
          menuItemSelectedIcon={itemIcon}
          removeIcon={removeIcon}
          clearIcon={clearIcon}
          notFoundContent={mergedNotFound}
          getPopupContainer={getPopupContainer}
          prefixCls="kubed-select"
          $bordered={bordered}
        />
      </>
    );
  }
);

type InternalSelectType = typeof InternalSelect;

interface SelectInterface extends InternalSelectType {
  SECRET_COMBOBOX_MODE_DO_NOT_USE: string;
  Option: typeof Option;
  OptGroup: typeof OptGroup;
}

export const Select = InternalSelect as SelectInterface;

Select.SECRET_COMBOBOX_MODE_DO_NOT_USE = SECRET_COMBOBOX_MODE_DO_NOT_USE;
Select.Option = Option;
Select.OptGroup = OptGroup;

Select.displayName = '@kubed/components/Select';
