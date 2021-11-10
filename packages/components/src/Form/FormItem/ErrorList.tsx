import React from 'react';
import styled from 'styled-components';

const ErrorWrapper = styled.ul`
  margin: 5px 0 0;

  li {
    &:before {
      content: none;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  .error-state {
    color: ${({ theme }) => theme.palette.error};
  }
  .warning-state {
    color: ${({ theme }) => theme.palette.warning};
  }
`;

const HelpWrapper = styled.div`
  margin-top: 4px;
  line-height: 1.67;
  color: ${({ theme }) => theme.palette.accents_5};
`;

interface ErrorListProps {
  errors?: string[];
  warnings?: string[];
  help?: React.ReactNode;
}

export const ErrorList = ({ errors = [], warnings = [], help }: ErrorListProps) => {
  if (errors.length < 1 && warnings.length < 1)
    return help ? <HelpWrapper>{help}</HelpWrapper> : null;

  return (
    <ErrorWrapper>
      {errors.map((error, index) => (
        <li className="error-state" key={`error-${index}`}>
          {error}
        </li>
      ))}
      {warnings.map((warning, index) => (
        <li className="error-state" key={`warn-${index}`}>
          {warning}
        </li>
      ))}
    </ErrorWrapper>
  );
};
