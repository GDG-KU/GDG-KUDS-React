import { Meta, StoryObj } from '@storybook/react';
import Modal from './Modal';
import { Button } from '../Button';
import { Checkbox } from '../Checkbox';
import { Input } from '../Input';
import { ConfigProvider } from '../ConfigProvider';
import { useState } from 'react';
import React from 'react';

const meta: Meta<typeof Modal> = {
  title: 'Modal',
  component: Modal,
  tags: ['autodocs'],
  args: {},
  argTypes: {
    isOpen: {
      control: false,
    },
    icon: {
      control: false,
    },
    icon_size: {
      control: false,
    },
    header: {
      control: 'text',
    },
    content: {
      action: 'text',
    },
    footer: {
      control: false,
    },
  },
  render: function Render(args) {
    const [modalOpen, setModalOpen] = useState(false);
    return (
      <ConfigProvider theme={{ mode: 'light' }}>
        <div>
          <Button onClick={() => setModalOpen(true)}>Open Modal</Button>
          <Modal
            {...args}
            isOpen={modalOpen}
            footer={[
              <Button colorType='red' size='md' onClick={() => setModalOpen(false)} key='Reject'>
                Reject
              </Button>,
              <Button colorType='primary' size='md' onClick={() => setModalOpen(false)} key='Accept'>
                Accept
              </Button>,
            ]}
          />
        </div>
      </ConfigProvider>
    );
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const primary: Story = {
  args: {
    header: 'Do you want to accept?',
    content: 'It cannot be reset for 30 days after the change.',
  },
};

export const icon1: Story = {
  args: {
    header: 'Accept changes?',
    content: 'It cannot be reset for 30 days after the change.',
    icon: <span role='img' aria-label='ok hand' style={{ fontSize: '32px' }}></span>,
    icon_size: 'sm',
  },
};

export const icon2: Story = {
  args: {
    header: 'Completed!',
    icon: (
      <span role='img' aria-label='party popper' style={{ fontSize: '48px' }}>
        🎉
      </span>
    ),
    icon_size: 'lg',
  },
};

export const checkbox: Story = {
  args: {
    header: 'Do you want to accept?',
    content: 'It cannot be reset for 30 days after the change.',
    children: <Checkbox>Check it out.</Checkbox>,
  },
};

export const input: Story = {
  args: {
    header: 'Do you want to accept?',
    content: 'It cannot be reset for 30 days after the change.',
    children: (
      <div>
        <Input placeholder='Password' />
      </div>
    ),
  },
};
