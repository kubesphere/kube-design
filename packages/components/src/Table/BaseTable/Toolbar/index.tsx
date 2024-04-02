import * as React from 'react';
import { Cogwheel, Refresh } from '@kubed/icons';

import { Button, Dropdown, FilterInput } from '../../../index';
import { useLocales } from '../../../ConfigProvider/LocaleProvider/LocaleContext';

import { ToolbarWrapper, ToolbarInner, BatchActions } from './index.styles';

export type Suggestions = {
  label: string | React.ReactNode;
  key: any;
  options?: Suggestions;
}[];

export interface ToolbarProps {
  enableBatchActions: boolean;
  enableSettingMenu?: boolean;
  onDisableBatchActions?: () => void;
  enableFilters?: boolean;
  settingMenu?: React.ReactNode;
  settingMenuText?: string;
  toolbarLeft?: React.ReactNode;
  toolbarRight?: React.ReactNode;
  batchActions?: React.ReactNode;
  filterProps: {
    filters?: any;
    placeholder?: string;
    suggestions: Suggestions;
    simpleMode?: boolean;
    onChange?: (value: any) => void;
    initialKeyword?: string;
  };
  onFilterInputChange?: (value: any) => void;
  refetch?: any;
}

export const Toolbar = (props: ToolbarProps) => {
  const { locales } = useLocales();
  const { Table: TableLocales } = locales;
  const { batchCancel } = TableLocales;
  const {
    enableBatchActions,
    batchActions,
    onDisableBatchActions,
    toolbarLeft,
    enableFilters,
    filterProps,
    toolbarRight,
    settingMenu,
    refetch,
    enableSettingMenu = true,
  } = props;
  return (
    <ToolbarWrapper>
      {enableBatchActions && (
        <BatchActions>
          <div className="toolbar-left">{batchActions}</div>
          <div className="toolbar-right">
            <Button
              variant="text"
              className="cancel-select"
              onClick={() => onDisableBatchActions()}
            >
              {batchCancel}
            </Button>
          </div>
        </BatchActions>
      )}
      <ToolbarInner>
        <div className="toolbar-left">{toolbarLeft}</div>
        <div className="toolbar-item">{enableFilters && <FilterInput {...filterProps} />}</div>
        <div className="toolbar-right">
          <Button variant="text" className="btn-refresh" onClick={refetch}>
            <Refresh />
          </Button>
          {enableSettingMenu && (
            <Dropdown content={settingMenu} placement="bottom-end" maxWidth={160}>
              <Button variant="text" className="btn-setting">
                <Cogwheel />
              </Button>
            </Dropdown>
          )}
          {toolbarRight}
        </div>
      </ToolbarInner>
    </ToolbarWrapper>
  );
};
