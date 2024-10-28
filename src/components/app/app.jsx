import React from 'react';
import { MainPage } from '../../pages/main-page/index';
// import styles from './app.module.css';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      {/* <Route path='/form' element={<FeedOrderModal onClose={onClose} />} /> */}
    </Routes>
  );
};

export default App;
