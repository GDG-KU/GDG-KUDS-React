import { Meta, StoryObj } from '@storybook/react';
import Pagination from './Pagination';

const meta: Meta<typeof Pagination> = {
  title: 'Pagination',
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof meta>;

export const select: Story = {};
