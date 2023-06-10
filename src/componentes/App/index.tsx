import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Rotas } from '../../enums/rotas';
import LayoutApp from '../../layouts/LayoutApp';
import PaginaHome from '../../paginas/PaginaHome';
import PaginaFilmeDetalhes from '../../paginas/PaginaFilmeDetalhes';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path={Rotas.root} element={<LayoutApp />}>
        <Route index element={<PaginaHome />} />
        <Route path={Rotas.filme} element={<PaginaFilmeDetalhes />} />
      </Route>
    </Routes>
  )
}

export default App;
