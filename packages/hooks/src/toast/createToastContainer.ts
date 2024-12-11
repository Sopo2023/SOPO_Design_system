import { useState, useCallback, useEffect } from 'react';

type ToastType = 'success' | 'error' | 'info' | 'default';
type ToastPosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';

interface Toast {
  id: number;
  message: string;
  type: ToastType;
  position: ToastPosition;
}

export const useToast = () => {
  const [toasts, setToasts] = useState<Toast[]>([]);


  useEffect(() => {
    if (toasts.length === 0) return;

    const timer = setTimeout(() => {
      setToasts((prevToasts) => prevToasts.slice(1)); 
    }, 3000); 

    return () => clearTimeout(timer);
  }, [toasts]);

  return { toasts };
};

