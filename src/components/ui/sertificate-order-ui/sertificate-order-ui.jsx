import React from 'react';
import styles from './sertificate-order-ui.module.css';
import { Dropdown } from '../../dropdown/dropdown';
import { FormModal } from '../../form-modal';

export const SertificateOrderUI = ({
  sertificates,
  selectedItem,
  handleSelect,
  handleButtonClick,
  handleCloseModal,
  isModalOpen
}) => {
  return (
    <>
      <section className={styles.section}>
        <h2 className={`${styles.text} ${styles.sectionTitle}`}>
          Выберите сертификат
        </h2>
        <Dropdown
          items={sertificates}
          onSelect={handleSelect}
          selectedItem={selectedItem}
        />
        <div className={styles.subsection}>
          {selectedItem ? (
            <p className={`${styles.text} ${styles.subsectionText}`}>
              Цена - {selectedItem.SUMMA}р
            </p>
          ) : (
            <p className={`${styles.text} ${styles.subsectionText}`}>
              Скидка 10% на сертификат!
            </p>
          )}
          <button
            className={`${styles.text} ${styles.buttonOrder}`}
            onClick={handleButtonClick}
            disabled={!selectedItem}
          >
            Далее
          </button>
        </div>
      </section>
      {isModalOpen && (
        <FormModal selectedItem={selectedItem} onClose={handleCloseModal} />
      )}
    </>
  );
};
