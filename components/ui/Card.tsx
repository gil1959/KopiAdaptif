'use client';

import React from 'react';
import styles from './Card.module.css';

type CardVariant = 'default' | 'elevated' | 'eco';

interface CardProps {
  variant?: CardVariant;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function Card({ variant = 'default', children, className = '', onClick }: CardProps) {
  return (
    <div
      className={[styles.card, styles[variant], onClick ? styles.clickable : '', className].join(' ')}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => { if (e.key === 'Enter' || e.key === ' ') onClick(); } : undefined}
    >
      {children}
    </div>
  );
}
