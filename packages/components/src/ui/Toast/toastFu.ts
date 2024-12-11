import { useToast } from './ToastContainer';

type ToastOptions = {
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
  timer?: number;
};

export const toast = {
  SUCCESS: 'success',
  ERROR: 'error',
  INFO: 'info',
  WARNING: 'warning',
  POSITION: {
    TOP_RIGHT: 'top-right',
    TOP_LEFT: 'top-left',
    BOTTOM_RIGHT: 'bottom-right',
    BOTTOM_LEFT: 'bottom-left',
  },
  success: (message: string, options?: ToastOptions) => {
    const { addToast } = useToast();
    addToast(message, 'success', options);
  },
  error: (message: string, options?: ToastOptions) => {
    const { addToast } = useToast();
    addToast(message, 'error', options);
  },
  warning: (message: string, options?: ToastOptions) => {
    const { addToast } = useToast();
    addToast(message, 'warning', options);
  },
  info: (message: string, options?: ToastOptions) => {
    const { addToast } = useToast();
    addToast(message, 'info', options);
  },
};
