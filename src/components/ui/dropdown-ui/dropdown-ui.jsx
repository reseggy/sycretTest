import React from 'react';
import styles from './dropdown-ui.module.css';

export const DropdownUI = ({
  items,
  handleToggle,
  handleSelect,
  selectedItem,
  isOpen
}) => {
  return (
    <div className={styles.dropdown}>
      <button className={styles.dropdownToggle} onClick={handleToggle}>
        {selectedItem ? selectedItem.NAME : 'Выберите сумму сертификата'}
      </button>
      {isOpen && (
        <ul className={styles.dropdownMenu}>
          {items.map((item) => (
            <li
              key={item.value}
              className={styles.dropdownItem}
              onClick={() => handleSelect(item)}
            >
              {item.NAME}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
