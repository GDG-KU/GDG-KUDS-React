import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Input from './Input';
import { fn } from '@storybook/test';
import TextArea from './TextArea';

const inputMeta: Meta<typeof Input> = {
  title: 'Input',
  args: { onChange: fn(), placeholder: 'Input' },
};
export default inputMeta;

type Story = StoryObj<typeof inputMeta>;

export const Basic: Story = {
  render: (args) => {
    return <Input {...args} />;
  },
  args: {
    colorType: 'primary',
    type: 'text',
    size: 'small',
    status: 'default',
    label: 'label',
    helpText: '',
    disabled: false,
  },
  argTypes: {
    colorType: {
      control: 'radio',
      options: ['primary'],
    },
    type: {
      control: 'radio',
      options: ['text', 'password'],
    },
    size: {
      control: 'radio',
      options: ['small', 'medium'],
    },
    status: {
      control: 'radio',
      options: ['default', 'success', 'error'],
    },
    label: { control: 'text' },
    helpText: { control: 'text' },
  },
};

export const Textarea: StoryObj<Meta<typeof TextArea>> = {
  render: (args) => {
    return <TextArea {...args} />;
  },
  args: {
    size: 'large',
    label: '',
    placeholder: 'TextArea',
    disabled: false,
  },
  argTypes: {
    size: {
      control: 'radio',
      options: ['large'],
    },
    label: { control: 'text' },
  },
};
