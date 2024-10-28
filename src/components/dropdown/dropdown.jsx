import React, { useState } from 'react';
import { DropdownUI } from '../ui/dropdown-ui/index';

export const Dropdown = ({ items, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (item) => {
    setSelectedItem(item);
    onSelect(item);
    setIsOpen(false);
  };

  return (
    <DropdownUI
      items={items}
      handleToggle={handleToggle}
      handleSelect={handleSelect}
      selectedItem={selectedItem}
      isOpen={isOpen}
    />
  );
};
