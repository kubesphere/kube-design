import * as React from 'react';
import { Meta } from '@storybook/react';
import styled from 'styled-components';
import { Skeleton } from './Skeleton';

export default {
  title: 'Components/Skeleton',
  component: Skeleton,
  args: {
    height: 50,
    width: '100%',
    radius: 'md',
    circle: false,
    animate: true,
    visible: true,
  },
  argTypes: {
    height: {
      name: 'height',
      description: 'Skeleton height in pixels',
      control: 'select',
    },
    width: {
      name: 'width',
      description: 'Skeleton width (px or %)',
      control: 'select',
    },
    radius: {
      name: 'radius',
      description: 'Border radius size',
      control: 'select',
    },
    circle: {
      name: 'circle',
      description: 'If true, skeleton will be circular',
      control: 'select',
    },
    animate: {
      name: 'animate',
      description: 'Whether to show animation effect',
      control: 'select',
    },
    visible: {
      name: 'visible',
      description: 'Should skeleton overlay be displayed',
      control: 'select',
    },
  },
} as Meta<typeof Skeleton>;

export const Basic = () => {
  return (
    <>
      <Skeleton height={50} circle style={{ marginBottom: '8px' }} />
      <Skeleton height={8} radius="xl" style={{ marginBottom: '8px' }} />
      <Skeleton height={8} radius="xl" style={{ marginBottom: '8px' }} />
      <Skeleton height={8} width="70%" radius="xl" />
    </>
  );
};

export const TableSkeleton = () => {
  const Wrapper = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
  `;

  const ToolBar = styled.div`
    display: flex;
    width: 100%;
    align-items: center;

    .ml15 {
      margin-left: 15px;
    }
  `;

  const TableHead = styled.div`
    width: 100%;
    margin-top: 10px;
  `;

  const TableRow = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    margin-top: 15px;
    justify-content: space-between;
    padding-right: 15px;
    padding-bottom: 10px;
    border-bottom: 1px solid #eff4f9;
  `;

  const Title = styled.div`
    display: flex;
    .left {
      width: 45px;
      height: 45px;
    }
    .right {
      display: flex;
      flex-direction: column;
      padding-left: 10px;
    }
  `;

  return (
    <Wrapper>
      <ToolBar>
        <Skeleton height={30} width="90%" radius="xl" />
        <Skeleton circle height={25} className="ml15" />
        <Skeleton circle height={25} className="ml15" />
      </ToolBar>
      <TableHead>
        <Skeleton height={30} width="100%" radius="sm" />
      </TableHead>
      {[...Array(3)].map((item, i) => {
        return (
          <TableRow key={i}>
            <Title>
              <Skeleton height={20} width={160} radius="sm" className="left" />
              <div className="right">
                <Skeleton height={15} width={180} radius="sm" style={{ marginBottom: '10px' }} />
                <Skeleton height={15} width={120} radius="sm" />
              </div>
            </Title>
            <Skeleton height={20} width={80} radius="sm" />
            <Skeleton height={20} width={80} radius="sm" />
            <Skeleton height={20} width={100} radius="sm" />
            <Skeleton height={20} width={80} radius="sm" />
            <Skeleton height={20} width={80} radius="sm" />
          </TableRow>
        );
      })}
    </Wrapper>
  );
};
