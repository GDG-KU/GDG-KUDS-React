import { Meta, StoryObj } from '@storybook/react';
import { Button } from '../Button';
import ConfigProvider from './ConfigProvider';

const meta = {
  title: 'ConfigProvider',
  component: ConfigProvider,
  tags: ['autodocs'],
} satisfies Meta<typeof ConfigProvider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ConfigButton: Story = {
  args: { prefix: 'custom-button-prefix', children: <Button>button</Button> },
};

export const NestedConfig: Story = {
  args: {
    prefix: 'outer-prefix',
    children: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <Button>outer button</Button>
        <ConfigProvider prefix='inner-prefix'>
          <Button>inner button</Button>
        </ConfigProvider>
      </div>
    ),
  },
};
