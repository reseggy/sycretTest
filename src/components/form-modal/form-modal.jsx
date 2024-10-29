import React, { useEffect, useState } from 'react';
import { FormModalUI } from '../ui/form-modal-ui';
import { postOrder } from '../../slices/sertificateSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const FormModal = ({ selectedItem, onClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const handleEsc = (e) => {
      e.key === 'Escape' && onClose();
    };

    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  const validateName = (name) => {
    if (!name) return 'ФИО не может быть пустым';

    const nameRegex = /^[a-zA-Zа-яА-ЯёЁ]+ [a-zA-Zа-яА-ЯёЁ]+ [a-zA-Zа-яА-ЯёЁ]+$/;
    if (!nameRegex.test(name)) return 'ФИО должно состоять из трех слов';

    return '';
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^\+7 \(\d{3}\)\d{3}-\d{2}-\d{2}$/;
    if (!phoneRegex.test(phone))
      return 'Телефон должен быть в формате +7 (___)___-__-__';
    return '';
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return 'Некорректный формат почты';
    return '';
  };

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    let error = '';
    if (name === 'name') error = validateName(value);
    if (name === 'phone') error = validatePhone(value);
    if (name === 'email') error = validateEmail(value);

    setErrors({
      ...errors,
      [name]: error
    });
  };

  const formatPhoneForSubmission = (phone) => {
    const digitsOnly = phone.replace(/[^\d]/g, '');
    return digitsOnly.slice(1); // Удаляю первую цифру, так как это код страны (7)
  };

  const onOrderClick = () => {
    if (!selectedItem) return;
    const options = {
      Id: selectedItem.ID,
      TableName: selectedItem.TABLENAME,
      PrimaryKey: selectedItem.PRIMARYKEY,
      Price: selectedItem.PRICE,
      Summa: selectedItem.SUMMA,
      ClientName: formData.name,
      Phone: formatPhoneForSubmission(formData.phone),
      Email: formData.email,
      PaymentTypeId: 2,
      UseDelivery: 0,
      DeliveryAddress: '',
      IsGift: 0,
      MsgText: formData.message,
      PName: '',
      PPhone: ''
    };
    dispatch(postOrder(options)).finally(() => {
      navigate('/payment');
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameError = validateName(formData.name);
    const phoneError = validatePhone(formData.phone);
    const emailError = validateEmail(formData.email);

    if (nameError || phoneError || emailError) {
      setErrors({
        name: nameError,
        phone: phoneError,
        email: emailError
      });
    } else {
      onOrderClick();
    }
  };

  return (
    <FormModalUI
      selectedItem={selectedItem}
      onClose={onClose}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      formData={formData}
      errors={errors}
    />
  );
};
