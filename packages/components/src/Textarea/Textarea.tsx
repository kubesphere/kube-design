import React, { useEffect, useMemo, useRef, useState } from 'react';
import styled from 'styled-components';
import cx from 'classnames';
import { useMergedRef } from '@kubed/hooks';
import { DefaultProps, KubedSizes } from '../theme';
import { addColorAlpha } from '../utils/color';
import forwardRef from '../utils/forwardRef';

const Wrapper = styled('div')<TextareaProps>`
  display: inline-flex;
  border-radius: 3px;
  padding: 0 0 0 12px;
  width: ${({ width }) => (width ? `${width}px` : '100%')};
  border: 1px solid ${({ theme }) => theme.palette.accents_4};
  outline: none;
  transition: all 0.3s ease-in-out;

  &:hover {
    border-color: ${({ theme }) => theme.palette.accents_5};
  }

  &.input-focus {
    border-color: ${({ theme }) => theme.palette.colors.green[2]};
    box-shadow: 0 4px 8px 0 ${({ theme }) => addColorAlpha(theme.palette.colors.green[2], 0.2)};
  }

  &.input-disabled {
    cursor: not-allowed;
    background-color: ${({ theme }) => theme.palette.accents_1};
    border-color: ${({ theme }) => theme.palette.accents_4};
  }

  textarea {
    width: 100%;
    font-weight: 600;
    outline: none;
    border-radius: 3px;
    // height: ${({ size, theme }) => theme.layout.inputSizes[size]};
    padding: 6px 0;
    border: none;
    line-height: 1.67;
    color: ${({ theme }) => theme.palette.accents_7};
    transition: all 0.3s ease-in-out;
    background-color: transparent;
    resize: none;

    &[disabled] {
      cursor: not-allowed;
      background-color: ${({ theme }) => theme.palette.accents_1};
    }

    &:-webkit-autofill {
      background-color: #fff;
      -webkit-box-shadow: 0 0 0 1000px #fff inset;
    }
  }
`;

export interface TextareaProps extends DefaultProps {
  /** width of textarea */
  width?: number;

  /** If true textarea will grow with content until maxRows are reached  */
  autosize?: boolean;

  /** Defines maxRows in autosize variant, not applicable to regular variant */
  maxHeight?: number;

  /** Defined minRows in autosize variant and rows in regular variant */
  minRows?: number;

  /** Props passed to root element */
  wrapperProps?: Record<string, any>;

  /** Input size */
  size?: KubedSizes;

  // defaultValue?: string;
}

export const Textarea = forwardRef<TextareaProps, 'textarea'>(
  (
    {
      width,
      autosize,
      maxHeight,
      value,
      defaultValue,
      disabled,
      readOnly,
      onChange,
      onFocus,
      onBlur,
      className,
      placeholder,
      ...rest
    },
    ref
  ) => {
    const isControlledComponent = useMemo(() => value !== undefined, [value]);
    const [selfValue, setSelfValue] = useState<string>(defaultValue as string);
    const [focused, setFocused] = useState(false);
    const textareaRef = useRef<HTMLTextAreaElement>();
    const mergedRef = useMergedRef(ref, textareaRef);

    const autoResize = () => {
      if (!autosize) return;

      const node = textareaRef.current;

      node.style.height = '';
      if (node.scrollHeight > maxHeight) {
        node.style.height = `${maxHeight}px`;
        node.style.overflow = 'auto';
      } else {
        node.style.height = `${node.scrollHeight}px`;
        node.style.overflow = 'hidden';
      }
    };

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      if (disabled || readOnly) return;
      setSelfValue(e.target.value);
      onChange && onChange(e);
      autoResize();
    };

    const handleFocus = (e: React.FocusEvent<HTMLTextAreaElement>) => {
      onFocus && onFocus(e);
      setFocused(true);
    };

    const handleBlur = (e) => {
      setFocused(false);
      if (onBlur) {
        onBlur(e);
      }
    };

    useEffect(() => {
      if (isControlledComponent) {
        setSelfValue(value as string);
      }
    });

    const controlledValue = isControlledComponent ? { value: selfValue } : { defaultValue };

    return (
      <Wrapper
        className={cx(className, 'input-wrapper', {
          'input-focus': focused,
          'input-disabled': disabled,
        })}
        width={width}
      >
        <textarea
          ref={mergedRef}
          disabled={disabled}
          readOnly={readOnly}
          placeholder={placeholder}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...controlledValue}
          {...rest}
        />
      </Wrapper>
    );
  }
);
