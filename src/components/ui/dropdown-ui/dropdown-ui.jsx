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
          {items
            .map((item) => (
              <li
                key={item.ID}
                className={styles.dropdownItem}
                onClick={() => handleSelect(item)}
              >
                {item.NAME}
              </li>
            ))
            .reverse()}
          {/* reverse для более удобного отображения суммы сертификатов */}
        </ul>
      )}
    </div>
  );
};
