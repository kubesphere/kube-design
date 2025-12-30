import React from 'react';
import { renderWithTheme, checkRTLAccessibility } from '@kubed/tests';
import { ThemeProvider } from 'styled-components';
import { themeUtils } from '@kubed/components';
import { screen } from '@testing-library/react';
import { Modal } from './Modal';

describe('@kubed/components/Modal', () => {
  let originalBodyOverflow;

  beforeEach(() => {
    originalBodyOverflow = document.body.style.overflow;
  });

  afterEach(() => {
    document.body.style.overflow = originalBodyOverflow;
  });

  it('has correct displayName', () => {
    expect(Modal.displayName).toEqual('@kubed/components/Modal');
  });

  it('sets document.body overflow to hidden when opened', () => {
    document.body.style.overflow = 'auto';
    expect(document.body.style.overflow).toBe('auto');

    const { rerender, unmount } = renderWithTheme(
      <Modal title="测试 Modal" visible={false}>
        Modal 内容
      </Modal>
    );

    const renderModal = (visible: boolean) => (
      <ThemeProvider theme={themeUtils.getPresets()[0]}>
        <Modal title="测试 Modal" visible={visible}>
          Modal 内容
        </Modal>
      </ThemeProvider>
    );

    expect(document.body.style.overflow).toBe('auto');

    rerender(renderModal(true));

    expect(document.body).toHaveStyle('overflow: hidden');

    rerender(renderModal(false));

    expect(document.body.style.overflow).toBe('auto');

    rerender(renderModal(true));
    expect(document.body).toHaveStyle('overflow: hidden');

    unmount();

    expect(document.body.style.overflow).toBe('auto');
  });
  it('when visible, render title, description and content', () => {
    const titleText = 'Modal title';
    const descriptionText = 'Modal description';
    const contentText = 'Modal content';

    renderWithTheme(
      <Modal visible title={titleText} description={descriptionText}>
        {contentText}
      </Modal>
    );

    const modalDialog = screen.getByRole('dialog');

    expect(modalDialog).toBeVisible();

    expect(screen.getByText(titleText)).toBeVisible();

    expect(screen.getByText(descriptionText)).toBeVisible();

    expect(screen.getByText(contentText)).toBeVisible();
  });

  it('render correct style (snapshot)', () => {
    renderWithTheme(
      <Modal visible title="带样式的 Modal" description="带样式的描述">
        带样式的内容
      </Modal>
    );

    const modalDialog = screen.getByRole('dialog');

    expect(modalDialog).toMatchSnapshot();
  });
  checkRTLAccessibility(
    renderWithTheme(
      <Modal visible title="带样式的 Modal" description="带样式的描述">
        带样式的内容
      </Modal>
    )
  );
});
