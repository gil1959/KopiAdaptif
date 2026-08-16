'use client';

import React from 'react';
import styles from './Button.module.css';

type ButtonVariant = 'primary' | 'kopi' | 'secondary' | 'ghost' | 'destructive';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  children: React.ReactNode;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const isDisabled = disabled || loading;

  return (
    <button
      className={[
        styles.btn,
        styles[variant],
        styles[size],
        loading ? styles.loading : '',
        isDisabled ? styles.disabled : '',
        className,
      ].join(' ')}
      disabled={isDisabled}
      {...props}
    >
      {loading ? (
        <span className={styles.spinnerWrap}>
          <span className={styles.spinner} aria-hidden="true" />
          <span className={styles.srOnly}>Memuat...</span>
        </span>
      ) : (
        children
      )}
    </button>
  );
}
