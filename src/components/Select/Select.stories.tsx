import { Meta, StoryObj } from '@storybook/react';
import Select from './Select';
import { ConfigProvider } from '../ConfigProvider';

const meta: Meta<typeof Select> = {
  title: 'Select',
  component: Select,
  tags: ['autodocs'],
  args: {
    name: 'dropdown',
    colorType: 'primary',
    placeholder: 'Select',
    options: [
      { value: 1, label: 'Product Manager' },
      { value: 2, label: 'Backend Designer' },
      { value: 3, label: 'Frontend Designer' },
      { value: 4, label: 'UI Designer' },
      { value: 5, label: 'UX Designer' },
    ],
  },
  argTypes: {
    colorType: {
      control: 'radio',
      options: ['primary', 'blue', 'green', 'yellow', 'red'],
      description: 'Defines the color type of the select component.',
    },
    options: {
      control: 'object',
      description: 'Array of options with value and label.',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the select dropdown.',
    },
    name: { control: false },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const select: Story = {
  render: (args) => {
    return (
      <ConfigProvider>
        <Select {...args} />
      </ConfigProvider>
    );
  },
};
