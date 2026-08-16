import React from 'react';
import styles from './loading.module.css';

export default function Loading() {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.spinner} aria-label="Memuat data..." />
      <p className={styles.loadingText}>Menyiapkan kebun...</p>
    </div>
  );
}
