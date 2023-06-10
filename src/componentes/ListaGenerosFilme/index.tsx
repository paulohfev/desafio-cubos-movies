import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/store';
import { obterGeneros, selecionarGeneros } from '../../slices/generos.slice';
import { GeneroFilme } from '../../interfaces/GeneroFilme';
import styles from './ListaGenerosFilme.module.scss';

type Props = {
  idsGeneros: number[];
}

const ListaGenerosFilme: React.FC<Props> = ({ idsGeneros }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(obterGeneros());
  }, [dispatch]);
  const generos = useAppSelector(selecionarGeneros);

  const obterGenerosFilme = () => {
    return generos?.map((genero: GeneroFilme) => {
      return idsGeneros.map((id) => {
        if (id === genero.id) {
          return (
            <div className={styles['tag-genero-filme']} key={genero.id}>
              <span>{genero.name}</span>
            </div>
          );
        }
      })
    })
  }

  return (
    <div className={styles['lista-tags']}>{obterGenerosFilme()}</div>
  );
};

export default ListaGenerosFilme;
