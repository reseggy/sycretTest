import React from 'react';
import { MainPage } from '../../pages/main-page';
import { PaymentPage } from '../../pages/payment-page';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/payment' element={<PaymentPage />} />
    </Routes>
  );
};

export default App;
