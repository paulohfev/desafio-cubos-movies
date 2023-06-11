import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/store';
import { obterDetalhesFilmePorID, selecionarDetalhesFilmePorId } from '../../slices/filmes.slice';
import { obterVideoFilmePorID, selecioarVideoFilmePorId } from '../../slices/videos.slice';
import { formatarData, converterTempo, obterURLPosterFilme } from '../../utils/conteudo';
import { formatarValorMonetario } from '../../utils/moeda';
import styles from './PaginaFilmesDetalhes.module.scss';
import ListaVideos from '../../componentes/ListaVideos';

const PaginaFilmeDetalhes: React.FC = () => {
  const { id: filmeId } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (filmeId) {
      dispatch(obterDetalhesFilmePorID(filmeId));
      dispatch(obterVideoFilmePorID(filmeId))
    }
  }, [dispatch, filmeId]);
  const detalhesFilme = useAppSelector(selecionarDetalhesFilmePorId).detalhesFilmePorId;
  const videosFilme = useAppSelector(selecioarVideoFilmePorId);

  const lucroFilme = detalhesFilme.revenue - detalhesFilme.budget;
  const URLPosterFilme = obterURLPosterFilme(detalhesFilme.poster_path);
  const votoPorcentagem = Math.floor((detalhesFilme.vote_average/10) * 100) + '%';

  return (
    <div className={styles.container}>
      <section className={styles['secao-cabecalho']}>
        <h2 className={styles['titulo-filme']}>{detalhesFilme.title}</h2>
        <p>{formatarData(detalhesFilme.release_date)}</p>
      </section>

      <section className={styles['secao-primario']}>
        <div className={styles['container-conteudo']}>
          <section className={styles['secao-sinopse']}>
            <h4 className={styles['titulo-secao']}>Sinopse</h4>
            <p>{detalhesFilme.overview}</p>
          </section>

          <section className={styles['secao-informacoes']}>
            <h4 className={styles['titulo-secao']}>Informações</h4>

            <ul className={styles['lista-informacoes']}>
              <li className={styles['lista-item-informacao']}>
                <p className={styles['lista-informacao-titulo']}>Situação</p>
                <p>{detalhesFilme.status}</p>
              </li>
              <li className={styles['lista-item-informacao']}>
                <p className={styles['lista-informacao-titulo']}>Idioma</p>
                <p>{detalhesFilme.original_language}</p>
              </li>
              <li className={styles['lista-item-informacao']}>
                <p className={styles['lista-informacao-titulo']}>Duração</p>
                <p>{converterTempo(detalhesFilme.runtime)}</p>
              </li>
              <li className={styles['lista-item-informacao']}>
                <p className={styles['lista-informacao-titulo']}>Orçamento</p>
                <p>{formatarValorMonetario(detalhesFilme.budget)}</p>
              </li>
              <li className={styles['lista-item-informacao']}>
                <p className={styles['lista-informacao-titulo']}>Receita</p>
                <p>{formatarValorMonetario(detalhesFilme.revenue)}</p>
              </li>
              <li className={styles['lista-item-informacao']}>
                <p className={styles['lista-informacao-titulo']}>Lucro</p>
                <p>{formatarValorMonetario(lucroFilme)}</p>
              </li>
            </ul>

            <div className={styles['informacoes-rodape']}>
              <div className={styles['lista-generos-tags']}>
                {detalhesFilme.genres.map(genero => {
                  return (
                    <div className={styles['tag-genero-filme']} key={genero.id}>
                      <span>{genero.name}</span>
                    </div>
                  );
                })}
              </div>

              <div className={styles['filme-porcentagem-voto']}>
                <span>{votoPorcentagem}</span>
              </div>
            </div>
          </section>
        </div>

        {detalhesFilme.poster_path && (
          <div>
            <img className={styles.poster} src={URLPosterFilme} />
          </div>
        )}
      </section>

      <section>
        <ListaVideos listaVideos={videosFilme.results} />
      </section>
    </div>
  );
};

export default PaginaFilmeDetalhes;
