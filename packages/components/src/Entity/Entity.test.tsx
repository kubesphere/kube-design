import React from 'react';
import { Entity, Field } from '@kubed/components';
import { renderWithTheme } from '@kubed/tests';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const testId = 'test-entity';
describe('@kubed/components/Entity', () => {
  it('has correct displayName', () => {
    expect(Entity.displayName).toEqual('@kubed/components/Entity');
  });

  it('renders hoverable and footer', () => {
    const user = userEvent.setup();
    renderWithTheme(
      <Entity data-testid={testId} hoverable footer="null">
        <Field label="访问模式" value="ReadWriteOnce" />
      </Entity>
    );

    const wrapper = screen.getByTestId(testId);
    user.hover(wrapper);
    expect(wrapper).not.toHaveStyle({ boxShadow: 'none' });

    const footer = screen.getByText('null');
    expect(footer).toHaveClass('entity-footer');
  });

  it('to match snapshot', () => {
    const { asFragment } = renderWithTheme(
      <Entity data-testid={testId} hoverable footer="null">
        <Field label="访问模式" value="ReadWriteOnce" />
      </Entity>
    );

    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          class="sc-kAkpmW bZJYZr"
          data-testid="test-entity"
        >
          <div
            class="sc-gFVvzn kTrnAZ entity-main"
          >
            <div
              class="sc-dhKdcB cyNtQj"
            >
              <div
                class="sc-dAlyuH bpQxXW field-content"
              >
                <div
                  class="sc-cwHptR bWJftH field-value"
                >
                  ReadWriteOnce
                </div>
                <div
                  class="sc-jlZhew ftMoYx field-label"
                >
                  访问模式
                </div>
              </div>
            </div>
          </div>
          <div
            class="sc-brPLxw eUJNrc entity-footer"
          >
            null
          </div>
        </div>
      </DocumentFragment>
    `);
  });
});
