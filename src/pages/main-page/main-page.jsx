import React from 'react';
import { useEffect } from 'react';
import styles from './main-page.module.css';
import { SertificateOrder } from '../../components/sertificate-order';
import { useDispatch, useSelector } from 'react-redux';
import { getSertificates } from '../../slices/sertificateSlice';
import { Preloader } from '../../components/ui/preloader';

export const MainPage = () => {
  const dispatch = useDispatch();
  const { sertificatesList, isLoading } = useSelector(
    (state) => state.sertificates
  );
  const sertificates = sertificatesList;

  useEffect(() => {
    dispatch(getSertificates());
  }, [dispatch]);

  return (
    <div className={styles.section}>
      {isLoading ? (
        <Preloader />
      ) : (
        <SertificateOrder sertificates={sertificates} />
      )}
    </div>
  );
};
