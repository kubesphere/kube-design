import React, { act } from 'react';
import { createRoot } from 'react-dom/client';

type WrapperFactory = (element: React.ReactElement) => React.ReactElement;
type Selector = string | React.ElementType;

const booleanAttributes = new Set(['checked', 'disabled', 'multiple', 'readOnly', 'selected']);

function getDisplayName(type: React.ElementType | string): string {
  if (typeof type === 'string') {
    return type;
  }

  return (type as any).displayName || (type as any).name || '';
}

function matchesElement(element: React.ReactElement<any>, selector: Selector) {
  if (typeof selector === 'string') {
    const displayName = getDisplayName(element.type);
    return (
      element.type === selector ||
      displayName === selector ||
      displayName.split('/').pop() === selector
    );
  }

  return element.type === selector;
}

function collectElements(children: React.ReactNode, selector: Selector): React.ReactElement<any>[] {
  const matches: React.ReactElement<any>[] = [];

  React.Children.forEach(children, (child) => {
    if (!React.isValidElement(child)) {
      return;
    }

    if (matchesElement(child, selector)) {
      matches.push(child);
    }

    collectElements((child.props as any).children, selector).forEach((match) => {
      matches.push(match);
    });
  });

  return matches;
}

function cssNameToProperty(name: string) {
  return name.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
}

function eventNameToHandler(eventName: string) {
  return `on${eventName.charAt(0).toUpperCase()}${eventName.slice(1)}`;
}

export class DOMCollection {
  length: number;

  constructor(private readonly nodes: Element[]) {
    this.length = nodes.length;
  }

  find(selector: string) {
    return new DOMCollection(
      this.nodes.flatMap((node) => Array.from(node.querySelectorAll(selector)))
    );
  }

  attr(name: string) {
    const node = this.nodes[0] as any;
    if (!node) return undefined;

    const propertyName = name === 'for' ? 'htmlFor' : name;
    if (booleanAttributes.has(propertyName) && node[propertyName]) {
      return name;
    }

    if (!node.hasAttribute(name)) {
      return undefined;
    }

    const value = node.getAttribute(name);
    return value === '' && booleanAttributes.has(propertyName) ? name : value;
  }

  css(name: string) {
    const node = this.nodes[0] as HTMLElement | undefined;
    if (!node) return undefined;

    return (
      node.style[cssNameToProperty(name) as any] ||
      window.getComputedStyle(node).getPropertyValue(name)
    );
  }

  hasClass(className: string) {
    return this.nodes[0]?.classList.contains(className) ?? false;
  }

  text() {
    return this.nodes.map((node) => node.textContent).join('');
  }

  simulate(eventName: string, event: any = {}) {
    const node = this.nodes[0] as HTMLInputElement | HTMLTextAreaElement | undefined;
    if (!node) return;

    if (event.target && 'value' in event.target) {
      node.value = event.target.value;
    }

    act(() => {
      if (eventName === 'change') {
        node.dispatchEvent(new Event('input', { bubbles: true }));
      }
      node.dispatchEvent(new Event(eventName, { bubbles: true }));
    });
  }

  getDOMNode() {
    return this.nodes[0];
  }
}

export class ElementCollection {
  length: number;

  constructor(
    private readonly elements: React.ReactElement<any>[],
    private readonly wrapElement: WrapperFactory
  ) {
    this.length = elements.length;
  }

  prop(name: string) {
    return this.elements[0]?.props?.[name];
  }

  hasClass(className: string) {
    const classes = this.prop('className');
    return typeof classes === 'string' && classes.split(/\s+/).includes(className);
  }

  simulate(eventName: string, event: any = {}) {
    const handler = this.prop(eventNameToHandler(eventName));
    if (typeof handler === 'function') {
      act(() => handler(event));
    }
  }

  dive() {
    return new ReactWrapper(this.elements[0], this.wrapElement);
  }

  render() {
    return new ReactWrapper(this.elements[0], this.wrapElement).render();
  }

  text() {
    return new ReactWrapper(this.elements[0], this.wrapElement).render().text();
  }

  find(selector: Selector) {
    return new ElementCollection(
      this.elements.flatMap((element) => collectElements(element.props?.children, selector)),
      this.wrapElement
    );
  }
}

export class ReactWrapper {
  private readonly container: HTMLDivElement;

  private readonly root: ReturnType<typeof createRoot>;

  private readonly renderedElement: React.ReactElement;

  constructor(
    private readonly element: React.ReactElement,
    private readonly wrapElement: WrapperFactory = (value) => value
  ) {
    this.container = document.createElement('div');
    document.body.appendChild(this.container);
    this.root = createRoot(this.container);
    this.renderedElement = this.wrapElement(this.element);

    act(() => {
      this.root.render(this.renderedElement);
    });
  }

  find(selector: Selector) {
    if (typeof selector === 'string' && selector.toLowerCase() === selector) {
      return new DOMCollection(Array.from(this.container.querySelectorAll(selector)));
    }

    return new ElementCollection(collectElements(this.renderedElement, selector), this.wrapElement);
  }

  render() {
    return new DOMCollection(Array.from(this.container.children));
  }

  text() {
    return this.render().text();
  }

  update() {
    act(() => {
      this.root.render(this.renderedElement);
    });
  }

  getDOMNode() {
    return this.container.firstElementChild || this.container;
  }
}

export function createWrapper(element: React.ReactElement, wrapElement?: WrapperFactory) {
  return new ReactWrapper(element, wrapElement);
}
