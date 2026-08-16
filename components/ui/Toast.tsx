'use client';

import React, { useEffect, useState, createContext, useContext, useCallback } from 'react';
import { CheckCircle, XCircle, X } from 'lucide-react';
import styles from './Toast.module.css';

interface ToastItem {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info';
}

interface ToastContextValue {
  showToast: (message: string, type?: ToastItem['type']) => void;
}

const ToastContext = createContext<ToastContextValue>({ showToast: () => {} });

export function useToast() {
  return useContext(ToastContext);
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const showToast = useCallback((message: string, type: ToastItem['type'] = 'info') => {
    const id = Math.random().toString(36).substring(2, 10);
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4200);
  }, []);

  const dismiss = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className={styles.container} aria-live="polite">
        {toasts.map((toast) => (
          <ToastItem key={toast.id} toast={toast} onDismiss={() => dismiss(toast.id)} />
        ))}
      </div>
    </ToastContext.Provider>
  );
}

function ToastItem({ toast, onDismiss }: { toast: ToastItem; onDismiss: () => void }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 3800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={[styles.toast, styles[toast.type], !visible ? styles.exit : ''].join(' ')} role="alert">
      <div className={styles.accentBar} />
      <span className={styles.icon}>
        {toast.type === 'success' && <CheckCircle size={16} />}
        {toast.type === 'error' && <XCircle size={16} />}
        {toast.type === 'info' && <CheckCircle size={16} />}
      </span>
      <span className={styles.message}>{toast.message}</span>
      <button className={styles.dismiss} onClick={onDismiss} aria-label="Tutup notifikasi">
        <X size={14} />
      </button>
      <div className={styles.progress} />
    </div>
  );
}
