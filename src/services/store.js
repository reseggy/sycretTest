import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import {
  useDispatch as dispatchHook,
  useSelector as selectorHook
} from 'react-redux';
import sertificatesReducer from '../slices/sertificateSlice';

export const rootReducer = combineReducers({
  sertificates: sertificatesReducer
});

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production'
});

export const useDispatch = () => dispatchHook();
export const useSelector = selectorHook;

export default store;
