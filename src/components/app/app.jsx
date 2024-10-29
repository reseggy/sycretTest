import React from 'react';
import { MainPage } from '../../pages/main-page';
import { PaymentPage } from '../../pages/payment-page';
import { NotFoundPage } from '../../pages/not-found-404';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/payment' element={<PaymentPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
