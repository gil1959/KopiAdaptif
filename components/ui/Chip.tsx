'use client';

import React from 'react';
import styles from './Chip.module.css';

type ChipStatus = 'success' | 'warning' | 'error';

interface FilterChipProps {
  label: string;
  selected?: boolean;
  onClick?: () => void;
}

export function FilterChip({ label, selected = false, onClick }: FilterChipProps) {
  return (
    <button
      className={[styles.filterChip, selected ? styles.selected : ''].join(' ')}
      onClick={onClick}
      type="button"
      aria-pressed={selected}
    >
      {label}
    </button>
  );
}

interface StatusChipProps {
  label: string;
  status: ChipStatus;
}

export function StatusChip({ label, status }: StatusChipProps) {
  return (
    <span className={[styles.statusChip, styles[status]].join(' ')}>
      {label}
    </span>
  );
}
