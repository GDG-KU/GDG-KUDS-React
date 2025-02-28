import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Button from './Button';
import { ConfigProvider } from '../ConfigProvider';
import { useState } from 'react';
import { IcCheck } from '../../icons';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    loading: { control: false },
    disabled: { control: 'boolean' },
    colorType: {
      control: {
        type: 'radio',
        options: ['primary', 'blue', 'green', 'yellow', 'red'],
      },
    },
    size: {
      control: {
        type: 'radio',
        options: ['md', 'lg'],
      },
    },
  },
  render: function Render(args) {
    const [isLoading, setIsLoading] = useState(false);

    const handleClick = () => {
      setIsLoading(true);

      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    };

    return (
      <ConfigProvider theme={{ mode: 'light' }}>
        <Button {...args} loading={isLoading} onClick={handleClick} />
      </ConfigProvider>
    );
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const withoutIcon: Story = {
  args: {
    children: 'Button',
  },
  argTypes: {
    icon: {
      control: false,
    },
  },
};

export const withIcon: Story = {
  args: {
    icon: <IcCheck />,
    size: 'md',
    colorType: 'yellow',
    loading: true,
    children: 'asdfasdfasfasf',
  },
};
