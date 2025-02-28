import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Pagination from './Pagination';

const meta: Meta<typeof Pagination> = {
  title: 'Pagination',
  tags: ['autodocs'],
  args: {
    colorType: 'primary',
    total: 7,
    currentPage: 1,
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const paginationSimple: Story = {
  args: {
    colorType: 'green',
  },
  render: (args) => {
    return <Pagination {...args} />;
  },
};
