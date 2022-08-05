import React, { Children, cloneElement } from 'react';
import cx from 'classnames';
import forwardRef from '../utils/forwardRef';
import { DefaultProps, KubedNumberSize, KubedSizes } from '../theme';
import { Step } from './Step/Step';
import { TabStep } from './TabStep/TabStep';
import { StepCompleted } from './StepCompleted/StepCompleted';
import { StepsRoot, StepsContent, StepsSeparator, StepsWrapper } from './Steps.styles';

export interface StepsProps extends DefaultProps {
  /** <Stepper.Step /> components only */
  children: React.ReactNode;

  /** Called when step is clicked */
  onStepClick?(stepIndex: number): void;

  /** Active step index */
  active: number;

  /** Step icon displayed when step is completed */
  completedIcon?: React.ReactNode;

  /** Step icon displayed when step is in progress */
  progressIcon?: React.ReactNode;

  /** Active and progress Step colors from theme.colors */
  color?: string | 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error';

  /** Step icon size in px */
  iconSize?: number;

  /** Content padding-top from theme.spacing or number to set value in px */
  contentPadding?: KubedNumberSize;

  /** Component orientation */
  orientation?: 'vertical' | 'horizontal';

  /** Icon position relative to step body */
  iconPosition?: 'right' | 'left';

  /** Component size */
  size?: KubedSizes;

  /** Radius from theme.radius, or number to set border-radius in px */
  radius?: KubedNumberSize;

  /** Breakpoint at which orientation will change from horizontal to vertical */
  breakpoint?: KubedNumberSize;

  variant?: 'default' | 'tab';
}

export const Steps = forwardRef<StepsProps, 'div'>(
  (
    {
      className,
      children,
      onStepClick,
      active,
      completedIcon,
      progressIcon,
      color,
      iconSize,
      contentPadding,
      size,
      radius,
      orientation,
      breakpoint,
      iconPosition,
      classNames,
      variant = 'default',
      styles,
      ...rest
    },
    ref
  ) => {
    const convertedChildren = Children.toArray(children) as React.ReactElement[];
    const _children = convertedChildren.filter((child) => child.type !== StepCompleted);
    const completedStep = convertedChildren.find((item) => item.type === StepCompleted);

    const items = _children.reduce<React.ReactElement[]>((acc, item, index) => {
      const shouldAllowSelect =
        typeof item.props.allowStepSelect === 'boolean'
          ? item.props.allowStepSelect
          : typeof onStepClick === 'function';

      const itemState =
        item.props.state ||
        (active === index ? 'stepProgress' : active > index ? 'stepCompleted' : 'stepInactive');

      acc.push(
        cloneElement(item, {
          __staticSelector: 'Stepper',
          icon: item.props.icon || index + 1,
          key: index,
          state: itemState,
          onClick: () =>
            shouldAllowSelect && typeof onStepClick === 'function' && onStepClick(index),
          allowStepClick: shouldAllowSelect && typeof onStepClick === 'function',
          completedIcon: item.props.completedIcon || completedIcon,
          progressIcon: item.props.progressIcon || progressIcon,
          color: item.props.color || color,
          iconSize,
          size,
          radius,
          classNames,
          styles,
          iconPosition: item.props.iconPosition || iconPosition,
          orientation,
          variant,
        })
      );

      if (index !== _children.length - 1 && variant === 'default') {
        acc.push(
          <StepsSeparator
            $active={index < active}
            $vertical={orientation === 'vertical'}
            key={`separator-${index}`}
          />
        );
      }

      return acc;
    }, []);

    const stepContent = _children[active]?.props?.children;
    const completedContent = completedStep?.props?.children;
    const content = active > _children.length - 1 ? completedContent : stepContent;

    return (
      <StepsRoot
        ref={ref}
        className={cx('steps-root', classNames, { 'steps-vertical': orientation === 'vertical' })}
        {...rest}
      >
        <StepsWrapper className={cx('steps-wrapper', { 'steps-tab': variant === 'tab' })}>
          {items}
        </StepsWrapper>
        {content && <StepsContent className="steps-content">{content}</StepsContent>}
      </StepsRoot>
    );
  }
);

export { Step, StepCompleted, TabStep };

// Steps.Step = Step;
// Steps.Completed = StepCompleted;
Steps.displayName = '@kubed/components/Steps';
