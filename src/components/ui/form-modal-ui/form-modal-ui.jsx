import React from 'react';
import styles from './form-modal-ui.module.css';
import { ModalOverlayUI } from '../modal-overlay';
import { ValidatedInput } from '../../validated-input';
import crossIcon from '../../../assets/images/svg/cross.svg';

export const FormModalUI = ({
  selectedItem,
  onClose,
  handleChange,
  handleSubmit,
  formData,
  errors
}) => {
  return (
    <>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h3 className={`${styles.title}`}>{selectedItem.NAME}лей</h3>
          <button className={styles.button} type='button' onClick={onClose}>
            <img src={crossIcon} alt='cross' className={styles.img} />
          </button>
        </div>
        <div className={styles.content}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <ValidatedInput
              placeholder='ФИО'
              type='text'
              name='name'
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
            />
            <ValidatedInput
              placeholder='Телефон'
              type='tel'
              name='phone'
              value={formData.phone}
              onChange={handleChange}
              error={errors.phone}
            />
            <ValidatedInput
              placeholder='Почта'
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
            />
            <ValidatedInput
              placeholder='Сообщение'
              type='text'
              name='message'
              value={formData.message}
              onChange={handleChange}
              error={errors.message}
            />
            <button type='submit' className={styles.submitButton}>
              Оплатить
            </button>
          </form>
        </div>
      </div>
      <ModalOverlayUI onClick={onClose} />
    </>
  );
};
