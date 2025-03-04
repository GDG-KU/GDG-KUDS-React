import { Meta, StoryObj } from '@storybook/react';
import Pagination from './Pagination';
import { ConfigProvider } from '../ConfigProvider';
import React from 'react'; //이게 왜 필요해졌지...?

const meta: Meta<typeof Pagination> = {
  title: 'Pagination',
  tags: ['autodocs'],
  argTypes: {
    total: { control: 'number' },
    pageSize: { control: 'number' },
    colorType: {
      control: {
        type: 'radio',
        options: ['primary', 'blue', 'green', 'yellow', 'red'],
      },
    },
    defaultPage: {
      control: 'number',
    },
  },
  render: function Render(args) {
    return (
      <ConfigProvider theme={{ mode: 'light' }}>
        <Pagination {...args} />
      </ConfigProvider>
    );
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const paginationSimple: Story = {
  args: {
    total: 7,
    pageSize: 7,
    colorType: 'red',
  },
};

export const paginationComplex: Story = {
  args: {
    total: 10,
    pageSize: 7,
    colorType: 'green',
  },
};
