import React from 'react';
import { ValidatedInputUI } from '../ui/validated-input-ui';

export const ValidatedInput = ({
  placeholder,
  type,
  name,
  value,
  onChange,
  error
}) => {
  const formatPhoneNumber = (value) => {
    if (!value) return '+7';

    const phoneNumber = value.replace(/[^\d]/g, '');
    const phoneNumberLength = phoneNumber.length;

    if (phoneNumberLength < 2) return `+7 (${phoneNumber.slice(1)}`;
    if (phoneNumberLength < 5) return `+7 (${phoneNumber.slice(1)}`;
    if (phoneNumberLength < 8)
      return `+7 (${phoneNumber.slice(1, 4)})${phoneNumber.slice(4)}`;
    if (phoneNumberLength < 10)
      return `+7 (${phoneNumber.slice(1, 4)})${phoneNumber.slice(4, 7)}-${phoneNumber.slice(7)}`;
    return `+7 (${phoneNumber.slice(1, 4)})${phoneNumber.slice(4, 7)}-${phoneNumber.slice(7, 9)}-${phoneNumber.slice(9, 11)}`;
  };

  const handleChange = (e) => {
    const formattedValue =
      type === 'tel' ? formatPhoneNumber(e.target.value) : e.target.value;
    onChange({ target: { name, value: formattedValue } });
  };

  return (
    <ValidatedInputUI
      placeholder={placeholder}
      type={type}
      name={name}
      value={value}
      handleChange={handleChange}
      error={error}
      formatPhoneNumber={formatPhoneNumber}
    />
  );
};
