import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Rotas } from '../../enums/rotas';
import styles from './LayoutApp.module.scss';

const LayoutApp: React.FC = () => {
  return (
    <>
      <header className={styles.header}>
        <Link to={Rotas.root}>
          <h1 className={styles.titulo}>Movies</h1>
        </Link>
      </header>

      <Outlet />
    </>
  )
};

export default LayoutApp;
