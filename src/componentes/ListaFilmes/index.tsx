import React from 'react';
import { Filme } from '../../interfaces/Filme';
import { formatarData, obterURLPosterFilme } from '../../utils/conteudo';
import styles from './ListaFilmes.module.scss';
import ListaGenerosFilme from '../ListaGenerosFilme';
import { Link } from 'react-router-dom';

type Props = {
  filmes: Filme[];
}

const ListaFilmes: React.FC<Props> = ({ filmes }) => {
  return (
    <div>
      {filmes?.map((filme) => {
        const URLImagemPoster = obterURLPosterFilme(filme.poster_path);
        const votoPorcentagem = Math.floor((filme.vote_average/10) * 100) + '%'

        return (
          <div className={styles['item-filme-container']} key={filme.id}>
            <Link className={styles['item-filme-link']} to={`/filme/${filme.id}`}>
              {filme.poster_path && (
                <img alt={filme.title} className={styles.poster} src={URLImagemPoster} />
              )}

              <div className={styles['item-filme-conteudo']}>
                <div className={styles['item-filme-cabecalho-container']}>
                  <div className={styles['item-filme-cabecalho']}>
                    <h3 className={styles['item-filme-titulo']}>{filme.title}</h3>
                    <p className={styles['item-filme-data-lancamento']}>{formatarData(filme.release_date)}</p>
                  </div>

                  <div className={styles['item-filme-porcentagem-voto']}>
                    <span>{votoPorcentagem}</span>
                  </div>
                </div>

                <p className={styles['item-filme-sumario']}>{filme.overview}</p>

                {filme.genre_ids && (
                  <div className={styles['item-filme-lista-generos']}>
                    <ListaGenerosFilme idsGeneros={filme.genre_ids} />
                  </div>
                )}              
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  )
};

export default ListaFilmes;
