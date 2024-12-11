import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ToastComponent } from './ToastComponent';
import { ToastPosition,ToastType } from './types';


const meta = {
  title: 'ui/Toast',
  component: ToastComponent,
  tags: ['autodocs'],
  argTypes: {
    message: {
      control: 'text',
      defaultValue: 'This is a toast message!',
    },
    type: {
      control: 'select',
      options: ['success', 'error', 'info', 'warning'],
      defaultValue: 'success',
    },
    position: {
      control: 'select',
      options: ['top-right', 'top-left', 'bottom-right', 'bottom-left'],
      defaultValue: 'top-right',
    },
    timer: {
      control: 'number',
      defaultValue: 3000,
    },
  },
} satisfies Meta<typeof ToastComponent>;

export default meta;

const ToastWithButton = ({
  message,
  type,
  position,
  timer,
}: {
  message: string;
  type: ToastType;
  position: ToastPosition;
  timer: number;
}) => {
  const [toasts, setToasts] = useState<{ message: string; type: ToastType; position: ToastPosition }[]>([]);

  const showToast = (message: string, type: ToastType, position: ToastPosition) => {
    const id = Date.now();
    setToasts([...toasts, { message, type, position }]);

    setTimeout(() => {
      setToasts((prevToasts) => prevToasts.filter((toast) => toast.message !== message));
    }, timer);
  };

  return (
    <div>
      <button onClick={() => showToast(message, type, position)}>Show Toast</button>

      {toasts.map((toast, index) => (
        <ToastComponent key={index} message={toast.message} type={toast.type} position={toast.position} timer={timer} />
      ))}
    </div>
  );
};

export const ToastButtonDemo: StoryObj<typeof ToastComponent> = {
  args: {
    message: 'Toast 성공!',
    type: 'success',
    position: 'top-right',
    timer: 3000,
  },
  render: (args) => <ToastWithButton {...args} />,
};
