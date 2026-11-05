import React, { act } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { themeUtils } from '../theme';
import { SliderRoot } from '../Slider/SliderRoot/SliderRoot';
import { Radio } from '../Radio/Radio';
import { Steps, Step, StepCompleted } from '../Steps/Steps';

// Exercise component behavior with real React DOM.
describe('shared component behavior', () => {
  let container: HTMLDivElement;
  let root: ReturnType<typeof createRoot>;
  let previousActEnvironment: unknown;

  beforeEach(() => {
    previousActEnvironment = (globalThis as any).IS_REACT_ACT_ENVIRONMENT;
    (globalThis as any).IS_REACT_ACT_ENVIRONMENT = true;
    container = document.createElement('div');
    document.body.appendChild(container);
    root = createRoot(container);
  });

  afterEach(() => {
    act(() => root.unmount());
    container.remove();
    (globalThis as any).IS_REACT_ACT_ENVIRONMENT = previousActEnvironment;
  });

  function render(element: React.ReactElement) {
    act(() =>
      root.render(<ThemeProvider theme={themeUtils.getPresets()[0]}>{element}</ThemeProvider>)
    );
  }

  it('preserves Slider styles precedence and forwards DOM attributes and events', () => {
    const onClick = jest.fn();
    const ref = React.createRef<HTMLDivElement>();
    render(
      <SliderRoot
        size="lg"
        ref={ref}
        className="quota-slider"
        data-quota="storage"
        styles={{ padding: 12, marginBottom: 12 }}
        style={{ padding: 24 }}
        onClick={onClick}
      >
        quota
      </SliderRoot>
    );
    const slider = container.querySelector('[role="slider"]') as HTMLElement;
    expect(slider.style.padding).toBe('12px');
    expect(slider.style.marginBottom).toBe('12px');
    expect(slider.classList.contains('quota-slider')).toBe(true);
    expect(slider.getAttribute('data-quota')).toBe('storage');
    expect(ref.current).toBe(slider);
    act(() => slider.click());
    expect(onClick).toHaveBeenCalledTimes(1);
    render(
      <SliderRoot size="lg" style={{ padding: 24 }}>
        quota
      </SliderRoot>
    );
    expect((container.firstElementChild as HTMLElement).style.padding).toBe('24px');
  });

  it('keeps fragment labels and uses Radio children only when label is absent', () => {
    render(
      <Radio
        id="version"
        label={
          <>
            <span>Version</span>
            <span>Recommended</span>
          </>
        }
      >
        fallback
      </Radio>
    );
    const label = container.querySelector('label')!;
    expect(label.textContent).toBe('VersionRecommended');
    expect(label.htmlFor).toBe('version');
    expect(container.querySelector('input')!.childNodes).toHaveLength(0);
    render(
      <Radio id="version" disabled>
        child label
      </Radio>
    );
    expect(container.querySelector('label')!.textContent).toBe('child label');
    expect(container.querySelector('input')!.disabled).toBe(true);
  });

  it('indexes fragment steps and finds the completion content', () => {
    const onStepClick = jest.fn();
    const children = (
      <>
        ignored{false}
        {null}
        <Step label="First">first content</Step>
        <>
          <Step label="Second">second content</Step>
          <StepCompleted>completed content</StepCompleted>
        </>
      </>
    );
    render(
      <Steps active={1} onStepClick={onStepClick}>
        {children}
      </Steps>
    );
    expect(container.querySelectorAll('.step-item')).toHaveLength(2);
    expect(container.querySelector('.steps-content')!.textContent).toBe('second content');
    act(() => (container.querySelectorAll('.step-item')[0] as HTMLElement).click());
    expect(onStepClick).toHaveBeenCalledWith(0);
    render(<Steps active={2}>{children}</Steps>);
    expect(container.querySelector('.steps-content')!.textContent).toBe('completed content');
  });
});
