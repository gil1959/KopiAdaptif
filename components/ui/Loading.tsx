'use client';

import React from 'react';
import styles from './Loading.module.css';

export function Spinner({ size = 24 }: { size?: number }) {
  return (
    <span
      className={styles.spinner}
      style={{ width: size, height: size }}
      aria-label="Memuat"
      role="status"
    />
  );
}

export function Skeleton({ width, height, rounded }: { width?: string | number; height?: string | number; rounded?: boolean }) {
  return (
    <span
      className={[styles.skeleton, rounded ? styles.rounded : ''].join(' ')}
      style={{
        width: width ?? '100%',
        height: height ?? 16,
        display: 'block',
      }}
      aria-hidden="true"
    />
  );
}

export function SkeletonCard() {
  return (
    <div className={styles.skeletonCard}>
      <Skeleton height={24} width="60%" />
      <Skeleton height={14} />
      <Skeleton height={14} width="80%" />
      <Skeleton height={14} width="40%" />
      <Skeleton height={40} width="120px" rounded />
    </div>
  );
}
