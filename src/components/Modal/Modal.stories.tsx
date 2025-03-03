/** @jsxImportSource @emotion/react */

import { Meta, StoryObj } from '@storybook/react';
import Modal from './Modal';
import { Button } from '../Button';
import { Checkbox } from '../Checkbox';
import { Input } from '../Input';
import { ConfigProvider } from '../ConfigProvider';
import { useState } from 'react';
import { css } from '@emotion/react';

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
    iconSize: {
      control: false,
    },
    header: {
      control: 'text',
    },
    children: {
      control: 'text',
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
            footer={
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: '16px' }}>
                <Button colorType='red' size='md' onClick={() => setModalOpen(false)} key='Reject'>
                  Reject
                </Button>
                <Button colorType='primary' size='md' onClick={() => setModalOpen(false)} key='Accept'>
                  Accept
                </Button>
              </div>
            }
          />
        </div>
      </ConfigProvider>
    );
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const contentStyle = css({
  color: 'var(--primary-600)',
  fontSize: 16,
  fontWeight: '400',
  wordWrap: 'break-word',
  textAlign: 'center',
  marginBottom: 10,
});

export const primary: Story = {
  args: {
    header: 'Do you want to accept?',
    children: <div css={contentStyle}>It cannot be reset for 30 days after the change.</div>,
  },
};

export const icon1: Story = {
  args: {
    header: 'Accept changes?',
    children: <div css={contentStyle}>It cannot be reset for 30 days after the change.</div>,
    icon: (
      <span role='img' aria-label='ok hand' style={{ fontSize: '32px' }}>
        👌
      </span>
    ),
    iconSize: 'sm',
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
    iconSize: 'lg',
  },
};

export const checkbox: Story = {
  args: {
    header: 'Do you want to accept?',
    children: (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
        <div css={contentStyle}>It cannot be reset for 30 days after the change.</div>
        <Checkbox>Check it out.</Checkbox>
      </div>
    ),
  },
};

export const input: Story = {
  args: {
    header: 'Do you want to accept?',
    children: (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
        <div css={contentStyle}>It cannot be reset for 30 days after the change.</div>
        <div>
          <Input placeholder='Password' type='password' />
        </div>
      </div>
    ),
  },
};
