import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './LayoutApp.module.scss';

const LayoutApp: React.FC = () => {
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.titulo}>Movies</h1>
      </header>

      <Outlet />
    </>
  )
};

export default LayoutApp;
