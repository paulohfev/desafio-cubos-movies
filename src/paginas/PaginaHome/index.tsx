import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/store';
import { obterFilmes, selectionarFilmes } from '../../slices/filmes.slice';
import styles from './PaginaHome.module.scss';
import ListaFilmes from '../../componentes/ListaFilmes';

const PaginaHome: React.FC = () => {
  const [valor, setValor] = useState('');
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(obterFilmes());
  }, [dispatch]);
  const filmes = useAppSelector(selectionarFilmes);

  return (
    <div className={styles.container}>
      <div className={styles['container-campo']}>
        <input
          className={styles['campo']}
          onChange={(e) => e.target.value}
          placeholder="Busque um filme por nome ou gênero"
          value={valor}
        />
      </div>

      <section>
        <ListaFilmes filmes={filmes.results} />
      </section>
    </div>
  )
};

export default PaginaHome;
