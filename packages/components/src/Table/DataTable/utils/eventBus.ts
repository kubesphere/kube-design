import { TableState } from '@tanstack/react-table';

type Event = {
  [key in keyof TableState | 'state']: EventItem[];
};

type EventItem = {
  key: string;
  stopPropagation?: boolean;
  callback: (event: string, args: Partial<TableState>) => void;
};

export const eventDefaultConfig = {
  onParamsChange: ['pagination', 'sorting', 'columnFilters'],
  onColumnFiltersChange: ['columnFilters'],
  onColumnVisibilityChange: ['columnVisibility'],
  onPaginationChange: ['pagination'],
  onSortingChange: ['sorting'],
  onRowSelectionChange: ['rowSelection'],
  onGlobalFilterChange: ['globalFilter'],
  onStateChange: ['state'],
} as const;

export const eventKv = {
  pagination: 'onPaginationChange',
  sorting: 'onSortingChange',
  columnFilters: 'onColumnFiltersChange',
  columnVisibility: 'onColumnVisibilityChange',
  rowSelection: 'onRowSelectionChange',
  globalFilter: 'onGlobalFilterChange',
  state: 'onStateChange',
};

export default class EventBus {
  events = {} as Event;

  clear() {
    this.events = {} as Event;
  }

  on(name: keyof TableState | 'state', event: EventItem) {
    this.events[name] = this.events[name] || [];
    this.events[name].push(event);
  }

  off(name: string, { key }: EventItem) {
    this.events[name] = (this.events[name] ?? []).filter((item) => item.key !== key);
  }

  run(name: keyof TableState | 'state', args: any, stopPropagationCb) {
    (this.events[name] ?? []).forEach((event) => {
      event.callback(name, args);
      if (event.stopPropagation) {
        stopPropagationCb();
      }
    });
  }

  emit(event: keyof TableState | 'state', args: any) {
    let stopPropagation = false;
    const stopPropagationCb = () => {
      stopPropagation = true;
    };
    this.run(event, args, stopPropagationCb);
    if (!stopPropagation && event !== 'state') {
      this.emit('state', args);
    }
  }
}
