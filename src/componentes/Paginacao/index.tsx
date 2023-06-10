import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './Paginacao.module.scss';

type Props = {
  setPaginaAtual: (T: number) => void;
  totalPaginas: number;
}

const Paginacao: React.FC<Props> = ({ setPaginaAtual, totalPaginas }) => {
  return (
    <ReactPaginate
      activeClassName={styles['pagina-ativa']}
      breakLabel="..."
      containerClassName={styles['paginacao-container']}
      nextLabel=""
      onPageChange={(pagina) => setPaginaAtual(pagina.selected + 1)}
      pageClassName={styles['pagina-numero']}
      pageRangeDisplayed={5}
      pageCount={totalPaginas}
      previousLabel=""
    />
  )
}

export default Paginacao;
