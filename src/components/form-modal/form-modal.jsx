import React, { useEffect } from 'react';
import { FormModalUI } from '../ui/form-modal-ui';

export const FormModal = ({ onClose }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      e.key === 'Escape' && onClose();
    };

    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  return <FormModalUI onClose={onClose} />;
};
