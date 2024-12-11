import React, { useState, useCallback, createContext, ReactNode, useContext } from 'react';
import styled, { keyframes } from 'styled-components';
import { ToastComponent } from './ToastComponent';
import { ToastType, ToastPosition } from './types';


interface ToastOptions {
  position?: ToastPosition;
  timer?: number;
}

export interface Toast {
  id: number;
  message: string;
  type: ToastType;
  position: ToastPosition;
  timer: number;
}

const ToastContext = createContext<{
  addToast: (message: string, type: ToastType, options?: ToastOptions) => void;
} | null>(null);

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = useCallback(
    (message: string, type: ToastType, options?: ToastOptions) => {
      const id = Date.now();
      const newToast: Toast = {
        id,
        message,
        type,
        position: options?.position || 'top-right',
        timer: options?.timer || 3000,
      };

      setToasts((prev) => [...prev, newToast]);

      setTimeout(() => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id));
      }, newToast.timer);
    },
    []
  );

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      {toasts.map((toast) => (
        <ToastComponent
          key={toast.id}
          message={toast.message}
          type={toast.type}
          position={toast.position}
          timer={toast.timer}
        />
      ))}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};
