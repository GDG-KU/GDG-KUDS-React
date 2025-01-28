import { Meta, StoryObj } from '@storybook/react';
import Modal from './Modal';
import { Button } from '../Button';
import { Checkbox } from '../Checkbox';
import { Input } from '../Input';
import { ConfigProvider } from '../ConfigProvider';
import { useRef } from 'react';

const meta: Meta<typeof Modal> = {
  title: 'Modal',
  component: Modal,
  tags: ['autodocs'],
  args: {},
  argTypes: {
    modalType: {
      control: {
        type: 'radio',
        options: ['primary', 'icon_L'],
      },
    },
    icon: {
      control: false,
    },
    header: {
      control: 'text',
    },
    footer: {
      control: false,
    },
    onClose: {
      action: 'close',
    },
  },
  render: function Render(args) {
    const modalRef = useRef(null);

    return (
      <ConfigProvider theme={{ mode: 'light' }}>
        <div>
          <Button onClick={() => modalRef.current.showModal()}>Open Modal</Button>
          <Modal
            ref={modalRef}
            {...args}
            footer={[
              <Button colorType='primary' size='md' onClick={() => modalRef.current.close()} key='Reject'>
                Reject
              </Button>,
              <Button colorType='primary' size='md' onClick={() => modalRef.current.close()} key='Accept'>
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
    modalType: 'primary',
    header: 'Do you want to accept?',
    content: 'It cannot be reset for 30 days after the change.',
  },
};

export const icon1: Story = {
  args: {
    modalType: 'primary',
    header: 'Accept changes?',
    content: 'It cannot be reset for 30 days after the change.',
    icon: (
      <span role='img' aria-label='ok hand' style={{ fontSize: '32px' }}>
        👌
      </span>
    ),
  },
};

export const icon2: Story = {
  args: {
    modalType: 'icon_L',
    header: 'Do you want to accept?',
    content: 'It cannot be reset for 30 days after the change.',
    icon: (
      <span role='img' aria-label='party popper' style={{ fontSize: '48px' }}>
        🎉
      </span>
    ),
  },
};

export const checkbox: Story = {
  args: {
    modalType: 'primary',
    header: 'Do you want to accept?',
    content: 'It cannot be reset for 30 days after the change.',
    children: <Checkbox>Check it out.</Checkbox>,
  },
};

export const input: Story = {
  args: {
    modalType: 'primary',
    header: 'Do you want to accept?',
    content: 'It cannot be reset for 30 days after the change.',
    children: (
      <div>
        <Input placeholder='Password' />
      </div>
    ),
  },
};
