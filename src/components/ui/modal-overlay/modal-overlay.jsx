import React from 'react';
import styles from './modal-overlay.module.css';

export const ModalOverlayUI = ({ onClick }) => (
  <div className={styles.overlay} onClick={onClick} />
);
