import React, { useEffect } from 'react';
import { Filme } from '../../interfaces/Filme';
import { formatarData } from '../../utils/conteudo';
import styles from './ListaFilmes.module.scss';

type Props = {
  filmes: Filme[];
}

const ListaFilmes: React.FC<Props> = ({ filmes }) => {
  console.log(filmes)

  // useEffect(() => {
  //   fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_MOVIEDB_API_CHAVE}&language=pt-BR`)
  //     .then(response => response.json())
  //     .then(response => console.log(response))
  //     .catch(err => console.error(err));
  // }, [])

  return (
    <div>
      {filmes?.map((filme) => {
        const URLImagemPoster = `https://image.tmdb.org/t/p/original/${filme.poster_path}`;
        const votoPorcentagem = Math.floor((filme.vote_average/10) * 100) + '%'

        return (
          <div className={styles['item-filme-container']} key={filme.id}>
            <div>
              <img alt={filme.title} className={styles.poster} src={URLImagemPoster} />
            </div>

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

            </div>
          </div>
        );
      })}
    </div>
  )
};

export default ListaFilmes;
