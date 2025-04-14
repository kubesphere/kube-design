import { RenderResult } from '@testing-library/react';
import { axe } from 'jest-axe';

export function multipleCheckRTLAccessibility(elements: RenderResult[]) {
  it('has no accessibility violations', async () => {
    for (const element of elements) {
      const result = await axe(element.container);
      expect(result).toHaveNoViolations();
    }
  }, 30000);
}

export async function checkRTLAccessibility(rendered: RenderResult) {
  const result = await axe(rendered.container);

  expect(result).toHaveNoViolations();

  if (result.violations && result.violations.length > 0) {
    console.error('Accessibility violations found:');
    result.violations.forEach((violation) => {
      console.error(`\nRule violated: ${violation.id}`);
      console.error(`Impact: ${violation.impact}`);
      console.error(`Description: ${violation.description}`);
      console.error(`Help: ${violation.help}`);
      console.error(
        `Affected nodes:`,
        violation.nodes.map((node) => node.html)
      );
    });
  }
}
