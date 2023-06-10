import React, { useEffect, useState } from 'react';
import { isEmpty } from 'lodash';
import { useAppDispatch, useAppSelector } from '../../app/store';
import { obterFilmesPorPesquisa, obterTodosFilmes, selectionarFilmes } from '../../slices/filmes.slice';
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
      query: valorPesquisa,
    }

    isEmpty(valorPesquisa) ? dispatch(obterTodosFilmes(paginaAtual)) : dispatch(obterFilmesPorPesquisa(data));
  }, [dispatch, paginaAtual, valorPesquisa]);
  const filmes = useAppSelector(selectionarFilmes).filmesPorPesquisa;
  const todosFilmes = useAppSelector(selectionarFilmes).todosFilmes;

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
        <ListaFilmes filmes={isEmpty(valorPesquisa) ? todosFilmes.results : filmes.results} />

        <Paginacao
          setPaginaAtual={setPaginaAtual}
          totalPaginas={isEmpty(valorPesquisa) ? todosFilmes.total_pages : filmes.total_pages}
        />
      </section>
    </div>
  )
};

export default PaginaHome;
