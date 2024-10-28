import React from 'react';
import styles from './main-page.module.css';
import { SertificateOrder } from '../../components/sertificate-order';

export const MainPage = () => {
  return (
    <div className={styles.section}>
      <SertificateOrder />
    </div>
  );
};
