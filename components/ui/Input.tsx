'use client';

import React from 'react';
import styles from './Input.module.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: string;
}

export default function Input({ label, helperText, error, id, className = '', ...props }: InputProps) {
  const inputId = id ?? label?.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className={styles.wrapper}>
      {label && (
        <label htmlFor={inputId} className={styles.label}>
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={[styles.input, error ? styles.hasError : '', className].join(' ')}
        {...props}
      />
      {error ? (
        <span className={styles.errorText}>{error}</span>
      ) : helperText ? (
        <span className={styles.helperText}>{helperText}</span>
      ) : null}
    </div>
  );
}

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  helperText?: string;
  error?: string;
}

export function Textarea({ label, helperText, error, id, className = '', ...props }: TextareaProps) {
  const inputId = id ?? label?.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className={styles.wrapper}>
      {label && (
        <label htmlFor={inputId} className={styles.label}>
          {label}
        </label>
      )}
      <textarea
        id={inputId}
        className={[styles.textarea, error ? styles.hasError : '', className].join(' ')}
        {...props}
      />
      {error ? (
        <span className={styles.errorText}>{error}</span>
      ) : helperText ? (
        <span className={styles.helperText}>{helperText}</span>
      ) : null}
    </div>
  );
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  helperText?: string;
  error?: string;
  children: React.ReactNode;
}

export function Select({ label, helperText, error, id, children, className = '', ...props }: SelectProps) {
  const inputId = id ?? label?.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className={styles.wrapper}>
      {label && (
        <label htmlFor={inputId} className={styles.label}>
          {label}
        </label>
      )}
      <select
        id={inputId}
        className={[styles.select, error ? styles.hasError : '', className].join(' ')}
        {...props}
      >
        {children}
      </select>
      {error ? (
        <span className={styles.errorText}>{error}</span>
      ) : helperText ? (
        <span className={styles.helperText}>{helperText}</span>
      ) : null}
    </div>
  );
}
