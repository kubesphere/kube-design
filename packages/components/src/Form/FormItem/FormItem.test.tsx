import React from 'react';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet, ThemeProvider } from 'styled-components';
import { Form, FormLayout } from '../Form';
import { FormItem, FormItemProps } from './FormItem';
import { themeUtils } from '../../theme';

describe('@kubed/components/FormItem styles', () => {
  const cases: [string, FormItemProps['rules'], boolean][] = [
    ['omitted rules', undefined, false],
    ['empty rules', [], false],
    ['optional rule', [{ required: false }], false],
    ['required rule', [{ required: true }], true],
    ['optional rule factory', [() => ({ required: false })], false],
    ['required rule factory', [() => ({ required: true })], true],
  ];

  describe.each<FormLayout>(['vertical', 'horizontal', 'inline'])('%s layout', (layout) => {
    it.each(cases)('generates valid label CSS with %s', (_name, rules, required) => {
      const sheet = new ServerStyleSheet();
      const container = document.createElement('div');

      try {
        const markup = renderToString(
          sheet.collectStyles(
            <ThemeProvider theme={themeUtils.getPresets()[0]}>
              <Form layout={layout}>
                <FormItem name="name" label="Name" rules={rules}>
                  <input />
                </FormItem>
              </Form>
            </ThemeProvider>
          )
        );
        container.innerHTML = markup + sheet.getStyleTags();
        document.body.appendChild(container);

        const style = container.querySelector('style')!;
        expect(style.textContent).not.toMatch(/\b(?:null|undefined|false)\s*;/);
        expect(style.sheet).not.toBeNull();

        const label = container.querySelector('label')!;
        const labelRules = Array.from((style.sheet as CSSStyleSheet).cssRules).filter(
          (rule): rule is CSSStyleRule =>
            'selectorText' in rule &&
            Array.from(label.classList).some((name) =>
              (rule as CSSStyleRule).selectorText.split(',').includes(`.${name}:after`)
            )
        );
        const markerRule = labelRules.find((rule) => rule.style.content);
        if (required) {
          expect(markerRule).toBeDefined();
          expect(markerRule!.style.content.replace(/['"]/g, '')).toBe('*');
          expect(markerRule!.style.getPropertyValue('margin-left')).toBe('3px');
        } else {
          expect(markerRule).toBeUndefined();
        }
      } finally {
        container.remove();
        sheet.seal();
      }
    });
  });
});
