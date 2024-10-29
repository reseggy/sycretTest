import React from 'react';
import styles from './validated-input-ui.module.css';

export const ValidatedInputUI = ({
  placeholder,
  type,
  name,
  value,
  handleChange,
  error
}) => {
  return (
    <label className={styles.label}>
      {name === 'message' ? (
        <textarea
          name={name}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          className={`${styles.text} ${styles.input} ${styles.messageInput} ${error ? styles.inputError : ''}`}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          className={`${styles.text} ${styles.input} ${error ? styles.inputError : ''}`}
        />
      )}
      <span className={`${styles.text} ${styles.placeholder}`}>
        {placeholder}
      </span>
      {error && (
        <span className={`${styles.text} ${styles.error}`}>{error}</span>
      )}
    </label>
  );
};
