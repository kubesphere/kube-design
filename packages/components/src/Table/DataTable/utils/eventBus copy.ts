/**
 * actively listen:
 *         pagination          order         filter
 *         |       \         /                  |
 *         |        \       /                   |
 *         event1     event2                  event3
 *             \        /                       |
 *              \      /                        |
 *               \    /                         |
 *                \  /                          |
 *                event4                        |
 *                    \                         /
 *                     \                       /
 *                              state
 *
 * If there is a listener on the upper layer, it will not be passed down
 * Such as:
 * If have onPaginationChange and onEvent1Change, onEvent1Change will not be passed down
 */

import { TableState } from '@tanstack/react-table';

export const eventDefaultConfig = {
  onParamsChange: {
    name: 'params',
    children: ['pagination', 'sorting', 'filters'],
  },
  onColumnFiltersChange: { name: 'filters', event: 'columnFilters' },
  onColumnVisibilityChange: { name: 'visible', event: 'columnVisibility' },
  onPaginationChange: { name: 'pagination', event: 'pagination' },
  onSortingChange: { name: 'sorting', event: 'sorting' },
  onRowSelectionChange: { name: 'selection', event: 'rowSelection' },
  onGlobalFilterChange: { name: 'globalFilter', event: 'globalFilter' },
  onStateChange: { name: 'state', event: '*', isRoot: true },
} as const;

type EventNode = {
  name: string;
  isRoot?: boolean;
  children?: string[];
  event?: keyof TableState;
};

type EventItem = {
  key: string;
  stopPropagation?: boolean;
  callback: (event: string, args: unknown) => void;
};
type EventTree = {
  [key: string]: EventItem[];
};

type EventKeys = {
  [key in keyof TableState]: string[];
};

type EventParent = {
  [key: string]: string[];
};

export default class EventBus {
  eventTree = {} as EventTree;
  eventKeys = {} as EventKeys;
  eventParent = {} as EventParent;

  registerNode({ name, children, event }: EventNode) {
    if (children) {
      children.forEach((child) => {
        this.eventParent[child] = this.eventParent[child] || [];
        this.eventParent[child].push(name);
      });
    }
    if (event) {
      this.eventKeys[event] = this.eventKeys[event] || [];
      this.eventKeys[event].push(name);
    }
  }

  removeNode({ name }: EventNode) {
    Object.keys(this.eventParent).forEach((key) => {
      this.eventParent[key] = this.eventParent[key].filter((item) => item !== name);
    });
    Object.keys(this.eventKeys).forEach((key) => {
      this.eventKeys[key] = this.eventKeys[key].filter((item) => item !== name);
    });
    this.eventTree[name] = [];
  }

  on(name: string, event: EventItem) {
    this.eventTree[name] = this.eventTree[name] || [];
    this.eventTree[name].push(event);
  }

  off(name: string, { key }: EventItem) {
    this.eventTree[name] = (this.eventTree[name] ?? []).filter((item) => item.key !== key);
  }

  run(eventName: string, args: any, stopPropagationCb) {
    const event = this.eventTree[eventName];
    event.forEach((item) => {
      item.callback(eventName, args);
      if (item.stopPropagation) {
        stopPropagationCb();
        return;
      }
      if (this.eventParent[eventName]) {
        this.eventParent[eventName].forEach((parent) => {
          this.run(parent, args, stopPropagationCb);
        });
      }
    });
  }

  emit(event: keyof TableState | '*', args: any) {
    let stopPropagation = false;
    this.eventKeys[event].forEach((name) => {
      this.run(name, args, () => {
        stopPropagation = true;
      });
    });
    if (!stopPropagation && event !== '*') {
      this.emit('*', args);
    }
  }
}
