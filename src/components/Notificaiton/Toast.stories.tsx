/** @jsxImportSource @emotion/react */

import { Meta, StoryObj } from '@storybook/react';
import { ConfigProvider } from '../ConfigProvider';
import Toasts from './Toasts';
import { showToast, ToastProps } from './ToastSubject';

const meta: Meta<typeof Toasts> = {
  title: 'Toast',
  component: Toasts,
  tags: ['autodocs'],
  args: {
    notificationType: 'default',
    color: 'primary',
    notificationTitle: 'Notification Title',
    children: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text`,
    autoDismiss: true,
    dismissTime: 4000,
  },
  argTypes: {
    notificationType: {
      control: 'radio',
      options: ['default', 'info', 'success', 'warning', 'error'],
      description: 'Defines the type of the notification.',
    },
    color: {
      control: 'radio',
      options: ['primary', 'blue', 'green', 'yellow', 'red'],
      description: 'Defines the color of the notification.',
    },
    icon: {
      control: false,
      description: 'Icon to be displayed in the notification.',
    },
    notificationTitle: {
      control: 'text',
      description: 'Title of the notification.',
    },
    children: {
      control: 'text',
      description: 'Content of the notification.',
    },
    autoDismiss: {
      control: 'boolean',
      description: 'Auto dismiss the notification.',
    },
    dismissTime: {
      control: 'number',
      description: 'Time to dismiss the notification.',
    },
  },
  render: (args) => {
    return (
      <ConfigProvider>
        <div css={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <button
            onClick={() => {
              showToast(args as ToastProps);
            }}>
            토스트 메시지 표시하기
          </button>
          <button
            onClick={() => {
              showToast({ ...(args as object), notificationType: 'info' } as ToastProps);
            }}>
            info 메시지 표시하기
          </button>
          <button
            onClick={() => {
              showToast({ ...(args as object), notificationType: 'success', children: `Lorem Ipsum` } as ToastProps);
            }}>
            success 메시지 표시하기
          </button>
          <button
            onClick={() => {
              showToast({ ...(args as object), notificationType: 'warning' } as ToastProps);
            }}>
            warning 메시지 표시하기
          </button>
          <button
            onClick={() => {
              showToast({ ...(args as object), notificationType: 'error' } as ToastProps);
            }}>
            error 메시지 표시하기
          </button>
        </div>
        <Toasts />
      </ConfigProvider>
    );
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const primary: Story = {
  args: {},
};
