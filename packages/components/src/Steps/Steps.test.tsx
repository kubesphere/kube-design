import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { renderWithTheme } from '@kubed/tests';
import { Steps, Step } from './Steps';

describe('@kubed/components/Steps', () => {
  it('renders steps with labels', () => {
    renderWithTheme(
      <Steps active={0}>
        <Step label="Step 1" description="First step" />
        <Step label="Step 2" description="Second step" />
        <Step label="Step 3" description="Third step" />
      </Steps>
    );

    expect(screen.getByText('Step 1')).toBeInTheDocument();
    expect(screen.getByText('Step 2')).toBeInTheDocument();
    expect(screen.getByText('Step 3')).toBeInTheDocument();
  });

  it('renders step descriptions', () => {
    renderWithTheme(
      <Steps active={0}>
        <Step label="Step 1" description="First description" />
        <Step label="Step 2" description="Second description" />
      </Steps>
    );

    expect(screen.getByText('First description')).toBeInTheDocument();
    expect(screen.getByText('Second description')).toBeInTheDocument();
  });

  it('handles active step', () => {
    const { container } = renderWithTheme(
      <Steps active={1}>
        <Step label="Step 1" />
        <Step label="Step 2" />
        <Step label="Step 3" />
      </Steps>
    );

    const progressSteps = container.querySelectorAll('[data-progress]');
    expect(progressSteps.length).toBeGreaterThan(0);
  });

  it('handles step click', async () => {
    const user = userEvent.setup();
    const onStepClick = vi.fn();

    renderWithTheme(
      <Steps active={0} onStepClick={onStepClick}>
        <Step label="Step 1" />
        <Step label="Step 2" />
      </Steps>
    );

    const step2 = screen.getByText('Step 2');
    await user.click(step2);

    expect(onStepClick).toHaveBeenCalledWith(1);
  });

  it('marks completed steps', () => {
    const { container } = renderWithTheme(
      <Steps active={2}>
        <Step label="Step 1" />
        <Step label="Step 2" />
        <Step label="Step 3" />
      </Steps>
    );

    const completedSteps = container.querySelectorAll('[data-completed]');
    expect(completedSteps.length).toBeGreaterThan(0);
  });

  it('renders with vertical orientation', () => {
    const { container } = renderWithTheme(
      <Steps active={0} orientation="vertical">
        <Step label="Step 1" />
        <Step label="Step 2" />
      </Steps>
    );

    expect(container.firstChild).toBeInTheDocument();
  });

  it('renders with horizontal orientation', () => {
    const { container } = renderWithTheme(
      <Steps active={0} orientation="horizontal">
        <Step label="Step 1" />
        <Step label="Step 2" />
      </Steps>
    );

    expect(container.firstChild).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = renderWithTheme(
      <Steps active={0} className="custom-steps">
        <Step label="Step 1" />
      </Steps>
    );

    expect(container.querySelector('.custom-steps')).toBeInTheDocument();
  });

  it('renders step with custom icon', () => {
    const CustomIcon = () => <span data-testid="custom-icon">⭐</span>;

    renderWithTheme(
      <Steps active={0}>
        <Step label="Step 1" icon={<CustomIcon />} />
      </Steps>
    );

    expect(screen.getByTestId('custom-icon')).toBeInTheDocument();
  });

  it('renders with loading state', () => {
    const { container } = renderWithTheme(
      <Steps active={0}>
        <Step label="Step 1" loading />
      </Steps>
    );

    // Loading component is rendered but may not have a specific className in non-completed state
    const stepIcon = container.querySelector('.step-icon');
    expect(stepIcon).toBeInTheDocument();
  });

  it('handles tab variant', () => {
    const { container } = renderWithTheme(
      <Steps active={0} variant="tab">
        <Step label="Step 1" />
        <Step label="Step 2" />
      </Steps>
    );

    expect(container.firstChild).toBeInTheDocument();
  });

  it('handles color prop', () => {
    const { container } = renderWithTheme(
      <Steps active={0} color="primary">
        <Step label="Step 1" />
      </Steps>
    );

    expect(container.firstChild).toBeInTheDocument();
  });

  it('handles iconSize prop', () => {
    const { container } = renderWithTheme(
      <Steps active={0} iconSize={32}>
        <Step label="Step 1" />
      </Steps>
    );

    expect(container.firstChild).toBeInTheDocument();
  });

  it('handles size prop', () => {
    const { container } = renderWithTheme(
      <Steps active={0} size="lg">
        <Step label="Step 1" />
      </Steps>
    );

    expect(container.firstChild).toBeInTheDocument();
  });

  it('renders steps without icons', () => {
    renderWithTheme(
      <Steps active={0}>
        <Step label="Step 1" withIcon={false} />
      </Steps>
    );

    expect(screen.getByText('Step 1')).toBeInTheDocument();
  });

  it('handles allowStepClick prop', () => {
    const onStepClick = vi.fn();

    const { container } = renderWithTheme(
      <Steps active={0} onStepClick={onStepClick}>
        <Step label="Step 1" allowStepSelect={false} />
        <Step label="Step 2" />
      </Steps>
    );

    const stepItems = container.querySelectorAll('.step-item');
    expect(stepItems.length).toBeGreaterThan(0);
    const step1 = stepItems[0];
    expect(step1).toHaveAttribute('tabIndex', '-1');
  });
});

describe('@kubed/components/Step', () => {
  it('has correct displayName', () => {
    expect(Step.displayName).toBe('@kubed/components/Step');
  });
});
