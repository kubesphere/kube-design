import React, { useState, useEffect, useRef } from 'react';
import cx from 'classnames';
import { find, isEmpty, trim, omit } from 'lodash';
import { Magnifier, Close } from '@kubed/icons';
import { useClickOutside } from '@kubed/hooks';
import forwardRef from '../utils/forwardRef';
import { Tag } from '../Tag/Tag';
import { MenuItem } from '../Menu/Menu';
import { Dropdown } from '../Dropdown/Dropdown';

import { Wrapper, InputWrapper, StyledMenu } from './FilterInput.styles';
import { DefaultProps } from '../theme';

const getTags = (suggestions, filters) => {
  if (typeof filters !== 'object') return [];

  return Object.keys(filters).map((filterKey) => {
    const curFilter = find(suggestions, { key: filterKey }) || {};
    const curValue = curFilter.options
      ? find(curFilter.options, { key: filters[filterKey] }) || {}
      : {};

    return {
      filter: filterKey,
      filterLabel: 'label' in curFilter ? curFilter.label : '',
      value: filters[filterKey],
      valueLabel: 'label' in curValue ? curValue.label : filters[filterKey],
    };
  });
};

type Option = {
  label: string;
  key: string;
};

type Filter = Record<string, any>;

type Suggestion = {
  label: string;
  key: string;
  options?: Option[];
};

export interface FilterInputProps extends DefaultProps {
  suggestions?: any[];
  placeholder?: string;
  filters?: Filter;
  // filter?: () => void;
  onChange?: (params?: any) => void;
  onClear?: () => void;
  onInputChange?: (params?: any) => void;
  isMultiKeyword?: boolean;
  // defaultKeywordLabel?: string;
  // renderMenuItem?: () => void;
  initialKeyword?: string;
  simpleMode?: boolean;
}

export const FilterInput = forwardRef<FilterInputProps, null>((props, ref) => {
  const initialValue = props.simpleMode ? props.initialKeyword : '';
  const [value, setValue] = useState<string>(initialValue);
  const [optionVisible, setOptionVisible] = useState(false);
  const [activeSuggestion, setActiveSuggestion] = useState<Suggestion>(null);
  const [tags, setTags] = useState([]);
  const [isFocused, setIsFocused] = useState(false);
  const optionRef = useClickOutside(() => {
    setOptionVisible(false);
  });
  const inputRef = useRef<HTMLInputElement>();

  useEffect(() => {
    if (!props.simpleMode) {
      const newTags = getTags(props.suggestions, props.filters);
      setTags(newTags);
      setActiveSuggestion(null);
      setOptionVisible(false);
      setValue('');
    }
  }, [props.filters]);

  const handleClear = (e) => {
    e.nativeEvent.stopImmediatePropagation();
    const { onChange = () => {}, simpleMode } = props;
    setValue('');
    setActiveSuggestion(null);
    const returnValue = simpleMode ? '' : {};
    onChange(returnValue);
  };

  const handleTagDelete = (tag) => {
    const { onChange, filters } = props;
    onChange(omit(filters, tag.filter));
  };

  const renderTags = () => {
    if (props.simpleMode) return null;
    return tags.map((tag) => (
      <Tag
        className="filter-tag"
        key={tag.filter}
        append={
          <Close className="icon-close-tag" variant="light" onClick={() => handleTagDelete(tag)} />
        }
      >
        <span>
          {tag.filterLabel}:{tag.valueLabel}
        </span>
      </Tag>
    ));
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOptionVisible(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleChange = (e) => {
    const { onInputChange = () => {}, simpleMode } = props;
    const { value: _value } = e.target;
    setValue(_value);
    if (simpleMode) {
      onInputChange(_value);
    } else if (isEmpty(_value)) {
      setActiveSuggestion(null);
    }
  };

  const handleKeyUp = (e) => {
    if (e.keyCode === 13 && !isEmpty(value)) {
      const { onChange = () => {}, filters, suggestions, simpleMode } = props;
      if (simpleMode) {
        onChange(value);
      } else {
        const sg = activeSuggestion || suggestions[0];
        onChange({
          ...filters,
          [sg.key]: trim(value.replace(`${sg.label}:`, '')),
        });
      }
    }
  };

  const handleMenuClick = (suggestion: Suggestion) => {
    setActiveSuggestion(suggestion);
    setValue(`${suggestion.label}:`);
    if (!suggestion.options) {
      inputRef.current.focus();
      setOptionVisible(false);
    }
  };

  const handleSuggestionMenuClick = (option: Option) => {
    const { onChange = () => {}, filters } = props;
    onChange({
      ...filters,
      [activeSuggestion.key]: option.key,
    });
    setOptionVisible(false);
  };

  const renderSuggestionOptions = () => {
    return (
      <StyledMenu ref={optionRef} className="suggestion-menu">
        {activeSuggestion.options.map((option) => (
          <MenuItem
            key={option.key}
            onClick={() => {
              handleSuggestionMenuClick(option);
            }}
            className="menu-item"
          >
            {option.label}
          </MenuItem>
        ))}
      </StyledMenu>
    );
  };

  const renderMenu = () => {
    const { suggestions = [] } = props;
    const sgs = suggestions.filter((sg) => !tags.some((tag) => tag.filter === sg.key));

    if (sgs.length < 1) {
      return null;
    }

    return (
      <StyledMenu ref={optionRef} className="suggestion-menu">
        {sgs.map((sg) => (
          <MenuItem key={sg.key} onClick={() => handleMenuClick(sg)} className="menu-item">
            {sg.label}
          </MenuItem>
        ))}
      </StyledMenu>
    );
  };

  const renderInput = () => {
    let content;
    const input = (
      <input
        ref={inputRef}
        className="filter-input"
        type="text"
        placeholder={props.placeholder}
        onChange={handleChange}
        onKeyUp={handleKeyUp}
        value={value || ''}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onClick={handleFocus}
      />
    );

    if (activeSuggestion && activeSuggestion.options) {
      content = renderSuggestionOptions();
    } else {
      content = renderMenu();
    }

    if (content) {
      return (
        <Dropdown
          content={content}
          visible={optionVisible}
          hideOnClick={false}
          appendTo={() => document.body}
          placement="bottom-start"
          animation={null}
        >
          {input}
        </Dropdown>
      );
    }

    return input;
  };

  const hasValue = !isEmpty(value) || !isEmpty(tags);

  return (
    <Wrapper
      className={cx(props.className, { 'has-value': hasValue, 'is-focused': isFocused })}
      ref={ref}
    >
      <Magnifier className="icon-search" />
      <InputWrapper>
        {renderTags()}
        {renderInput()}
      </InputWrapper>
      {hasValue && <Close className="icon-clear" name="close" onClick={handleClear} />}
    </Wrapper>
  );
});
