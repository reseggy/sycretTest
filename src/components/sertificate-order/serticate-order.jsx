import React, { useState } from 'react';
import { SertificateOrderUI } from '../ui/sertificate-order-ui';

export const SertificateOrder = ({ sertificates }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSelect = (item) => {
    setSelectedItem(item);
  };

  const handleButtonClick = () => {
    if (selectedItem) {
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <SertificateOrderUI
      sertificates={sertificates}
      selectedItem={selectedItem}
      handleSelect={handleSelect}
      handleButtonClick={handleButtonClick}
      handleCloseModal={handleCloseModal}
      isModalOpen={isModalOpen}
    />
  );
};
