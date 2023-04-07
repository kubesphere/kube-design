import React from 'react';
import cx from 'classnames';
import { Check } from '@kubed/icons';
import { DefaultProps, KubedNumberSize, KubedSizes } from '../../theme';
import forwardRef from '../../utils/forwardRef';
import { Loading } from '../../Loading/Loading';
import {
  StepWrapper,
  StepIcon,
  StepIconWrapper,
  StepCompletedIcon,
  StepBody,
  StepLabel,
  StepDescription,
} from './Step.styles';

export interface StepProps extends DefaultProps {
  /** Step state, controlled by Steps component */
  state?: 'stepInactive' | 'stepProgress' | 'stepCompleted';

  /** Step color from theme.colors */
  color?: string | 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error';

  /** Should icon be displayed */
  withIcon?: boolean;

  /** Step icon, defaults to step index + 1 when rendered within Stepper */
  icon?: React.ReactNode;

  /** Step icon displayed when step is completed */
  completedIcon?: React.ReactNode;

  /** Step icon displayed when step is in progress */
  progressIcon?: React.ReactNode;

  /** Step label, render after icon */
  label?: React.ReactNode;

  /** Step description */
  description?: React.ReactNode;

  /** Icon wrapper size in px */
  iconSize?: number;

  /** Icon position relative to step body */
  iconPosition?: 'right' | 'left';

  /** Component size */
  size?: KubedSizes;

  /** Radius from theme.radius, or number to set border-radius in px */
  radius?: KubedNumberSize;

  /** Indicates loading state on step */
  loading?: boolean;

  /** Set to false to disable clicks on step */
  allowStepClick?: boolean;

  /** Should step selection be allowed */
  allowStepSelect?: boolean;

  /** Static selector base */
  __staticSelector?: string;
}

const defaultIconSizes = {
  xs: 16,
  sm: 18,
  md: 20,
  lg: 22,
  xl: 24,
};

export const Step = forwardRef<StepProps, 'div'>(
  (
    {
      className,
      state,
      color,
      icon,
      completedIcon,
      progressIcon,
      label,
      description,
      withIcon = true,
      iconSize,
      size = 'md',
      // radius = 'xl',
      loading,
      allowStepClick = true,
      allowStepSelect,
      // iconPosition = 'left',
      // __staticSelector = 'Step',
      classNames,
      styles,
      ...rest
    },
    ref
  ) => {
    const _icon = state === 'stepCompleted' ? null : state === 'stepProgress' ? progressIcon : icon;
    const _iconSize = iconSize || defaultIconSizes[size];

    const dataAttributes = {
      'data-progress': state === 'stepProgress' || undefined,
      'data-completed': state === 'stepCompleted' || undefined,
    };

    return (
      <StepWrapper
        tabIndex={allowStepClick ? 0 : -1}
        ref={ref}
        {...dataAttributes}
        className={cx('step-item', classNames)}
        {...rest}
      >
        {withIcon && (
          <StepIconWrapper className="stepicon-wrapper">
            <StepIcon {...dataAttributes} className="step-icon">
              {state === 'stepCompleted' ? (
                <StepCompletedIcon className="step-completed-icon">
                  {loading ? (
                    <Loading color="#fff" size={_iconSize} className="stepLoader" />
                  ) : (
                    completedIcon || <Check size={_iconSize} color="#fff" />
                  )}
                </StepCompletedIcon>
              ) : null}

              {state !== 'stepCompleted' ? (
                loading ? (
                  <Loading size={_iconSize} color={color} />
                ) : (
                  _icon || icon
                )
              ) : null}
            </StepIcon>
          </StepIconWrapper>
        )}

        {(label || description) && (
          <StepBody className="step-body">
            {label && <StepLabel className="step-label">{label}</StepLabel>}
            {description && (
              <StepDescription className="step-desc" color="dimmed">
                {description}
              </StepDescription>
            )}
          </StepBody>
        )}
      </StepWrapper>
    );
  }
);

Step.displayName = '@kubed/components/Step';
