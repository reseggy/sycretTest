import React from 'react';
import ReactDOMClient from 'react-dom/client';
import App from './components/app/app';
import { BrowserRouter } from 'react-router-dom';
const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);
import './index.css';
import store from './services/store';
import { Provider } from 'react-redux';

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter basename='/sycretTest'>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);
