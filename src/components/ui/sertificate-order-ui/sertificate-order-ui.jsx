import React from 'react';
import styles from './sertificate-order-ui.module.css';
import { Dropdown } from '../../dropdown/dropdown';

export const SertificateOrderUI = ({ sertificates }) => {
  const handleSelect = (item) => {
    console.log('Выбранный элемент:', item);
  };
  return (
    <div className={styles.section}>
      <h2 className={styles.sectionTitle}>Выберите сертификат</h2>
      <Dropdown items={sertificates} onSelect={handleSelect} />
      <button className={styles.buttonOrder}>Оплатить</button>
    </div>
  );
};
