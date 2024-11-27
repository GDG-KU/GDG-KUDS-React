import { Meta, StoryObj } from '@storybook/react';
import Button from './Button';
import { fn } from '@storybook/test';

const meta = {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
  args: { onClick: fn(), children: 'Button' },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    colorType: 'primary',
    size: 'large',
    shape: 'round',
    disabled: false,
  },
};

export const Blue: Story = {
  args: {
    colorType: 'blue',
    size: 'large',
    shape: 'round',
    disabled: false,
  },
};

export const Green: Story = {
  args: {
    colorType: 'green',
    size: 'medium',
    shape: 'round',
    disabled: false,
  },
};

export const Yellow: Story = {
  args: {
    colorType: 'yellow',
    size: 'large',
    shape: 'round',
    disabled: false,
  },
};

export const Red: Story = {
  args: {
    colorType: 'red',
    size: 'medium',
    shape: 'round',
    disabled: false,
  },
};
