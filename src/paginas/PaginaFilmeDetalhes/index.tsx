import React from 'react';
import { useParams } from 'react-router-dom';

const PaginaFilmeDetalhes: React.FC = () => {
  const { id: filmeId } = useParams();

  return (
    <div>FILME DETALHE</div>
  );
};

export default PaginaFilmeDetalhes;
