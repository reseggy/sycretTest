import React from 'react';
import styles from './form-modal-ui.module.css';
import { ModalOverlayUI } from '../modal-overlay';

export const FormModalUI = ({ onClose }) => {
  return (
    <>
      <div className={styles.modal} data-cy='modal'>
        <div className={styles.header}>
          <h3 className={`${styles.title} text text_type_main-large`}>title</h3>
          <button
            className={styles.button}
            type='button'
            data-cy='close-modal'
          ></button>
        </div>
        <div className={styles.content}>title</div>
      </div>
      <ModalOverlayUI onClick={onClose} />
    </>
  );
};
