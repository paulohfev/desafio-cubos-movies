import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/store';
import { obterFilmes, selectionarFilmes } from '../../slices/filmes.slice';
import ListaFilmes from '../../componentes/ListaFilmes';
import Paginacao from '../../componentes/Paginacao';
import styles from './PaginaHome.module.scss';

const PaginaHome: React.FC = () => {
  const [valorPesquisa, setValorPesquisa] = useState('');
  const [paginaAtual, setPaginaAtual] = useState(1);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const data = {
      page: paginaAtual,
      query: valorPesquisa
    }
    dispatch(obterFilmes(data));
  }, [dispatch, paginaAtual, valorPesquisa]);
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

        <Paginacao setPaginaAtual={setPaginaAtual} totalPaginas={filmes.total_pages} />
      </section>
    </div>
  )
};

export default PaginaHome;
