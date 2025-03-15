import { Meta, StoryObj } from '@storybook/react';
import Notification from './Notification';
import { ConfigProvider } from '../ConfigProvider';

const meta: Meta<typeof Notification> = {
  title: 'Notification',
  component: Notification,
  tags: ['autodocs'],
  args: {
    notificationType: 'default',
    color: 'primary',
    notificationTitle: 'Notification Title',
    children: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text`,
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
  },
  render: (args) => {
    return (
      <ConfigProvider>
        <Notification {...args} />
      </ConfigProvider>
    );
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const primary: Story = {
  args: {
    notificationType: 'info',
  },
};
