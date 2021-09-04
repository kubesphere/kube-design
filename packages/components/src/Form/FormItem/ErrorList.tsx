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

interface ErrorListProps {
  errors?: string[];
  warnings?: string[];
}

export const ErrorList = ({ errors = [], warnings = [] }: ErrorListProps) => {
  if (errors.length < 1 && warnings.length < 1) return null;

  return (
    <ErrorWrapper>
      {errors.map((error) => (
        <li className="error-state">{error}</li>
      ))}
      {warnings.map((warning) => (
        <li className="error-state">{warning}</li>
      ))}
    </ErrorWrapper>
  );
};
