import * as React from 'react';
import { Cogwheel, Refresh } from '@kubed/icons';

import { Button, Dropdown, FilterInput } from '../../../index';
import { useLocales } from '../../../ConfigProvider/LocaleProvider/LocaleContext';

import { ToolbarWrapper, ToolbarInner, BatchActions } from './index.styles';
import { CircleLoader } from '../../../Loading/loaders/Circle';

export type Suggestions = {
  label: string | React.ReactNode;
  key: any;
  options?: Suggestions;
}[];

export interface ToolbarProps {
  className?: string;
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
    disabled?: boolean;
  };
  onFilterInputChange?: (value: any) => void;
  refetch?: any;
  loading?: boolean;
  refreshDisabled?: boolean;
  settingMenuDisabled?: boolean;
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
    loading,
    enableSettingMenu = true,
    className,
    refreshDisabled,
    settingMenuDisabled,
  } = props;
  return (
    <ToolbarWrapper className={className}>
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
        {toolbarLeft && <div className="toolbar-left">{toolbarLeft}</div>}
        <div className="toolbar-item">{enableFilters && <FilterInput {...filterProps} />}</div>
        <div className="toolbar-right">
          <Button
            variant="text"
            className="btn-refresh"
            disabled={!!loading || refreshDisabled}
            onClick={refetch}
          >
            {loading ? <CircleLoader size={14} /> : <Refresh />}
          </Button>
          {enableSettingMenu && (
            <Dropdown content={settingMenu} placement="bottom-end" maxWidth={160}>
              <Button variant="text" className="btn-setting" disabled={settingMenuDisabled}>
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
