import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import EstiloGlobal from './styles/index.ts';



import Home from './pages/Home/index.tsx';
import Formulario from './pages/Formulario/index.tsx';

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>
  },
  {
    path: '/form',
    element: <Formulario></Formulario>
  }
])

function App() {
  return (
    <div>
      <EstiloGlobal></EstiloGlobal>
      <RouterProvider router={rotas} />
    </div>
  );
}

export default App;
