import React from 'react';
import styled from 'styled-components';
import { Text } from '@kubed/components';

const Table = styled.table`
  width: 100%;
  height: auto;
  border-collapse: separate;
  border-spacing: 0;

  th {
    padding: 0 8px;
    vertical-align: middle;
    height: 40px;
    color: ${({ theme }) => theme.palette.accents_7};
    background-color: ${({ theme }) => theme.palette.accents_1};
    border-radius: 0;
    border-top: 1px solid ${({ theme }) => theme.palette.border};
    border-bottom: 1px solid ${({ theme }) => theme.palette.border};

    &:nth-child(1) {
      border: 1px solid ${({ theme }) => theme.palette.border};
      border-right-width: 0;
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }

    &:last-child {
      border: 1px solid ${({ theme }) => theme.palette.border};
      border-left-width: 0;
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  }

  tbody {
    tr {
      transition: background-color 0.25s ease;
      &:hover {
        background-color: ${({ theme }) => theme.palette.accents_1};
      }
    }
    td {
      padding: 0 8px;
      border-bottom: 1px solid ${({ theme }) => theme.palette.border};
      height: 45px;
    }
  }
`;

interface TableProps {
  component: string;
  data: any;
}

export default function PropsTable({ component, data }: TableProps) {
  const listData = data[component];
  return (
    <Table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Default</th>
          <th>Type</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {Object.values(listData.props).map((item: any) => {
          const { name, defaultValue, type, description, required } = item;
          return (
            <tr key={name}>
              <td>
                {name}
                {required && <Text color="error">*</Text>}
              </td>
              <td>{defaultValue?.value}</td>
              <td>{type?.name}</td>
              <td>{description}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
