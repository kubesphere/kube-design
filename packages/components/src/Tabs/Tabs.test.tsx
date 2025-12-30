import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { renderWithTheme } from '@kubed/tests';
import { Tabs, Tab } from './Tabs';

describe('@kubed/components/Tabs', () => {
  it('renders tabs with labels', () => {
    renderWithTheme(
      <Tabs>
        <Tab label="Tab 1" key="tab1">
          Content 1
        </Tab>
        <Tab label="Tab 2" key="tab2">
          Content 2
        </Tab>
        <Tab label="Tab 3" key="tab3">
          Content 3
        </Tab>
      </Tabs>
    );

    expect(screen.getByText('Tab 1')).toBeInTheDocument();
    expect(screen.getByText('Tab 2')).toBeInTheDocument();
    expect(screen.getByText('Tab 3')).toBeInTheDocument();
  });

  it('shows first non-disabled tab content by default', () => {
    renderWithTheme(
      <Tabs>
        <Tab label="Tab 1" key="tab1">
          Content 1
        </Tab>
        <Tab label="Tab 2" key="tab2">
          Content 2
        </Tab>
      </Tabs>
    );

    expect(screen.getByText('Content 1')).toBeInTheDocument();
    expect(screen.queryByText('Content 2')).not.toBeInTheDocument();
  });

  it('handles tab switching', async () => {
    const user = userEvent.setup();
    renderWithTheme(
      <Tabs>
        <Tab label="Tab 1" key="tab1">
          Content 1
        </Tab>
        <Tab label="Tab 2" key="tab2">
          Content 2
        </Tab>
      </Tabs>
    );

    expect(screen.getByText('Content 1')).toBeInTheDocument();

    const tab2 = screen.getByText('Tab 2');
    await user.click(tab2);

    expect(screen.getByText('Content 2')).toBeInTheDocument();
    expect(screen.queryByText('Content 1')).not.toBeInTheDocument();
  });

  it('handles controlled activeKey', () => {
    renderWithTheme(
      <Tabs activeKey="tab2">
        <Tab label="Tab 1" key="tab1">
          Content 1
        </Tab>
        <Tab label="Tab 2" key="tab2">
          Content 2
        </Tab>
      </Tabs>
    );

    expect(screen.getByText('Content 2')).toBeInTheDocument();
    expect(screen.queryByText('Content 1')).not.toBeInTheDocument();
  });

  it('handles onChange callback', async () => {
    const user = userEvent.setup();
    const onTabChange = vi.fn();

    renderWithTheme(
      <Tabs onTabChange={onTabChange}>
        <Tab label="Tab 1" key="tab1">
          Content 1
        </Tab>
        <Tab label="Tab 2" key="tab2">
          Content 2
        </Tab>
      </Tabs>
    );

    const tab2 = screen.getByText('Tab 2');
    await user.click(tab2);

    expect(onTabChange).toHaveBeenCalledWith('tab2');
  });

  it('renders disabled tabs', () => {
    renderWithTheme(
      <Tabs>
        <Tab label="Tab 1" key="tab1">
          Content 1
        </Tab>
        <Tab label="Tab 2" key="tab2" disabled>
          Content 2
        </Tab>
      </Tabs>
    );

    expect(screen.getByText('Tab 2')).toBeInTheDocument();
  });

  it('renders with variant prop', () => {
    const { container } = renderWithTheme(
      <Tabs variant="pills">
        <Tab label="Tab 1" key="tab1">
          Content 1
        </Tab>
      </Tabs>
    );

    expect(container.firstChild).toBeInTheDocument();
  });

  it('renders with grow prop', () => {
    const { container } = renderWithTheme(
      <Tabs grow>
        <Tab label="Tab 1" key="tab1">
          Content 1
        </Tab>
        <Tab label="Tab 2" key="tab2">
          Content 2
        </Tab>
      </Tabs>
    );

    expect(container.firstChild).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = renderWithTheme(
      <Tabs className="custom-tabs">
        <Tab label="Tab 1" key="tab1">
          Content 1
        </Tab>
      </Tabs>
    );

    expect(container.querySelector('.custom-tabs')).toBeInTheDocument();
  });

  it('renders with default activeKey', () => {
    renderWithTheme(
      <Tabs defaultActiveKey="tab2">
        <Tab label="Tab 1" key="tab1">
          Content 1
        </Tab>
        <Tab label="Tab 2" key="tab2">
          Content 2
        </Tab>
      </Tabs>
    );

    expect(screen.getByText('Content 2')).toBeInTheDocument();
    expect(screen.queryByText('Content 1')).not.toBeInTheDocument();
  });

  it('renders tabs with icons', () => {
    const TestIcon = () => <span data-testid="test-icon">🔥</span>;

    renderWithTheme(
      <Tabs>
        <Tab label="Tab 1" key="tab1" icon={<TestIcon />}>
          Content 1
        </Tab>
      </Tabs>
    );

    // Icon is rendered within the tab label
    expect(screen.getByText('Tab 1')).toBeInTheDocument();
  });

  it('handles direction prop', () => {
    const { container } = renderWithTheme(
      <Tabs direction="vertical">
        <Tab label="Tab 1" key="tab1">
          Content 1
        </Tab>
      </Tabs>
    );

    expect(container.firstChild).toBeInTheDocument();
  });

  it('handles onTabChange callback', async () => {
    const user = userEvent.setup();
    const onTabChange = vi.fn();

    renderWithTheme(
      <Tabs onTabChange={onTabChange}>
        <Tab label="Tab 1" key="tab1">
          Content 1
        </Tab>
        <Tab label="Tab 2" key="tab2">
          Content 2
        </Tab>
      </Tabs>
    );

    const tab2 = screen.getByText('Tab 2');
    await user.click(tab2);

    expect(onTabChange).toHaveBeenCalledWith('tab2');
  });
});
