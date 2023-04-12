import * as React from 'react';
import { Pagination } from './Pagination';

export default {
  title: 'Components/Pagination',
  component: Pagination,
};

export const Basic = () => <Pagination totalCount={101} />;

export const showTotal = () => <Pagination totalCount={101} showTotal={false} />;
