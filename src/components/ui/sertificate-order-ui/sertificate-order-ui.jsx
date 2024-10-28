import React from 'react';
import styles from './sertificate-order-ui.module.css';
import { Dropdown } from '../../dropdown/dropdown';

const items = [
  { label: 'Сертификат 1', value: 'cert1' },
  { label: 'Сертификат 2', value: 'cert2' },
  { label: 'Сертификат 3', value: 'cert3' }
];

export const SertificateOrderUI = () => {
  const handleSelect = (item) => {
    console.log('Выбранный элемент:', item);
  };
  return (
    <div className={styles.section}>
      <h2 className={styles.sectionTitle}>Выберите сертификат</h2>
      <Dropdown items={items} onSelect={handleSelect} />
      <button className={styles.buttonOrder}>Оплатить</button>
    </div>
  );
};
