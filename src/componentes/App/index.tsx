import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Rotas } from '../../enums/rotas';
import LayoutApp from '../../layouts/LayoutApp';
import PaginaHome from '../../paginas/PaginaHome';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path={Rotas.root} element={<LayoutApp />}>
        <Route index element={<PaginaHome />} />
      </Route>
    </Routes>
  )
}

export default App;
