import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/store';
import { obterFilmes, selectionarFilmes } from '../../slices/filmes.slice';
import styles from './PaginaHome.module.scss';
import ListaFilmes from '../../componentes/ListaFilmes';

const PaginaHome: React.FC = () => {
  const [valorPesquisa, setValorPesquisa] = useState('');
  const dispatch = useAppDispatch();

  useEffect(() => {
    const data = {
      query: valorPesquisa
    }
    dispatch(obterFilmes(data));
  }, [dispatch, valorPesquisa]);
  const filmes = useAppSelector(selectionarFilmes);

  return (
    <div className={styles.container}>
      <div className={styles['container-campo']}>
        <input
          className={styles['campo']}
          onChange={(e) => setValorPesquisa(e.target.value)}
          placeholder="Busque um filme por nome ou gênero"
          value={valorPesquisa}
        />
      </div>

      <section>
        <ListaFilmes filmes={filmes.results} />
      </section>
    </div>
  )
};

export default PaginaHome;
