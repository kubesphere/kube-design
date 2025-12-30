import React from 'react';
import { renderWithTheme } from '@kubed/tests';
import { screen, fireEvent } from '@testing-library/react';
import Collapse from './Collapse';

const { Panel } = Collapse;

describe('@kubed/components/Collapse', () => {
  describe('Collapse basic functionality', () => {
    it('renders Collapse component correctly', () => {
      const { container } = renderWithTheme(
        <Collapse>
          <Panel header="Panel 1" key="1">
            Content 1
          </Panel>
        </Collapse>
      );

      expect(container.querySelector('.kubed-collapse')).toBeInTheDocument();
    });

    it('renders with multiple panels', () => {
      renderWithTheme(
        <Collapse>
          <Panel header="Panel 1" key="1">
            Content 1
          </Panel>
          <Panel header="Panel 2" key="2">
            Content 2
          </Panel>
          <Panel header="Panel 3" key="3">
            Content 3
          </Panel>
        </Collapse>
      );

      expect(screen.getByText('Panel 1')).toBeInTheDocument();
      expect(screen.getByText('Panel 2')).toBeInTheDocument();
      expect(screen.getByText('Panel 3')).toBeInTheDocument();
    });

    it('renders with defaultActiveKey', () => {
      renderWithTheme(
        <Collapse defaultActiveKey={['1']}>
          <Panel header="Panel 1" key="1">
            Content 1
          </Panel>
          <Panel header="Panel 2" key="2">
            Content 2
          </Panel>
        </Collapse>
      );

      expect(screen.getByText('Content 1')).toBeVisible();
    });

    it('renders with accordion mode', () => {
      renderWithTheme(
        <Collapse accordion>
          <Panel header="Panel 1" key="1">
            Content 1
          </Panel>
          <Panel header="Panel 2" key="2">
            Content 2
          </Panel>
        </Collapse>
      );

      expect(screen.getByText('Panel 1')).toBeInTheDocument();
      expect(screen.getByText('Panel 2')).toBeInTheDocument();
    });

    it('expands and collapses panel on header click', () => {
      renderWithTheme(
        <Collapse>
          <Panel header="Clickable Panel" key="1">
            Panel Content
          </Panel>
        </Collapse>
      );

      const header = screen.getByText('Clickable Panel');
      fireEvent.click(header);

      // Content should be visible after click
      expect(screen.getByText('Panel Content')).toBeInTheDocument();
    });

    it('calls onChange when panel is toggled', () => {
      const handleChange = vi.fn();

      renderWithTheme(
        <Collapse onChange={handleChange}>
          <Panel header="Panel 1" key="1">
            Content 1
          </Panel>
        </Collapse>
      );

      const header = screen.getByText('Panel 1');
      fireEvent.click(header);

      expect(handleChange).toHaveBeenCalled();
    });

    it('renders disabled panel', () => {
      renderWithTheme(
        <Collapse>
          <Panel header="Disabled Panel" key="1" disabled>
            Disabled Content
          </Panel>
        </Collapse>
      );

      expect(screen.getByText('Disabled Panel')).toBeInTheDocument();
    });

    it('renders panel with extra content', () => {
      renderWithTheme(
        <Collapse>
          <Panel header="Panel" key="1" extra={<span>Extra</span>}>
            Content
          </Panel>
        </Collapse>
      );

      expect(screen.getByText('Extra')).toBeInTheDocument();
    });

    it('supports custom className', () => {
      const { container } = renderWithTheme(
        <Collapse className="custom-collapse">
          <Panel header="Panel" key="1">
            Content
          </Panel>
        </Collapse>
      );

      expect(container.querySelector('.custom-collapse')).toBeInTheDocument();
    });

    it('supports custom style', () => {
      const { container } = renderWithTheme(
        <Collapse style={{ border: '1px solid red' }}>
          <Panel header="Panel" key="1">
            Content
          </Panel>
        </Collapse>
      );

      const collapse = container.querySelector('.kubed-collapse');
      expect(collapse).toHaveStyle('border: 1px solid red');
    });

    it('supports destroyInactivePanel prop', () => {
      renderWithTheme(
        <Collapse destroyInactivePanel>
          <Panel header="Panel 1" key="1">
            Content 1
          </Panel>
          <Panel header="Panel 2" key="2">
            Content 2
          </Panel>
        </Collapse>
      );

      expect(screen.getByText('Panel 1')).toBeInTheDocument();
    });

    it('supports custom expandIcon', () => {
      const customIcon = () => <span>🔽</span>;

      renderWithTheme(
        <Collapse expandIcon={customIcon}>
          <Panel header="Panel" key="1">
            Content
          </Panel>
        </Collapse>
      );

      expect(screen.getByText('🔽')).toBeInTheDocument();
    });

    it('renders default expand icon for inactive panel', () => {
      const { container } = renderWithTheme(
        <Collapse>
          <Panel header="Panel" key="1">
            Content
          </Panel>
        </Collapse>
      );

      // ChevronDown icon should be present for collapsed panel
      const icon = container.querySelector('.kubed-icon');
      expect(icon).toBeInTheDocument();
    });

    it('supports activeKey prop', () => {
      renderWithTheme(
        <Collapse activeKey={['2']}>
          <Panel header="Panel 1" key="1">
            Content 1
          </Panel>
          <Panel header="Panel 2" key="2">
            Content 2
          </Panel>
        </Collapse>
      );

      // Panel 2 should be expanded
      expect(screen.getByText('Content 2')).toBeVisible();
    });

    it('supports collapsible prop', () => {
      renderWithTheme(
        <Collapse>
          <Panel header="Panel" key="1" collapsible="disabled">
            Content
          </Panel>
        </Collapse>
      );

      expect(screen.getByText('Panel')).toBeInTheDocument();
    });

    it('renders panel with showArrow prop', () => {
      renderWithTheme(
        <Collapse>
          <Panel header="Panel" key="1" showArrow={false}>
            Content
          </Panel>
        </Collapse>
      );

      expect(screen.getByText('Panel')).toBeInTheDocument();
    });

    it('renders panel with forceRender prop', () => {
      renderWithTheme(
        <Collapse>
          <Panel header="Panel" key="1" forceRender>
            Forced Content
          </Panel>
        </Collapse>
      );

      expect(screen.getByText('Forced Content')).toBeInTheDocument();
    });

    it('supports panel className', () => {
      const { container } = renderWithTheme(
        <Collapse>
          <Panel header="Panel" key="1" className="custom-panel">
            Content
          </Panel>
        </Collapse>
      );

      expect(container.querySelector('.custom-panel')).toBeInTheDocument();
    });

    it('supports panel style', () => {
      renderWithTheme(
        <Collapse>
          <Panel header="Panel" key="1" style={{ background: 'red' }}>
            Content
          </Panel>
        </Collapse>
      );

      expect(screen.getByText('Panel')).toBeInTheDocument();
    });
  });

  describe('Collapse advanced features', () => {
    it('supports multiple active panels in non-accordion mode', () => {
      renderWithTheme(
        <Collapse defaultActiveKey={['1', '2']}>
          <Panel header="Panel 1" key="1">
            Content 1
          </Panel>
          <Panel header="Panel 2" key="2">
            Content 2
          </Panel>
          <Panel header="Panel 3" key="3">
            Content 3
          </Panel>
        </Collapse>
      );

      expect(screen.getByText('Content 1')).toBeVisible();
      expect(screen.getByText('Content 2')).toBeVisible();
    });

    it('supports activeKey as string', () => {
      renderWithTheme(
        <Collapse activeKey="1">
          <Panel header="Panel 1" key="1">
            Content 1
          </Panel>
        </Collapse>
      );

      expect(screen.getByText('Content 1')).toBeVisible();
    });

    it('supports activeKey as number', () => {
      renderWithTheme(
        <Collapse activeKey={1}>
          <Panel header="Panel 1" key={1}>
            Content 1
          </Panel>
        </Collapse>
      );

      expect(screen.getByText('Content 1')).toBeVisible();
    });

    it('renders with complex panel content', () => {
      renderWithTheme(
        <Collapse>
          <Panel
            header="Complex Panel"
            key="1"
            extra={
              <div>
                <button type="button">Action</button>
              </div>
            }
          >
            <div>
              <h3>Title</h3>
              <p>Description</p>
            </div>
          </Panel>
        </Collapse>
      );

      expect(screen.getByText('Complex Panel')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Action' })).toBeInTheDocument();
    });
  });
});
